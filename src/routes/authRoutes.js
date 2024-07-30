const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authRateLimiter = require('../middlewares/rateLimiter');

router.post('/signup', authRateLimiter, authController.registerUser);
router.post('/login', authRateLimiter, authController.login);

module.exports = router;
