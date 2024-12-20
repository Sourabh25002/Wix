// import React, { useState, useEffect } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import "../styles/parallax_background_style.css";

// const ParallaxBackground = () => {
//   const [scrollY, setScrollY] = useState(0);

//   // Update scroll position
//   const handleScroll = () => {
//     setScrollY(window.scrollY); // Track the scroll position
//   };

//   useEffect(() => {
//     // Listen for scroll events
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
//   }, []);

//   // Reverse the direction of the background by negating scrollY
//   const parallaxStyle = {
//     transform: `translateY(-${scrollY * 0.2}px)`, // Move the background upwards
//   };

//   return <div className="parallax-background" style={parallaxStyle}></div>;
// };

// export default ParallaxBackground;

import React, { useState, useEffect } from "react";
import "../styles/parallax_background_style.css";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  // Parallax effect for background
  const parallaxStyle = {
    transform: `translateY(-${scrollY * 0.4}px)`,
  };

  return <div className="parallax-background" style={parallaxStyle}></div>;
};

export default ParallaxBackground;
