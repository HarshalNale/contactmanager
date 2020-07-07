import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({ label, id, name, value, type, onChange, error }) => {
  return (
    <div className="md-form mt-3">
      <input
        type={type}
        name={name}
        className={classnames("form-control", {
          "is-invalid": error,
        })}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
