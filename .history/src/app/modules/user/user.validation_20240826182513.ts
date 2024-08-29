import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'password can not be more than 20 characters' })
    .optional(),
});

// const updateUserValidationSchema = z.object({
//   id: z.string().nonempty('ID is required').optional(),
//   password: z.string().nonempty('Password is required').optional(),
//   needsPasswordChange: z.boolean().default(true).optional(),
//   role: z
//     .enum(['admin', 'student', 'faculty'], {
//       required_error: 'Role is required',
//     })
//     .optional(),
//   status: z.enum(['in-progress', 'blocked']).default('in-progress').optional(),
//   isDeleted: z.boolean().default(false).optional(),
//   createdAt: z.date().optional(),
//   updatedAt: z.date().optional(),
// });

export const userValidations = {
  userValidationSchema,
  //   updateUserValidationSchema,
};
