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
    <div className="bg-[#1e1d6b] p-3 max-w-[250px] max-h-[300px] rounded-md ">
      <div className="mb-2 min-h-36 ">
        <Image
          src={imageSrc}
          alt={title}
          width={width}
          height={height}
          className="rounded-md object-contain"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
