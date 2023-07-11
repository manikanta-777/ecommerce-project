import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBarComponent.css";
const SearchBarComponent = () => {
  return (
    <div className="search" data-test="component-search">
      <div className="searchInputs">
        <input type="text" />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;
