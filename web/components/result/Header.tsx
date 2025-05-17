import React from "react";

function Header({ title }: { title: string }) {
  return (
    <div>
      <h1 className="font-semibold text-4xl">Quiz Results</h1>
      <h2 className="text-[#9796c6] mt-2 font-medium text-xl">{title}</h2>
    </div>
  );
}

export default Header;
