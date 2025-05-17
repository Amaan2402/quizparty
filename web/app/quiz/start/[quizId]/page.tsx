"use client";

import Header from "@/components/start/Header";
import MainContent from "@/components/start/MainContent";
import { joinQuiz } from "@/utils/quiz";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { io, Socket } from "socket.io-client";

type Question = {
  questionText: string;
  options: {
    index: number;
    text: string;
  }[];
  questionIndex: number;
  id: string;
};

type Participant = {
  name: string;
  email: string;
  id: string;
  reconnected: boolean;
  isBanned: boolean;
};

// UI Screens
const ErrorScreen = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-red-500">{message}</h1>
  </div>
);

const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-blue-500">Loading...</h1>
    <h1 className="text-xl font-medium">Please wait...Fetching quiz data</h1>
  </div>
);

const CountdownScreen = ({ seconds }: { seconds: number }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-lg font-medium">Quiz will start in {seconds} seconds</p>
  </div>
);

const WaitingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-blue-500">Quiz is not live</h1>
    <h1 className="text-xl font-medium">
      Please wait... Quiz is not started yet
    </h1>
  </div>
);

type QuizStatus =
  | "loading"
  | "waiting"
  | "countdown"
  | "live"
  | "error"
  | "isWaitingForNextQuestion";

function Page() {
  const { quizId } = useParams();
  const socket = useRef<Socket | null>(null);

  const [quizStatus, setQuizStatus] = useState<QuizStatus>("loading");
  const [error, setError] = useState("");
  const [countDown, setCountDown] = useState(0);

  const [participant, setParticipant] = useState<Participant | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [timePerQuestion, setTimePerQuestion] = useState(0);

  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [isBanned, setIsBanned] = useState(false);

  // Connect to socket after joining
  useEffect(() => {
    if (!participant) return;

    if (participant.isBanned) {
      setIsBanned(true);
      return;
    }

    const socketInstance = io("http://localhost:3005", {
      reconnectionAttempts: 3,
      reconnectionDelay: 3000,
      withCredentials: true,
    });

    socket.current = socketInstance;

    socket.current.emit("join-room", { ...participant });

    // Quiz Start Countdown from server
    socket.current.on("start-quiz", (data) => {
      setCountDown(data.startsIn + 2);
      setQuizStatus("countdown");

      const quizStartsInInterval = setInterval(() => {
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(quizStartsInInterval);
            setQuizStatus("live");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    });

    socket.current.on("new-question", (data) => {
      setQuestion(data.question);
      setTimePerQuestion(data.timePerQuestion);
      setQuizStatus("live");
    });

    socket.current.on("quiz-completed", (data) => {
      if (data.status) {
        setIsQuizEnded(true);
      }
    });

    socket.current.on("participant-banned", () => {
      setIsBanned(true);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [participant]);

  // Handle joining quiz on mount
  useEffect(() => {
    const handleJoinQuiz = async () => {
      toast.promise(joinQuiz(quizId as string), {
        loading: "Joining quiz...",
        success: (data) => {
          console.log("Joined quiz successfully", data);
          setParticipant(data.participant);
          setTimePerQuestion(data.timePerQuestion);
          if (data.reconnected && data.isQuizStarted) {
            setQuizStatus("isWaitingForNextQuestion");
            return "Reconnected to quiz: waiting for next question";
          } else if (data.reconnected && !data.isQuizStarted) {
            setQuizStatus("waiting");
            return "Reconnected to quiz: waiting for quiz to start";
          } else {
            setQuizStatus("waiting");
            return "Joined quiz: waiting for quiz to start";
          }
        },
        error: (err) => {
          setQuizStatus("error");
          setError(err.response?.data?.message || "Failed to join quiz");
          return err.response?.data?.message || "Failed to join quiz";
        },
      });
    };

    if (quizId && quizId.length > 0) {
      handleJoinQuiz();
    }
  }, [quizId]);

  useEffect(() => {}, [question]);

  if (isBanned) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          You have been banned
        </h1>

        <p>
          You have been banned from this quiz. Please contact the quiz
          administrator for more information.
        </p>
      </div>
    );
  }

  // Render UI based on quiz status
  if (quizStatus === "loading") return <LoadingScreen />;
  if (quizStatus === "error") return <ErrorScreen message={error} />;
  if (quizStatus === "waiting") return <WaitingScreen />;
  if (quizStatus === "countdown")
    return <CountdownScreen seconds={countDown} />;

  if (quizStatus === "isWaitingForNextQuestion") {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-blue-500">
            Waiting for next question...
          </h1>
        </div>
      </div>
    );
  }

  if (isQuizEnded) {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-blue-500">
            Quiz has ended. Thank you for participating!
          </h1>

          <p>Your score will be calculated and shared with you soon.</p>
        </div>
      </div>
    );
  }
  if (quizStatus === "live" && question)
    return (
      <div>
        <Header />
        <MainContent
          question={question}
          timePerQuestion={timePerQuestion}
          questionIndex={question.questionIndex}
        />
      </div>
    );

  return null;
}

export default Page;
