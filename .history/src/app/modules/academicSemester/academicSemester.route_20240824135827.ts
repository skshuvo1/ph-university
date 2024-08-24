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
router.get('/:id', academicSemesterController.getSingleAcademicSemester);
router.patch('/:id',validateRequest(AcademicSemesterValidation.updateAcademicSemesterValidation) academicSemesterController.updateAcademicSemester);

export const academicSemesterRoutes = router;
