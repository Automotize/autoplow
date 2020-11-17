import React from 'react';

type Props = {
  children: string;
};

const Divider: React.FC<Props> = ({ children }) => {
  return (
    <div className="divider">
      <div className="divider__line"></div>
      <div className="divider__text">{children}</div>
      <div className="divider__line"></div>
    </div>
  );
};

export default Divider;
