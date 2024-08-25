import { z } from 'zod';
import { Types } from 'mongoose';

// Zod schema for validating AcademicDepartment data
const AcademicDepartmentValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  academicFaculty: z.instanceof(Types.ObjectId),
});
export default AcademicDepartmentValidationSchema;
