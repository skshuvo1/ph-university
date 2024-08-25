import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
    }),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be string',
    })
    .optional(),
});
export const academicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
