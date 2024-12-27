import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  Camera,
  CircleUserIcon,
  Menu,
  PlusCircle,
  Trash2Icon,
} from "lucide-react";

function NavBar() {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-100 xl:px-10 text-2xl w-full fixed top-0 z-50 bg-transparent">
      <li className="xl:hidden block">
        <Menu />
      </li>

      <div className="list-none xl:flex gap-4 hidden">
        <li>Women</li>
        <li>Men</li>
        <li>Sale</li>
      </div>
      <div className="list-none flex justify-center xl:text-4xl">
        <li>DressKlub</li>
      </div>
      <div className="list-none flex gap-6 items-center ">
        <li className="xl:flex gap-2 items-center hidden">
          <p>Log In</p> <CircleUserIcon />
        </li>
        <li className="xl:flex items-center hidden">
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
      </div>
    </div>
  );
}

export default NavBar;
