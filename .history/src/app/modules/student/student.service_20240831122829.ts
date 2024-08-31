import mongoose from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getStudentById = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentById = async (id: string, updateData: Partial<TStudent>) => {
  const session = await mongoose.startSession();

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
