import React from 'react';
import { FiCheck } from 'react-icons/fi';

import Text from '../../Text';

import Heading from '../../Heading';

import Button from '../../Button';

import { Props } from './ThreeTiers.types';

const ThreeTiers: React.FC<Props> = ({
  title,
  subTitle,
  description,
  tier1,
  tier2,
  tier3,
  interval,
  color,
}) => {
  return (
    <div className="pricing-sections-three-tiers">
      <Text
        size="lg"
        color="gray-300"
        lineSpacing={6}
        letterSpacing="wider"
        fontWeight={600}
        center={true}
      >
        {title}
      </Text>
      <Heading
        size="h2"
        color="white"
        lineSpacing="9"
        fontWeight="800"
        center={true}
      >
        {subTitle}
      </Heading>
      <div className="pricing-sections-three-tiers__description">
        <Text color="gray-300" size="xl" lineSpacing={7} center={true}>
          {description}
        </Text>
      </div>

      <div className="pricing-sections-three-tiers__tiers">
        <div className="pricing-sections-three-tiers__small-tier">
          <div className="pricing-sections-three-tiers__top">
            <div className="pricing-sections-three-tiers__tier-title">
              <Heading
                size="h3"
                color="gray-900"
                lineSpacing="8"
                fontWeight="500"
                center={true}
              >
                {tier1.title}
              </Heading>
            </div>
            <div className="pricing-sections-three-tiers__tier-pricing">
              <h1 className="pricing-sections-three-tiers__tier-price">
                <span className="pricing-sections-three-tiers__sign">$</span>
                {tier1.price}

                <span className="pricing-sections-three-tiers__interval">
                  /{interval}
                </span>
              </h1>
            </div>
          </div>
          <div className="pricing-sections-three-tiers__bottom">
            <ul className="pricing-sections-three-tiers__tier-features">
              {tier1.features.map(({ id, text }) => (
                <li
                  key={id}
                  className="pricing-sections-three-tiers__tier-feature"
                >
                  <FiCheck />
                  <Text
                    size="base"
                    fontWeight={500}
                    lineSpacing={6}
                    color="gray-500"
                  >
                    {text}
                  </Text>
                </li>
              ))}
            </ul>
            <Button bg="white" full={true} color={`${color}-600`} size="lg">
              {tier1.buttonText}
            </Button>
          </div>
        </div>
        <div
          className={`pricing-sections-three-tiers__large-tier border--color-${color}-600`}
        >
          <div className="pricing-sections-three-tiers__top">
            <div
              className={`pricing-sections-three-tiers__badge bg-${color}-600`}
            >
              Most Popular
            </div>
            <div className="pricing-sections-three-tiers__tier-title">
              <Heading
                size="h3"
                color="gray-900"
                lineSpacing="8"
                fontWeight="500"
                center={true}
              >
                {tier2.title}
              </Heading>
            </div>
            <div className="pricing-sections-three-tiers__tier-pricing">
              <h1 className="pricing-sections-three-tiers__tier-price">
                <span className="pricing-sections-three-tiers__sign">$</span>
                {tier2.price}
                <span className="pricing-sections-three-tiers__interval">
                  /{interval}
                </span>
              </h1>
            </div>
          </div>
          <div className="pricing-sections-three-tiers__bottom">
            <ul className="pricing-sections-three-tiers__tier-features">
              {tier2.features.map(({ id, text }) => (
                <li
                  key={id}
                  className="pricing-sections-three-tiers__tier-feature"
                >
                  <FiCheck />
                  <Text
                    size="base"
                    fontWeight={500}
                    lineSpacing={6}
                    color="gray-500"
                  >
                    {text}
                  </Text>
                </li>
              ))}
            </ul>
            <Button bg={`${color}-600`} full={true} color="white" size="xl">
              {tier2.buttonText}
            </Button>
          </div>
        </div>
        <div className="pricing-sections-three-tiers__small-tier">
          <div className="pricing-sections-three-tiers__top">
            <div className="pricing-sections-three-tiers__tier-title">
              <Heading
                size="h3"
                color="gray-900"
                lineSpacing="8"
                fontWeight="500"
                center={true}
              >
                {tier3.title}
              </Heading>
            </div>
            <div className="pricing-sections-three-tiers__tier-pricing">
              <h1 className="pricing-sections-three-tiers__tier-price">
                <span className="pricing-sections-three-tiers__sign">$</span>
                {tier3.price}
                <span className="pricing-sections-three-tiers__interval">
                  /{interval}
                </span>
              </h1>
            </div>
          </div>
          <div className="pricing-sections-three-tiers__bottom">
            <ul className="pricing-sections-three-tiers__tier-features">
              {tier3.features.map(({ id, text }) => (
                <li
                  key={id}
                  className="pricing-sections-three-tiers__tier-feature"
                >
                  <FiCheck />
                  <Text
                    size="base"
                    fontWeight={500}
                    lineSpacing={6}
                    color="gray-500"
                  >
                    {text}
                  </Text>
                </li>
              ))}
            </ul>
            <Button bg="white" full={true} color={`${color}-600`} size="lg">
              {tier3.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeTiers;
