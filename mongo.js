const mongoose = require("mongoose");
require('dotenv').config(); // To load environment variables

const MONGODB_URI = process.env.MONGODB_URI; // Assuming you stored your MongoDB URI in an environment variable

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("infos", newSchema);

module.exports = collection;
