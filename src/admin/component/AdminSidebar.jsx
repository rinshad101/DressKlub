import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  return (
    <>
      {/* Hamburger Icon for Small Screens */}
      <button
        className="fixed top-4 left-4 z-40 p-2 bg-gray-800 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // Cross Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-screen bg-gray-800 text-white flex flex-col items-center justify-start gap-8 py-10 px-4 shadow-lg transform transition-transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0  md:w-[350px] md:h-screen`}
      >
        <h1 className="text-2xl md:text-3xl font-semibold xl:mt-0 mt-10">
          DressKlub
        </h1>
        <div className="flex flex-col gap-6 mt-10">
          <Link to={"/admin"}>
            <p className="text-lg text-center md:text-xl hover:text-gray-400 cursor-pointer transition-colors">
              Dashboard
            </p>
          </Link>
          <Link to={"/admin/users"}>
            <p className="text-lg text-center md:text-xl hover:text-gray-400 cursor-pointer transition-colors">
              Users
            </p>
          </Link>
          <Link to={"/admin/products"}>
            <p className="text-lg text-center md:text-xl hover:text-gray-400 cursor-pointer transition-colors">
              Products
            </p>
          </Link>
          <Link to={"/admin/orders"}>
            <p className="text-lg text-center md:text-xl hover:text-gray-400 cursor-pointer transition-colors">
              Orders
            </p>
          </Link>
        </div>
        <div className="absolute bottom-24">
          <button className="px-10 py-3 bg-red-500 hover:bg-red-600 text-lg text-white font-medium rounded-md transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
