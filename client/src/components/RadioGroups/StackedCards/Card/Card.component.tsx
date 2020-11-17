import React from 'react';

import Text from '../../../Text';

import { Props } from './Card.types';

const Card: React.FC<Props> = ({
  title,
  description,
  price,
  interval,
  color,
}) => {
  return (
    <li className={`card color-${color}`} tabIndex={1}>
      {/* <div className="card__title">
        <Text size="sm" lineSpacing={5} color="gray-900" fontWeight={500}>
          {title}
        </Text>
      </div>
      <div className="card__price">
        <Text size="sm" lineSpacing={5} color="gray-900" fontWeight={500}>
          ${price}
        </Text>
      </div>
      <div className="card__description">
        <Text size="sm" lineSpacing={5} color="gray-500">
          {description}
        </Text>
      </div>
      <div className="card__interval">
        <Text size="sm" lineSpacing={5} color="gray-500">
          /{interval}
        </Text>
      </div> */}
      <div>
        <Text size="sm" lineSpacing={5} color="gray-900" fontWeight={500}>
          {title}
        </Text>
        <Text size="sm" lineSpacing={5} color="gray-500">
          {description}
        </Text>
      </div>
      <div>
        <Text size="sm" lineSpacing={5} color="gray-900" fontWeight={500}>
          ${price}
        </Text>
        <Text size="sm" lineSpacing={5} color="gray-500">
          /{interval}
        </Text>
      </div>
    </li>
  );
};

export default Card;
