import { bool } from 'prop-types';
import React, { useState } from 'react';

import { Props } from './SimpleToggle.types';

const SimpleToggle: React.FC<Props> = ({ color, IconOff, IconOn }) => {
  const [status, changeStatus] = useState(false);
  const [focused, changeFocused] = useState(false);
  return (
    <div
      className={`simple-toggle ${
        status ? 'simple-toggle--on' : 'simple-toggle--off'
      } ${focused ? 'simple-toggle--focus' : ''} bg-${color}`}
      onClick={() => changeStatus(!status)}
      onFocus={() => {
        changeFocused(!focused);
      }}
      onBlur={() => {
        changeFocused(!focused);
      }}
      tabIndex={1}
    >
      <span>
        {IconOff && !status ? <IconOff className={`color-${color}`} /> : <></>}
        {IconOn && status ? <IconOn className={`color-${color}`} /> : <></>}
      </span>
    </div>
  );
};

export default SimpleToggle;
