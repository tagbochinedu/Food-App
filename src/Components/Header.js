import cartlogo from "../Resources/cartlogo.png";
import { useAuth } from "./Context/PayoutContext";


const Header = () => {
  const { setModal, cart } = useAuth();
  const image = cartlogo;

  const modalHandler = () => {
    setModal(true);
  };
  return (
    <div className="bg-bg text-white flex justify-between items-center px-6 md:px-24 py-4">
      <div className="text-xl md:text-2xl font-bold ">TheFoodPlace</div>
      <div
        className="bg-badge rounded-3xl p-2 flex items-center justify-between"
        onClick={modalHandler}
      >
        <img className="w-6 font-bold" src={image} alt="cart" />
        <p className="mx-2 md:mx-4">Your Cart</p>
        <p className="bg-bg rounded-2xl w-6 md:w-10 text-center">{cart.length}</p>
      </div>
    </div>
  );
};
export default Header;
