type fieldKeys = "online-service" | "larger-storage" | "customizable-profile";

export type Inputs = Record<fieldKeys, boolean>;

export type Data = {
  title: string;
  desc: string;
  addOns: Array<{
    key: fieldKeys;
    title: string;
    desc: string;
    price: string;
  }>;
};
