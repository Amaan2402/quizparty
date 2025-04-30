import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import InfoCard from "@/components/landing/InfoCard";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <div>
        <InfoCard
          title="Live quizzes"
          description="Host quizzes in real-time and engage your community"
        />
        <InfoCard
          title="Generate questions with AI"
          description="Easily create questions basesd on your quiz topic"
        />
        <InfoCard
          title="Analytics & Insights"
          description="Track performance with comprehensive data statistics"
        />
        <InfoCard
          title="Discord Integration"
          description="Integrate seamlessly with Discord for community engagement"
        />
      </div>
    </div>
  );
}
