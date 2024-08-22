import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudentById);
router.patch('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

export const studentRoutes = router;
