import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await User.create(payload);
  return result;
};

export const userServices = {
  createStudentIntoDB,
};
