import React from "react";
import Card from "./Card";

function CardSection() {
  return (
    <div className="flex justify-between mt-2">
      <Card title="12" desc="Total Quizzes" />
      <Card title="1.5 k" desc="Participants" />
      <Card title="3.2 k" desc="Responses" />
    </div>
  );
}

export default CardSection;
