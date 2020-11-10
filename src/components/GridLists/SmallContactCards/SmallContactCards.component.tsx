import React from 'react';

import SmallContactCard from './SmallContactCard';

import { Props } from './SmallContactCards.types';

const SmallContactCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="small-contact-cards">
      {data.map(({ id, ...otherProps }) => (
        <SmallContactCard key={id} id={id} {...otherProps} />
      ))}
    </div>
  );
};

export default SmallContactCards;
