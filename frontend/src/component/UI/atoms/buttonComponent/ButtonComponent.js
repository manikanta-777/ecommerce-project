import React from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const { carttext } = props;
  return (
    <button data-test="component-button" className="productCart">
      <ShoppingCartIcon />
      &nbsp; {carttext}
    </button>
  );
};
ButtonComponent.propTypes = {
  carttext: PropTypes.string,
};
ButtonComponent.defaultProps = {
  carttext: "",
};

export default ButtonComponent;
