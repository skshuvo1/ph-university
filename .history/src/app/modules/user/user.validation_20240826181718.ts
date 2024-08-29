import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    password: z.string().nonempty('Password is required'),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum(['admin', 'student', 'faculty'], {
      required_error: 'Role is required',
    }),
    // status: z.enum(['in-progress', 'blocked']).default('in-progress'),
    // isDeleted: z.boolean().default(false),
    // createdAt: z.date().optional(),
    // updatedAt: z.date().optional(),
  }),
});

const updateUserValidationSchema = z.object({
  id: z.string().nonempty('ID is required').optional(),
  password: z.string().nonempty('Password is required').optional(),
  needsPasswordChange: z.boolean().default(true).optional(),
  role: z
    .enum(['admin', 'student', 'faculty'], {
      required_error: 'Role is required',
    })
    .optional(),
  status: z.enum(['in-progress', 'blocked']).default('in-progress').optional(),
  isDeleted: z.boolean().default(false).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const userValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
