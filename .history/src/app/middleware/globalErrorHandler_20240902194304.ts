/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const globalErrorHandlers: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

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

  if (err instanceof ZodError) {
    statusCode = 300;
    message = 'I am zodError';
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    amiError: err,
  });
};

export default globalErrorHandlers;
