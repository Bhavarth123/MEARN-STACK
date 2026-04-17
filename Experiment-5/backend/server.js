const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/reactDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on 5000"));