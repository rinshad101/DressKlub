import React, { useEffect, useState } from "react";
import DataContext from "../../ContextApi/DataContext";
import { useContext } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../servies/api";

function Products() {
  const navigate = useNavigate();
  const { data, loading } = useContext(DataContext);
  const [isSortBarOpen, setSortBarOpen] = useState(false);
  const [sortType, setSortType] = useState("Select");

  const filteredProducts = data.filter((item) => {
    if (sortType === "Select" || sortType === "All") {
      return item;
    } else {
      return item.catagory === sortType.toLowerCase();
    }
  });

  const handleUpdate = (product) => {
    navigate("/admin/updateproducts", { state: { product } });
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/product/${id}`);
      if (response) {
        alert("Product deleted successfully!");
        window.location.reload()
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      alert("error");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-28">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Product Details
      </h2>
      <div className="flex justify-between pl-2 mb-2">
        <div className="flex gap-5 relative">
          <div
            className={`absolute w-[200px] shadow-lg  bg-white  border-[1px] overflow-hidden left-16 top-10 ${
              isSortBarOpen ? "h-[115px]" : "h-0 border-0"
            } transition-all duration-300 ease-in-out pl-4`}
          >
            <p
              className="mb-1"
              onClick={() => {
                setSortType("All");
                setSortBarOpen(!isSortBarOpen);
              }}
            >
              All
            </p>
            <p
              className="mb-1"
              onClick={() => {
                setSortType("Men");
                setSortBarOpen(!isSortBarOpen);
              }}
            >
              Men
            </p>
            <p
              className="mb-1"
              onClick={() => {
                setSortType("Women");
                setSortBarOpen(!isSortBarOpen);
              }}
            >
              Women
            </p>
            <p
              className="mb-1"
              onClick={() => {
                setSortType("accessories");
                setSortBarOpen(!isSortBarOpen);
              }}
            >
              Accessories
            </p>
          </div>
          <div
            className="text-xl flex gap-3 items-center"
            onClick={() => setSortBarOpen(!isSortBarOpen)}
          >
            <p>Sort by: </p>
            <p
              className={`text-lg flex justify-between w-[180px]  gap-2 ${
                sortType === "Select" && "text-black/50"
              }`}
            >
              {sortType}{" "}
              <span>
                <ChevronDownIcon
                  className={`${
                    isSortBarOpen && "rotate-180"
                  } text-black transition-all duration-300 ease-in-out`}
                />
              </span>
            </p>
          </div>
        </div>

        <Link to={"/admin/addproducts"}>
          <button className="bg-green-500 text-white text-xl xl:px-10 px-3 xl:py-2 py-1 xl:rounded-md rounded-sm hover:bg-green-600">
            Add
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg xl:p-6 p-2 grid xl:grid-cols-5 grid-cols-4 mb-1 xl:font-bold xl:text-xl text-sm">
        <div className="flex xl:gap-2 gap-5">
          <p>No.</p>
          <p className="">Name</p>
        </div>
        <p className="text-center">Price</p>
        <p className="text-center">Catagory</p>
        <p className="text-center xl:block hidden">Update</p>
        <p className="text-center xl:block hidden">Delete</p>
        <p className="text-center xl:hidden block">Edit</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg flex flex-col gap-2 text-sm cursor-pointer">
        {filteredProducts?.map((item, index) => {
          return (
            <div
              key={index}
              className="grid xl:grid-cols-5 grid-cols-4 border-b-[1px] border-black/10 items-center"
            >
              <div className="flex gap-2 items-center">
                <p>{index + 1}</p>
                <img
                  src={item.image[0]}
                  alt=""
                  className="h-10 w-10 object-cover"
                />
                <p>{item.name}</p>
              </div>
              <p className="text-center">{item.price}</p>
              <p className="text-center">{item.catagory}</p>

              <p
                onClick={() => handleUpdate(item)}
                className="text-center xl:block hidden"
              >
                Update
              </p>

              <p onClick={() => handleDelete(item.id)} className="text-center xl:block hidden">Delete</p>
              <p className="text-center xl:hidden block">Edit</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
