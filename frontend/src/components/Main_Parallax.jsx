import React from "react";
import ParallaxBackground from "./Parallax_Background";
import ParallaxContent from "./Parallax_Content";
import "../styles/main_parallax_style.css";

const Parallax = () => {
  return (
    <div className="parallax-container">
      <ParallaxBackground />
      <ParallaxContent />
    </div>
  );
};

export default Parallax;
