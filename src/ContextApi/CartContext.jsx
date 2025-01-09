

import React, { createContext, useReducer, useEffect } from "react";
import api from "../../servies/api";

const CartContext = createContext();


const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    console.error("Error loading cart from localStorage", e);
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};


const updateCartOnServer = async (cart, userId) => {
  try {
    await api.patch(`/user/${userId}`, { cart });
    console.log("Cart updated on JSON server");
  } catch (error) {
    console.error("Error saving cart to JSON server:", error);
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  
  const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  
  const saveCartToServer = async (cart) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id) {
      await updateCartOnServer(cart, user.id);
    }
  };

  // Sync the cart to storage and server whenever it changes
  useEffect(() => {
    saveCartToStorage(cart);
    saveCartToServer(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
export default CartContext;

