export type DataContextValue = {
  activeStep: number;
  handleSetActiveStep: (step: number) => void;
};

export type DataProviderProps = {
  children: React.ReactNode;
};
