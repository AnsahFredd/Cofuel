const Event = require("../models/Event");

// @route POST /api/eventSchema

exports.createEvent = async (req, res) => {
  try {
    const existing = await Event.findOne({ email: req.body.email });
    if (existing) {
      return res
        .status(400)
        .json({ error: "An event with this email already exists." });
    }

    const eventData = {
      ...req.body,
      data: req.body.date ? new Date(req.body.data) : undefined,
    };

    const event = new Event(eventData);
    await event.save();
    res.status(201).json({ message: "Event submitted successfully!", event });
  } catch (error) {
    console.error("Error saving event:", error);
    res
      .status(400)
      .json({ error: "Failed to submit form", details: error.message });
  }
};

// @route GET /api/events

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/events/:id/status

exports.updateEventStatus = async (req, res) => {
  const { id } = req.params;
  console.log("Request body:", req.body);
  const { status } = req.body;

  // Validate status
  const validateStatuses = [
    "Pending",
    "Confirmed",
    "In Progress",
    "Completed",
    "Cancelled",
  ];
  if (!validateStatuses.includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    event.status = status;
    await event.save();

    res.json({ message: "Status updated successfully", event });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update status", details: error.message });
  }
};
