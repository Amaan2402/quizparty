import { NextFunction, Request, Response } from "express";

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
      };
    }
  }
}
import { CustomError } from "../utils/CustomError";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Auth middleware triggered", req.path);
  // console.log("Auth middleware triggered", req.headers);
  const paths = ["/api/auth/login", "/api/auth/register", "/socket.io/"];
  if (paths.includes(req.path)) {
    return next();
  }

  const token =
    req.headers["authorization"]?.split(" ")[1] || req.cookies?.token;
  if (!token) {
    throw new CustomError("Unauthorized: Token is missing", 401);
  }

  const isTokenvalid = verifyToken(token);
  if (!isTokenvalid) {
    throw new CustomError("Unauthorized: Invalid token", 401);
  }

  req.user = { ...isTokenvalid };
  next();
};
