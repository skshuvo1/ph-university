import { z } from 'zod';

// Define the Zod schema based on the TUser interface
const userValidationSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .max(20, 'password can not be more than 20 characters'),
  needsPasswordChange: z.boolean(),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']),
  isDeleted: z.boolean().default(false),
});

export default userValidationSchema;
