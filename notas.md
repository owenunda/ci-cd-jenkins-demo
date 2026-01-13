construir la imagen 

``` bash
docker build -t ci-cd-jenkins-demo .
```
-t → nombre de la imagen
. → usa el Dockerfile de esta carpeta

---

ejecutar el contenedor
``` bash
docker run -p 3000:3000 ci-cd-jenkins-demo
```
Mapea tu puerto local 3000
Ejecuta npm start
Usa dist/ (producción real)

---

se ejecuta el contenedor con una variable de entorno
``` bash 
docker run -p 3000:3000 -e NODE_ENV=production ci-cd-jenkins-demo
```