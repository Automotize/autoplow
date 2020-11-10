import React from 'react';

import { FaRegCircle, FaDotCircle } from 'react-icons/fa';

import { Props } from './RadioButton.types';

const RadioButton: React.FC<Props> = ({ checked, color }) => {
  return (
    <div className="radio-button">
      {checked ? (
        <FaDotCircle className={`color-${color}-600`} />
      ) : (
        <FaRegCircle className="radio-button__white" />
      )}
    </div>
  );
};

export default RadioButton;
