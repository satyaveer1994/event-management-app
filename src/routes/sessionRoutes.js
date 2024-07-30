const express = require("express");
const router = express.Router();
const sessionController = require("../controller/sessionController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/sessions", authMiddleware, sessionController.getSessions);

module.exports = router;
