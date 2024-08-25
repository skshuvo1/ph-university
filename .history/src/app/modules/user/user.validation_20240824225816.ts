import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .min(1, 'Password is required')
    .max(20, 'password can not be more than 20 characters')
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
