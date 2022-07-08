import React, { useContext, useState, useEffect } from "react";

const PayOutContext = React.createContext();

export function useAuth() {
  return useContext(PayOutContext);
}

export function AuthProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const value = { setCart, cart };
  return (
    <PayOutContext.Provider value={value}>{children}</PayOutContext.Provider>
  );
}
