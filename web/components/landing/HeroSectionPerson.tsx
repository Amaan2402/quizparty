import React from "react";
import Image from "next/image";

function HeroSectionPerson() {
  return (
    <div className="flex relative w-4/12">
      <Image
        width={250}
        height={250}
        src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681238780004fee513bf/view?project=6809910a000e66c57d35&mode=admin"
        alt="Person"
      />
      <div className="absolute top-5 right-0 w-44 h-44">
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
