import React, { useEffect } from "react";
import "../styles/demo_style.css";

const DemoPage = () => {
  useEffect(() => {
    const subheading = document.querySelector(".demo-subheading");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation when the element is in view
            subheading.style.animation = "slideIn 1s forwards";
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    observer.observe(subheading); // Observe the subheading element
  }, []);

  return (
    <div className="demo-container">
      <h1 className="demo-heading">Request a Demo</h1>
      <h2 className="demo-subheading">
        Schedule a demo with one of our <br />
        product consultants.
      </h2>
      <form className="demo-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="first-name">First Name *</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="form-group">
            <label htmlFor="job-title">Job Title</label>
            <input type="text" id="job-title" name="job-title" />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DemoPage;
