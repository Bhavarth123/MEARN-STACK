const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myDB")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});