import React from "react";
import img from "../assets/images/home.avif";

function Home() {
  return (
    <div className="w-full xl:h-[800px] h-[350px] relative">
      <img src={img} alt="image" className="w-full h-full object-cover" />
      <div className="absolute bottom-16 left-16">
        <p className="text-6xl">Start with the basics</p>
        <div className="flex gap-4">
          <button className="bg-white w-[150px] text-black text-[22px] py-3 mt-4 rounded-[4px]">
            Shop Women
          </button>
          <button className="bg-white w-[150px] text-black text-[22px] py-3 mt-4 rounded-[4px]">
            Shop Men
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
