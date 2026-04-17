const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect Database
mongoose.connect("mongodb://127.0.0.1:27017/expressDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Import Routes
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});