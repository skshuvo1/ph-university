import { z } from 'zod';

// Zod schema for userName
const createUserNameValidationSchema = z.object({
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
const createGuardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required'),
  fatherOccupation: z.string().nonempty('Father occupation is required'),
  fatherContactNo: z.string().nonempty('Father contact no is required'),
  motherName: z.string().nonempty('Mother name is required'),
  motherOccupation: z.string().nonempty('Mother occupation is required'),
  motherContactNo: z.string().optional(),
});

// Zod schema for localGuardian
const createLocalGuardianValidationSchema = z.object({
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
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female'], {
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string().optional(),
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
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema.optional(),
      academicDepartment: z.string(),
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
      isDeleted: z.boolean(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
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
    )
    .optional(),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .max(20, 'Last name can not be more than 20 characters')
    .nonempty('Last name is required')
    .optional(),
});

// Zod schema for guardian
const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

// Zod schema for localGuardian
const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

// Zod schema for student
const updateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z
      .object({
        name: updateUserNameValidationSchema.optional(),
        gender: z.enum(['male', 'female']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string().email('Invalid email format').optional(),
        contactNo: z.string().optional(),
        emergencyContactNo: z.string().optional(),
        bloodGroup: z
          .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
          .optional(),
        presentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        guardian: updateGuardianValidationSchema.optional(),
        localGuardian: updateLocalGuardianValidationSchema.optional(),
        academicDepartment: z.string().optional(),
        admissionSemester: z.string().optional(),
        profileImg: z.string().optional(),
        isDeleted: z.boolean().optional(),
      })
      .optional(),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
