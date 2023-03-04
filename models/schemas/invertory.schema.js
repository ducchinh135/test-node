const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  sku: String,
  description: String,
  instock: Number,
});

module.exports = InventorySchema;
