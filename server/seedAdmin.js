const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
require("dotenv").config();

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPlainPassword = process.env.ADMIN_PASSWORD;

    // Check if admin user exists already
    let admin = await User.findOne({ email: adminEmail });
    if (admin) {
      console.log("Admin user already exists.");
      mongoose.disconnect();
      return;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminPlainPassword, saltRounds);

    // Create admin user
    admin = new User({
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully.");

    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding admin user:", err);
    mongoose.disconnect();
  }
}

seedAdmin();
