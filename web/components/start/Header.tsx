import { faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <div className="w-full px-20 py-8 text-white flex justify-between items-center ">
      <div>
        <h1 className="text-3xl font-bold">QUIZ PARTY</h1>
      </div>

      <div className="flex items-center gap-2 text-[#cfd4e9] text-lg">
        <FontAwesomeIcon icon={faUsers} />
        <p>234 Playing Now</p>
      </div>

      <div className="flex items-center gap-2 text-[#cfd4e9] text-lg">
        <FontAwesomeIcon bounce icon={faTrophy} color="#f9c66a" />
        <p className="text-white font-medium">Top 3 win 50</p>
      </div>

      <div>
        <button className="font-medium text bg-[#2d359e] text-xl px-4 py-1 rounded-md">Leave Quiz</button>
      </div>
    </div>
  );
}

export default Header;
