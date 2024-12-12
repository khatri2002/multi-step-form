type FieldKey = "name" | "email" | "phoneNumber";

export type Inputs = Record<FieldKey, string>;

export type Data = {
  title: string;
  desc: string;
  fields: Array<{
    key: FieldKey;
    label: string;
    type: string;
    placeholder: string;
    rules: Object;
  }>;
};
