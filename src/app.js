import express from "express";
import cors from "cors";
import routesPessoas from './routes/pessoas.js';

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(routesPessoas);

export default app;