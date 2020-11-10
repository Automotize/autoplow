import React from 'react';

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

import { ShortToggle, SimpleToggle } from '../../components/Toggle';

const TogglesPage = () => {
  return (
    <div className="toggles">
      <ShortToggle
        color="red-500"
        IconOff={AiOutlineClose}
        IconOn={AiOutlineCheck}
      />
      <br />
      <br />
      <SimpleToggle
        color="red-500"
        IconOff={AiOutlineClose}
        IconOn={AiOutlineCheck}
      />
    </div>
  );
};

export default TogglesPage;
