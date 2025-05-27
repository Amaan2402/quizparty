import Link from "next/link";
import React from "react";

function HeroTextContainer() {
  return (
    <div className="">
      <h1 className="font-semibold text-base sm:text-3xl md:text-4xl pt-2">
        Create quizzes <br /> instantly <br /> for your audience
      </h1>
      <Link href="/auth/signin">
        <button className="bg-[#1d907c] text-xs sm:text-3xl px-6 py-1 rounded-md font-medium mt-2 md:mt-10 cursor-pointer">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HeroTextContainer;
