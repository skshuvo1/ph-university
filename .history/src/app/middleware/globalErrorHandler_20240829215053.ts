/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export const globalErrorHandlers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    message,
    err: err,
  });
};

export default globalErrorHandlers;
