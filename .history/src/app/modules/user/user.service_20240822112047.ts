import config from '../../config';
import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const result = await User.create(payload);

  if (!password) {
    password = config.default_pass as string;
  }

  let user = {};

  user.role = 'student';
  return result;
};

export const userServices = {
  createStudentIntoDB,
};
