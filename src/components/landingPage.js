import React from "react";

import LandingPageIntro from "../components/landingPageIntro/landingPageIntro";
import LandingPageBody from "../components/landingPageBody/landingPageBody";
import LandingPageEnd from "../components/landingPageEnd/landingPageEnd";
import Direct from "./direct";


const LandingPage = () => {
  return (
    <div>
      <LandingPageIntro />
      <LandingPageBody />
      <LandingPageEnd />
      <Direct />
    </div>
  );
};

export default LandingPage;
