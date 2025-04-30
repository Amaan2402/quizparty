import Image from "next/image";
import React from "react";

function InfoCard({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="bg-[#1e1d6b] p-4 rounded-md flex flex-col items-center text-center text-white">
      <div>
        <Image src={imageSrc} alt={title} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default InfoCard;
