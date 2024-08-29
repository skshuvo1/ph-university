import { z } from 'zod';

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().nonempty('Password is required'),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum(['admin', 'student', 'faculty'], {
      required_error: 'Role is required',
    }),
  }),
});

// Example usage for validation

export const studentValidations = {
  createStudentValidationSchema,
};
