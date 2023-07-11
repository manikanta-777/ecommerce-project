import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterComponent from "../../UI/organism/FilterComponent/FilterComponent";
import HeaderComponent from "../../UI/organism/headerComponent/HeaderComponent";
import ProductListComponent from "../../UI/organism/productsListComponent/ProductListComponent";
import TuneIcon from "@mui/icons-material/Tune";
import "./ProductsListTemplate.css";

const ProductsListTemplate = (props) => {
  const { products, categories, catSC, QuantitySum } = props;
  const [priceRange, setPriceRange] = useState([]);
  const [toggleValue, setToggleValue] = useState(true);
  const [categoryType, setCategoryType] = useState("");
  const [subCategoryType, setSubCategoryType] = useState("");
  const handleToggle = () => {
    setToggleValue(!toggleValue);
  };
  return (
    <div data-test="component-productList">
      <HeaderComponent categories={categories} QuantitySum={QuantitySum} />
      <ProductListComponent
        products={products}
        priceRange={priceRange}
        categoryType={categoryType}
        subCategoryType={subCategoryType}
      />

      <TuneIcon className="tuneIcon" onClick={handleToggle} />
      {toggleValue ? (
        <FilterComponent
          products={products}
          setPriceRange={setPriceRange}
          catSC={catSC}
          categories={categories}
          setCategoryType={setCategoryType}
          setSubCategoryType={setSubCategoryType}
          className="filter"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
ProductsListTemplate.defaultProps = {
  catSC: [],
  products: [],
  categories: [],
};
ProductsListTemplate.propTypes = {
  catSC: PropTypes.array,
  products: PropTypes.array,
  categories: PropTypes.array,
};

export default ProductsListTemplate;
