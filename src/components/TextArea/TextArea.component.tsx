import React from 'react';

import { Props } from './TextArea.types';

const TextArea: React.FC<Props> = ({
  label,
  placeholder,
  helpText,
  cornerHint,
  rows,
}) => {
  return (
    <div className="text-area">
      <div className="text-area__top">
        <label className="text-area__label">{label}</label>
        <label className="text-area__corner-hint">{cornerHint}</label>
      </div>
      <div className="text-area__container">
        <textarea
          rows={rows}
          className={`text-area__text-area`}
          placeholder={placeholder}
        />
      </div>
      {helpText ? <p>{helpText}</p> : <></>}
    </div>
  );
};

export default TextArea;
