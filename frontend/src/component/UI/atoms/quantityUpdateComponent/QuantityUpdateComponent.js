import React from "react";
import PropTypes from "prop-types";
import "./QuantityUpdateComponent.css";

const QuantityUpdateComponent = (props) => {
  const { product, quantity, setQuantity } = props;
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const qty = quantity - 1;
      setQuantity(qty);
    }
  };
  const increaseQuantity = () => {
    if (quantity < product.quantity) {
      const qty = quantity + 1;
      setQuantity(qty);
    }
  };
  return (
    <div data-test="component-quantityUpdate" className="quantityButton">
      <button onClick={decreaseQuantity} data-test="decrement-button">
        -
      </button>
      <input value={quantity} type="number" data-test="counter-display" />
      <button onClick={increaseQuantity} data-test="increment-button">
        +
      </button>
    </div>
  );
};
QuantityUpdateComponent.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};
QuantityUpdateComponent.defaultProps = {
  product: {},
  quantity: 1,
  setQuantity: () => {},
};
export default QuantityUpdateComponent;
