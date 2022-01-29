import React from 'react';

const Me = () => {
  return(
    <div>
    <div
      className="h-screen 
     bg-neutral-800 md:w-80">
      <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 md:min-w-full mx-32 z-10 bg-neutral-800
      border-white transform rotate-12 md:rotate-0">
        <div className="h-1/2 md:h-5/6  ">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_qhrndegx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="font-bold text-white border-l-4 md:px-5 ">
          <h1 className="text-7xl ml-2  md:text-4xl">
            Hello, I am <b className="text-violet-600">HOUSSEM</b>{" "}
          </h1>
          <h1 className="text-4xl ml-2 mt-4 border-t-2 w-10/12  md:text-xl ">
            FullStack JS <b className="text-yellow-400"> Developer </b>{" "}
            <b className="text-red-500">(MERN)</b>{" "}
          </h1>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Me;
