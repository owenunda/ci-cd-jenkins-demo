import express, { Request, Response } from "express";
import { env } from "./config/env.js";

const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    environment: env.nodeEnv,
  });
});

app.listen(env.port, () => {
  console.log(`Servidor escuchando en puerto ${env.port}`);
});
