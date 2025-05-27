import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_PRODUCTION === "true"
    ? "https://quizparty.onrender.com/api"
    : "http://localhost:3005/api";

export const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
