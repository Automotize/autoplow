import React from 'react';

import { ThreeTiers } from '../../components/PricingSections';

const PricingPage = () => {
  return (
    <ThreeTiers
      color="blue"
      title="Pricing"
      subTitle="The right price for you, whoever you are"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum."
      interval="month"
      tier1={{
        title: 'Hobby',
        price: 79,
        buttonText: 'Start your trial',
        features: [
          {
            id: '1',
            text: 'Pariatur quod similique',
          },
          {
            id: '2',
            text: 'Sapiente libero doloribus',
          },
          {
            id: '3',
            text: 'Vel ipsa esse repudiandae',
          },
        ],
      }}
      tier2={{
        title: 'Growth',
        price: 149,
        buttonText: 'Start your trial',
        features: [
          {
            id: '1',
            text: 'Quia rem est sed impedit magnam',
          },
          {
            id: '2',
            text: 'Dolorem vero ratione voluptates',
          },
          {
            id: '3',
            text: 'Qui sed ab doloribus voluptatem dolore',
          },
          {
            id: '4',
            text: 'Laborum commodi molestiae id et fugiat',
          },
          {
            id: '5',
            text: 'Nam ut ipsa nesciunt culpa modi dolor',
          },
        ],
      }}
      tier3={{
        title: 'Scale',
        price: 349,
        buttonText: 'Start your trial',
        features: [
          {
            id: '1',
            text: 'Pariatur quod similique',
          },
          {
            id: '2',
            text: 'Sapiente libero doloribus',
          },
          {
            id: '3',
            text: 'Vel ipsa esse repudiandae',
          },
        ],
      }}
    />
  );
};

export default PricingPage;
