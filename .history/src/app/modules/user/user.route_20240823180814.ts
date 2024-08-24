import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

const validateRequest = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    next();
  };
};

router.post('/create-student', validateRequest, userControllers.createStudent);

export const userRoutes = router;
