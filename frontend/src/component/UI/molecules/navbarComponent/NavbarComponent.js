import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./NavbarComponent.css";
import CategoryComponent from "../../atoms/categoryComponent/CategoryComponent";

const NavbarComponent = (props) => {
  const { categories } = props;
  return (
    <Fragment data-test="component-navbar">
      <div className="toolbar">
        <CategoryComponent categories={categories} />
      </div>
    </Fragment>
  );
};
NavbarComponent.propTypes = {
  categories: PropTypes.array,
};
NavbarComponent.defaultProps = {
  categories: [],
};
export default NavbarComponent;
