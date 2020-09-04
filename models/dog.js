const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DogSchema = new Schema(
  {
    name: String,
    age: Number,
    frequency: String,
    imageUrl: String,
  },
  { timestamps: true }
);

//  Create Model from our Schema
const Dog = mongoose.model("Dog", DogSchema);

// Export Dog Model
module.exports = Dog;
