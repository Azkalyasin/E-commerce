import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hendleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 md:px-6 lg:px-40 mt-4">
      <nav className="flex items-center md:justify-between py-3 justify-between">
        {/* Logo */}
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="Logo" className="h-8" />
        </Link>

        {/* List Items */}
        <ul className="hidden md:flex md:flex-row gap-6 text-black">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Collection">COLLECTION</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <button className="rounded-xl px-5 text-xs shadow-xl border hidden md:flex py-1">
            <Link>Admin Panel</Link>
          </button>
        </ul>

        {/* Icon atau Bagian Kanan */}
        <div className="flex flex-row md:gap-6 items-center gap-6 ml-auto">
          <Link to="/Collection">
            {" "}
            <img src={assets.search_icon} alt="" className="h-5" />
          </Link>
          <img src={assets.profile_icon} alt="" className="h-5" />
          <img src={assets.cart_icon} alt="" className="h-5" />
          <img src={assets.menu_icon} alt="" className="h-5 md:hidden" onClick={hendleOpen} />
        </div>

        <div className="md:hidden">
          {/* menu mobile */}
          {isOpen && (
            <div className="flex flex-col">
              <ul className="flex flex-col gap-4 text-black">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/Collection">COLLECTION</Link>
                </li>
                <li>
                  <Link to="/About">ABOUT</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
