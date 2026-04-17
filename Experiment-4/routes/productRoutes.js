const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// CREATE
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

// READ
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(product);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product Deleted");
});

module.exports = router;