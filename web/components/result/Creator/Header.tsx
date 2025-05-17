import React from "react";

function Header({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-white font-semibold text-3xl">{title}</h1>
    </div>
  );
}

export default Header;
