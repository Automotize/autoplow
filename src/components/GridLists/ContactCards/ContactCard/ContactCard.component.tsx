import React from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';

import Text from '../../../Text';

import { Props } from './ContactCard.types';

const ContactCard: React.FC<Props> = ({ image, name, description, badge }) => {
  return (
    <div className="contact-card">
      <div className="contact-card__top">
        <img src={image} alt="" className="contact-card__image" />
        <div className="contact-card__name">
          <Text size="sm" color="gray-900" lineSpacing={5} fontWeight={500}>
            {name}
          </Text>
        </div>
        <div className="contact-card__description">
          <Text size="sm" color="gray-500" lineSpacing={5}>
            {description}
          </Text>
        </div>
        <div className="contact-card__badge">{badge}</div>
      </div>
      <div className="contact-card__bottom">
        <div tabIndex={1}>
          <HiMail />
          <Text size="sm" lineSpacing={5} color="gray-700" fontWeight={500}>
            Email
          </Text>
        </div>
        <div tabIndex={1}>
          <HiPhone />
          <Text size="sm" lineSpacing={5} color="gray-700" fontWeight={500}>
            Email
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
