"use client";

import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { quizId } = useParams();
  return <div>{quizId}</div>;
}

export default Page;
