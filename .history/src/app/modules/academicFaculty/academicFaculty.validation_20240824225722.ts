import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const academicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Password must be string',
  }),
});

export const userValidation = {
  academicFacultyValidationSchema,
};
