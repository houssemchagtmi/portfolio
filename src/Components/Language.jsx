import React from "react";
import "./language.css";
import css from "../css.png";
import js from "../JS.png";
import react from "../react.png";
import express from "../express.png";
import mongoDB from "../mongoDB.png";
import bootstrap from "../bootstrap.png";
import tailcss from "../tailcss.png";
import ps from "../PS.png";
import xd from "../XD.png";
const Language = () => {
  return (
    <>
    <div className=" text-center mt-32 relative text-7xl ml-2 text-slate-700 font-bold  ">
      Technologie, I Use !
    </div>
    <div className="flex  justify-between flex-wrap mt-10  ml-20 mr-20 relative ">
      <div className="w-60 h-60 ">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_sexoc4iw.json"
          background="transparent"
          speed="1.5"
          loop
          autoplay
        ></lottie-player>
      </div>
      <img src={css} alt="CSS" className=" w-40 h-40 mt-20 ml-10 " />
      <img src={js} alt="JS" className=" w-40 h-40 mt-20 ml-20 md:ml-10" />
      <img src={react} alt="React" className=" react w-40 h-40  mt-20 ml-20 md:ml-10" />
      <div className="w-60 h-60 ml-20 md:ml-7 md:mt-20">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_dmbcqvqn.json"
          background="transparent"
          speed="0.75"
          loop
          autoplay
        ></lottie-player>
      </div>
      <img src={express} alt="Express.js" className=" w-40 h-40  mt-20 ml-20 md:ml-10 " />
      <img src={mongoDB} alt="MongoDB" className=" w-40 h-40  mt-20 ml-20 md:ml-10" />
      <img
        src={bootstrap}
        alt="Bootstrap"
        className=" w-40 h-40  mt-20 md:ml-10  animate-bounce "
      />

      <div className="w-60 h-60 ml-20 mt-20 md:ml-0" >
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_xx5oa49z.json"
          background="transparent"
          speed="2"
          loop
          autoplay
        ></lottie-player>
      </div>
      <img src={ps} alt="Photshop" className=" w-40 h-40  mt-20 ml-20 md:ml-10" />
      <img src={xd} alt="AdobeXD" className=" w-40 h-40  mt-20 ml-20 md:ml-10 " />
      <img
        src={tailcss}
        alt="tailwindcss"
        className=" w-40 h-40  mt-20 ml-20 md:ml-10 animate-pulse"
      />
    </div>
    </>
  );
};

export default Language;
