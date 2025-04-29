import { Request } from "express";
import { CustomError } from "./CustomError";

export const getUser = (req: Request) => {
  if (!req.user) {
    throw new CustomError("Unauthorized: User not found", 401);
  }

  return req.user.userId;
};
