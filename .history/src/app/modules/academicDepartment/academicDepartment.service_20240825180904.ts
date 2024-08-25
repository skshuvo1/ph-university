import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicFaculties = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getAcademicFacultyById = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

const getAcademicSemesterByIdAndUpdate = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  }).exec();
  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFaculties,
  getAcademicFacultyById,
  getAcademicSemesterByIdAndUpdate,
};
