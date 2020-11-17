import React from 'react';

import { Props } from './GridList.types';

import Heading from '../../Heading';

import Text from '../../Text';

import GridListItem from './GridListItem';

const GridList: React.FC<Props> = ({ title, description, data, color }) => {
  return (
    <div className="grid-list">
      <div className="grid-list__heading">
        <Heading
          size="h2"
          lineSpacing="9"
          fontWeight="800"
          color={`${color}-900`}
          center={true}
        >
          {title}
        </Heading>
        <div className="u-margin-bottom-small" />
        <Text size="lg" lineSpacing={7} color={`${color}-500`} center={true}>
          {description}
        </Text>
      </div>

      <div className="grid-list__grid">
        {data.map(({ id, ...otherProps }) => (
          <GridListItem key={id} color={color} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default GridList;
