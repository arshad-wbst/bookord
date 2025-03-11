import React, { createContext, useState, useEffect, useContext } from "react";
import NetInfo from "@react-native-community/netinfo";

const InternetContext = createContext();

export const InternetProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? true);
    });

    return () => unsubscribe();
  }, []);

  // Function to manually check internet status (useful for a retry button)
  const checkInternet = () => {
    NetInfo.fetch().then((state) => setIsConnected(state.isConnected ?? true));
  };

  return (
    <InternetContext.Provider value={{ isConnected, checkInternet }}>
      {children}
    </InternetContext.Provider>
  );
};


export const useInternet = () => useContext(InternetContext);
