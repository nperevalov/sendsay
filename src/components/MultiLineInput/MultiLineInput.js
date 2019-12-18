import React from "react";
import PropTypes from "prop-types";

import "./MultiLineInput.scss";

function MultiLineInput(props) {
  const handleChange = event => {
    event.persist();
    props.onChange(event.target.value);
  };
  return (
    <label className="MultiLineInput-label">
      {props.title}
      <textarea
        className="MultiLineInput-input"
        value={props.value}
        onChange={handleChange}
      ></textarea>
    </label>
  );
}

MultiLineInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MultiLineInput;
