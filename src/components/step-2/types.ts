export type Data = {
  title: string;
  desc: string;
  plans: Array<{
    key: string;
    label: string;
    price: {
      monthly: number;
      yearly: number;
    };
    yearlyDiscountText: string;
    icon: {
      img: string;
      alt: string;
    };
  }>;
  duration: {
    option1: {
      label: string;
    };
    option2: {
      label: string;
    };
  };
};

export type Inputs = {
  plan: string;
  duration: boolean;
};
