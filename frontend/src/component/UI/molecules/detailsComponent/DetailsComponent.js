import React from "react";
import PropTypes from "prop-types";
import TruncateComponent from "../../atoms/truncateComponent/TruncateComponent";

const DetailsComponent = (props) => {
  const { product } = props;
  return (
    <div data-test="component-details">
      <h3>Product Description</h3>
      <p>{product.name}</p>
      <TruncateComponent description={product.description} />
    </div>
  );
};
DetailsComponent.propTypes = {
  product: PropTypes.object,
};
DetailsComponent.defaultProps = {
  product: {},
};

export default DetailsComponent;
