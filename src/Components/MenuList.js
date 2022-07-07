import { useState } from "react";

const MenuList = (props) => {
const [amount, setAmount] = useState(1)

  return (
    <div className="flex justify-between border-b border-body py-2">
      <div className=" max-w-xs">
        <h1 className="font-bold">{props.title}</h1>
        <p className="italic">{props.desc}</p>
        <p className="text-bg font-semibold text-sm">{props.price}</p>
      </div>
      <form>
        <label className='mx-2 fonst-semibold text-sm'>Amount</label>
        <input type='number' className="outline-none border w-10" value={amount}/>
      </form>
    </div>
  );
};
export default MenuList;
