import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const academicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
  }),
});

export const academicFacultyValidation = {
  academicFacultyValidationSchema,
};
