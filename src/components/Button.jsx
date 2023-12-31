import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, className, label }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
