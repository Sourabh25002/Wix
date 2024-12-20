import "../styles/parallax_content_style.css";
import Screen from "../assets/Screen.avif";
import QR from "../assets/qrCode.avif";
import Play from "../assets/Google.avif";
import Store from "../assets/apple.avif";

const ParallaxContent = () => {
  return (
    <div className="parallax-content">
      {/* First Column (Flexbox with two boxes) */}
      <div className="parallax-flex-container">
        <div className="parallax-column">
          <div className="parallax-box-1">
            <h2>Fast & Reliable Real-Time Data</h2>
          </div>
          <div className="parallax-box-2">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="parallax-get-started-btn">Get Started</button>
          </div>
        </div>
      </div>

      {/* Middle Box */}
      <div className="parallax-middle-box">
        <div className="parallax-image-container-1">
          <img src={Screen} alt="Image" className="parallax-middle-image" />
        </div>
      </div>

      {/* Bottom Section (Flexbox with three boxes) */}
      <div className="parallax-bottom-section">
        {/* First Box */}
        <div className="parallax-bottom-box-1">
          <h3>Download Our Mobile App</h3>
          <p>
            Download the Spaces by Wix app and join “Poly” to easily stay
            updated on the go.
          </p>
        </div>

        {/* Middle Box */}
        <div className="parallax-bottom-middle-box">
          <div className="parallax-image-container-2">
            <img src={QR} alt="Image" className="parallax-bottom-image" />
          </div>
        </div>

        {/* Last Box with Flex */}
        <div className="parallax-bottom-box-2">
          <div className="parallax-bottom-flex-container">
            <img src={Play} alt="Image" className="parallax-bottom-image" />
            <img src={Store} alt="Image" className="parallax-bottom-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxContent;
