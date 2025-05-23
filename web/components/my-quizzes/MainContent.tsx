"use client";

import React, { useState } from "react";
import Header from "./Header";
import { QuizList } from "./QuizList";
import NoQuizCard from "./NoQuizCard";

enum QuizStatus {
  created = "CREATED",
  live = "LIVE",
  started = "STARTED",
  ended = "ENDED",
  null = "NULL",
}
enum RewardBrands {
  amazon = "amazon",
  flipkart = "flipkart",
  swiggy = "swiggy",
  myntra = "myntra",
  ajio = "ajio",
  zomato = "zomato",
}

type quizzesCreated = {
  id: string;
  title: string;
  totalParticipants: number;
  status: QuizStatus;
  createdAt: Date;
  timePerQuestion: number;
  reward?: {
    brand: RewardBrands;
    voucherCode: string;
  };
}[];

type quizzesJoined = {
  id: string;
  joinedAt: Date;
  title: string;
  createdAt: Date;
  createdBy: string;
  totalParticipants: number;
  timePerQuestion: number;
  status: QuizStatus;
  reward?: {
    brand: RewardBrands;
    voucherCode: string;
  };
}[];

function MainContent({
  quizzesCreated,
  quizzesJoined,
}: {
  quizzesCreated: quizzesCreated;
  quizzesJoined: quizzesJoined;
}) {
  const [mode, setMode] = useState<"CREATED" | "PARTICIPATED">("CREATED");
  console.log("RENDERED MAIN CONTENT");
  
  const handleChangeMode = () => {
    console.log("mode", mode);
    setMode((prev) => (prev === "CREATED" ? "PARTICIPATED" : "CREATED"));
  };

  return (
    <div>
      <Header mode={mode} handleChangeMode={handleChangeMode} />
      {mode === "CREATED" ? (
        <QuizList quiz={quizzesCreated} mode={mode} />
      ) : (
        <QuizList quiz={quizzesJoined} mode={mode} />
      )}
      {quizzesCreated.length === 0 && <NoQuizCard />}
    </div>
  );
}

export default MainContent;
