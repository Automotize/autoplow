import React from 'react';

import RadioButton from '../../../RadioButton';

import { Props } from './SimpleTableItem.types';

const SimpleTableItem: React.FC<Props> = ({
  id,
  data,
  color,
  selectedID,
  changeSelectedID,
}) => {
  return (
    <div
      className={`simple-table__item ${
        selectedID === id
          ? `simple-table__item--selected bg-${color}-50 color-${color}-200`
          : 'simple-table__item--not-selected bg-white color-gray-200'
      }`}
      onClick={() => changeSelectedID(id)}
    >
      {data.map((el, index) =>
        index === 0 ? (
          <div key={index}>
            <RadioButton color="indigo" checked={selectedID === id} />
            {el}
          </div>
        ) : (
          <div key={index}>{el}</div>
        )
      )}
    </div>
  );
};

export default SimpleTableItem;
