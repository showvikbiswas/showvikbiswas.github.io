import React, { useState, useRef } from "react";
import "./Home.css";
import Footer from "../Footer";
import LoopVideo from "../../assets/LoopComp.mp4";

const Home = ({ ref }) => {
  const [landingHeader, setLandingHeader] = useState("");
  const [landingText, setLandingText] = useState("");
  const [loopOn, setLoopOn] = useState(false);

  setInterval(() => {
    setLandingHeader("NOT MUCH TO SEE HERE");
  }, 1500);

  setInterval(() => {
    setLandingText("JUST YET.");
  }, 2500);

  const loop = () => {
    setLoopOn(true);
  };

  return (
    <div className="home">
      <div className="landing-section">
        <video src={LoopVideo} autoPlay loop muted preload />
        <div className="landing-section-text">
          <div className="landing-section-header">
            <h1>{landingHeader}</h1>
          </div>
          <div className="landing-section-footer">
            <h4>{landingText}</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
