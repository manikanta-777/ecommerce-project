import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../../UI/organism/headerComponent/HeaderComponent";
import ImageComponent from "../../UI/atoms/imageComponent/ImageComponent";
import ProductDetailsComponent from "../../UI/organism/productDetailsComponent/ProductDetailsComponent";
import "./ProductDetailsTemplate.css";
const ProductDetailsTemplate = (props) => {
  const { product, categories, QuantitySum } = props;
  return (
    <div data-test="component-productsDetails">
      <HeaderComponent categories={categories} QuantitySum={QuantitySum} />
      <div className="productDetails">
        <ImageComponent product={product} />
        <ProductDetailsComponent product={product} />
      </div>
    </div>
  );
};
ProductDetailsTemplate.propTypes = {
  categories: PropTypes.array,
  product: PropTypes.object,
  QuantitySum: PropTypes.number,
};
ProductDetailsTemplate.defaultProps = {
  product: {},
  categories: [],
  QuantitySum: 0,
};
export default ProductDetailsTemplate;
