const mongoose = require("mongoose");

MONGODB_URL =
  "mongodb+srv://khankamranalwi:ZKL8bEGT7TqVUtbx@healthcare.ypykk.mongodb.net/?retryWrites=true&w=majority&appName=healthcare";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

