import ReactDOM from "react-dom";
import { useState } from "react";
import { useAuth } from "./Context/PayoutContext";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useEffect } from "react";

const Backdrop = () => {
  const { setModal, setModalText } = useAuth();
  return (
    <div
      className="h-screen backdrop-blur-lg top-0 w-full blur-3xl absolute z-20 bg-crbg"
      onClick={() => {
        setModal(false);
        setModalText('No items have been added to the cart')
      }}
    ></div>
  );
};

const ModalOverlay = () => {
  const { setCart, cart, setModal, addHandler, reduceHandler, modalText, setModalText } = useAuth();
  const [total, setTotal] = useState(0);
 
  useEffect(() => {
    const cost = cart.map((meal) => {
      return meal.totalPrice;
    });
    const costTotal = cost.reduce((total, sum) => {
      return total + sum;
    }, 0);
    setTotal(costTotal);
  }, [cart]);

  const orderHandler = ()=>{
    if(cart.length > 0) {
      setModalText('Your Order Has Been Placed')
      setCart([])
    } else {
      setModalText('There Are No Meals Yet')
    }
  }

  return (
    <Card
      className="top-1/4 absolute w-5/6 md:w-2/4 left-8 md:left-1/4 z-30 px-4 py-6 animate__animated animate__fadeInDown bg-white"
      onClick={() => {
        setModal(false);
      }}
    >
      {cart.length === 0 ? (
        <div className='h-16 flex items-center justify-center'><p className="text-center uppercase text-lg font-semibold">
          {modalText}
        </p></div>
      ) : (
        <ul>
          {cart.map((food) => {
            return (
              <div
                className="md:flex text-center md:text-left justify-between border-b-2 border-bg py-2 items-center"
                key={food.title}
              >
                <div>
                  <h1 className="text-lg font-bold">{food.title}</h1>
                  <div className=" mx-auto md:mx-0 flex justify-between w-32 items-center my-2">
                    <p className="text-sm text-bg font-bold">N{food.price}</p>
                    <p className="text-sm border px-2">x{food.amount}</p>
                  </div>
                </div>
                <div>
                  <Button
                    className="w-12 mx-2 text-white text-lg"
                    onClick={() => {
                      addHandler(food);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className="w-12 mx-2 text-white text-lg"
                    onClick={() => {
                      reduceHandler(food);
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            );
          })}
        </ul>
      )}
      <div className="flex justify-between px-2">
        <h1 className="text-lg font-bold">Total Price</h1>
        <div>
          <p className="mb-4 text-right font-bold text-bg">N{total}</p>
          <Button
            className="w-16 text-white mr-2 bg-white text-bg text-md px-2"
            onClick={() => {
              setModal(false);
              setModalText('No items have been added to the cart')
            }}
          >
            Close
          </Button>
          <Button className="w-16 text-white ml-2 text-md text-center px-2" onClick={orderHandler}>
            Order
          </Button>
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
