import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const updateStudentById = async (id: string, updateData: Partial<TStudent>) => {
  const result = await Student.findByIdAndUpdate(id, updateData, {
    new: true,
  }).exec();
  return result;
};

const deleteStudentById = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentsFromDB,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
