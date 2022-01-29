import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResponsiveNavbar() {
  return (
    <div className="  inset-0 z-50 fixed w-full h-20 bg-neutral-800 text-gray-200 flex flex-row justify-between items-center font-mono shadow-lg ">
      <h1 className="text-6xl text-slate-400 font-dance sm:text-xl ">
        {" "}
        <Link to="/"> HEC</Link>{" "}
      </h1>
      <div >
        <ul className="menu-list flex flex-row text-sm font-bold md:font-thin ">
          <div className="mx-5 md:mx-1 p-2 md:text-xl hover:bg-purple-700  text-purple-50 rounded-md text-2xl">
            <Link to="/">Home</Link>
          </div>
          <div className="mx-5 p-2 md:mx-1  md:text-xl hover:bg-purple-700   text-purple-50 rounded-md text-2xl ">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="mx-5 p-2 md:mx-1 md:text-xl  hover:bg-purple-700 text-purple-50 rounded-md text-2xl ">
            <Link to="/contact">Contact</Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
