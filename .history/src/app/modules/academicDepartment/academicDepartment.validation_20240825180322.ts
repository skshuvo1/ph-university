import { z } from 'zod';
import { Types } from 'mongoose';

// Zod schema for validating AcademicDepartment data
const AcademicDepartmentValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'), // Name must be a non-empty string
  academicFaculty: z.instanceof(Types.ObjectId), // Validate as a Mongoose ObjectId
});

export default AcademicDepartmentValidationSchema;
