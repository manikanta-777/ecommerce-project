const CartProduct = require("../models/cartProductModels");

exports.createCartProduct = async (req, res) => {
  const document = req.body;
  const cartProduct = await CartProduct.create(document);
  res.status(201).json({
    success: true,
    cartProduct,
  });
};
exports.getAllCartProducts = async (req, res) => {
  const cartProducts = await CartProduct.find();
  res.status(200).json({
    success: true,
    cartProducts,
  });
};
