import React from "react";
import "./circle.css";
const Howme = () => {
  return (
    <div className="circles">
      <div className=" circles min-h-screen flex items-center justify-center px-16  ">
        <div className="relative w-full max-w-lg mf ">
          <div className="absolute -top-10 left-5 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 "></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 "></div>
          <div className="absolute top-3 -right-12 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 "></div>
          <div className="mt-64 relative space-y-10"></div>
        </div>
        <h4 className="absolute mt-48 ml-32 text-xl text-slate-600">
          <p>JavaScript Object Notation</p>
          <br />
          {"{"} <br />
          "name":"Houssem Eddin Chagtmi",
          <br />
          "age":null,
          <br />
          "gender":"male",
          <br />
          "from":"Raoued,Ariana,Tunis"
          <br />
          {"}"}
        </h4>
      </div>
    </div>
  );
};

export default Howme;
