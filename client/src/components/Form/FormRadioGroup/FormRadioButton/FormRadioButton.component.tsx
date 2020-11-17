import React from 'react';

type Props = {
  id: string;
  text: string;
};

const FormRadioButton: React.FC<Props> = ({ id, text }) => {
  return (
    <div className="form__radio-group">
      <input type="radio" className="form__radio-input" id={id} name="size" />
      <label htmlFor={id} className="form__radio-label">
        <span className="form__radio-button" />
        {text}
      </label>
    </div>
  );
};

export default FormRadioButton;
