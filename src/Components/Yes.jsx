import React from "react";
import devjs from "../19199360.jpg";
const Yes = () => {
  return (
    <div className="relative mt-28 border-0 md:absolute   ">
      <div>
        <div className=" bg-neutral-800 h-32">
          <h1 className="text-center pt-5 text-purple-400 font-bold text-5xl md:text-2xl">
            Yes, You are right, I am a JS web developer{" "}
          </h1>
        </div>
        <div className=" -mt-10 bg-purple-100  ml-48 mr-48  shadow-2xl shadow-orange-400 mb-20 md:ml-0 md:mr-0 ">
          <div className=" w-11/12 flex flex-col  items-center ">
            <img
              className="w-5/12 mt-28 border-4 md:w-96 md:ml-14"
              src={devjs}
              alt="dev js"
            />

            <h3 className="text-lg ml-20 font-medium mb-20 mt-5 ">
              JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages — every time a web page
              does more than just sit there and display static information for
              you to look at — displaying timely content updates, interactive
              maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. —
              you can bet that JavaScript is probably involved. It is the third
              layer of the layer cake of standard web technologies, two of which
              (HTML and CSS) we have covered in much more detail in other parts
              of the Learning Area.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yes;
