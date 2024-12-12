export type Data = {
  title: string;
  desc: string;
  plans: Array<{
    key: string;
    title: string;
    desc: string;
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
