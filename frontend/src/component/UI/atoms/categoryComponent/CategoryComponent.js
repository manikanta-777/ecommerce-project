import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "./CategoryComponent.css";

const CategoryComponent = (props) => {
  const [value, setValue] = useState("");
  const { categories } = props;
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // onClick={() => handleChange(category)}
  return (
    <div className="categories" data-test="component-categories">
      {categories?.map((category, index) => (
        <ListItemButton key={index}>
          <ListItemIcon>
            <ListItemText className="category">{category}</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      ))}
    </div>
  );
};
CategoryComponent.propTypes = {
  categories: PropTypes.array,
};
CategoryComponent.defaultProps = {
  categories: [],
};
export default CategoryComponent;
