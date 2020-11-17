import React from 'react';

import FormRadioButton from './FormRadioButton/FormRadioButton.component';

interface Data {
  id: string;
  text: string;
}

type Props = {
  data: Data[];
};

const FormRadioGroup: React.FC<Props> = ({ data }) => {
  return (
    <div className="form__radio-container">
      {data.map((el) => (
        <FormRadioButton key={el.id} {...el} />
      ))}
    </div>
  );
};

export default FormRadioGroup;
