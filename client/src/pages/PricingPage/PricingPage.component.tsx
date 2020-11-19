import React from 'react';

import { ThreeTiers } from '../../components/PricingSections';

const PricingPage = () => {
  return (
    <ThreeTiers
      color="blue"
      title="Pricing"
      subTitle="Amazing prices for convenience!"
      description="Find the best model suitable for you"
      interval=""
      tier1={{
        title: 'Lite',
        price: 299,
        buttonText: 'Order Now',
        features: [
          {
            id: '1',
            text: 'Better for smaller driveways!',
          },
          {
            id: '2',
            text: 'Lightweight and portable!',
          },
          {
            id: '3',
            text: 'Sustains a longer battery life than other models!',
          },
        ],
      }}
      tier2={{
        title: 'Standard',
        price: 499,
        buttonText: 'Order Now',
        features: [
          {
            id: '1',
            text: 'More than enough power for the average driveway!',
          },
          {
            id: '2',
            text: 'Heavy-duty and can power through a very high level of snowfall!',
          },
          {
            id: '3',
            text: 'Self-sufficient as it takes care of your chores for you!',
          },
          {
            id: '4',
            text: 'Very convenient and energy efficient!',
          },
          {
            id: '5',
            text: 'Very little maintenance required, it takes care of you!',
          },
        ],
      }}
      tier3={{
        title: 'Premium',
        price: 799,
        buttonText: 'Order Now',
        features: [
          {
            id: '1',
            text: 'Perfect for commercial properties!',
          },
          {
            id: '2',
            text: 'Can power through almost any amount of snow!',
          },
          {
            id: '3',
            text: "Clears snow faster than any of our other models!",
          },
        ],
      }}
    />
  );
};

export default PricingPage;
