import React, { useState } from 'react';

import Heading from '../../Heading';

import CenteredAccordionItem from './CenteredAccordionItem';

import { Props } from './CenteredAccordion.types';

const CenteredAccordion: React.FC<Props> = ({ color, data }) => {
  const [selectedID, changeSelectedID] = useState('');
  return (
    <div className="centered-accordion">
      <div className="centered-accordion__container">
        <Heading
          lineSpacing="9"
          fontWeight="800"
          color={`${color}-900`}
          center={true}
          size="h2"
        >
          Frequently asked questions
        </Heading>
        <ul className={`centered-accordion__content color-${color}-200`}>
          {data.map(({ id, ...otherProps }) => (
            <CenteredAccordionItem
              key={id}
              id={id}
              color={color}
              selectedID={selectedID}
              changeSelectedID={changeSelectedID}
              {...otherProps}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CenteredAccordion;
