const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/jobDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
const jobRoutes = require("./routes/jobRoutes");
app.use("/jobs", jobRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});