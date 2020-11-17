import { bool } from 'prop-types';
import React, { useState } from 'react';

import { Props } from './ShortToggle.types';

const ShortToggle: React.FC<Props> = ({ color, IconOff, IconOn }) => {
  const [status, changeStatus] = useState(false);
  const [focused, changeFocused] = useState(false);
  return (
    <div
      className={`short-toggle ${
        status ? 'short-toggle--on' : 'short-toggle--off'
      } ${focused ? 'short-toggle--focus' : ''} bg-${color}`}
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

export default ShortToggle;
