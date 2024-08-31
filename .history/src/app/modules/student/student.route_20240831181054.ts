import express from 'express';
import { studentController } from './student.controller';
import validateRequest from '../../middleware/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudentById);
router.patch(
  '/:iid',
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentController.updateStudent,
);
router.delete('/:id', studentController.deleteStudent);

export const studentRoutes = router;
