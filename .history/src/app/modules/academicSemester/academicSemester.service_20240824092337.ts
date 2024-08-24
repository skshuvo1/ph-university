import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);

  type TAcademicSemesterNameCodeMapper = {
    Autumn: '01';
    Summar: '02';
    Fall: '03';
  };

  const academicSemesterNameCodeMapper = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  };
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
