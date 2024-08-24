import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import studentValidationSchema from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  userControllers.createStudent,
);

export const userRoutes = router;
