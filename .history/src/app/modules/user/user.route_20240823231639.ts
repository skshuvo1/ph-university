import express from 'express';
import { userControllers } from './user.controller';
import createStudentValidationSchema from '../student/student.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userControllers.createStudent,
);

export const userRoutes = router;
