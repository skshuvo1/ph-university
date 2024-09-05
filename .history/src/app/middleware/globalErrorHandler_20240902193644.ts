/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const globalErrorHandlers: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  type TErrorSources = {
    path: string | number;
    message: string;
  }[];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // err,
  });
};

export default globalErrorHandlers;
