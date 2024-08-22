import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await Student.create(payload);
  //  const student = new Student(payload);

  //   if (await student.isUserExists()) {
  //     throw new Error('user already exists');
  //   }

  //   const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const updateStudentById = async (id: string) => {
  const result = await Student.findByIdAndUpdate({ id });
  console.log(result);
  return result;
};

const deleteStudentById = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
