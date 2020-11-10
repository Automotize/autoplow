// Button component, can be dynamically disabled and text can be simply added

import React from 'react';

type Props = {};

const FormCheckbox: React.FC<Props> = ({ children }) => {
  return (
    <div className="form__checkbox-container">
      <input type="checkbox" className="form__checkbox" />
      <p className="form__checkbox-text">{children}</p>
    </div>
  );
};

export default FormCheckbox;
