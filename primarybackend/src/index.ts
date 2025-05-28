import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "http";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./utils/CustomError";
import { authMiddleware } from "./middlewares/auth";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth";
import quizRouter from "./router/quiz";
import discordRouter from "./router/discord";
import { initialiseSocket } from "./socket";
import cors from "cors";
import { handleResetParticipantConnectionStatus } from "./utils/socket";
import rateLimit from "express-rate-limit";
import { questionRouter } from "./router/question";
import { quizStatusRouter } from "./router/quizStatus";
import { participantRouter } from "./router/participant";
import { resultRouter } from "./router/result";

const app = express();
const PORT = 3005;

try {
  handleResetParticipantConnectionStatus();
} catch (error) {
  console.error("Error resetting participant connection status:", error);
}

const server = createServer(app);
initialiseSocket(server);

const allowedOrigins = [
  "http://localhost:3000",
  "https://quizparty.amaan24.tech",
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  limit: 50, // Limit each IP to 50 requests per `window` (here, per 5 minutes).
});

app.use(limiter);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/quiz/question", questionRouter);
app.use("/api/quiz/status", quizStatusRouter);
app.use("/api/quiz/participant", participantRouter);
app.use("/api/quiz/results", resultRouter);

app.use("/api/auth/discord", discordRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 🌍");
});

app.use(
  (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
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
