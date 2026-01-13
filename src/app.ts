import express, { Request, Response, type Application } from "express";
import { env } from "./config/env.js";


const app: Application = express();
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    environment: env.nodeEnv,
  });
});

export default app;