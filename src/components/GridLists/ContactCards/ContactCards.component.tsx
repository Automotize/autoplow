import React from 'react';
import ContactCard from './ContactCard';

import { Props } from './ContactCards.types';

const ContactCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="contact-cards">
      {data.map(({ id, ...otherProps }) => (
        <ContactCard key={id} id={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ContactCards;
