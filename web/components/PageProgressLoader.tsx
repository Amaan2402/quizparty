"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

export default function PageTransitionLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4); // optional delay effect

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 400); // customize time if needed

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
