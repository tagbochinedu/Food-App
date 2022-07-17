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

    const filter = cart.filter((food) => {
      return props.title === food.title;
    });
    console.log(filter);

    if (filter.length !== 0) {
      filter[0].amount += parseInt(amount);
      filter[0].totalPrice += props.price * amount;
      console.log(filter);
      return setCart((prev) => [...prev]);
    } else {
      const cartItem = {
        title: props.title,
        price: parseInt(props.price),
        totalPrice: props.price * amount,
        amount: parseInt(amount),
      };
      setCart((prev) => [...prev, cartItem]);
      console.log(cart);
    }

    setAmount(1);
  };

  return (
    <div className="md:flex justify-between border-b border-body py-4 md:py-2">
      <div className=" max-w-xs text-center md:text-left mx-auto md:mx-0">
        <h1 className="font-bold">{props.title}</h1>
        <p className="italic">{props.desc}</p>
        <p className="text-bg font-semibold text-sm">N{props.price}</p>
      </div>
      <form className="flex flex-col justify-between">
        <div className="text-right my-2">
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
