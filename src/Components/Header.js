import cart from "../Resources/cart.png";
import { useAuth } from "./Context/PayoutContext";


const Header = () => {
  const { setModal } = useAuth();
  const image = cart;

  const modalHandler = () => {
    setModal(true);
  };
  return (
    <div className="bg-bg text-white flex justify-between items-center px-24 py-4">
      <div className="text-2xl font-bold ">TheFoodApp</div>
      <div
        className="bg-badge rounded-3xl p-2 flex items-center justify-between"
        onClick={modalHandler}
      >
        <img className="w-6 font-bold" src={image} alt="cart" />
        <p className="mx-4">Your Cart</p>
        <p className="bg-bg rounded-2xl w-10 text-center">0</p>
      </div>
    </div>
  );
};
export default Header;
