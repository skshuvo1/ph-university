import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import AcademicDepartmentValidation from './academicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(AcademicDepartmentValidation),
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
