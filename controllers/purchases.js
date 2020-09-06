const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchase.js");

// Index
router.get("/", (req, res) => {
  // Use Purchase model to get all Purchases
  Purchase.find({}, (error, allPurchases) => {
    error ? res.status(404).json(error) : res.status(200).json(allPurchases);
  });
});

// Delete = delete() idemPotent
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Purchase.findByIdAndRemove(req.params.id, (err, purchase) => {
    error ? res.status(404).json(error) : res.status(200).json(purchase);
  });
});

// Update = .put() idemPotent
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the purchase document using our model
  Purchase.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPurchase) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedPurchase);
    }
  );
});

// Create = post() notIdemPotent
router.post("/", (req, res) => {
  console.log(req.body);
  // Use Model to create Purchase Document
  Purchase.create(req.body, (error, createdPurchase) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdPurchase);
  });
});

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  Purchase.findById(req.params.id, (error, foundPurchase) => {
    // render the Show route and pass it the foundPurchase
    error ? res.status(404).json(error) : res.status(200).json(foundPurchase);
  });
});

// export router
module.exports = router;
