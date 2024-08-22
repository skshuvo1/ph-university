import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';
  user.id = '2030010001';

  const result = await User.create(user);
  if (Object.keys(result).length) {
    payload.id = result.id;
    payload.user = result._id;
  }
  return result;
};

export const userServices = {
  createStudentIntoDB,
};
