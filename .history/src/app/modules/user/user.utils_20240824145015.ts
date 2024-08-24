import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const generateStudentId = (payload: TAcademicSemester) => {
  const findLastStudentId = async () => {
    const lastStudent = await User.findOne({
      role: 'student',
    });
  };

  const currentId = (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${currentId}`;

  return incrementId;
};
