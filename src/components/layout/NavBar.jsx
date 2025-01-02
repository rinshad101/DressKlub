import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Camera, CircleUserIcon, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNav = (category) => {
    console.log(category);
    navigate(`/collections/${category}`);
  };
  return (
    <div className="flex justify-between items-center p-5 bg-gray-100 xl:px-10 text-2xl w-full fixed top-0 z-50 bg-transparent">
      <li className="xl:hidden block">
        <Menu />
      </li>

      <div className="list-none xl:flex gap-4 hidden">
        <li
          onClick={() => handleNav("Women")}
          className="hover:underline cursor-pointer"
        >
          Women
        </li>
        <li
          onClick={() => handleNav("Men")}
          className="hover:underline cursor-pointer"
        >
          Men
        </li>
        <li
          onClick={() => handleNav("all")}
          className="hover:underline cursor-pointer"
        >
          Sale
        </li>
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer list-none flex justify-center xl:text-4xl"
      >
        <li>DressKlub</li>
      </div>
      <div className="list-none flex gap-6 items-center ">
        {localStorage.getItem("user") ? (
          <li onClick={()=>{localStorage.clear(); alert("logout successfully")}} className="xl:flex gap-2 items-center hidden">
            <p>Log Out</p> <CircleUserIcon />
          </li>
        ) : (
          <Link to={"/login"}>
            <li className="xl:flex gap-2 items-center hidden">
              <p>Log In</p> <CircleUserIcon />
            </li>
          </Link>
        )}

        <li className="xl:flex items-center hidden">
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <Link to={"/cart"}>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
