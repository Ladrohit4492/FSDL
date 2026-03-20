const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname));
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/tiffinDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  studentId: String,
  address: String,
  plan: String,
  startDate: String,
  message: String
});

const Order = mongoose.model("Order", orderSchema);

// Route to save data
app.post("/order", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.send("Order saved successfully");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});