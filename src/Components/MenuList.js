import { useState } from "react";
import Button from "./UI/Button";
import { useAuth } from "./Context/PayoutContext";

const MenuList = (props) => {
  const { setCart, cart } = useAuth();
  const [amount, setAmount] = useState(1);

  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < cart.length; i++) {
      if (props.title === cart[i].title) {
        const newAmount = Number(cart[i].amount) + Number(props.amount);
        const newCartItem = {
          title: cart[i].title,
          price: cart[i].price,
          amount: newAmount,
          totalPrice: cart[i].price * amount,
        };
        setCart((prev)=>[...prev, cart[i]=newCartItem]);
        return console.log(cart);
      }
    }
    const cartItem = {
      title: props.title,
      price: props.price,
      totalPrice: props.price * amount,
      amount,
    };
    setCart((prev) => [...prev, cartItem]);
    console.log(cart);
    setAmount(1);
  };

  return (
    <div className="flex justify-between border-b border-body py-2">
      <div className=" max-w-xs">
        <h1 className="font-bold">{props.title}</h1>
        <p className="italic">{props.desc}</p>
        <p className="text-bg font-semibold text-sm">N{props.price}</p>
      </div>
      <form className="flex flex-col justify-between">
        <div>
          <label className="mx-2 fonst-semibold text-sm">Amount</label>
          <input
            type="number"
            className="outline-none border w-10"
            value={amount}
            onChange={changeHandler}
          />
        </div>
        <Button className="text-white text-center" onClick={clickHandler}>
          Add
        </Button>
      </form>
    </div>
  );
};
export default MenuList;
