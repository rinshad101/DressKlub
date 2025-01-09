import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import { DataProvider } from "./ContextApi/DataContext.jsx";
import ProductView from "./pages/ProductView.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { CartProvider } from "./ContextApi/CartContext.jsx";
import { UserProvider } from "./ContextApi/UserContext.jsx";
import AdminLayout from "./admin/component/AdminLayout.jsx";
import Users from "./admin/pages/Users.jsx";
import DashBoard from "./admin/pages/DashBoard.jsx";
import Products from "./admin/pages/Products.jsx";
import Orders from "./admin/pages/Orders.jsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collections/:category",
        element: <Collection />,
      },
      {
        path: "/collections/all/:id",
        element: <ProductView />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },{
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },{
        path: "/admin/orders",
        element: <Orders />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <DataProvider>
        <CartProvider>
          <RouterProvider router={rout} />
        </CartProvider>
      </DataProvider>
    </UserProvider>
  </StrictMode>
);
