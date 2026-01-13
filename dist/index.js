import express from "express";
import { env } from "./config/env.js";
const app = express();
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        environment: env.nodeEnv,
    });
});
app.listen(env.port, () => {
    console.log(`Servidor escuchando en puerto ${env.port}`);
});
