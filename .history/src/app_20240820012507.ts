import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const a = 10;

  const b = 4;

  res.send(a + b);
});

export default app;
