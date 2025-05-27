const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventType: String,
  date: Date,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
