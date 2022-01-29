import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [show, setShow] = useState("md:hidden");
  return (
    <div className="text-white fixed inset-0 z-50">
      <div
        className={`flex justify-between items-center p-2 bg-neutral-800  font-mono shadow-lg ${
          show !== "md:hidden" && "flex-col"
        }`}
      >
        <div className=" flex justify-between items-center w-full">
          <h1 className="text-6xl text-slate-400 font-dance">
            {" "}
            <Link to="/"> HEC</Link>{" "}
          </h1>

          <FaBars
            onClick={() => {
              if (show == "md:hidden") {
                setShow("");
              } else {
                setShow("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer w-10 h-10 text-slate "
          />
        </div>

        {/* all PC */}
        <div className="flex md:hidden">
          <div className="mx-5 p-2 hover:bg-purple-700  text-purple-50 rounded-md text-2xl">
            <Link to="/">Home</Link>
          </div>
          <div className="mx-5 p-2  hover:bg-purple-700   text-purple-50 rounded-md text-2xl ">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="mx-5 p-2 hover:bg-purple-700 text-purple-50 rounded-md text-2xl ">
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* PHONE */}

        <div
          className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${show}`}
        >
          <div className="px-7 p-1 hover:bg-purple-700  text-purple-50  rounded-md  ">
            <Link to="/">Home</Link>
          </div>
          <div className="px-4 p-1 hover:bg-purple-700 text-purple-50  rounded-md">
            <Link to="/projects">Projects</Link>
          </div>
          <div className=" px-4 p-1 hover:bg-purple-700 text-purple-50 rounded-md ">
            <Link to="/contact">Contact</Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
