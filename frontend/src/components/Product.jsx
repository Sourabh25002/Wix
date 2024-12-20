import React, { useEffect } from "react";
import "../styles/product_style.css";
import Phone from "../assets/Phone.png";

const ProductComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is in view
          if (entry.isIntersecting) {
            // Add the visible class to trigger animation
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    // Observe h3 and p elements separately
    const headers = document.querySelectorAll(".product-item h3");
    const paragraphs = document.querySelectorAll(".product-item p");

    headers.forEach((header) => observer.observe(header));
    paragraphs.forEach((paragraph) => observer.observe(paragraph));

    return () => {
      // Clean up the observers
      headers.forEach((header) => observer.unobserve(header));
      paragraphs.forEach((paragraph) => observer.unobserve(paragraph));
    };
  }, []);

  return (
    <div className="product-container">
      {/* First Column */}
      <div className="product-left-column">
        <h2 className="product-title">Data You Can Trust</h2>
        <div className="product-item">
          <h3>01. Fast & Agile</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="product-item">
          <h3>02. Cost-Effective</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="product-item">
          <h3>03. Real-Time Analytics</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="product-right-column">
        <div className="secondary-component">
          {/* Insert your image here */}
          <img src={Phone} alt="Description" className="secondary-image" />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
