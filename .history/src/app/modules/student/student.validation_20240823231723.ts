import { z } from 'zod';

// Zod schema for userName
const userNameValidationSchema = z.object({
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
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required'),
  fatherOccupation: z.string().nonempty('Father occupation is required'),
  fatherContactNo: z.string().nonempty('Father contact no is required'),
  motherName: z.string().nonempty('Mother name is required'),
  motherOccupation: z.string().nonempty('Mother occupation is required'),
  motherContactNo: z.string().optional(),
});

// Zod schema for localGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Local guardian name is required'),
  occupation: z.string().nonempty('Local guardian occupation is required'),
  contactNo: z.string().nonempty('Local guardian contact no is required'),
  address: z.string().nonempty('Local guardian address is required'),
});

// Zod schema for student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female'], {
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string().nonempty('Date of birth is required'),
      email: z
        .string()
        .email('Invalid email format')
        .nonempty('Email is required'),
      contactNo: z.string().nonempty('Contact no is required'),
      emergencyContactNo: z
        .string()
        .nonempty('Emergency contact no is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string().nonempty('Present address is required'),
      permanentAddress: z.string().nonempty('Permanent address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema.optional(),
      profileImg: z.string().optional(),
    }),
  }),
});

export default createStudentValidationSchema;
