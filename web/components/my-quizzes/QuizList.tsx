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

export function QuizList({ quiz }: { quiz: quiz[] }) {
  return (
    <div className="mt-5 flex gap-5">
      {quiz.map((q) => (
        <QuizCard key={q.id} {...q} />
      ))}
    </div>
  );
}
