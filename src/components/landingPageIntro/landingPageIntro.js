import React from "react";
import "./landingPageIntro.css";
import LandingPageTitle from "../../assests/LandingPageTitle.png";
import PencilBag from "../../assests/PencilBag.svg";
// import PencilLeg from "../../assests/PencilNoLegs.svg";
import CrayonGif from "../../assests/CrayonGif.gif";
import Squigglyv2 from "../../assests/Squigglyv2.svg";

function LandingPageIntro() {
  return (
    <section className="intro-container ">
      {/* TITLE */}
      <section className="intro-title">
        <img src={LandingPageTitle} alt="drawing inbetween the lines"></img>{" "}
      </section>

      {/*YOUTUBE VIDEO  */}
      <section className="youtube-video">
        <iframe
          id="youtube-video"
          width="552"
          height="379"
          src="https://www.youtube.com/embed/qX1PvagKyqA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      {/* SECOND TITLE */}
      <section className="intro-description">
        <p id="intro-description-title">
          <span style={{ color: "blue" }}> Welcome </span>
          <span style={{ color: "red" }}> to </span>
          <span style={{ color: "green" }}>"Drawing </span>
          <span style={{ color: "orange" }}> Between </span>
          <span style={{ color: "yellow" }}>the </span>
          <span style={{ color: "purple" }}> Lines!" </span>
        </p>{" "}

        <div>
          <p className="intro-description-body">
            This is a program designed to remove any borders from your
            imagination.
          </p>
          <p className="intro-description-body second">
            Want to create a flying whale that can breathe fire but only when
            its night time? Go for it!
          </p>
          <p className="intro-description-body second">
            {" "}
            Or want to create a landscape where lava flows blue and spawns
            rabbits? Go for that too!
          </p>
          <p
            className="intro-description-body second"
            style={{ fontSize: "10px" }}
          >
            ...whatever you do just don't draw any birds like that m figure that
            everyone does...
          </p>
        </div>
        
      </section>

      {/* CRAYON GIF */}
      <section className="crayon-gif-container">
        <img id="crayon-gif" src={CrayonGif} alt="crayon gif"></img>
      </section>

      {/* SQUIGGLY LINE */}
      <section className="squiggly">
        <img id="squiggly-line" src={Squigglyv2} alt="squiggly line"></img>
      </section>

      {/* ANIMATED PENCIL */}
      <section className="animated-pencil-icon">
        <img id="pencil-bag" src={PencilBag} alt="pencil with bag"></img>
      </section>

      {/* <section className="animated-pencil-icon">
        <img id="pencil-bag" src={PencilLeg}></img>
      </section> */}
    </section>
  );
}

export default LandingPageIntro;
