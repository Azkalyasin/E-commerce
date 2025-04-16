import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-start px-4 md:px-6 lg:px-40 mt-40 overflow-hidden md:justify-between md:items-start md:flex-row md:gap-10">
      <div className="flex flex-col items-start justify-around max-w-115">
        <img src={assets.logo} alt="" className="h-8" />
        <p className="text-gray-400 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-gray-600 font-bold">COMPANY</h1>
        <ul className=" flex md:flex-col gap-2 mt-4  text-gray-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-gray-600 font-bold">Subscribe to our newsletter</h1>
        <p className="text-gray-400 mt-2">The latest news, articles, and resources.</p>
      </div>
    </div>
  );
};

export default Footer;
