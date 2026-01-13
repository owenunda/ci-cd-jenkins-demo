# 1 imagen base 
FROM node:22-alpine

# 2 directorio de trabajo dentro del contenerdor
WORKDIR /app

# 3 copiamos solo lo neceario para instalar dependencias
COPY package*.json ./

#. 4 instalacion limpia -> idea para CI
RUN npm ci

# 5. copiamos el resto del proyecto
COPY  . .

# 6 construimos la app
RUN npm run build

#7 puerto expuesto -> algo mas informativo

# 8 Arranque en produccion
CMD [ "npm", "start" ]


