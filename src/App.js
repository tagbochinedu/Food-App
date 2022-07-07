import Body from "./Components/Body";
import Header from "./Components/Header";

export const MENU = [
  {
    title: "Fried Rice and Turkey",
    desc: "A delicious meal prepared by our exquisite chefs",
    price: 4500,
  },
  {
    title: "Pounded Yam and Banga Soup",
    desc: " A Nigerian specialty. a befitting example of the beauty of the homeland",
    price: 5100,
  },
  {
    title: "Abacha and Fish Fillet",
    desc: "Another Nigerian specialty favoured by the south easterners. A taste of the ibo culture ",
    price: 2200,
  },
  {
    title: "Hamburger and Fries",
    desc: " An American special to fil the mouth and boost your cholesterol",
    price: 4400,
  },
];

function App() {
  return (
    <div className="bg-body">
      <Header />
      <Body />
    </div>
  );
}

export default App;
