import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AccordianComponent from "../../atoms/accordianComponent/AccordianComponent";
import "./CategoriesFilterComponent.css";

const CategoriesFilterComponent = (props) => {
  const { products, setCategoryType, setSubCategoryType, catSC, categories } =
    props;
  return (
    <Fragment data-test="component-categoriesFilter">
      <p className="category">Category</p>
      <div>
        <AccordianComponent
          setCategoryType={setCategoryType}
          setSubCategoryType={setSubCategoryType}
          catSC={catSC}
          categories={categories}
          products={products}
        />
      </div>
    </Fragment>
  );
};
CategoriesFilterComponent.propTypes = {
  products: PropTypes.array,
  priceRange: PropTypes.array,
  catSC: PropTypes.array,
  categoryType: PropTypes.string,
  subCategoryType: PropTypes.string,
};
CategoriesFilterComponent.defaultProps = {
  products: [],
  priceRange: [],
  catSC: [],
  categoryType: "",
  subCategoryType: "",
};

export default CategoriesFilterComponent;
