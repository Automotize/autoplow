import React, { useState } from 'react';

import Text from '../Text';

import RadioButton from '../RadioButton';

import { Props } from './RadioButtonGroup.types';

const RadioButtonGroup: React.FC<Props> = ({
  label,
  data,
  color,
  textColor,
}) => {
  const [selectedID, changeSelectedID] = useState('id');
  return (
    <div className="radio-button-group">
      <Text
        fontWeight={500}
        size="sm"
        color={`${textColor}-700`}
        lineSpacing={7}
      >
        {label}
      </Text>
      {data.map(({ id, text }) => {
        return (
          <div
            onClick={() => changeSelectedID(id)}
            key={id}
            className="radio-button-group__item"
          >
            <RadioButton checked={selectedID === id} color={color} />
            <Text size="sm" color={`${textColor}-700`} lineSpacing={5}>
              {text}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
