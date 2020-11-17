import { styleSwitchProps } from './Button.types';

import {
  colorStyle,
  fontWeightStyle,
  lineSpacingStyle,
  letterSpacingStyle,
  borderColorStyle,
  borderSizeStyle,
  borderStyleStyle,
  bgStyle,
} from '../../utils/style.utils';

export const styleSwitch = ({
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
}: styleSwitchProps) => {
  let className = 'button';
  if (center) {
    className = `${className} button--center`;
  }
  if (italic) {
    className = `${className} button--italic`;
  }
  if (inline) {
    className = `${className} button--inline`;
  }
  if (size) {
    className = `${className} button--size-${size}`;
  }
  if (full) {
    className = `${className} button--full`;
  }
  if (!borderSize && !borderColor && !borderStyle) {
    className = `${className} button--no-border`;
  }
  if (iconPosition === 'left') {
    className = `${className} button--left-icon`;
  }
  if (iconPosition === 'right') {
    className = `${className} button--right-icon`;
  }
  className = colorStyle(className, color);
  className = bgStyle(className, bg);
  className = fontWeightStyle(className, fontWeight);
  className = lineSpacingStyle(className, lineSpacing);
  className = letterSpacingStyle(className, letterSpacing);
  className = borderColorStyle(className, borderColor);
  className = borderSizeStyle(className, borderSize);
  className = borderStyleStyle(className, borderStyle);

  return className;
};

export default styleSwitch;
