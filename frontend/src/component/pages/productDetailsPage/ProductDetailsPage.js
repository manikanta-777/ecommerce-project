import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import ProductDetailsTemplate from "../../Templates/productDetailsTemplate/ProductDetailsTemplate";
import { productDetailsAction } from "../../../redux/actions/productDetailsAction";
import { productAction } from "../../../redux/actions/productAction";
import { getCartProducts } from "../../../redux/actions/cartAction";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.productDetails);
  const { QuantitySum } = useSelector((state) => state.cartDetails);
  useEffect(() => {
    dispatch(productDetailsAction(id));
    dispatch(productAction());
    dispatch(getCartProducts());
  }, [dispatch, id]);
  return (
    <div>
      <ProductDetailsTemplate
        product={product}
        categories={categories}
        QuantitySum={QuantitySum}
      />
    </div>
  );
};

export default ProductDetailsPage;
