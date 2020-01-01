import React from "react";
import PropTypes from "prop-types";

function NameEmailInput(props) {
  const handleNameChange = event => {
    event.persist();
    props.onNameChange(event.target.value);
  };
  const handleEmailChange = event => {
    event.persist();
    props.onEmailChange(event.target.value);
  };

  return (
    <div className="NameEmailInput-container">
      <label className="NameEmailInput-label">{props.title}</label>
      <input
        className="NameEmailInput-nameInput"
        placeholder="Имя"
        value={props.name}
        onChange={handleNameChange}
      ></input>
      {props.nameNotValidText ? (
        <div className="NameEmailInput-nameInputNotValid">
          {props.nameNotValidText}
        </div>
      ) : null}

      <input
        className="NameEmailInput-emailInput"
        placeholder="Email"
        value={props.email}
        onChange={handleEmailChange}
      ></input>
      {props.emailNotValidText ? (
        <div className="NameEmailInput-emailInputNotValid">
          {props.emailNotValidText}
        </div>
      ) : null}
    </div>
  );
}
NameEmailInput.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  nameNotValidText: PropTypes.string,
  emailNotValidText: PropTypes.string
};

export default NameEmailInput;
