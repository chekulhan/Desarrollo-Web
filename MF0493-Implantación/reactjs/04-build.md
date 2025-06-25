# Build con Docker

nginx es un servidor web muy rápido y eficiente que se utiliza principalmente para:

Servir archivos estáticos (como páginas HTML, imágenes, CSS, JavaScript) a los usuarios.

Actuar como proxy inverso, es decir, recibir solicitudes y reenviarlas a otros servidores (por ejemplo, a un servidor Node.js).

Manejar muchas conexiones simultáneas de forma eficiente gracias a su arquitectura basada en eventos asíncronos.




Vamos a empaquetar una aplicacion front-end de vite como una imagen de Docker.

```bash
$ docker build -t my-vite-app .
$ docker run -d -p 80:80 my-vite-app
$ docker exec -it nombre_del_contenedor /bin/sh
```

