import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await Student.create(payload);
  return result;
};

export const userServices = {
  createStudentIntoDB,
};
