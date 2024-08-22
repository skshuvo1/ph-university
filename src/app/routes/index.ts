import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { studentRoutes } from '../modules/student/student.route';

const router = Router();

export const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },

  {
    path: '/students',
    route: studentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
