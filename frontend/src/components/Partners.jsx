import React, { useEffect, useRef } from "react";
import "../styles/partners_style.css";
import Mikron from "../assets/Mikron.avif";
import Pome from "../assets/Pome.avif";
import Velo from "../assets/Velo.avif";

const Partners = () => {
  const imagesRef = useRef([]);
  const testimonialQuoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each image
    imagesRef.current.forEach((img) => observer.observe(img));

    // Observe the testimonial quote
    if (testimonialQuoteRef.current) {
      observer.observe(testimonialQuoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="partners-container">
      <div className="partners-top">
        <h3>Partners</h3>
        <div className="vertical-line"></div>
        <img
          src={Velo}
          alt="Partner 1"
          ref={(el) => (imagesRef.current[0] = el)}
          className="partner-image"
        />
        <img
          src={Pome}
          alt="Partner 2"
          ref={(el) => (imagesRef.current[1] = el)}
          className="partner-image"
        />
        <img
          src={Mikron}
          alt="Partner 3"
          ref={(el) => (imagesRef.current[2] = el)}
          className="partner-image"
        />
      </div>
      <div className="horizontal-line"></div>
      <div className="partners-bottom">
        <p className="testimonial">Richard Heiman | CEO at Mikron</p>
        <p className="testimonial-quote" ref={testimonialQuoteRef}>
          “I'm a testimonial. Click to edit me and add text <br />
          that says something nice about you and your <br /> services. Let your
          customers review you and tell <br /> their friends how great you are.”
        </p>
      </div>
    </div>
  );
};

export default Partners;
