import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudentById);
router.get('/:id', studentController.deleteStudent);

export const studentRoutes = router;
