const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "id:"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name:"],
  },
  description: {
    type: String,
    required: [true, "please enter product description:"],
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: [true, "please enter product category:"],
  },
  subCategory: {
    type: String,
    required: [true, "please enter product sub category:"],
  },
  quantity: {
    type: Number,
    required: [true, "Number of items:"],
  },
});

module.exports = mongoose.model("Product", productSchema);
