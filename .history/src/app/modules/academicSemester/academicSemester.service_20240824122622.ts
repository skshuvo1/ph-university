import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid code');
  }
  return result;
};

const getAllAcademicSemester = async () => {
  const result = await AcademicSemester.find();
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemester,
};
