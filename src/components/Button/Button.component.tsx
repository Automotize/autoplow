import React from 'react';

import { styleSwitch } from './Button.utils';

import { Props } from './Button.types';

const Button: React.FC<Props> = ({
  children,
  // tslint:disable-next-line: no-empty
  onClick = () => {},
  center,
  italic,
  fontWeight,
  letterSpacing = 'wide',
  lineSpacing = 5,
  color = 'white',
  size = 'base',
  bg = 'indigo-600',
  full = false,
  inline,
  borderSize,
  borderColor,
  borderStyle,
  iconPosition = 'left',
  Icon,
}) => {
  return (
    <button
      type="button"
      className={styleSwitch({
        center,
        italic,
        fontWeight,
        letterSpacing,
        lineSpacing,
        color,
        size,
        bg,
        full,
        inline,
        borderSize,
        borderColor,
        borderStyle,
        iconPosition,
      })}
    >
      {iconPosition === 'left' && Icon ? <Icon /> : null}
      {children}
      {iconPosition === 'right' && Icon ? <Icon /> : null}
    </button>
  );
};

export default Button;
