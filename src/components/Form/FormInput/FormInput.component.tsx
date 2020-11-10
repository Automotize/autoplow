// self explanitory
// other props = value,type,name,onChange,placeholder,required, valid

import React from 'react';

type Props = {
  label: string;
  valid: boolean;
};

const FormInput: React.FC<Props> = ({ label, valid, ...otherProps }) => {
  // if valid is passed as a parameter, allows for more styling
  let style;
  if (valid === true) {
    style = 'form__input form__input--good';
  } else if (valid === false) {
    style = 'form__input form__input--bad';
  } else {
    style = 'form__input';
  }
  return (
    <>
      {label !== '' ? (
        <label htmlFor={label} className="form__label">
          {label}
        </label>
      ) : null}
      <input id={label} className={style} {...otherProps} />
    </>
  );
};

export default FormInput;
