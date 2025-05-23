import Link from "next/link";
import React from "react";

function HeroTextContainer() {
  return (
    <div>
      <h1 className="font-semibold text-6xl pt-2">
        Create quizzes instantly <br /> for your audience
      </h1>
      <Link href="/auth/signin">
        <button className="bg-[#1d907c] text-3xl px-6 py-2 rounded-md font-medium mt-12 cursor-pointer">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HeroTextContainer;
