export type DataContextValue = {
  activeStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
};

export type DataProviderProps = {
  children: React.ReactNode;
};
