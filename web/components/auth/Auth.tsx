"use client";

import React, { useState } from "react";

function Auth({ type }: { type: "LOGIN" | "REGISTER" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-[400px]">
      <h1 className="text-8xl mb-10 text-white font-bold">
        {type === "LOGIN" ? "Log in" : "Sign up"}
      </h1>

      <div className="mt-5">
        {type === "REGISTER" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
        />
        {type === "LOGIN" && (
          <p className="text-right mb-2 font-semibold text-white">
            Forgot password??
          </p>
        )}
        <button
          className={`${
            type === "LOGIN" ? "bg-[#239f7a]" : "bg-[#0b5ed7]"
          } text-white rounded-md text-xl h-12 p-2 px-4 mb-4 w-full focus:ring-1 focus:ring-[#eeeeee] `}
        >
          {type === "LOGIN" ? "Log in" : "Register"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
