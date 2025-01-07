import React, { useEffect, useState, useContext } from "react";
import img from "../assets/images/home.avif";
import img1 from "../assets/images/accessories.avif"
import img2 from "../assets/images/tops.avif"
import img3 from "../assets/images/bottoms.avif"

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link, useNavigate } from "react-router-dom";

const items = [
  <img src={img} alt="Item 1" className="carousel-image" />,
  <img src={img} alt="Item 2" className="carousel-image" />,
  <img src={img} alt="Item 3" className="carousel-image" />,
];

const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  1024: { items: 3 },
};

function Home() {
  const navigate = useNavigate();
  const renderPrevButton = () => (
    <button className="custom-prev-btn">&#8249;</button>
  );

  const renderNextButton = () => (
    <button className="custom-next-btn">&#8250;</button>
  );

  const handleNav = (category) => {
    console.log(category);
    navigate(`/collections/${category}`);
  };

  return (
    <div>
      <div className="w-full xl:h-[800px] h-[350px] relative">
        <img src={img} alt="home" className="w-full h-full object-cover" />
        <div className="absolute xl:bottom-16 xl:left-16 bottom-5 left-8">
          <p className="xl:text-6xl text-3xl">Start with the basics</p>
          <div className="flex gap-4">
            <button className="bg-white xl:w-[150px] xl:h-14 h-10  text-black xl:text-xl text-base px-2 py-2 mt-2 rounded-[4px]">
              Shop Women
            </button>
            <button className="bg-white xl:w-[150px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 mt-2 rounded-[4px]">
              Shop Men
            </button>
          </div>
        </div>
      </div>

      <div className="xl:p-5 mt-5">
        <div className="flex justify-between items-center xl:px-7 px-5">
          <div>
            <p className="xl:text-4xl text-2xl">Shop by Category</p>
          </div>

          <div className="flex xl:gap-4 gap-2 xl:text-[22px] text-md">
            <p onClick={()=> handleNav("Women")} className=" hover:underline cursor-pointer">Women</p>
            <p className=" hover:underline cursor-pointer">Men</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 p-6 xl:mt-5 mt-0">
          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img2} alt="home" className="w-full h-full object-cover" />
            <button className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
              Tops
            </button>
          </div>

          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img3} alt="home" className="w-full h-full object-cover" />
            <Link to={"/collections"}>
              <button className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
                Bottoms
              </button>
            </Link>
          </div>

          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img1} alt="home" className="w-full h-full object-cover" />
            <button onClick={()=> handleNav("accessories")} className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
              Accessories
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="xl:px-10">
          <div className="flex justify-between mb-10 text-3xl ">
            <p>Latest Arrivals</p>
          </div>
          <div>
            <AliceCarousel
              items={items}
              autoPlay
              responsive={responsive}
              autoPlayInterval={3000}
              infinite
              DotsControls
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
