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
}: {
  title: string;
  redirectUrl: string;
  icon: IconProp;
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
        <div style={{ width: "20px", height: "20px", marginRight: "15px" }}>
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#ffffff", width: "100%", height: "100%" }}
          />
        </div>

        <p>{title}</p>
      </div>
    </Link>
  );
}

export default SideBarNavItem;
