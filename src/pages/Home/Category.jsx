import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className=" flex justify-center items-center">
        <SectionTitle
          subHeading={"From 11 am to 10 pm"}
          heading={"order online"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide1}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              SALAD
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide1}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              PIZZA
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide2}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              SOUP
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide3}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              DESERT
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide4}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              SALAD
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="flex justify-center">
              <img
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={slide5}
                alt=""
              />
            </div>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white font-extrabold text-4xl bg-slate-800 px-4 py-2 rounded-md text-center">
              SALAD
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
