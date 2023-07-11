import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import "./SliderComponent.css";

const SliderComponent = (props) => {
  const { setPriceRange, priceValue } = props;
  const [price, setPrice] = useState(priceValue);
  const priceHandler = (event, newPrice) => {
    setPriceRange(newPrice);
    setPrice(newPrice);
  };
  return (
    <Fragment>
      <div className="filterByPrice" data-test="component-slider">
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          min={priceValue[0]}
          max={priceValue[1]}
          size="small"
          className="SliderClass"
        />
        <br />
      </div>
    </Fragment>
  );
};
SliderComponent.propTypes = {
  setPriceRange: PropTypes.func,
  priceValue: PropTypes.array,
};
SliderComponent.defaultProps = {
  setPriceRange: [],
  priceValue: [],
};
export default SliderComponent;
