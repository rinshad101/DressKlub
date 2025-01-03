// import React, { createContext, useEffect, useReducer } from "react";
// import api from "../../servies/api";

// const CartContext = createContext();
// const loadCartFromStorage = () => {
//   try {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   } catch (e) {
//     console.error("Error loading cart from localStorage", e);
//     return [];
//   }
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const exists = state.find((item) => item.id === action.payload.id);
//       if (exists) {
//         return state.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + action.payload.quantity }
//             : item

//         );
//       }
//       return [...state, action.payload];

//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.id !== action.payload);

//     case "UPDATE_QUANTITY":
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, quantity: action.payload.quantity }
//           : item
//       );

//     case "CLEAR_CART":
//       return [];

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, [], loadCartFromStorage);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);



//   // useEffect(() => {
//   //   const saveCartToServer = async () => {
//   //     const user = JSON.parse(localStorage.getItem('user'));

//   //     try {
//   //       // Make a POST request to add/update the cart in the JSON server
//   //       await api.patch(`/user/${user.id}`, { cart });
//   //       console.log("Cart updated on JSON server");
//   //     } catch (error) {
//   //       console.error("Error saving cart to JSON server:", error);
//   //     }
//   //   };

//     if (cart.length > 0) {
//       saveCartToServer();
//     }
//   }, [cart]);
//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;



import React, { createContext, useEffect, useReducer } from "react";
import api from "../../servies/api"; // Assuming the correct path for your API

const CartContext = createContext();

// Load the cart from localStorage if available
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

// Function to update the cart on the server
const updateCartOnServer = async (cart, userId) => {
  try {
    await api.patch(`/user/${userId}`, { cart });
    console.log("Cart updated on JSON server");
  } catch (error) {
    console.error("Error saving cart to JSON server:", error);
  }
};

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: loadCartFromStorage(), // Initialize cart from localStorage
    };
  }

  // Function to save the cart to localStorage
  saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to save the cart to the server
  saveCartToServer = async (cart) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id) {
      await updateCartOnServer(cart, user.id); // Update the cart for the user on the server
    }
  };

  // Dispatching actions to manage the cart
  dispatch = (action) => {
    this.setState((prevState) => {
      const newState = cartReducer(prevState.cart, action);
      // Saving cart to storage and server whenever it changes
      this.saveCartToStorage(newState);
      this.saveCartToServer(newState);
      return { cart: newState };
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          dispatch: this.dispatch,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
