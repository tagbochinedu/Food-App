import React, { useContext, useState } from "react";

const PayOutContext = React.createContext();

export function useAuth() {
  return useContext(PayOutContext);
}

export function AuthProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('No items have been added to the cart')
  const addHandler = (food) => {
    const filter = cart.filter((meal) => {
      return food.title === meal.title;
    });
    
      filter[0].amount += 1;
      filter[0].totalPrice += filter[0].price
      console.log(filter);
      return setCart((prev) => [...prev]);
   
  };
  const reduceHandler = (food) => {
    const filter = cart.filter((meal) => {
      return food.title === meal.title;
    });
    if (filter[0].amount > 1) {
      filter[0].amount -= 1;
      filter[0].totalPrice -= filter[0].price
      return setCart((prev) => [...prev]);
    } else {
      const newArr = cart.filter((meal) => {
        return meal !== filter[0];
      });
      setCart(newArr);
    }
  };
  const value = { setCart, cart, modal, setModal, addHandler, reduceHandler, modalText, setModalText };
  return (
    <PayOutContext.Provider value={value}>{children}</PayOutContext.Provider>
  );
}
