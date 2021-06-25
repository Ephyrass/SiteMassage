import { createContext, useState } from "react";

export const DateContext = createContext();

const FormContext = ({ children }) => {
  const [massage, setMassage] = useState();
  const [formIndex, setFormIndex] = useState(0);
  const [error, setError] = useState(false);

  return (
    <DateContext.Provider
      value={{ massage, setMassage, formIndex, setFormIndex, error, setError }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default FormContext;
