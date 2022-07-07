import { useEffect, useState } from "react";
import Card from "./UI/Card";
import MenuList from "./MenuList";
import { MENU } from "../App";

function Menu() {
  const [menu, setMenu] = useState(MENU);
  useEffect(() => {
    console.log(menu);
  }, [menu]);
  return (
    <Card className="w-3/5 bg-white p-6">
      <ul>
        {menu.map((food) => {
          return (
            <MenuList
              key={food.title}
              title={food.title}
              price={food.price}
              desc={food.desc}
            />
          );
        })}
      </ul>
    </Card>
  );
}

export default Menu;
