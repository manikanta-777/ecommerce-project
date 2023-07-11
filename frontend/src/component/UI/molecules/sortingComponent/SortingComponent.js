import React from "react";
import PropTypes from "prop-types";
import DropDownComponent from "../../atoms/dropDownComponent/DropDownComponent";
import Constants from "../../../HOC/Constants";
const SortingComponent = (props) => {
  const { setSortType } = props;
  const constData = Constants();
  return (
    <div data-test="component-sorting">
      <DropDownComponent
        sortList={constData.sortList}
        setSortType={setSortType}
      />
    </div>
  );
};
SortingComponent.propTypes = {
  setSortType: PropTypes.func,
};
SortingComponent.defaultProps = {
  setSortType: () => {},
};

export default SortingComponent;
