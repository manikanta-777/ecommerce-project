import React, { useState } from "react";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./AccordianComponent.css";

const AccordianComponent = (props) => {
  const { setCategoryType, setSubCategoryType, catSC, categories, products } =
    props;
  const [openSC, setOpenSC] = useState(false);
  const [newInd, setnewInd] = useState();

  const handleCategory = (index, category) => {
    setOpenSC(!openSC);
    setnewInd(index);
    setSubCategoryType("");
    setCategoryType(category);
  };

  const handleSubCategory = (subcat) => {
    setSubCategoryType(subcat);
  };
  const allCategories = () => {
    setCategoryType("");
    setSubCategoryType("");
  };
  return (
    <div data-test="component-accordian">
      <div
        className="allCategories"
        onClick={allCategories}
        data-test="component-allCategories"
      >
        <p>All categories({products.length})</p>
      </div>
      {categories?.map((category, index) => (
        <div key={category.index} data-test="component-category">
          <div
            className="categoryClass"
            onClick={() => handleCategory(index, category)}
          >
            <span>{category}</span>
            {openSC && index == newInd ? (
              <KeyboardArrowUpIcon className="arrow" />
            ) : (
              <KeyboardArrowDownIcon className="arrow" />
            )}
          </div>
          {catSC[category]?.map((subCategory, ind) => (
            <div key={ind}>
              {openSC && index == newInd ? (
                <div className="subCategoryClass">
                  <p
                    onClick={() => handleSubCategory(subCategory)}
                    className="subCat"
                  >
                    {subCategory}
                  </p>
                  <br />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

AccordianComponent.propTypes = {
  products: PropTypes.array,
  priceRange: PropTypes.array,
  catSC: PropTypes.array,
  categoryType: PropTypes.string,
  subCategoryType: PropTypes.string,
};
AccordianComponent.defaultProps = {
  products: [],
  catSC: [],
  categories: [],
  categoryType: "",
  subCategoryType: "",
};

export default AccordianComponent;
