export type Props = {
  title: string;
  subTitle: string;
  description: string;
  interval: string;
  tier1: {
    title: string;
    price: number;
    buttonText: string;
    features: {
      id: string;
      text: string;
    }[];
  };
  tier2: {
    title: string;
    price: number;
    buttonText: string;

    features: {
      id: string;
      text: string;
    }[];
  };
  tier3: {
    title: string;
    price: number;
    buttonText: string;
    features: {
      id: string;
      text: string;
    }[];
  };
  color: string;
};
