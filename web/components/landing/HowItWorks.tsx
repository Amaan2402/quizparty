import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import {
  faBook,
  faChartLine,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {
  return (
    <div className="mx-4 md:mx-24 xl:mx-44 text-white mb-10">
      <div>
        <h1 className="font-bold text-3xl">How it works</h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 w-full lg:justify-between mt-2">
        <HowItWorksCard
          title="Sign up"
          icon={faEnvelope}
          matter="Quickly signup with email"
        />
        <HowItWorksCard
          title="Create quiz"
          icon={faBook}
          matter="Make custom quizzes, or autogenerate questions with AI"
        />
        <HowItWorksCard
          title="Get Analyzed results"
          icon={faChartLine}
          matter="results are evaluated automatically and can be exported or sent via mail"
        />
      </div>
    </div>
  );
}

export default HowItWorks;
