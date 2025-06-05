import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../servies/api";

const UpdateProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef();
  const { product: currentProduct } = location.state || {};
  const [size, setSize] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    catagory: "",
    price: "",
    size: [],
    image: [],
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(`/product/${product.id}`, {
        ...product,
        size,
      });
      if (response) {
        alert("Product updated successfully!");
        navigate("/admin/products");
        window.location.reload();
      } else {
        alert("Failed to update the product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product.");
    }
  };

  const handleSize = () => {
    const value = ref.current.value;
    setSize([...size, value]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 mt-10">
      <h1 className="text-5xl mb-5">Update Products</h1>
      <form onSubmit={handleSubmit} className="text-xl flex flex-col gap-5">
        <div>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="name"
            value={product.name}
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="product_category">Product Category:</label>
          <input
            type="text"
            id="product_category"
            name="catagory"
            value={product.catagory}
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="product_price">Product Price:</label>
          <input
            type="text"
            id="product_price"
            name="price"
            value={product.price}
            className="border border-black rounded-[3px] w-full pl-2 py-1 text-sm"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="product_size">Product Size:</label>
          <div className="flex gap-2">
            <input
              type="text"
              id="product_size"
              name="size"
              ref={ref}
              placeholder="Enter the new sizes"
              className="border border-black rounded-[3px] min-w-[400px] pl-2 py-1 text-sm"
            />
            <div
              onClick={handleSize}
              className="bg-yellow-600 hover:bg-yellow-400 text-black px-5 py-1 border border-black rounded-sm"
            >
              Add
            </div>
            <div
              className={`h-10 border border-black flex items-center text-sm px-2 ${
                product.size.length <= 0 && "hidden"
              }`}
            >
              {size.length>0
                ? size.map((item) => item + " ")
                : product.size.map((item) => item + " ")}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="product_image1">Product Image:</label>
          <input
            type="text"
            id="product_image1"
            name="image1"
            value={product.image[0]}
            className="border border-black rounded-[3px] w-full pl-2 py-1"
          />
          <input
            type="text"
            id="product_image2"
            name="image2"
            value={product.image[1]}
            className="border border-black rounded-[3px] w-full pl-2 py-1 mt-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white py-3 rounded-md"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProducts;
