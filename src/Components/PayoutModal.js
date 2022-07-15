import ReactDOM from "react-dom";
import { useAuth } from "./Context/PayoutContext";
import Card from "./UI/Card";
import Button from "./UI/Button";

const Backdrop = () => {
  const { setModal } = useAuth();
  return (
    <div
      className="h-screen backdrop-blur-lg top-0 w-full blur-3xl absolute z-20 bg-crbg"
      onClick={() => {
        setModal(false);
      }}
    ></div>
  );
};

const ModalOverlay = () => {
  const { cart, setModal } = useAuth();
  return (
    <Card
      className="top-1/4 absolute w-2/4 left-1/4 z-30 px-4 py-6 animate__animated animate__fadeInDown bg-white"
      onClick={() => {
        setModal(false);
      }}
    >
      <ul>
        {cart.map((food) => {
          return (
            <div className="flex justify-between border-b-2 border-bg py-2 items-center">
              <div>
                <h1 className="text-lg font-bold">{food.title}</h1>
                <div className="flex justify-between w-32 items-center my-2">
                  <p className="text-sm text-bg font-bold">N{food.price}</p>
                  <p className="text-sm border px-2">x{food.amount}</p>
                </div>
              </div>
              <div>
                <Button className="w-12 mx-2 text-white text-lg">+</Button>
                <Button className="w-12 mx-2 text-white text-lg">-</Button>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Total Price</h1>
        <div>
          <p>amount</p>
          <Button className="w-12 mx-2 text-white text-md px-2" onClick={()=>{setModal(false)}}>Close</Button>
          <Button className="w-12 mx-2 text-white text-md text-center px-2">Order</Button>
        </div>
      </div>
    </Card>
  );
};

const PayoutModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default PayoutModal;
