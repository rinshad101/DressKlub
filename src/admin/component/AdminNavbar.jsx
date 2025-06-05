import { User } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const AdminNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-30">
      <div className="flex items-center justify-between px-6 py-7 bg-gray-800 text-white shadow-md md:w-[calc(100%-350px)] md:ml-[350px]">
        <h1 className="text-2xl font-bold">Manage Your Business</h1>
        <Link to={"/admin/profile"}>
          <div className="h-14 w-14 rounded-full bg-gray-500 flex items-center justify-center text-xl font-semibold text-gray-700">
            <User />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
