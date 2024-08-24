import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);

router.get('/', academicSemesterController.getAcademicSemesters);

export const academicSemesterRoutes = router;
