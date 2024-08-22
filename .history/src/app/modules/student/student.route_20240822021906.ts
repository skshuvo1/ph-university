import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
router.post('/create-student', studentController.createStudent);
router.patch('/:id', studentController.updateStudent);
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudentById);
router.delete('/:id', studentController.deleteStudent);

export const studentRoutes = router;
