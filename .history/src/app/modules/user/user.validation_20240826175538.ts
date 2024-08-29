import { z } from 'zod';

const studentValidationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  password: z.string().nonempty('Password is required'),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(['admin', 'student', 'faculty'], {
    required_error: 'Role is required',
  }),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const studentValidations = {
  studentValidationSchema,
};
