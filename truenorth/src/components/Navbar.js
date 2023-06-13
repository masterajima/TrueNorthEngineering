import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const handleNav = () => {
    setNav(!nav);
  };
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-success font-3xl font-Airel font-black 100%">
      <h1 className="w-full text-3xl font-bold text-black 100%">Engi</h1>
      <ul className="flex md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Service</li>
        <li className="p-4">Resource</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav}>
        {!nav ? (
          <AiOutlineClose size={20}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={20}></AiOutlineMenu>
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-left border-left-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4 "></h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Service</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
