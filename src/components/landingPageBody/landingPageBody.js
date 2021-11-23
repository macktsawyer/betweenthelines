import React from "react";
import Squigglyv2 from "../../assests/Squigglyv2.svg";
import "./landingPageBody.css";
import AstronautLaptop from "../../assests/AstronautLaptop.svg";
import AstronautPencil from "../../assests/AstronautPencil.svg";
import TechnologiesUsed from "../../assests/TechnologiesUsed.png";
import UserStory from "../../assests/UserStory.png";

const LandingPageBody = () => {
  return (
    <section className="body-container">
      <section className="body-squiggly-line">
        <img id="squiggly-linev2" src={Squigglyv2} alt="squiggly line"></img>
      </section>
      <section className="astronaut-image">
        <img
          className="astronaut"
          src={AstronautPencil}
          alt="astronaut with pencil"
        ></img>
      </section>
      <section className="technologies-used">
        {/* <h2>Technologies Used.</h2>{" "} */}
        <img src={TechnologiesUsed} alt="technologies used"></img>
        <p>This program is built with frontend technologies, </p>
        <p>
          such as the
          <span style={{ color: "blue" }}> Javascript</span> framework, known as{" "}
          <span>React.js</span> as well as{" "}
          <span style={{ color: "red" }}>CSS</span>. We also used
          <span style={{ color: "green" }}> Canvas</span>, an{" "}
          <span style={{ color: "orange" }}>HTML5</span> native plugin, to
          manipulate the <span style={{ color: "purple" }}>DOM</span>. Lastly,
          we also used <span style={{ color: "blue" }}>Adobe Illustrator</span>,
          to add some final touches.
        </p>
      </section>
      <section className="laptop-image">
        <img
          className="astronaut"
          src={AstronautLaptop}
          alt="astronaut with pencil"
        ></img>
      </section>
      <section className="user-story">
        <img src={UserStory} alt="user story"></img>
        <p>
          The user of this program is someone, with any{" "}
          <span style={{ color: "blue" }}>artistic</span> background, who has a
          few minutes of free time and wants to see how{" "}
          <span style={{ color: "red" }}> creative </span> their
          <span style={{ color: "green" }}> creativity</span> can really get.{" "}
        </p>{" "}
        <p>...It’s also for those looking to hire software engineers....</p>
      </section>
    </section>
  );
};

export default LandingPageBody;
