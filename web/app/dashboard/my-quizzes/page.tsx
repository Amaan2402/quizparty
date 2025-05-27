import MainContent from "@/components/my-quizzes/MainContent";
import { getMyQuizzes } from "@/utils/quiz";
import { cookies } from "next/headers";
import React from "react";

async function page() {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Please login to view this page</h1>
      </div>
    );
  }
  
  const myQuizzes = await getMyQuizzes(token);
  console.log(myQuizzes);
  const quizzesCreated = myQuizzes.data.quizzesCreated;
  const quizzesJoined = myQuizzes.data.quizzesJoined;
  return (
    <div className="p-8 md:px-32">
      <MainContent
        quizzesCreated={quizzesCreated}
        quizzesJoined={quizzesJoined}
      />
    </div>
  );
}

export default page;
