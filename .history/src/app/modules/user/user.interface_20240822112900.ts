export type TUser = {
  id: string;
  password: string;
  needsPasswordChange?: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export type newUser = {
  role: string;
  password: string;
  id: string;
};
