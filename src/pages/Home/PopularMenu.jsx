import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="">
      <div className=" flex justify-center items-center">
        <SectionTitle
          heading={"From our menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4  flex  mx-auto">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
