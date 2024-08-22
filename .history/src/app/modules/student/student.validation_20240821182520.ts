import { z } from 'zod';

// Zod schema for userName
const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name can not be more than 20 characters')
    .refine(
      (value) => {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      {
        message: 'First name must be capitalized',
      },
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .max(20, 'Last name can not be more than 20 characters')
    .nonempty('Last name is required'),
});

// Zod schema for guardian
const guardianSchema = z.object({
  fatherName: z.string().nonempty('Father name is required'),
  fatherOccupation: z.string().nonempty('Father occupation is required'),
  fatherContactNo: z.string().nonempty('Father contact no is required'),
  motherName: z.string().nonempty('Mother name is required'),
  motherOccupation: z.string().nonempty('Mother occupation is required'),
  motherContactNo: z.string().optional(),
});

// Zod schema for localGuardian
const localGuardianSchema = z.object({
  name: z.string().nonempty('Local guardian name is required'),
  occupation: z.string().nonempty('Local guardian occupation is required'),
  contactNo: z.string().nonempty('Local guardian contact no is required'),
  address: z.string().nonempty('Local guardian address is required'),
});

// Zod schema for student
const studentValidationSchema = z.object({
  id: z.string().nonempty('Id is required'),
  password: z.string(),
  name: userNameSchema,
  gender: z.enum(['male', 'female'], { required_error: 'Gender is required' }),
  dateOfBirth: z.string().nonempty('Date of birth is required'),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  contactNo: z.string().nonempty('Contact no is required'),
  emergencyContactNo: z.string().nonempty('Emergency contact no is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().nonempty('Present address is required'),
  permanentAddress: z.string().nonempty('Permanent address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema.optional(),
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'block']).default('active'),
});

// export const validateStudent = (data: unknown) => {
//   return studentSchema.safeParse(data);
// };

export default studentValidationSchema;
