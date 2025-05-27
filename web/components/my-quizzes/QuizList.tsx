import QuizCard from "./QuizCard";

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

export function QuizList({
  quiz,
  mode,
}: {
  quiz: quiz[];
  mode: "CREATED" | "PARTICIPATED";
}) {
  console.log("RENDERED QUIZ LIST", quiz.length, mode);
  if (quiz.length === 0 && mode === "PARTICIPATED") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>
          You have not participated in any quizzes yet. Join a quiz to see it
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 flex justify-between flex-wrap gap-4">
      {quiz.map((q) => (
        <QuizCard key={q.id} q={q} mode={mode} />
      ))}
    </div>
  );
}
