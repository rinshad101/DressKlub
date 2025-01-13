import React from "react";

const AdminNavbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="flex items-center justify-between px-6 py-7 bg-gray-800 text-white shadow-md">
        <h1 className="text-2xl font-bold  xl:ml-0 ml-10">
          Manage Your Bussiness
        </h1>
        <p className="text-white">Profile</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
