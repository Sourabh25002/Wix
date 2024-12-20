import React from "react";
import "../styles/footer_style.css";
import Twitter from "../assets/Twitter.avif";
import LinkedIn from "../assets/LinkedIn.avif";
import Youtube from "../assets/Youtube.avif";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* First Row */}
      <div className="footer-row">
        <div className="footer-left">EMAIL. INFO@MYSITE.COM</div>
        <div className="footer-center"></div>
        <div className="footer-right">
          SOCIAL MEDIA.
          <img src={Twitter} alt="Social 1" className="social-icon" />
          <img src={LinkedIn} alt="Social 2" className="social-icon" />
          <img src={Youtube} alt="Social 3" className="social-icon" />
        </div>
      </div>
      <hr className="footer-line" />

      {/* Second Row */}
      <div className="footer-row">
        <div className="footer-left">TELEPHONE. 123-456-7890</div>
        <div className="footer-center"></div>
        <div className="footer-right">
          ADDRESS. 500 TERRY FRANCINE STREET <br />
          SAN FRANCISCO, CA 94158
        </div>
      </div>
      <hr className="footer-line" />

      {/* Third Row */}
      <div className="footer-row footer-links">
        <span>ACCESSIBILITY.</span>
        <span>TERMS & CONDITIONS.</span>
        <span>PRIVACY POLICY.</span>
        <span>SHIPPING POLICY.</span>
        <span>REFUND POLICY.</span>
      </div>
      <hr className="footer-line" />

      {/* Final Row */}
      <div className="footer-final-row">
        <p>
          ©2035 BY POLY.
          <br />
          Powered and secured by Wix
        </p>
      </div>
    </footer>
  );
};

export default Footer;
