"use client";

import MainContent from "@/components/automation/MainContent";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContent />
    </Suspense>
  );
}

export default Page;
