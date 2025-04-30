import React from "react";
import HeaderNavItem from "./HeaderNavItem";

function Header() {
  return (
    <div className="fixed top-0 z-10 w-full px-56 pt-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Quiz Party</h1>

        <div className="flex items-center gap-5">
          <HeaderNavItem title="Home" />
          <HeaderNavItem title="Features" />
          <HeaderNavItem title="Pricing" />
          <HeaderNavItem title="Contact" />
          <HeaderNavItem title="Login" showBg />
        </div>
      </div>
    </div>
  );
}

export default Header;
