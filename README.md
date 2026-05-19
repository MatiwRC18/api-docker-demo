# 🐳 api-docker-demo — Containerizada con Docker

API REST en Node.js/Express empaquetada con Docker para que cualquier persona pueda ejecutarla sin instalar dependencias manualmente.

> Grupo 1 — Pipeline DevOps | UNA Sede Brunca

---

## Requisitos previos

Solo necesitás tener Docker instalado en tu máquina.

- [Descargar Docker Desktop](https://docs.docker.com/get-started/get-docker/)

No necesitás instalar Node ni ninguna dependencia del proyecto — Docker se encarga de todo.

---

## Opción A: Descargar la imagen desde Docker Hub

Esta es la forma más rápida. No necesitás clonar el repositorio.

```bash
docker pull matiwrc/api-docker-demo
docker run -p 3003:3002 matiwrc/api-docker-demo
```

La API estará disponible en: http://localhost:3003

🔗 Repositorio en Docker Hub: https://hub.docker.com/r/matiwrc/api-docker-demo

---

## Opción B: Construir la imagen localmente

Si querés construir la imagen vos mismo a partir del código fuente:

**1. Clonar el repositorio**

```bash
git clone https://github.com/MatiwRC18/api-docker-demo.git
cd api-docker-demo
```

**2. Construir la imagen**

```bash
docker build -t matiwrc/api-docker-demo .
```

**3. Correr el contenedor**

```bash
docker run -p 3003:3002 matiwrc/api-docker-demo
```

La API estará disponible en: http://localhost:3003

---

## Endpoints

| Método | Ruta | Respuesta |
|--------|------|-----------|
| GET | / | { "status": "ok", "mensaje": "API corriendo correctamente" } |

---

## Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `docker ps` | Ver los contenedores corriendo |
| `docker stop <id>` | Detener el contenedor |
| `docker images` | Ver las imágenes descargadas localmente |
| `docker rmi matiwrc/api-docker-demo` | Eliminar la imagen local |

---

## Estructura del proyecto

```
api-docker-demo/
├── Dockerfile       # Instrucciones para construir la imagen
├── index.js         # Punto de entrada de la API
├── package.json     # Dependencias del proyecto
└── README.md
```

---

## Explicación del Dockerfile

```dockerfile
FROM node:18-alpine
```
Imagen base. node:18-alpine es una versión ligera de Node 18 — pesa mucho menos que una imagen completa.

```dockerfile
WORKDIR /app
```
Establece el directorio de trabajo dentro del contenedor.

```dockerfile
COPY package*.json ./
```
Copia primero los archivos de dependencias para aprovechar el cache de Docker.

```dockerfile
RUN npm install
```
Instala las dependencias dentro del contenedor en tiempo de build.

```dockerfile
COPY . .
```
Copia el resto del código al contenedor.

```dockerfile
EXPOSE 3002
```
Documenta que el contenedor escucha en el puerto 3002. El flag -p en docker run es lo que abre el puerto al host.

```dockerfile
CMD ["node", "index.js"]
```
Comando que se ejecuta cuando el contenedor inicia.

---

## ¿Por qué Docker?

Sin Docker, cada desarrollador necesita instalar manualmente la versión correcta de Node y configurar el entorno. Una diferencia de versión es suficiente para que la app deje de funcionar.

Con Docker, el entorno completo viaja dentro de la imagen. El resultado es siempre el mismo, en cualquier máquina.

---

## Integrantes

- Nombre 1
- Nombre 2
- Nombre 3
- Nombre 4
