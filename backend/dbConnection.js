const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookshow");
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;