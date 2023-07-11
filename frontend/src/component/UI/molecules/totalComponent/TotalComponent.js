import React from "react";
import PropTypes from "prop-types";
import "./TotalComponent.css";

const TotalComponent = (props) => {
  const { product, quantity } = props;
  return (
    <div className="totalClass" data-test="component-total">
      <p>Total:</p>
      <p> {product.price * quantity} Points</p>
    </div>
  );
};
TotalComponent.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
};
TotalComponent.defaultProps = {
  product: {},
  quantity: 1,
};
export default TotalComponent;
