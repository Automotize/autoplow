import React, { useState } from 'react';

import { Props } from './ListWithDescription.types';

import ListWithDescriptionItem from './ListWithDescriptionItem';

const ListWithDescription: React.FC<Props> = ({ color, data }) => {
  const [selectedID, changeSelectedID] = useState('');
  return (
    <div className="list-with-description">
      {data.map(({ id, title, description }) => {
        return (
          <ListWithDescriptionItem
            key={id}
            id={id}
            title={title}
            description={description}
            color={color}
            selectedID={selectedID}
            changeSelectedID={changeSelectedID}
          />
        );
      })}
    </div>
  );
};

export default ListWithDescription;
