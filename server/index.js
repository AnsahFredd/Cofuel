const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRouts = require("./routes/eventsRoutes");
const bookingRoutes = require("./routes/bokingRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Connect to db
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRouts);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
