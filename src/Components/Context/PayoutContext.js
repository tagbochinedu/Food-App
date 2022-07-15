import React, { useContext, useState } from "react";

const PayOutContext = React.createContext();

export function useAuth() {
  return useContext(PayOutContext);
}

export function AuthProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false)

  const value = { setCart, cart, modal, setModal  };
  return (
    <PayOutContext.Provider value={value}>{children}</PayOutContext.Provider>
  );
}
