const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/restDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("REST API Running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});