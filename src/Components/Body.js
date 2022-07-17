import Card from "./UI/Card";
import Menu from "./Menu";


const Body = () => {
  return (
    <div>
      <div className="bg-bgImage h-96 bg-cover"></div>
      <div className="md:-skew-y-6 bg-body h-32" />
      <Card
        className={
          "w-5/6 md:w-2/4 py-2 md:py-4 md:px-6 px-4 bg-card left-8  md:left-1/4 absolute z-10 top-80 text-white text-center"
        }
      >
        <h1 className="text-2xl font-bold">Delicious Food, Delivered To You</h1>
        <p className="my-4">
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All of our meals are cooked with high quality ingredients, just in
          time and of course by high quality chefs
        </p>
      </Card>
      <Menu/>
    </div>
  );
};
export default Body;
