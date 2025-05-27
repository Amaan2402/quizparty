import Link from "next/link";
import React from "react";

function AuthHeader() {
  return (
    <div className="bg-[#3d3da8] pt-5">
      <Link href="/">
        <h1 className="text-white text-2xl px-10 font-semibold">Quiz Party</h1>
      </Link>
    </div>
  );
}

export default AuthHeader;
