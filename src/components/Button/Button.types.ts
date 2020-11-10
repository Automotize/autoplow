import { IconType } from 'react-icons/lib';
import { styleTypes } from '../../utils/style.utils';

export type styleSwitchProps = {
  center?: boolean;
  full?: boolean;
  fontWeight?: styleTypes['fontWeight'];
  italic?: boolean;
  letterSpacing?: styleTypes['letterSpacing'];
  lineSpacing?: styleTypes['lineSpacing'];
  color?: styleTypes['color'];
  bg?: styleTypes['bg'];
  inline?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  borderSize?: styleTypes['borderSize'];
  borderColor?: styleTypes['borderColor'];
  borderStyle?: styleTypes['borderStyle'];
  iconPosition?: 'left' | 'right';
};

export type Props = styleSwitchProps & {
  onClick?: () => void;
  Icon?: any;
};
