import { faCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type quiz = {
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
  joinedAt?: Date;
  createdBy?: string;
};
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

function QuizCard(q: quiz) {
  let redirectTo = "/";

  let iconColor = "";
  let bgColor = "";
  let textColor = "";

  switch (q.status) {
    case QuizStatus.created:
      redirectTo = `/dashboard/quiz/new/${q.id}`;
      bgColor = "bg-red-300";
      textColor = "text-red-800";
      iconColor = "red";
      break;
    case QuizStatus.live:
      redirectTo = `/dashboard/quiz/live/${q.id}`;
      bgColor = "bg-green-300";
      textColor = "text-green-800";
      iconColor = "green";
      break;
    case QuizStatus.ended:
      redirectTo = `/dashboard/quiz/result/${q.id}`;
      bgColor = "bg-gray-300";
      textColor = "text-gray-800";
      iconColor = "gray";
      break;
  }
  return (
    <div className="bg-[#373694] border-2 border-[#2f3271] w-4/12 mb-2 text-white p-4 rounded-lg">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold text-xl">{q.title}</h1>
        <div
          className={`flex justify-between gap-2 items-center text-sm px-3 rounded-xl ${bgColor}`}
        >
          <FontAwesomeIcon
            icon={faCircle}
            size="sm"
            color={iconColor}
            fade={!(q.status === "ENDED")}
          />
          <p className={`${textColor} font-bold`}>{q.status}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center w-6/12 mt-2 text-[#bcc2df]">
        <FontAwesomeIcon icon={faUsers} size="sm" color="#7276a5" />
        <p>{q.totalParticipants} participants</p>
      </div>
      <div className="mt-2">
        <Link href={redirectTo}>
          <button className="w-full rounded-md font-medium bg-[#4e76f1] py-1">
            Go to Quiz
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-3 text-[#bcc2df]">
        <p>{new Date(q.createdAt).toLocaleDateString()}</p>
        <p>{`sec ${q.timePerQuestion}/ question`}</p>
      </div>
    </div>
  );
}

export default QuizCard;
