const express = require("express");
const {
  getAllProducts,
  getProductDetails,
} = require("../controller/productController");

const router = express.Router();

// router.route("/products").get(getAllProducts);
router.get("/products", getAllProducts);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
