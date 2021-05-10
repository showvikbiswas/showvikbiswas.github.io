import React from "react";
import "./About.css";
import Footer from "../Footer";
import LoopVideo from "../../assets/LoopComp.mp4";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-body">
        <video src={LoopVideo} autoPlay loop muted preload />
        <div className="splash-container">
          <div className="big-splash">
            <h1>me</h1>
          </div>
        </div>
        <div className="intro">
          <p>
            Hi there. My name is Showvik. I'm currently an undergraduate student
            at Bangladesh University of Engineering and Technology, majoring in
            Computer Science and Engineering. I enjoy the 'engineering' portion
            of the subject. I love seeing complex designs built from scratch. It
            has been a bit of a challenge for me to figure out where my passion
            truly lies, but I have a thing for <b>computer security</b> and{" "}
            <b>crpytography</b> for now.
          </p>

          <p>
            When not staring at the screen, you can find me listening to music,
            or playing video games, or at the local cafe with my friends. I also
            love playing the drums and the Tabla, a traditional Indian
            percussion instrument.
          </p>

          <p>
            Traveling is something which I have always found alluring. My
            passport probably doesn't reflect my travel aspirations, but I hope
            I'll be able to make it around the world some day. You can find my
            travel stories in my <b>blog</b>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
