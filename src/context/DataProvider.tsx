import { createContext, useContext, useState } from "react";
import { DataContextValue, DataProviderProps } from "./type";

const DataContext = createContext<DataContextValue | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
  const [activeStep, setActiveStep] = useState<number>(4);
  const handleSetActiveStep = (step: number) => setActiveStep(step);

  return (
    <DataContext.Provider value={{ activeStep, handleSetActiveStep }}>
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
