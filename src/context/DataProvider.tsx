import { createContext, useContext, useState } from "react";
import { FormData, DataContextValue, DataProviderProps } from "./type";

const DataContext = createContext<DataContextValue | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const handleSetActiveStep = (step: number) => setActiveStep(step);

  const [formData, setFormData] = useState<FormData>({
    step1: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    step2: {
      plan: {
        label: "",
        price: 0,
      },
      duration: "",
    },
    step3: {
      addOns: [],
    },
  });
  const handleSetFormData = (data: FormData) => setFormData(data);

  return (
    <DataContext.Provider
      value={{ activeStep, handleSetActiveStep, formData, handleSetFormData }}
    >
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
