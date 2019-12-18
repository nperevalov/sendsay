import React from "react";
import PropTypes from "prop-types";

import "./TextInput.scss";

function TextInput(props) {
  const handleChange = event => {
    event.persist();
    props.onChange(event.target.value);
  };
  return (
    <label className="TextInput-label">
      {props.title}
      <input
        className="TextInput-input"
        value={props.value}
        onChange={handleChange}
      ></input>
    </label>
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TextInput;
