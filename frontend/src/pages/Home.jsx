import React from "react";
import Navbar from "../components/Navbar";
// import MainContent from "../components/Main_Parallax";
import Footer from "../components/Footer";
import ParallaxBackground from "../components/Parallax_Background";
import ParallaxContent from "../components/Parallax_Content";
import Product from "../components/Product";
import UserUnderstanding from "../components/User_Understanding";
import About from "../components/About";
import Partners from "../components/Partners";
import Demo from "../components/Demo";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <MainContent /> */}
      <ParallaxBackground />
      <ParallaxContent />
      <Product />
      <UserUnderstanding />
      <About />
      <Partners />
      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
