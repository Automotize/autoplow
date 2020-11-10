import React from 'react';

type Props = {
  size?: string;
  center?: boolean;
  fontWeight?: string;
  italic?: boolean;
  letterSpacing?: string;
  lineSpacing?: string;
  color?: string;
  inline?: boolean;
};

const Heading: React.FC<Props> = ({
  children,
  size = 'h1',
  center,
  fontWeight,
  italic,
  letterSpacing,
  lineSpacing,
  inline,
  color = 'black',
}) => {
  const styleSwitch = () => {
    let className = 'heading';
    if (center) {
      className = `${className} heading--center`;
    }
    if (italic) {
      className = `${className} heading--italic`;
    }
    if (fontWeight) {
      className = `${className} font-weight-${fontWeight}`;
    }
    if (letterSpacing) {
      className = `${className} tracking-${letterSpacing}`;
    }
    if (color) {
      className = `${className} color-${color}`;
    }
    if (lineSpacing) {
      className = `${className} leading-${lineSpacing}`;
    }
    if (inline) {
      className = `${className} heading--inline`;
    }

    return className;
  };

  const renderSwitch = (headingSize: string, text: any, styling: string) => {
    switch (headingSize) {
      case 'h1':
        return <h1 className={styling}>{text}</h1>;
      case 'h2':
        return <h2 className={styling}>{text}</h2>;
      case 'h3':
        return <h3 className={styling}>{text}</h3>;
      case 'h4':
        return <h4 className={styling}>{text}</h4>;
      case 'h5':
        return <h5 className={styling}>{text}</h5>;
      case 'h6':
        return <h6 className={styling}>{text}</h6>;
      default:
        return <h1 className={styling}>{text}</h1>;
    }
  };
  return renderSwitch(size, children, styleSwitch());
};

export default Heading;
