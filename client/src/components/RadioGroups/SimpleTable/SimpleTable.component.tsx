import React, { useState } from 'react';

import SimpleTableItem from './SimpleTableItem';

import { Props } from './SimpleTable.types';

const SimpleTable: React.FC<Props> = ({ data }) => {
  const [selectedID, changeSelectedID] = useState('');
  return (
    <ul className="simple-table">
      {data.map(({ id, data }) => (
        <SimpleTableItem
          selectedID={selectedID}
          changeSelectedID={changeSelectedID}
          color="indigo"
          key={id}
          id={id}
          data={data}
        />
      ))}
    </ul>
  );
};

export default SimpleTable;
