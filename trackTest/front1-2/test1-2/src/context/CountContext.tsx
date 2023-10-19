import React from "react";
import { ReactNode, createContext, useState } from "react";

const CountContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => {},
});

const CountContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  } else if (count > 100) {
    setCount(100);
  }
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountContextProvider };
