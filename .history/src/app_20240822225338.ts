import express from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/user.route';
import globalErrorHandlers from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('hello hello hello');
});

app.use(globalErrorHandlers);
app.use(notFound);

export default app;
