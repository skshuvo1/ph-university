import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import AcademicDepartmentValidation from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  academicDepartmentController.createAcademicDepartment,
);

router.get('/', academicDepartmentController.getAllAcademicDepartment);
router.get('/:id', academicDepartmentController.getSingleAcademicDepartment);
router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidation,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;
