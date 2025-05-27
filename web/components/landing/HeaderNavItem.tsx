"use client";

import Link from "next/link";
import toast from "react-hot-toast";

function HeaderNavItem({
  title,
  redirectTo,
  showBg = false,
}: {
  title: string;
  showBg?: boolean;
  redirectTo: string;
}) {
  return (
    <Link href={redirectTo}>
      <button
        className={`${
          showBg
            ? "bg-[#232270] hover:bg-[#1e1d6b] px-2 md:px-6 rounded-md py-1"
            : "hover:font-medium "
        } cursor-pointer text-base text-white outline-none`}
        onClick={() => {
          if (title === "Pricing") {
            toast(
              "Coming soon!, till then enjoy the services we have to offer for free",
              {
                icon: "🎉",
              }
            );
          }
        }}
      >
        {title}
      </button>
    </Link>
  );
}

export default HeaderNavItem;
