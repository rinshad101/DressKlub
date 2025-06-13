import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CircleUserIcon, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const categories = ["men", "women"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const isCategory = categories.find(
        (cat) => cat.toLowerCase() === query.toLowerCase()
      );

      dispatch(
        searchProducts({
          name: !isCategory ? query : undefined,
          category: isCategory ? query : undefined,
        })
      );
      navigate(`/collections/${searchTerm}`);
      setSearchTerm("");
      setShowSearch(false);
    }
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
          onClick={() => handleNav("women")}
          className="hover:underline cursor-pointer"
        >
          Women
        </li>
        <li
          onClick={() => handleNav("men")}
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
            className="xl:flex gap-2 items-center hidden cursor-pointer"
          >
            <p>Log Out</p> <CircleUserIcon />
          </li>
        ) : (
          <Link to={"/login"}>
            <li className="xl:flex gap-2 items-center hidden cursor-pointer">
              <p>Log In</p> <CircleUserIcon />
            </li>
          </Link>
        )}

        <li
          onClick={() => setShowSearch(!showSearch)}
          className="xl:flex items-center hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={faSearch} />
        </li>

        {showSearch && (
          <form
            onSubmit={handleSearchSubmit}
            className="absolute top-[85px] right-3 "
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="p-3 bg-slate-100 border border-slate-200 rounded-md text-lg w-[500px]"
            />
          </form>
        )}

        <Link to={"/cart"}>
          <div className="relative">
            <li className="flex items-center">
              <ShoppingBagIcon className="h-7 text-black" strokeWidth={2} />
            </li>
            <p className="absolute top-[6px] right-[2px] flex items-center justify-center p-3  w-3 h-3 rounded-full text-black font-mono text-[10px] font-bold">
              {cartItems?.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
