import React from 'react';

import SimpleCard from './SimpleCard';

import { Props } from './SimpleCards.types';

const SimpleCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="simple-cards">
      {data.map(({ id, ...otherProps }) => (
        <SimpleCard key={id} id={id} {...otherProps} />
      ))}
    </div>
  );
};

export default SimpleCards;
