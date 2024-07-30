require('dotenv').config();
const express = require('express');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

//dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/auth/v1', authRoutes);
app.use('/api', eventRoutes);
app.use('/api', sessionRoutes);
app.use('/api', weatherRoutes);

module.exports = app;
