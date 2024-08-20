import express from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('hello hello hello');
});

export default app;
