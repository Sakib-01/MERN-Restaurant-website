import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" md:w-3/12 text-center  my-8 ">
      <p className="text-yellow-600 ">---{subHeading}---</p>
      <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
