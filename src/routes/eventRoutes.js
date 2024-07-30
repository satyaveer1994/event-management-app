const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/events", authMiddleware, eventController.createEvent);
router.get("/events", authMiddleware, eventController.getEvents);
router.put("/events/:id", authMiddleware, eventController.updateEvent);
router.delete("/events/:id", authMiddleware, eventController.deleteEvent);

module.exports = router;
