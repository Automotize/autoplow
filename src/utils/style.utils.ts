export type styleTypes = {
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  lineSpacing?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  color?: string;
  colorNames?:
    | 'cool-gray'
    | 'gray'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple';
  bg?: string;
  textSize: 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  borderSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  borderColor?: string;
  borderStyle:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
};

export const colorStyle = (className: string, color?: string) => {
  if (color) {
    return `${className} color-${color}`;
  }
  return className;
};

export const bgStyle = (className: string, bg?: string) => {
  if (bg) {
    return `${className} bg-${bg}`;
  }
  return className;
};

export const fontWeightStyle = (
  className: string,
  fontWeight?: styleTypes['fontWeight']
) => {
  if (fontWeight) {
    return `${className} font-weight-${fontWeight}`;
  }
  return className;
};

export const letterSpacingStyle = (
  className: string,
  letterSpacing?: styleTypes['letterSpacing']
) => {
  if (letterSpacing) {
    return `${className} tracking-${letterSpacing}`;
  }
  return className;
};

export const lineSpacingStyle = (
  className: string,
  lineSpacing?: styleTypes['lineSpacing']
) => {
  if (lineSpacing) {
    return `${className} leading-${lineSpacing}`;
  }
  return className;
};

export const textSizeStyle = (
  className: string,
  textSize?: styleTypes['textSize']
) => {
  if (textSize) {
    return `${className} text--${textSize}`;
  }
  return className;
};

export const borderSizeStyle = (
  className: string,
  borderSize?: styleTypes['borderSize']
) => {
  if (borderSize) {
    return `${className} border--size-${borderSize}`;
  }
  return className;
};

export const borderColorStyle = (
  className: string,
  borderColor?: styleTypes['borderColor']
) => {
  if (borderColor) {
    return `${className} border--color-${borderColor}`;
  }
  return className;
};

export const borderStyleStyle = (
  className: string,
  borderStyle?: styleTypes['borderStyle']
) => {
  if (borderStyle) {
    return `${className} border--style-${borderStyle}`;
  }
  return className;
};
