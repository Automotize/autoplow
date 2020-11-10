// Dropdown component, default value is null, afterwards all other values are passed in through props in an array
// [{id, name}]
// the name also serves as the value, however this can be easily changed if necessary

import React from 'react';
import PropTypes, { number, string } from 'prop-types';

import FormDropDownItem from './FormDropDownItem';

interface Data {
  id: number;
  name: string;
}

type Props = {
  data: Data[];
  value: string;
};

const FormDropDown: React.FC<Props> = ({ data, value, ...otherProps }) => {
  return (
    <select value={value} {...otherProps} className="form__dropdown">
      <option value="" disabled>
        Select your category
      </option>
      {data.map(({ id, name }) => (
        <FormDropDownItem key={id}>{name}</FormDropDownItem>
      ))}
    </select>
  );
};

export default FormDropDown;
