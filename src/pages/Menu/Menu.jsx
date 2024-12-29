import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";

import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title> Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <MenuCategory
        items={offered}
        heading={"today's offer"}
        subHeading={"Don't Miss"}
      ></MenuCategory>
      <MenuCategory
        items={dessert}
        heading={"today's dessert"}
        subHeading={"Don't Misssssss"}
        coverImg={dessertImg}
        coverTitle={"dessert"}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        heading={"today's salad"}
        subHeading={"Don't Misssssss"}
        coverImg={saladImg}
        coverTitle={"salad"}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        heading={"today's pizza"}
        subHeading={"Don't Misssssss"}
        coverImg={pizzaImg}
        coverTitle={"pizza"}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        heading={"today's soup"}
        subHeading={"Don't Misssssss"}
        coverImg={soupImg}
        coverTitle={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
