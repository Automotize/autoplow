export type Props = {
  title: string;
  description: string;
  data: {
    id: string;
    image: string;
    name: string;
    jobTitle: string;
    twitterLink?: string;
    linkedInLink?: string;
  }[];
  color: string;
};
