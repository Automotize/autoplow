import React from 'react';

import Text from '../../components/Text';

import {
  StackedCards,
  ListWithDescription,
  SimpleTable,
} from '../../components/RadioGroups';

const data = [
  {
    id: '1',
    title: 'Hobby',
    description: '8GB / 4 CPUs * 160 GB SSD disk',
    price: 40,
    interval: 'mo',
  },
  {
    id: '2',
    title: 'Startup',
    description: '12GB / 6 CPUs * 256 GB SSD disk',
    price: 80,
    interval: 'mo',
  },
  {
    id: '3',
    title: 'Business',
    description: '16GB / 8 CPUs * 512 GB SSD disk',
    price: 160,
    interval: 'mo',
  },
  {
    id: '4',
    title: 'Enterprise',
    description: '32GB / 12 CPUs * 1024 GB SSD disk',
    price: 240,
    interval: 'mo',
  },
];

const data2 = [
  {
    id: '1',
    title: 'Public access',
    description: 'This project would be available to anyone who has the link',
  },
  {
    id: '2',
    title: 'Private to Project Members',
    description: 'Only members of this project would be able to access',
  },
  {
    id: '3',
    title: 'Private to you',
    description: 'You are the only one able to access this project',
  },
];

const data3 = [
  {
    id: '1',
    data: [
      <Text size="sm" color="gray-900" fontWeight={500}>
        Startup
      </Text>,
      <div className="simple-table__center">
        <Text size="sm" color="gray-700" fontWeight={500}>
          $29 / mo
        </Text>
        &nbsp; &nbsp;
        <Text size="sm" color="gray-500">
          $290 / yr
        </Text>
      </div>,
      <Text size="sm" color="gray-700">
        Up to 5 active job postings
      </Text>,
    ],
  },
  {
    id: '2',
    data: [
      <Text size="sm" color="gray-900" fontWeight={500}>
        Business
      </Text>,
      <div className="simple-table__center">
        <Text size="sm" color="gray-700" fontWeight={500}>
          $99 / mo
        </Text>
        &nbsp; &nbsp;
        <Text size="sm" color="gray-500">
          $990 / yr
        </Text>
      </div>,
      <Text size="sm" color="gray-700">
        Up to 25 active job postings
      </Text>,
    ],
  },
  {
    id: '3',
    data: [
      <Text size="sm" color="gray-900" fontWeight={500}>
        Enterprise
      </Text>,
      <div className="simple-table__center">
        <Text size="sm" color="gray-700" fontWeight={500}>
          $249 / mo
        </Text>
        &nbsp; &nbsp;
        <Text align="center" size="sm" color="gray-500">
          $2490 / yr
        </Text>
      </div>,
      <Text size="sm" color="gray-700">
        Unlimited active job postings
      </Text>,
    ],
  },
];

const RadioGroups = () => {
  return (
    <div className="radio-groups">
      <div className="radio-groups__container">
        <StackedCards color="indigo-500" data={data} />
        <ListWithDescription color="indigo" data={data2} />
        <div className="u-margin-bottom-medium" />
        <SimpleTable color="indigo" data={data3} />
      </div>
    </div>
  );
};

export default RadioGroups;
