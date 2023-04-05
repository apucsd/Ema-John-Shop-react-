import React, { useState } from "react";
import logo from "../../public/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="bg-black py-2 px-8 flex text-white justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div onClick={() => setIsShow(!isShow)}>
        <span>
          {isShow ? (
            <XCircleIcon className="h-6 w-6 md:hidden" />
          ) : (
            <Bars3Icon className="h-6 w-6 md:hidden text-white" />
          )}
        </span>
      </div>
      <div
        className={`md:block duration-700 flex flex-col md:static absolute ${
          isShow == true
            ? "top-14 right-0 p-4 opacity-90"
            : "-top-72 right-0 p-4 opacity-90"
        }   bg-black md:flex-row lg:flex  gap-4`}
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order
        </NavLink>
        <NavLink
          to="order-review"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order Review
        </NavLink>
        <NavLink
          to="inventory"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Menage Inventory
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
