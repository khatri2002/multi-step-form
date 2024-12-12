import { createContext, useContext, useState } from "react";
import { DataContextValue, DataProviderProps } from "./type";

const DataContext = createContext<DataContextValue | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
  const [activeStep, setActiveStep] = useState<number>(4);
  const incrementStep = () => setActiveStep((prev) => prev + 1);
  const decrementStep = () => setActiveStep((prev) => prev - 1);

  return (
    <DataContext.Provider value={{ activeStep, incrementStep, decrementStep }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () => {
  const value = useContext(DataContext);
  if (value == null)
    throw new Error("'UseDataContext' should be used within 'DataProvider'");
  return value;
};

export default DataProvider;
