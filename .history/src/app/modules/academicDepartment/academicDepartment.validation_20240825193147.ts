import { z } from 'zod';

// Zod schema for validating AcademicDepartment data
const AcademicDepartmentValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  academicFaculty: z.string(),
});
export default AcademicDepartmentValidation;
