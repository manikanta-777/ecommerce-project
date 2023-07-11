import React, { useState } from "react";
import { addProduct } from "../../../../redux/actions/cartAction";
import ButtonComponent from "../../atoms/buttonComponent/ButtonComponent";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Constants from "../../../HOC/Constants";
import DetailsComponent from "../../molecules/detailsComponent/DetailsComponent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PropTypes from "prop-types";
import ProductDataComponent from "../../molecules/productDataComponent/ProductDataComponent";
import QuantityUpdateComponent from "../../atoms/quantityUpdateComponent/QuantityUpdateComponent";
import TotalComponent from "../../molecules/totalComponent/TotalComponent";
import { useDispatch } from "react-redux";
import "./ProductDetailsComponent.css";

const ProductDetailsComponent = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const constData = Constants();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        Quantity: quantity,
      })
    );
  };

  return (
    <div className="details" data-test="component-productDetails">
      <ProductDataComponent product={product} />
      <p className="shipping">
        <CheckCircleRoundedIcon sx={{ color: "green" }} />
        &nbsp;
        {constData.shippingCartText}
      </p>
      <div className="quantityUpdate">
        <QuantityUpdateComponent
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div onClick={addToCartHandler}>
          <ButtonComponent
            product={product}
            quantity={quantity}
            carttext={constData.carttext}
          />
        </div>
      </div>
      <h3 className="favorite">
        <FavoriteBorderIcon /> &nbsp;{constData.wishListText}
      </h3>
      <TotalComponent product={product} quantity={quantity} />
      <p className="days">
        <LocalShippingIcon />
        &nbsp;
        {constData.shippingDays}
      </p>
      <div className="description">
        <DetailsComponent product={product} />
      </div>
    </div>
  );
};
ProductDetailsComponent.propTypes = {
  product: PropTypes.object,
};
ProductDetailsComponent.defaultProps = {
  product: {},
};

export default ProductDetailsComponent;
