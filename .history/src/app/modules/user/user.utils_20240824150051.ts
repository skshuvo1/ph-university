import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  ).lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async(payload: TAcademicSemester) => {

    console.log(await findLastStudentId);
//   const currentId = (0).toString();
//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

//   incrementId = `${payload.year}${payload.code}${currentId}`;

//   return incrementId;
// };
