import React from "react";

function Card({ title, desc }: { title: string | number; desc: string }) {
  return (
    <div className="bg-[#3f3faf] text-white rounded-lg min-w-[32%] max-w-[32%] px-3 py-2">
      <h1 className="text-lg md:text-2xl font-medium">{title}</h1>
      <p className="font-light">{desc}</p>
    </div>
  );
}

export default Card;
