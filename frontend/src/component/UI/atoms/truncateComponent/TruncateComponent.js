import React, { useState } from "react";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./TruncateComponent.css";

const TruncateComponent = (props) => {
  const { description } = props;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="truncate" data-test="component-truncate">
      {isReadMore && description ? (
        <p>{description.slice(0, 100)}...</p>
      ) : (
        <p>{description}</p>
      )}
      <span
        onClick={toggleReadMore}
        className="seeMoreLess"
        data-test="component-seeMoreLess"
      >
        {isReadMore ? (
          <p>
            See more <KeyboardArrowDownIcon />
          </p>
        ) : (
          <p>
            show less <KeyboardArrowUpIcon />
          </p>
        )}
      </span>
    </div>
  );
};
TruncateComponent.propTypes = {
  description: PropTypes.string,
};
TruncateComponent.defaultProps = {
  description: "",
};
export default TruncateComponent;
