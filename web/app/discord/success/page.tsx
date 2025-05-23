"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

function Page() {
  console.log("RENDERED");
  const searchParams = useSearchParams();
  console.log(searchParams.get("code"));
  return <div>page</div>;
}

export default Page;
