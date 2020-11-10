import React from 'react';

import RadioButton from '../../../RadioButton';

import { Props } from './ListWithDescriptionItem.types';

const ListWithDescriptionItem: React.FC<Props> = ({
  title,
  description,
  selectedID,
  changeSelectedID,
  id,
  color,
}) => {
  return (
    <div
      className={`list-with-description__item ${
        selectedID === id
          ? `list-with-description__item--selected bg-${color}-50 color-${color}-200`
          : 'list-with-description__item--not-selected bg-white border--color-gray-200'
      }`}
      onClick={() => changeSelectedID(id)}
    >
      <div className="list-with-description__radio-button">
        <RadioButton color={color} checked={selectedID === id} />
      </div>

      <div className="list-with-description__content">
        <p
          className={`list-with-description__title ${
            selectedID === id ? `color-${color}-900` : ''
          } `}
        >
          {title}
        </p>
        <p
          className={`list-with-description__description ${
            selectedID === id ? `color-${color}-700` : ''
          } `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ListWithDescriptionItem;
