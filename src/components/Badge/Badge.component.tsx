import React, { useState } from 'react';

import { GoPrimitiveDot } from 'react-icons/go';
import { MdClose } from 'react-icons/md';

type Props = {
  children: any;
  bg: string;
  color: string;
  large?: boolean;
  rounded?: boolean;
  dot?: boolean;
  remove?: boolean;
  open?: boolean;
};

type styleProps = {
  bg: string;
  color: string;
  large?: boolean;
  rounded?: boolean;
  dot?: boolean;
  remove?: boolean;
};

const styleSwitch = ({
  bg,
  color,
  large,
  rounded,
  dot,
  remove,
}: styleProps) => {
  let className = 'badge';
  if (large) {
    className = `${className} badge--large`;
  }
  if (bg) {
    className = `${className} bg-${bg}`;
  }
  if (color) {
    className = `${className} color-${color}`;
  }
  if (rounded) {
    className = `${className} badge--rounded`;
  }
  if (dot) {
    className = `${className} badge--dot`;
  }
  if (remove) {
    className = `${className} badge--remove`;
  }

  return className;
};

const Badge: React.FC<Props> = ({
  children,
  bg,
  color,
  large,
  rounded,
  dot,
  remove,
  open = true,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  if (remove && isOpen) {
    return (
      <div
        role="presentation"
        className={styleSwitch({ bg, color, large, rounded, dot, remove })}
      >
        {dot ? <GoPrimitiveDot className="badge__dot-icon" /> : <></>}
        {children}
        <MdClose
          className="badge__remove-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    );
  } else if (remove && !isOpen) {
    return <></>;
  }

  return (
    <div className={styleSwitch({ bg, color, large, rounded, dot, remove })}>
      {dot ? (
        <GoPrimitiveDot className="badge__dot-icon" size="1.2rem" />
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};

export default Badge;
