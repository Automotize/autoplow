import { styleTypes } from '../../utils/style.utils';

export type Props = {
  title: string;
  description?: string;
  Icon?: any;
  iconColor?: styleTypes['colorNames'];
  image?: string;
  bottomLinks?: { text: string; color: string; link: string }[];
  BottomButtons?: any;
  condensedLink?: {
    text: string;
    color: styleTypes['colorNames'];
    link: string;
  };
  rightLinks?: { text: string; color: string; link: string }[];
  large?: boolean;
};
