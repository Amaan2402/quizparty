import React from "react";
import HeaderNavItem from "./HeaderNavItem";

function Header() {
  return (
    <div className="fixed top-0 z-10 w-full px-56 pt-5 bg-[#3d3da8] h-20 shadow-sm">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Quiz Party</h1>

        <div className="flex items-center gap-5">
          <HeaderNavItem title="Home" redirectTo="/" />
          <HeaderNavItem title="Features" redirectTo="/" />
          <HeaderNavItem title="Pricing" redirectTo="/" />
          <HeaderNavItem title="Contact" redirectTo="/contact" />
          <HeaderNavItem title="Sign in" showBg redirectTo="/auth/signin" />
        </div>
      </div>
    </div>
  );
}

export default Header;
