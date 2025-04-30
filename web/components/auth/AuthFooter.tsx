"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AuthFooter() {
  const urlPath = usePathname();
  return (
    <div className="w-full bg-[#252a7f] text-white h-36 absolute bottom-0 flex items-center pl-72 text-xl font-semibold">
      {urlPath === "/auth/login" ? (
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup">
            <span className="font-light">Sign up</span>
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="font-light">Log in</span>
          </Link>
        </p>
      )}
    </div>
  );
}

export default AuthFooter;
