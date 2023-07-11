import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CategoriesFilterComponent from "../../molecules/categoriesFilterComponent/CategoriesFilterComponent";
import FilterByPriceComponent from "../../molecules/filterByPriceComponent/FilterByPriceComponent";
import "./FilterComponent.css";

const FilterComponent = (props) => {
  const {
    setPriceRange,
    products,
    setCategoryType,
    setSubCategoryType,
    catSC,
    categories,
  } = props;
  return (
    <div className="filterBox" data-test="component-filter">
      <p className="Filters">Filters</p>
      <hr className="ruler" />
      <FilterByPriceComponent setPriceRange={setPriceRange} />
      <hr className="ruler" />
      <CategoriesFilterComponent
        products={products}
        setCategoryType={setCategoryType}
        setSubCategoryType={setSubCategoryType}
        catSC={catSC}
        categories={categories}
      />
    </div>
  );
};
FilterComponent.propTypes = {
  setPriceRange: PropTypes.func,
  setCategoryType: PropTypes.func,
  setSubCategoryType: PropTypes.func,
  products: PropTypes.array,
  catSC: PropTypes.array,
  categories: PropTypes.array,
};
FilterComponent.defaultProps = {
  setPriceRange: () => {},
  setCategoryType: () => {},
  setSubCategoryType: () => {},
  products: [],
  catSC: [],
  categories: [],
};
export default FilterComponent;
