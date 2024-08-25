import { z } from 'zod';

// Zod schema for validating AcademicDepartment data
const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    academicFaculty: z.string(),
  }),
});

const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    academicFaculty: z.string(),
  }),
});
export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
