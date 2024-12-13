export type DataContextValue = {
  activeStep: number;
  handleSetActiveStep: (step: number) => void;
  formData: FormData;
  handleSetFormData: (data: FormData) => void;
};

export type DataProviderProps = {
  children: React.ReactNode;
};

export type FormData = {
  step1: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  step2: {
    plan: {
      label: string;
      price: number;
    };
    duration: string;
  };
  step3: {
    addOns: Array<{
      label: string;
      price: number;
    }>;
  };
};
