import React from 'react';

import Heading from '../../Heading';

import Text from '../../Text';

import Input from '../../Input';

import Button from '../../Button';

const BrandCard = () => {
  return (
    <div className="newsletter-sections-brand-card">
      <div className="newsletter-sections-brand-card__card">
        <div>
          <Heading
            size="h2"
            color="white"
            lineSpacing="8"
            fontWeight="800"
            letterSpacing="tight"
          >
            Want products news and updates?
          </Heading>

          <Text size="lg" color="blue-200" lineSpacing={6}>
            Sign up for our newsletter to stay up to date.
          </Text>
        </div>
        <div>
          <div className="newsletter-sections-brand-card__form">
            <Input placeholder="Email" />
            <Button bg="blue-500" color="white">
              Notify me
            </Button>
          </div>
          <div className="newsletter-sections-brand-card__privacy">
            <Text size="sm" color="blue-200" lineSpacing={5}>
              We care about the protection of your data. Read our{' '}
              <span>Privacy Policy</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
