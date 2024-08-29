import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { userValidations } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(userValidations.createUserValidationSchema),
  userControllers.createStudent,
);

export const userRoutes = router;
