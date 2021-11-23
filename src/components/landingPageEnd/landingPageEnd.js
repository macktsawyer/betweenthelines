import React from "react";
import "./landingPageEnd.css";
import Squigglyv3 from "../../assests/Squigglyv2.svg";
import AstronautDevelopment from "../../assests/AstronautDevelopment.svg";
import AstronautProfessional from "../../assests/AstronautProfessional.svg";
import DevelopmentTeam from "../../assests/DevelopmentTeam.png";
import MackSawyer from "../../assests/MackSawyer.png";
import MackSawyerPicture from "../../assests/HeadPictureMack.jpg";
import RichardGonzalez from "../../assests/RichardGonzalez.png";
import RichardGonzalezPicture from "../../assests/HeadPictureRichard.jpg";

const LandingPageEnd = () => {
  return (
    <section className="end-container">
      <section className="squigglyv3">
        <img id="squiggly-line" src={Squigglyv3} alt="squiggly line"></img>
      </section>

      <section className="astronaut-development">
        <img
          id="astronaut-development"
          src={AstronautDevelopment}
          alt="development astronaut"
        ></img>
      </section>

      <section className="development-team">
        {" "}
        <img src={DevelopmentTeam} alt="development team"></img>
      </section>

      {/* <section className="mack">
        <img src={MackSawyer} alt="Mack Sawyer"></img>
        <div className="profile-card"></div>
      </section> */}

      {/* <section className="richard">
        <img src={RichardGonzalez} alt="Richard Gonzalez"></img>
        <div className="profile-card"></div>
      </section> */}
      <section className="astronaut-professional">
        <img
          id="astronaut-professional"
          src={AstronautProfessional}
          alt="professional astronaut"
        ></img>
      </section>

      {/* MACK SAWYER */}
      <section class="mack profile">
        <img src={MackSawyer} alt="Mack Sawyer"></img>
        <div class="item">
          <div class="image">
            <img src={MackSawyerPicture} alt="The Image title" />
          </div>
          <div class="text">
            <figcaption>
              <h4>
                {" "}
                <span >Web</span>{" "}
                <span >Developer</span>
              </h4>
              <p>
                Adipiscing elit. Suspendisse tincidunt magna sit amet sem
                laoreet, a condimentum purus elementum. Duis ac finibus lorem,
                id dictum orci. In aliquet tempor velit in tempor. Nunc mattis
                lobortis mi magna sit amet.
              </p>
              <a href="" class="fa fa-linkedin"></a>
              <a href="" class="fa fa-twitter"></a>
              <a href="" class="fa fa-github"></a>
            </figcaption>
          </div>
        </div>
      </section>

      {/* RICHARD GONZALEZ */}
      <section class="richard profile">
        <img src={RichardGonzalez} alt="Richard Gonzalez"></img>
        <div class="item">
          <div class="image">
            <img src={RichardGonzalezPicture} alt="The Image title" />
          </div>
          <div class="text">
            <figcaption>
              <h4>
                <span >Web</span>{" "}
                <span >Developer</span>
              </h4>
              <p>
                Adipiscing elit. Suspendisse tincidunt magna sit amet sem
                laoreet, a condimentum purus elementum. Duis ac finibus lorem,
                id dictum orci. In aliquet tempor velit in tempor. Nunc mattis
                lobortis mi magna sit amet.
              </p>
              <a href="" class="fa fa-linkedin"></a>
              <a href="" class="fa fa-twitter"></a>
              <a href="" class="fa fa-github"></a>
            </figcaption>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPageEnd;
