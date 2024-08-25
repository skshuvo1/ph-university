import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
  }),
});

export const academicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
