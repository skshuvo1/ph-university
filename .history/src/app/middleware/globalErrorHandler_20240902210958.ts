/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';

export const globalErrorHandlers: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  const handleZodError = (err: ZodError) => {
    statusCode = 400;

    const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    return {
      statusCode,
      message: 'Zod Validation Error',
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    message = 'I am zodError';

    const simplifiedError = handleZodError(err);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // amiError: err,
  });
};

export default globalErrorHandlers;
