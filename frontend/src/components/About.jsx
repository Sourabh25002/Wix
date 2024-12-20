import React, { useEffect, useRef } from "react";
import "../styles/about_style.css";

const About = () => {
  // Create refs for each h3 and p element
  const storyRef = useRef(null);
  const visionRef = useRef(null);
  const technologyRef = useRef(null);

  const storyParaRef = useRef(null);
  const visionParaRef = useRef(null);
  const techParaRef = useRef(null);

  // Intersection Observer to detect when elements are in view
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the h3 and p elements
    if (storyRef.current) observer.observe(storyRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (technologyRef.current) observer.observe(technologyRef.current);

    if (storyParaRef.current) observer.observe(storyParaRef.current);
    if (visionParaRef.current) observer.observe(visionParaRef.current);
    if (techParaRef.current) observer.observe(techParaRef.current);

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <div className="about-container">
      <h2>About</h2>
      <div className="about-flex-container">
        <div className="about-field">
          <h3 ref={storyRef}>Story</h3>
          <p ref={storyParaRef}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double-click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="about-field">
          <h3 ref={visionRef}>Vision</h3>
          <p ref={visionParaRef}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double-click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="about-field">
          <h3 ref={technologyRef}>Technology</h3>
          <p ref={techParaRef}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double-click me to add your own
            content and make changes to the font.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
