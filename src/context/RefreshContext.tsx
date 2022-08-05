import { useState, useEffect, createContext, ReactElement } from "react";

const INTERVAL = 1000;

const RefreshContext = createContext({ tick: 0 });

const RefreshContextProvider = ({ children }: { children: ReactElement }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      setTick((prev) => prev + 1);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <RefreshContext.Provider value={{ tick }}>
      {children}
    </RefreshContext.Provider>
  );
};

export { RefreshContext, RefreshContextProvider };
