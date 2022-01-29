import React from "react";
import Footer from "./Footer";
import ResponsiveNavbar from "./Responsive";

const Layout = ({ children }) => {
  return (
    <div>
  <div className="App w-full">
      <ResponsiveNavbar />
      </div>
      <div className=" ">      <div className="container">{children}</div>
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
