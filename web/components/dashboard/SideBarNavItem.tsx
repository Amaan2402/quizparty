"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { usePathname } from "next/navigation";

function SideBarNavItem({
  title,
  icon,
  redirectUrl,
  onlyIcon,
}: {
  title: string;
  redirectUrl: string;
  icon: IconProp;
  onlyIcon: boolean;
}) {
  const currentPath = usePathname();
  const isActive = currentPath === redirectUrl;
  return (
    <Link href={redirectUrl}>
      <div
        className={`${
          isActive ? "bg-[#373694]" : ""
        } p-4 rounded-md text-white font-medium flex items-center`}
      >
        <div
          style={{ width: "20px", height: "20px" }}
          className={`${onlyIcon ? "mr-0" : "mr-4"}`}
        >
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#ffffff", width: "100%", height: "100%" }}
          />
        </div>
        {onlyIcon ? null : <p>{title}</p>}
      </div>
    </Link>
  );
}

export default SideBarNavItem;
