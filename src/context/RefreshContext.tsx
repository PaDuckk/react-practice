import React, { useState, useEffect } from "react";

const INTERVAL = 1000;

const RefreshContext = React.createContext({ tick: 0 });

const RefreshContextProvider = ({
  children,
}: {
  children: React.ReactChild;
}) => {
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
