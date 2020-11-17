// self explanitory
// other props = value,type,name,onChange,placeholder,required, valid, rows, cols,

import React from 'react';

import PropTypes from 'prop-types';

const FormTextArea = ({ ...otherProps }) => (
  <textarea className="form__textarea" {...otherProps} />
);

FormTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.string,
};

FormTextArea.defaultProps = {
  children: '',
};

export default FormTextArea;
