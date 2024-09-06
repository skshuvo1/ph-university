import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandlers from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

// app.get('/', (req, res) => {
//   res.send('hello hello hello');
// });

const test = async (req: Request, res: Response) => {
  Promise.reject();
};

app.get('/', test);

app.use(globalErrorHandlers);
app.use(notFound);

export default app;
