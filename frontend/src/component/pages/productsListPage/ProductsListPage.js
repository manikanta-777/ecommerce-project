import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "../../../redux/actions/cartAction";
import { productAction } from "../../../redux/actions/productAction";
import ProductsListTemplate from "../../Templates/productsListTemplate/ProductsListTemplate";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const { products, categories, catSC } = useSelector(
    (state) => state.products
  );
  const { QuantitySum } = useSelector((state) => state.cartDetails);

  useEffect(() => {
    dispatch(productAction());
    dispatch(getCartProducts());
  }, [dispatch]);
  return (
    <div>
      <ProductsListTemplate
        products={products}
        categories={categories}
        catSC={catSC}
        QuantitySum={QuantitySum}
      />
    </div>
  );
};

export default ProductsListPage;
