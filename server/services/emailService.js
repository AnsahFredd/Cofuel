const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBokkingReceivedEmail = async (
  toEmail,
  name,
  eventType,
  date,
  status
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Booking Received Confirmation",
    html: `
    <h2>Hi ${name},</h2>
    <p>We've received your bookings:<p>
    <ul>
    <li><strong>Event Type:</strong> ${eventType}</li>
    <li><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</li>
    <li><strong>Status:</strong> ${status}</li>
    </ul>
    <p>We'll get back to you soon!</p>
    <br />
    <p>Cofuel Home Of Events</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Booking confirmation sent to:", toEmail);
  } catch (error) {
    console.log("Error sending bookng email", error);
  }
};

module.exports = { sendBokkingReceivedEmail };
