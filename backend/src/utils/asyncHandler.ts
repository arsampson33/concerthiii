import { Request, Response, NextFunction } from 'express';

export type AsyncHandler = (

  req: Request,

  res: Response,

  next: NextFunction

) => Promise<void | Response>;

export const asyncHandler = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next); // Pass errors to Express's error handler
  };
};
