const Booking = require("../models/Booking");
const { sendBokkingReceivedEmail } = require("../services/emailService");

async function createBooking(req, res) {
  try {
    const { name, email, eventType, date } = req.body;
    const status = "Pending";
    const booking = new Booking({
      name,
      email,
      eventType,
      date,
      status,
    });

    await booking.save();

    // Send email confirmation
    await sendBokkingReceivedEmail(email, name, eventType, date, status);

    res.status(201).json({ message: "Booking created", booking });
  } catch (error) {
    console.error("Booking creation error:", error);

    res.status(500).json({ message: "Error creating booking" });
  }
}

module.exports = { createBooking };
