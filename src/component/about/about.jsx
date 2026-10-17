import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT DEDLINE</h3>
        <h2>Never miss a deadline</h2>
        <p>
          Missing deadlines can cost more than money — it costs peace of mind.
          Dedline gives you a centralized space to manage every important date,
          get timely reminders, and keep your documents safe and accessible.
          Built with Flutter, it’s fast, secure, and works offline.
        </p>
        <ul>
          <li>Smart notifications that adapt to your needs.</li>
          <li>Encrypted local storage to keep your data safe.</li>
          <li>Seamless calendar sync for easy planning.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
