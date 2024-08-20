import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await Student.create();
  return result;
};

export const studentServices = {
  createStudentIntoDB,
};
