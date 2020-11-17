import React from 'react';

type Props = {
  size: string;
  center?: boolean;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  italic?: boolean;
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  lineSpacing?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  color?: string;
  inline?: boolean;
  align?: 'center' | 'left' | 'right';
};

const Text: React.FC<Props> = ({
  children,
  size,
  center,
  fontWeight,
  italic,
  letterSpacing,
  lineSpacing,
  color,
  inline,
  align,
}) => {
  const styleSwitch = () => {
    let string = 'text';
    if (center) {
      string = `${string} text--center`;
    }
    if (italic) {
      string = `${string} text--italic`;
    }
    if (fontWeight) {
      string = `${string} font-weight-${fontWeight}`;
    }
    if (letterSpacing) {
      string = `${string} tracking-${letterSpacing}`;
    }
    if (lineSpacing) {
      string = `${string} leading-${lineSpacing}`;
    }
    if (color) {
      string = `${string} color-${color}`;
    }
    if (size) {
      string = `${string} text--${size}`;
    }
    if (inline) {
      string = `${string} text--inline`;
    }
    if (align) {
      string = `${string} text-align-${align}`;
    }

    return string;
  };

  return <p className={styleSwitch()}>{children}</p>;
};

export default Text;
