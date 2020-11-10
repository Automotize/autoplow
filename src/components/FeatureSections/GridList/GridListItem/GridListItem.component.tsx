import React from 'react';

import { FiCheck } from 'react-icons/fi';

import Text from '../../../Text';

import { Props } from './GridListItem.types';

const GridListItem: React.FC<Props> = ({ title, description, color }) => {
  return (
    <div className="grid-list__item">
      <FiCheck className="grid-list__icon" />
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
