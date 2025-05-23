import React from "react";

function Card({ title, desc }: { title: string | number; desc: string }) {
  return (
    <div className="bg-[#3f3faf] text-white rounded-lg w-[200px] px-5 py-3">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="font-light">{desc}</p>
    </div>
  );
}

export default Card;
