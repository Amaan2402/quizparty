import React from "react";
import HeroSectionPerson from "./HeroSectionPerson";
import HeroTextContainer from "./HeroTextContainer";

function Hero() {
  return (
    <div className="mt-24 px-56 flex justify-between">
      <HeroTextContainer />
      <HeroSectionPerson />
    </div>
  );
}

export default Hero;
