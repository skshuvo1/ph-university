import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};

const getAllAcademicFaculties = async () => {
  const result = await AcademicDepartmentModel.find();
  return result;
};

const getAcademicFacultyById = async (id: string) => {
  const result = await AcademicDepartmentModel.findById(id);
  return result;
};

const getAcademicSemesterByIdAndUpdate = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id, payload, {
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
