import React from 'react';

import Card from './Card';

import { Props } from './StackedCards.types';

const StackedCards: React.FC<Props> = ({ color = 'indigo-500', data }) => {
  return (
    <ul className="cards">
      {data.map(({ id, ...otherProps }) => (
        <Card color={color} key={id} {...otherProps} />
      ))}
    </ul>
  );
};

export default StackedCards;
