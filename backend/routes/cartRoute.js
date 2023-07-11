const express = require("express");
const {
  getAllCartProducts,
  createCartProduct,
} = require("../controller/cartProductController");

const router = express.Router();

router.route("/cartproducts").get(getAllCartProducts);

router.route("/cartproduct/new").post(createCartProduct);

module.exports = router;
