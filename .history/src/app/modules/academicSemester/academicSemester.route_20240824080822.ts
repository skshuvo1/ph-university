import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidationSchema } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidationSchema),
  academicSemesterController.createAcademicSemester,
);

export const academicSemesterRoutes = router;
