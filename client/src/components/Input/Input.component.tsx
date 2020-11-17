import React, { useState } from 'react';

import { RiErrorWarningFill } from 'react-icons/ri';

import { Props } from './Input.types';

const Input: React.FC<Props> = ({
  label,
  placeholder,
  helpText,
  valid = true,
  cornerHint,
  leadingIcon,
  TrailingIcon,
  InvalidIcon = RiErrorWarningFill,
  leadingAddOn,
  leadingInlineAddOn,
  trailingAddOn,
  trailingInlineAddOn,
}) => {
  const [focused, changeFocus] = useState(false);
  return (
    <div className={`input ${!valid ? 'input--invalid' : ''}`}>
      <div className="input__top">
        <label className="input__label">{label}</label>
        <label className="input__corner-hint">{cornerHint}</label>
      </div>
      <div
        className={`input__container ${
          focused && leadingInlineAddOn ? 'input__container--focus' : ''
        }`}
      >
        {leadingAddOn ? (
          <span
            className={`input__leading-add-on ${
              leadingInlineAddOn ? 'input__leading-add-on--inline' : ''
            }`}
          >
            <p>{leadingAddOn}</p>
          </span>
        ) : (
          <></>
        )}
        <input
          className={`input__input ${
            leadingAddOn ? 'input__input--leading' : ''
          } ${trailingAddOn ? 'input__input--trailing' : ''} ${
            leadingInlineAddOn ? 'input__input--leading-inline' : ''
          } ${trailingInlineAddOn ? 'input__input--trailing-inline' : ''}`}
          placeholder={placeholder}
          onFocus={() => changeFocus(true)}
          onBlur={() => changeFocus(false)}
        />
        {!valid && !TrailingIcon ? <InvalidIcon /> : <></>}
        {TrailingIcon ? (
          <TrailingIcon className="input__trailing-icon" />
        ) : (
          <></>
        )}
        {trailingAddOn ? (
          <span
            className={`input__trailing-add-on ${
              trailingInlineAddOn ? 'input__trailing-add-on--inline' : ''
            }`}
          >
            <p>{trailingAddOn}</p>
          </span>
        ) : (
          <></>
        )}
      </div>
      {helpText ? <p>{helpText}</p> : <></>}
    </div>
  );
};

export default Input;
