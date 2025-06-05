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
import AddProducts from "./admin/pages/AddProducts.jsx";
import UpdateProducts from "./admin/pages/UpdateProducts.jsx";
import AdminProfile from "./admin/pages/AdminProfile.jsx";
import { OrderProvider } from "./ContextApi/OrderContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

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
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/admin/updateproducts",
        element: <UpdateProducts />,
      },
    ],
  },
]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UserProvider>
//       <DataProvider>
//         <CartProvider>
//           <OrderProvider>
//             <RouterProvider router={rout} />
//           </OrderProvider>
//         </CartProvider>
//       </DataProvider>
//     </UserProvider>
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={rout} />
  </Provider>
);
