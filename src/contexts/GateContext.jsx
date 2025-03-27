import { createContext, useState, useContext } from "react";

const GateContext = createContext();

export const GateProvider = ({ children }) => {
  const [solvedCount, setSolvedCount] = useState(0);

  return (
    <GateContext.Provider value={{ solvedCount, setSolvedCount }}>
      {children}
    </GateContext.Provider>
  );
};

export const useGate = () => {
  const context = useContext(GateContext);
  if (!context) {
    throw new Error("useGate must be used within a GateProvider");
  }
  return context;
};
