export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: string;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
