import React from 'react';

import { HiMail, HiPhone } from 'react-icons/hi';

import { Props } from './SmallContactCard.types';

import Text from '../../../Text';

const SmallContactCard: React.FC<Props> = ({
  name,
  description,
  image,
  badge,
}) => {
  return (
    <div className="small-contact-card">
      <div className="small-contact-card__top">
        <div className="small-contact-card__name-badge">
          <div className="small-contact-card__name">
            <Text size="sm" color="gray-900" lineSpacing={5} fontWeight={500}>
              {name}
            </Text>
          </div>
          <div className="small-contact-card__badge">{badge}</div>
        </div>
        <div className="small-contact-card__description">
          <Text size="sm" color="gray-500" lineSpacing={5} fontWeight={400}>
            {description}
          </Text>
        </div>
        <img src={image} alt="" className="small-contact-card__image" />
      </div>
      <div className="small-contact-card__bottom">
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

export default SmallContactCard;
