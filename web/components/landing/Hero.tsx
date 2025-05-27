import React from "react";
import HeroSectionPerson from "./HeroSectionPerson";
import HeroTextContainer from "./HeroTextContainer";

function Hero() {
  return (
    <div className="mt-24 mx-4 md:mx-24 xl:mx-44  flex justify-between mb-4">
      <HeroTextContainer />
      <HeroSectionPerson />
    </div>
  );
}

export default Hero;
