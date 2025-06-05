import React, { useContext } from "react";
import CartContext from "../ContextApi/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (id) => {
    alert("Item removed from cart");
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const checkout = () => {
    alert("Checkout successful!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="p-20 pt-[100px]  mx-auto bg-white  rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-center text-gray-500 p-60">
          Your cart is empty.
        </p>
      ) : (
        cart.map((item) => (
          <div
            key={item.uniqueKey}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="h-40 w-40 ">
                <img className="w-full h-full object-cover" src={item.image} alt="" />
              </div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-lg text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 p-2 border border-gray-300 rounded-md text-center"
                min="1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 text-sm font-semibold text-white bg-black
                 hover:bg-black/80 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={checkout}
            className="px-6 py-3 text-white bg-black
                 hover:bg-black/80 font-semibold rounded-lg"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
