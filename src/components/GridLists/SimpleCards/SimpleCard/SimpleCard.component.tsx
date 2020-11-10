import React from 'react';

import { FaEllipsisV } from 'react-icons/fa';

import { Props } from './SimpleCard.types';

import Text from '../../../Text';

const SimpleCard: React.FC<Props> = ({
  color,
  acronym,
  title,
  description,
}) => {
  return (
    <div className="simple-card">
      <div className={`simple-card__icon bg-${color}`}>
        <div className="simple-card__acronym">
          <Text size="sm" lineSpacing={5} fontWeight={500} color="white">
            {acronym}
          </Text>
        </div>
      </div>
      <div className="simple-card__content">
        <div className="simple-card__title">
          <Text size="sm" lineSpacing={5} fontWeight={500} color="gray-900">
            {title}
          </Text>
        </div>
        <div className="simple-card__description">
          <Text size="sm" lineSpacing={5} color="gray-500">
            {description}
          </Text>
        </div>
      </div>
      <button className="simple-card__button">
        <FaEllipsisV />
      </button>
    </div>
  );
};

export default SimpleCard;
