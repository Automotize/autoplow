import React from 'react';

import { BsCheck } from 'react-icons/bs';

import Text from '../../../Text';

import { Props } from './GridListItem.types';

const GridListItem: React.FC<Props> = ({ title, description, color }) => {
  return (
    <div className="grid-list__item">
      <div className="grid-list__icon">
        <BsCheck />
      </div>
      <div className="grid-list__content">
        <Text color={`${color}-900`} fontWeight={500} lineSpacing={6} size="lg">
          {title}
        </Text>
        <Text color={`${color}-500`} lineSpacing={6} size="base">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default GridListItem;
