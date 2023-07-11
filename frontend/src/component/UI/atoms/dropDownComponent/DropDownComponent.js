import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./DropDownComponent.css";

const DropDownComponent = (props) => {
  const { setSortType, sortList } = props;
  let sortItems = Object.entries(sortList);
  return (
    <Fragment>
      <div className="sorting" data-test="component-sorting">
        <label htmlFor="sorting">Sort by:</label>
        <select
          onChange={(e) => setSortType(e.target.value)}
          name="sort"
          id="sort"
          className="sortBox"
        >
          {sortItems?.map(([key, sortItem] = entry) => (
            <option value={key}>{sortItem}</option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};
DropDownComponent.propTypes = {
  setSortType: PropTypes.func,
  sortList: PropTypes.object,
};
DropDownComponent.defaultProps = {
  setSortType: () => {},
  sortList: {},
};
export default DropDownComponent;
