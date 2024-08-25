import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import AcademicDepartmentValidationSchema from './academicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(AcademicDepartmentValidationSchema),
  academicFacultyController.createAcademicFaculty,
);

router.get('/', academicFacultyController.getAcademicFaculties);
router.get('/:id', academicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:id',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
);

export const academicFacultyRoutes = router;
