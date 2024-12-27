import React from "react";
import img from "../assets/images/home.avif";

function Home() {
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

      <div className="xl:p-10 mt-5">
        <div className="flex justify-between items-center xl:px-7 px-5">
          <div>
            <p className="xl:text-4xl text-2xl">Shop by Category</p>
          </div>

          <div className="flex xl:gap-4 gap-2 xl:text-[22px] text-md">
            <p className=" hover:underline cursor-pointer">Women</p>
            <p className=" hover:underline cursor-pointer">Men</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 p-6 xl:mt-5 mt-0">
          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img} alt="home" className="w-full h-full object-cover" />
            <button className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
              Tops
            </button>
          </div>

          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img} alt="home" className="w-full h-full object-cover" />
            <button className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
              Bottoms
            </button>
          </div>

          <div className="relative xl:h-[450px] h-[200px]">
            <img src={img} alt="home" className="w-full h-full object-cover" />
            <button className="bg-white xl:w-[150px] w-[100px] xl:h-14 h-10 text-black xl:text-xl text-base px-2 py-2 rounded-[4px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white">
              Accessories
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default Home;
