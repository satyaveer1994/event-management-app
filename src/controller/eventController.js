const Event = require("../models/event");

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const { name, date, location, description } = req.body;
    const newEvent = new Event({
      name,
      date,
      location,
      description,
      user: req.user,
    });
    await newEvent.save();
    res.status(201).json({ event: newEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user });
    res.json({ events });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ event: updatedEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
