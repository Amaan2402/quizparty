import React from "react";
import Image from "next/image";

function HeroSectionPerson() {
  return (
    <div className="flex relative responsive-width responsive-width-xxs responsive-width-xs sm:w-[36%] md:w-[46%] lg:w-4/12 ">
      <div className="w-32 h-32 sm:w-52 sm:h-52 md:w-64 md:h-64">
        <Image
          width={250}
          height={250}
          src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681238780004fee513bf/view?project=6809910a000e66c57d35&mode=admin"
          alt="Person"
        />
      </div>
      <div className="absolute top-5 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
        <Image
          src={
            "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6812527600111852c237/view?project=6809910a000e66c57d35&mode=admin"
          }
          alt="Person"
          width={268}
          height={218}
        />
      </div>
    </div>
  );
}

export default HeroSectionPerson;
