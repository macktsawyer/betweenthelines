import { Link } from "react-router-dom";
import React from "react";
import PencilNoLegs from "../assests/PencilNoLegs.svg";

export default function Direct() {
  return (
    <div>
        <div className="speech-bubble">Click me to draw!</div>
      <Link to="/drawingApp">
        {" "}
        <img id="pencil-sticky" src={PencilNoLegs} alt="pencil"></img>
      </Link>
    </div>
  );
}
