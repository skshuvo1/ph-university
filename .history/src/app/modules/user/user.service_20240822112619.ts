import config from '../../config';
import { TStudent } from '../student/student.interface';
import { newUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const result = await User.create(payload);
  const user: newUser = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';

  return result;
};

export const userServices = {
  createStudentIntoDB,
};
