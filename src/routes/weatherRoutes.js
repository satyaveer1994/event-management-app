const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/weather/:location", authMiddleware, weatherController.getWeather);

module.exports = router;
