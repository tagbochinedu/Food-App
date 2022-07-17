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
    let arr = cart;
    const filter = cart.filter((meal) => {
      return food.title === meal.title;
    });
    const index = cart.findIndex((meal) => {
      return meal.title === food.title;
    });
    filter[0].amount += 1;
    filter[0].totalPrice = food.price * food.amount;
    arr[index] = filter[0];
    setCart(arr);
    console.log(arr, index);
  };
  const reduceHandler = (food) => {
    let arr = cart;
    const filter = cart.filter((meal) => {
      return food.title === meal.title;
    });
    const index = cart.findIndex((meal) => {
      return meal.title === food.title;
    });
    if (filter[0].amount > 1) {
      filter[0].amount -= 1;
      filter[0].totalPrice = food.price * food.amount;
      arr[index] = filter[0];
      setCart(arr);
    } else {
      const newArr = arr.filter((meal) => {
        return meal !== filter[0];
      });
      console.log(filter, newArr);
      setCart(newArr);
    }
  };
  const value = { setCart, cart, modal, setModal, addHandler, reduceHandler, modalText, setModalText };
  return (
    <PayOutContext.Provider value={value}>{children}</PayOutContext.Provider>
  );
}
