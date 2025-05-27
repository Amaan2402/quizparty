import React from "react";
import HeaderNavItem from "./HeaderNavItem";
import Link from "next/link";

async function Header({
  user,
}: {
  user: {
    id: string;
    name: string;
    email: string;
  };
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 pt-4 sm:pt-5 sm:px-10 bg-[#3d3da8] h-16 md:h-20 shadow-sm">
      <div className="flex px-2 justify-between items-center">
        <Link href={"/"}>
          <h1 className="md:text-3xl font-semibold">Quiz Party</h1>
        </Link>

        <div className="flex items-center gap-10 md:gap-5 ">
          {/* <HeaderNavItem title="Features" redirectTo="/" /> */}
          <HeaderNavItem title="Pricing" redirectTo="/" />
          {user ? (
            <HeaderNavItem
              title="Go to dashboard"
              redirectTo="/dashboard"
              showBg
            />
          ) : (
            <HeaderNavItem title="Sign in" showBg redirectTo="/auth/signin" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
