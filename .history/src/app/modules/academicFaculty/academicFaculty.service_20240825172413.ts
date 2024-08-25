import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFaculties = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getAcademicFacultyById = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const getAcademicSemesterByIdAndUpdate = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, {
    new: true,
  }).exec();
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB: createAcademicFacultyIntoDB,
  getAllAcademicSemester,
  getAcademicSemesterById: getAcademicFacultyById,
  getAcademicSemesterByIdAndUpdate,
};
