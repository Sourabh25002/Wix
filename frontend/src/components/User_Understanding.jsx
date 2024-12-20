import React, { useEffect } from "react";
import "../styles/user_understanding_style.css";

const UserUnderstandingComponent = () => {
  useEffect(() => {
    // Create IntersectionObserver to trigger animations when elements come into view
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="user-understanding-container">
      {/* First Cell: Heading */}
      <div className="user-understanding-heading">
        <h2>
          Understand Your <br /> Users Better
        </h2>
      </div>

      {/* Second Cell: Paragraph */}
      <div className="user-understanding-paragraph animate-on-scroll">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>

      {/* Third Cell: Button */}
      <div className="user-understanding-button animate-on-scroll">
        <button className="get-demo-btn">Get a Demo</button>
      </div>
    </div>
  );
};

export default UserUnderstandingComponent;
