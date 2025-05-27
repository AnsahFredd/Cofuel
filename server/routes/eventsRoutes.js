const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  updateEventStatus,
} = require("../controllers/eventControllers");
const adminAuth = require("../middleware/adminAuth");

router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:id/status", adminAuth, updateEventStatus);

module.exports = router;
