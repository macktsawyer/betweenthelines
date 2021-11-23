import React from "react";

import LandingPageIntro from "../components/landingPageIntro/landingPageIntro";
import LandingPageBody from "../components/landingPageBody/landingPageBody";
import LandingPageEnd from "../components/landingPageEnd/landingPageEnd";

const LandingPage = () => {
  return (
    <div>
      <LandingPageIntro />
      <LandingPageBody />
      <LandingPageEnd />
    </div>
  );
};

export default LandingPage;
