const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for purchase of crypto
const PurchaseSchema = new Schema(
  {
    coin: String,
    price: Number,
    shares: Number
  },
  { timestamps: true }
);

//  Create Model from our Schema
const Purchase = mongoose.model("Purchase", PurchaseSchema);

// Export Purchase Model
module.exports = Purchase;
