import React from "react";
import MenuItem from "../../shared/MenuItem";
import SectionTitle from "../../../components/SectionTitle";
import Cover from "../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, heading, subHeading, coverImg, coverTitle }) => {
  return (
    <section className="mt-10">
      {coverTitle && <Cover img={coverImg} title={coverTitle}></Cover>}
      <div className=" flex justify-center items-center">
        <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${coverTitle}`}>
        {" "}
        <button className="btn btn-outline border-0 border-b-4 mt-4  flex  mx-auto">
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default MenuCategory;
