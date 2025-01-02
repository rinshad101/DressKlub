import React, { useEffect, useContext, useState } from "react";
import DataContext from "../ContextApi/DataContext";
import { Link, useParams } from "react-router-dom";

function Collection() {
  const { data, loading } = useContext(DataContext);
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);

 
  useEffect(() => {
    if (category === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.catagory === category);
      setFilteredData(filtered);
    }
  }, [category, data]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 flex flex-col">
      {/* <div className="flex flex-col justify-center items-center h-[400px] mt-16 p-5">
        <p className="xl:text-8xl text-4xl mb-5">The sale is now open</p>
        <p className="xl:text-3xl mb-5">Get 30%-70% off on selected styles</p>
        <button className="border-2 border-black hover:bg-black hover:text-white px-5 py-2 text-lg rounded-[3px]">
          Shop Sale
        </button>
      </div> */}

      <div className=" xl:text-3xl text-xl mt-10 xl:p-10 p-5 w-full ">
        <p>Explore The Collections</p>
      </div>

      <div className=" flex flex-row xl:pl-10 ">
        <div className="w-[300px] overflow-x-hidden overflow-y-visible hidden xl:block">
          <div className="pr-2">
            <div className="text-2xl">
              <h1>Browse By</h1>
            </div>
            <hr class="my-2 border-black" />
            <div
              className="flex flex-col gap-3 mt-5
            "
            >
              <p>All Products</p>

              <p>Accessories</p>
              <p>Sale</p>
              <p>New Arrivals</p>
              <p>Men</p>
              <p>Women</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 my-10 pr-2 ">
            <div className="text-2xl">
              <h1>Filter by</h1>
            </div>
            <hr class="my-2 border-black" />
            <div>
              <p>Price</p>
              <input
                type="range"
                min={0}
                max={100}
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-gray-400"
              />
              <div className="flex justify-between pr-2">
                <p>$0</p>
                <p>$100</p>
              </div>
            </div>
            <hr class="my-2 border-black" />
            <div className="flex justify-between pr-2">
              <p>Color</p>
              <button>+</button>
            </div>
            <hr class="my-2 border-black" />
            <div className="flex justify-between pr-2">
              <p>Size</p>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="px-[40px] pb-[40px] overflow-auto">
          <div>
            <div className="text-3xl">
              <h1>All Products</h1>
            </div>
            <div className="text-lg  w-[1000px] hidden xl:block">
              <p>
                This is your category description. It's a great place to tell
                customers what this category is about, connect with your
                audience and draw attention to your products.
              </p>
            </div>
            <div className="w-full flex justify-between pr-5 py-5">
              <p>{filteredData.length} products</p>
              <div>
                Sort by:
                <select name="" id="">
                  <option value="">Recommended</option>
                  <option value="">Newest</option>
                  <option value="">Price(low to hight)</option>
                  <option value="">Price(hight to low)</option>
                  <option value="">Name A-Z</option>
                  <option value="">Z-A</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  xl:grid-cols-4 gap-7">
            {filteredData.map((item, index) => (
              <Link to={`/collections/all/${item.id}`} key={index}>
                <div key={index} className=" hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full xl:h-[400px] h-[150px] object-cover  mb-4"
                  />
                  {console.log(item.name)}
                  <h3 className="pl-2 text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="pl-2 text-lg font-medium text-gray-600">
                    ₹{item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
