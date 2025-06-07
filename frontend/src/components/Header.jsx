import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  // const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="bg-white pl-4 pr-0  border-b border-b-gray-300 z-100 shadow-2xs flex gap-2 justify-between">
      <div className="flex items-center gap-2 grow">
        <img src="/images/linkedin.png" alt="linkedin logo" className="" />

        <div className="flex gap-2 items-center p-1 focus-within:outline-2 focus-within:outline-gray-800 rounded max-w-74 grow bg-[#eef3f8] my-2">
          <img
            src="/images/search-icon.svg"
            alt="search icon"
            className="w-4"
          />
          <input
            type="text"
            className="bg-transparent outline-none text-sm w-54 "
            placeholder="Search"
          />
        </div>
      </div>

      <nav className="fixed md:relative bottom-0 left-0 w-full md:w-auto px-4  border-t md:border-0 border-t-gray-300 z-100 ">
        <ul className="flex justify-between items-center gap-2">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center w-20 transition-all h-12 ${
                  isActive ? "border-b-2 " : ""
                }`
              }
            >
              <img src="/images/nav-home.svg" alt="home icon" className="w-6" />
              <span className="text-xs  text-black/60">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center w-20 transition-all h-12 ${
                  isActive ? "border-b-2 " : ""
                }`
              }
            >
              <img
                src="/images/nav-network.svg"
                alt="home icon"
                className="w-6"
              />
              <span className="text-xs  text-black/60">My Network</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center w-20 transition-all h-12 ${
                  isActive ? "border-b-2" : ""
                }`
              }
            >
              <img src="/images/nav-jobs.svg" alt="home icon" className="w-6" />
              <span className="text-xs  text-black/60">Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center w-20 transition-all h-12 ${
                  isActive ? "border-b-2" : ""
                }`
              }
            >
              <img
                src="/images/nav-messaging.svg"
                alt="home icon"
                className="w-6"
              />
              <span className="text-xs  text-black/60">Messaging</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center w-20 transition-all h-12 ${
                  isActive ? "border-b-2" : ""
                }`
              }
            >
              <img
                src="/images/nav-notifications.svg"
                alt="home icon"
                className="w-6"
              />
              <span className="text-xs text-black/60">Notifications</span>
            </NavLink>
          </li>
          <li className="group">
            <button className="flex flex-col justify-center items-center w-20 transition-all h-12 cursor-pointer relative ">
              <img
                src="/images/user.svg"
                alt="home icon"
                className="w-6 rounded-full"
              />
              <span className="text-xs text-black/60 flex hover:text-black/90 ">
                Me
                <img src="/images/down-icon.svg" alt="home icon" className="" />
              </span>
            </button>
            <button className="w-20 rounded cursor-pointer absolute bg-white border border-gray-300 hover:bg-black/20 hidden group-hover:block">
              Sign Out
            </button>
          </li>
          <li className=" border-l border-l-gray-300 hidden lg:flex">
            <button className="flex flex-col justify-center items-center w-24 transition-all h-12 cursor-pointer ">
              <img
                src="/images/nav-work.svg"
                alt="home icon"
                className="w-6 rounded-full"
              />
              <span className="text-xs text-black/60 flex hover:text-black/90 ">
                For Business
                <img src="/images/down-icon.svg" alt="home icon" className="" />
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
