import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemester.create();
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
