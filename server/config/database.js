const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Error connecting to database", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
