// Button component, can be dynamically disabled and text can be simply added

import React from 'react';

type Props = {
  valid?: boolean;
};

const FormButton: React.FC<Props> = ({ children, valid }) => {
  return (
    <button type="submit" className="form__button" disabled={!valid}>
      {children}
    </button>
  );
};

export default FormButton;
