import { User } from "lucide-react";
import React from "react";
import { use } from "react";

function AdminProfile() {

    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-lg rounded-lg max-w-xl w-full">
        <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-gray-700">
          <User />
        </div>

        <div className="text-center md:text-left">
    
          <p className="text-xl font-bold text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
