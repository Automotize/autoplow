import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';

import { Props } from './SimpleCard.types';

const SimpleCard: React.FC<Props> = ({
  title,
  description,
  stat1,
  stat2,
  stat3,
  color,
}) => {
  return (
    <div className="stats-simple-card">
      <Heading size="h2" color="gray-900" fontWeight="800" lineSpacing="9">
        {title}
      </Heading>
      <Text lineSpacing={7} color="gray-500" size="xl">
        {description}
      </Text>
      <div className="stats-simple-card__content">
        <div className="stats-simple-card__cards">
          <div className="stats-simple-card__card">
            <Heading size="h1" color={`${color}-600`} fontWeight="800">
              {stat1.title}
            </Heading>
            <Text lineSpacing={6} fontWeight={500} color="gray-500" size="lg">
              {stat1.description}
            </Text>
          </div>
          <div className="stats-simple-card__card">
            <Heading size="h1" color={`${color}-600`} fontWeight="800">
              {stat2.title}
            </Heading>
            <Text lineSpacing={6} fontWeight={500} color="gray-500" size="lg">
              {stat2.description}
            </Text>
          </div>
          <div className="stats-simple-card__card">
            <Heading size="h1" color={`${color}-600`} fontWeight="800">
              {stat3.title}
            </Heading>
            <Text lineSpacing={6} fontWeight={500} color="gray-500" size="lg">
              {stat3.description}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
