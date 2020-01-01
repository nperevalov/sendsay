import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default function Button({ className, onClick, title, ...props }) {
  return (
    <button className={className} onClick={onClick} {...props}>
      {title}
    </button>
  );
}
