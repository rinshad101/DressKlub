import React, { useState, useContext } from "react";
import { Minus, Plus } from "lucide-react";
import DataContext from "../ContextApi/DataContext";
import CartContext from "../ContextApi/CartContext";
import { useParams } from "react-router-dom";

function ProductView() {
  const [isSizeBarOpen, setIsSizeBarOpen] = useState(false);
  const [size, setSize] = useState("Select");
  const { data, loading } = useContext(DataContext);
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const product = data.filter((item) => item.id === id)[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {

    if (size === "Select") {
      alert("Please select a size before adding to the cart.");
      return;
    }
    alert("Item added to cart");
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        uniqueKey: `${product.id}-${Date.now()}`,
        quantity: count,
        selectedSize: size,
      },
    });
  };

  return (
    <div className="grid grid-cols-3 gap-5 mt-[80px] p-10">
      <div className="h-[600px]">
        <img
          src={product?.image[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[600px]">
        <img
          src={product?.image[1]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-5">
        <p className="text-[43px]">{product?.name}</p>
        <p className="text-[22px]">{product?.price}</p>
        <p className="text-[16px]">
          I'm a product description. I'm a great place to add more details about
          your product such as sizing, material, care instructions, etc.
        </p>

        <div className="w-full my-3">
          <h1 className="mb-1">Size</h1>
          <div className="relative">
            <div
              onClick={() => setIsSizeBarOpen(!isSizeBarOpen)}
              className="h-[40px] w-full border-[1px] border-black flex items-center justify-between px-3"
            >
              <p
                className={`${
                  size === "Select" ? "text-black/30" : "text-black"
                }`}
              >
                {size}
              </p>
            </div>
            <div
              className={`bg-white w-full border-[1px] border-black/20 border-t-0 absolute overflow-hidden ${
                isSizeBarOpen ? "max-h-[150px]" : "max-h-0"
              } transition-all duration-300 ease-in-out`}
            >
              {product?.size?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setIsSizeBarOpen(!isSizeBarOpen);
                    setSize(item);
                  }}
                  className="h-[30px] flex items-center pl-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>Quantity</p>
        <div className="flex justify-between text-lg border border-black w-[120px] h-10 items-center px-1 rounded-sm">
          <button disabled={count === 1} onClick={() => setCount(count - 1)}>
            <Minus />
          </button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>
            <Plus />
          </button>
        </div>
        <button
          onClick={addToCart}
          className="border border-black w-full p-3 text-2xl hover:text-white hover:bg-black transition mt-5"
        >
          Add to Cart
        </button>
        <button className="border border-black w-full p-3 text-2xl bg-black text-white hover:bg-black/75 transition mt-5">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductView;
