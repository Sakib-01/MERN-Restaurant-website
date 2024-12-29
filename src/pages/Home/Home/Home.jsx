import React from "react";
import Banner from "../Banner";
import Category from "../Category";
import PopularMenu from "../PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Rastaurant | Home Page</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
