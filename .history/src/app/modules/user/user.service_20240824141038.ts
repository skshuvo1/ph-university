import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  user.id = generateStudentId(admissionSemester);

  const newUser = await User.create(user);
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = Student.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
