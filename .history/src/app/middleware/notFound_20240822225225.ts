/* eslint-disable @typescript-eslint/no-unused-vars */


import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export const globalErrorHandlers = ( 
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found'
    err: '',
  });
};

export default globalErrorHandlers;