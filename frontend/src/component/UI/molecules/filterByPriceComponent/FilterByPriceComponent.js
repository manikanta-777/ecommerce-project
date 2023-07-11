import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Constants from "../../../HOC/Constants";
import SliderComponent from "../../atoms/SliderComponent/SliderComponent";
import "./FilterByPriceComponent.css";

const FilterByPriceComponent = (props) => {
  const { setPriceRange } = props;
  const constData = Constants();
  return (
    <Fragment data-test="component-price">
      <p className="price">Price</p>
      <SliderComponent
        setPriceRange={setPriceRange}
        priceValue={constData.priceValue}
      />
    </Fragment>
  );
};
FilterByPriceComponent.propTypes = {
  setPriceRange: PropTypes.func,
};
FilterByPriceComponent.defaultProps = {
  setPriceRange: () => {},
};
export default FilterByPriceComponent;
