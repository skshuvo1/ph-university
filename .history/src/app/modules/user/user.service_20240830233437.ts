import mongoose from 'mongoose';
import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../error/appError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession()

  try {
    user.id = await generateStudentId(admissionSemester as TAcademicSemester);

    const newUser = await User.create([user], {session});
    console.log(newUser);
    if (!newUser.length) {
throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user')
    }
      payload.id = newUser.id;
      payload.user = newUser._id;
  
      const newStudent = Student.create(payload);
      return newStudent;
    }
  }
  } catch (err) {}
 

export const userServices = {
  createStudentIntoDB,
};
