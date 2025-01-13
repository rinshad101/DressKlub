import React, { useEffect, useState, useRef } from "react";
import api from "../../../servies/api";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate()
  const ref = useRef();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    catagory: "",
    size: [],
    image: [],
  });
  const [image, setImage] = useState(["", ""]);
  const [size, setSize] = useState([]);

  useEffect(() => {
    console.log(image);
  }, [image]);

  const handleEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  const getImage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setImage((prev) =>
      prev.map((item, i) =>
        name === "image1" && i === 0
          ? value
          : name !== "image1" && i === 1
          ? value
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      size: size,
      image: image,
    };

    try {
      const response = await api.post("/product", newProduct);
      if (response) {
        alert("product added");

        setProduct({ name: "", price: "", catagory: "" });
        setImage(["",""])
        setSize([])
        navigate("/admin/products")
        window.location.reload()
      } else{
        alert("faild to add product")
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the product.")
    }
  };

  const getSize = (e) => {
    const value = ref.current.value;
    setSize([...size, value]);
    console.log(size);
  };

  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl mb-5">Add Product</h1>
      <form onSubmit={handleSubmit} className="text-xl flex flex-col gap-5 ">
        <div>
          <label for="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="name"
            placeholder="Enter Product Name"
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            required
            onChange={handleEvent}
            value={product.name}
          />
        </div>
        <div>
          <label for="product_name">Product Category:</label>
          <input
            type="text"
            id="product_name"
            name="catagory"
            placeholder="Enter Product Category"
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            required
            onChange={handleEvent}
            value={product.catagory}
          />
        </div>

        <div>
          <label for="product_price">Product Price:</label>
          <input
            type="text"
            id="product_price"
            name="price"
            placeholder="Enter Product Price"
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            required
            onChange={handleEvent}
            value={product.price}
          />
        </div>

        <div>
          <label for="product_size">Product Size:</label>
          <div className="flex gap-2">
            <input
              type="text"
              id="product_size"
              name="size"
              placeholder="Enter Product Size"
              className="border border-black rounded-[3px] min-w-[400px]  pl-2 py-1 text-sm"
              ref={ref}
            />

            <button
              onClick={getSize}
              className="bg-yellow-300 hover:bg-yellow-400 text-black px-5 py-1 border border-black rounded-sm"
            >
              Add
            </button>
            <div
              className={`h-10 border border-black flex items-center text-sm px-2 ${
                size.length <= 0 && "hidden"
              }`}
            >
              {size.map((item) => item + " ")}
            </div>
          </div>
          <h1 className="text-xs px-1 ">
            Nb: Add sizes one after another before upload
          </h1>
        </div>

        <div>
          <label for="product_name">Product Image:</label>
          <input
            type="text"
            id="product_name"
            name="image1"
            placeholder="Enter Product Image URL"
            className="border border-black rounded-[3px] w-full pl-2 py-1"
            required
            onChange={getImage}
          />
          <input
            type="text"
            id="product_name"
            name="image2"
            placeholder="Enter Product Image URL"
            className="border border-black rounded-[3px] w-full pl-2 py-1 mt-2"
            required
            onChange={getImage}
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white py-3 rounded-md"
          onClick={console.log(product)}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
