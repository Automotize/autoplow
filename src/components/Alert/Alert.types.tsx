export type Props = {
  Icon: any;
  title: string;
  description?: string;
  color:
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
  list?: string[];
  actions?: { text: string; link: string }[];
  rightLink?: { text: string; link: string };
  close?: boolean;
  accent?: boolean;
  open?: boolean;
};
