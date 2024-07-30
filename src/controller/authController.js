const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const supabase = require('../config/supabase'); 
const retryRequest = require('../utils/retryRequest');

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await retryRequest(() =>
      supabase.auth.signUp({ email, password })
    );

    if (error) return res.status(400).json({ message: error.message });
    res.status(201).json({ message: 'User registered successfully', userId: data.user.id });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
// Log in a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Create session record
    const newSession = new Session({ user: user._id, ipAddress: req.ip });
    await newSession.save();

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
