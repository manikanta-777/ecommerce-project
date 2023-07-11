const mongoose = require("mongoose");

const cartProductSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "id:"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name:"],
  },
  // quantity: {
  //   type: Number,
  //   required: [true, "Number of items:"],
  // },
  Quantity: {
    type: Number,
    required: [true, "Number of items:"],
  },
});

module.exports = mongoose.model("CartProduct", cartProductSchema);
