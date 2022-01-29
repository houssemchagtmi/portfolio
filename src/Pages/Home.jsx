import React from "react";
import Howme from "../Components/Howme";
import Language from "../Components/Language";
import Layout from "../Components/Layout";
import Me from "../Components/Me";
import Yes from "../Components/Yes";

const Home = () => {
  return (
    <Layout>
     <Me/>
     <Language/>
     <Yes/>
     <Howme/>
    </Layout>
  );
};

export default Home;
