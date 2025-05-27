import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function HowItWorksCard({
  icon,
  title,
  matter,
}: {
  icon: IconProp;
  title: string;
  matter: string;
}) {
  return (
    <div className="bg-[#1e1d6b] w-[47%] lg:w-[32%] min-h-[120px] max-h-[120px] p-2 lg:p-5 rounded-xl text-center">
      {/* <FontAwesomeIcon icon={icon} className="text-[24px]" /> */}
      <h1 className="text-base sm:text-xl font-medium mb-1">{title}</h1>
      <p className="text-sm sm:text-base">{matter}</p>
    </div>
  );
}

export default HowItWorksCard;
