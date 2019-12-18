import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

function Button(props) {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.title}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
