import dotenv from "dotenv";

dotenv.config();
/*
  como docker y jenkins NO usan .env automaticamente, 
  EN produccion las variablkes vienen del entorno, no de archivos locales 

  por eso la app debe funcionar sin el .env
*/ 

export const env = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_env === 'production'
};
