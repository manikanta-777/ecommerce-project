import React from "react";
import PropTypes from "prop-types";
import "./ProductDataComponent.css";

const ProductDataComponent = (props) => {
  const { product } = props;
  return (
    <div data-test="component-productData">
      <p className="productName">{product.name}</p>
      <p className="productBrand">{product.brand}</p>
      <p className="productPrice">
        <span>Price: </span>
        {product.price} points
      </p>
    </div>
  );
};
ProductDataComponent.propTypes = {
  product: PropTypes.object,
};
ProductDataComponent.defaultProps = {
  product: {},
};

export default ProductDataComponent;
