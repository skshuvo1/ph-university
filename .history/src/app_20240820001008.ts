import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {


a








  res.send("Hello World!");
});

export default app;
