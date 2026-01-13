import express from "express";
import { env } from "./src/config/env.js";

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: env.NODE_ENV,
  });
});

app.listen(env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${env.PORT}`);
});
