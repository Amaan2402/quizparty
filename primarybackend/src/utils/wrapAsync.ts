import { NextFunction, Request, Response } from "express";

export const wrapAsync = (fn: Function) => {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch((err: Error) => {
      next(err);
    });
  };
};
