import React from "react";
import PropTypes from "prop-types";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./ImageComponent.css";

const ImageComponent = (props) => {
  const { product } = props;
  return (
    <div className="imageClass" data-test="component-Image">
      <img src={product.image} className="productImage" />
      <ZoomInIcon />
    </div>
  );
};
ImageComponent.propTypes = {
  product: PropTypes.object,
};
ImageComponent.defaultProps = {
  product: {},
};
export default ImageComponent;
