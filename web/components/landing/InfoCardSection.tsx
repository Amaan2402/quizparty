import React from "react";
import InfoCard from "./InfoCard";

function InfoCardSection() {
  return (
    <div className="flex justify-between px-56 gap-3 relative top-[-20px]">
      <InfoCard
        title="Live quizzes"
        description="Host quizzes in real-time and engage your community"
        imageSrc="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6812e5df0014c1d8a135/view?project=6809910a000e66c57d35&mode=admin"
        width={694}
        height={360}
      />
      <InfoCard
        title="Generate questions with AI"
        description="Easily create questions basesd on your quiz topic"
        imageSrc="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681262a1001a5f4095cd/view?project=6809910a000e66c57d35&mode=admin"
        width={418}
        height={259}
      />
      <InfoCard
        title="Discord Integration"
        description="Integrate seamlessly with Discord for community engagement"
        imageSrc="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681262b1003b990055c0/view?project=6809910a000e66c57d35&mode=admin"
        width={399}
        height={215}
      />
      <InfoCard
        title="Analytics & Insights"
        description="Track performance with comprehensive data statistics"
        imageSrc="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681262b900127d84a459/view?project=6809910a000e66c57d35&mode=admin"
        width={439}
        height={219}
      />
    </div>
  );
}

export default InfoCardSection;
