import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductCardComponent.css";

const ProductCardComponent = (props) => {
  const { product } = props;
  return (
    <Link
      className="card"
      to={`/product/${product._id}`}
      data-test="component-product"
    >
      <FavoriteBorderIcon className="favoriteIcon" />
      <img src={product.image} alt={product.name} />
      <div>{product.brand}</div>
      <p>{product.name}</p>
      <span>{product.price} points</span>
    </Link>
  );
};
ProductCardComponent.propTypes = {
  product: PropTypes.object,
};
ProductCardComponent.defaultProps = {
  product: {},
};

export default ProductCardComponent;
