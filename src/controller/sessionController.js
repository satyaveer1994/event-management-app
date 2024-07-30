const Session = require("../models/session");


exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user });
    res.json({ sessions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
