type fieldKeys = "online-service" | "larger-storage" | "customizable-profile";

export type Inputs = Record<fieldKeys, boolean>;

export type Data = {
  title: string;
  desc: string;
  addOns: Array<{
    key: fieldKeys;
    label: string;
    desc: string;
    price: {
      monthly: number;
      yearly: number;
    };
  }>;
};
