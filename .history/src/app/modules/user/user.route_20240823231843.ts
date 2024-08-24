import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import studentValidation from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidation.createStudentValidationSchema),
  userControllers.createStudent,
);

export const userRoutes = router;
