import { useState } from "react";
import Card from "./UI/Card";
import MenuList from "./MenuList";
import { MENU } from "../App";

function Menu() {
  const [menu] = useState(MENU);
  return (
    <Card className="w-3/5 bg-white p-6 mx-auto my-16">
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
