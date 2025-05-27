import Image from "next/image";
import React from "react";

function InfoCard({
  title,
  description,
  imageSrc,
  width,
  height,
}: {
  title: string;
  description: string;
  imageSrc: string;
  width: number;
  height: number;
}) {
  return (
    <div className="bg-[#1e1d6b] w-[48%] md:w-[100%] p-2 sm:p-3 md:max-w-[250px] md:max-h-[300px] rounded-md ">
      <Image
        src={imageSrc}
        alt={title}
        width={width}
        height={height}
        className="rounded-md object-contain h-auto w-full min-h-[100px] max-h-[100px] "
      />
      <div>
        <h1 className="text-sm sm:text-lg font-semibold">{title}</h1>
        <p className="text-xs sm:text-base">{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
