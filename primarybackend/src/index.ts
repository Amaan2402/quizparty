import { configDotenv } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./utils/CustomError";
import { authMiddleware } from "./middlewares/auth";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth";
import quizRouter from "./router/quiz";
import { initialiseSocket } from "./socket";
import cors from "cors";

configDotenv();

const app = express();
const PORT = 3005;

const server = createServer(app);
initialiseSocket(server);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.get("/api/test", (req, res) => {
  console.log("Test request received");
  console.log("Test cookies:", req.cookies);
  console.log("Test complete");
  res.send("Test done");
});
app.use("/api/auth", authRouter);
app.use("/api/quiz", quizRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 🌍");
});

app.use(
  (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    console.log("Error occurred:", err);
    const message = err.message || "Internal Server Error";
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: message });
  }
);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀`);
});
