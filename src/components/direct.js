import { Link } from "react-router-dom";
import React from "react";
import PencilNoLegs from "../assests/PencilNoLegs.svg";
import ClickMeToDraw from "../assests/ClickMeToDraw.png";

export default function Direct() {
  return (
    <>
      <div>
        <img
          className="speech-bubble"
          src={ClickMeToDraw}
          alt="speech bubble"
        ></img>
        <Link to="/drawingApp">
          {" "}
          <img id="pencil-sticky" src={PencilNoLegs} alt="pencil"></img>
        </Link>
      </div>
    </>
  );
}
