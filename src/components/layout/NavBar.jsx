import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CircleUserIcon, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../ContextApi/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isSrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = (category) => {
    console.log(category);
    navigate(`/collections/${category}`);
  };
  return (
    <div
      className={`flex justify-between items-center p-5  xl:px-10 text-2xl w-full fixed top-0 z-50 ${
        isSrolled ? "bg-white" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
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
          <li
            onClick={() => {
              localStorage.clear();
              alert("logout successfully");
            }}
            className="xl:flex gap-2 items-center hidden"
          >
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
          <div className="relative">
            <li className="flex items-center">
              <ShoppingBagIcon className="h-7 text-black" strokeWidth={2}/>
            </li>
            <p className="absolute top-[6px] right-[2px] flex items-center justify-center p-3  w-3 h-3 rounded-full text-black font-mono text-[10px] font-bold">
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
