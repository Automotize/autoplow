import React from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import Text from '../../../Text';

import { Props } from './CenteredAccordionItem.types';

const CenteredAccordionItem: React.FC<Props> = ({
  color,
  question,
  answer,
  selectedID,
  changeSelectedID,
  id,
}) => {
  return (
    <li
      onClick={() => {
        if (selectedID === id) {
          changeSelectedID('');
        } else {
          changeSelectedID(id);
        }
      }}
      className={`centered-accordion__item color-${color}-200`}
    >
      <Text color={`${color}-900`} fontWeight={500} size="lg">
        {question}
      </Text>
      {selectedID === id ? (
        <div className="centered-accordion__description">
          <Text color={`${color}-500`} size="sm" lineSpacing={6}>
            {answer}
          </Text>
        </div>
      ) : (
        <></>
      )}

      {selectedID === id ? (
        <IoIosArrowUp className={`color-${color}-400`} />
      ) : (
        <IoIosArrowDown className={`color-${color}-400`} />
      )}
    </li>
  );
};

export default CenteredAccordionItem;
