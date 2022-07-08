import { useState } from "react";
import Button from "./UI/Button";
import { useAuth } from "./Context/PayoutContext";

const MenuList = (props) => {
  const { setCart, cart } = useAuth();
  const [amount, setAmount] = useState(1);

  const changeHandler = (e) => {
    console.log(amount);
    setAmount(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const cartItem = { title: props.title, price: props.price, totalPrice: props.price * amount, amount };
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
