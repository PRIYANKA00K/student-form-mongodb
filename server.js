const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Student = require("./models/Student");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// API to save student data
app.post("/add-student", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Student data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
