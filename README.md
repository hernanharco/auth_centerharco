# 🔐 Auth Center Harco

### Microservicio de Autenticación | **NestJS · MongoDB · Next.js · TailwindCSS · Docker**

---

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---

## 🧩 Descripción

**Auth Center Harco** es un sistema de autenticación de usuarios desarrollado bajo una arquitectura **Fullstack** y **orientada a microservicios**, que combina tecnologías modernas para ofrecer un entorno escalable, seguro y de alto rendimiento.

Incluye un **backend en NestJS** con base de datos **MongoDB**, un **frontend en Next.js** con diseño estilizado mediante **TailwindCSS**, y un entorno completamente contenedorizado gracias a **Docker** y `docker-compose`.

---

## 🚀 Tecnologías principales

| Área | Tecnología | Descripción |
|------|-------------|--------------|
| 🧠 **Backend** | [NestJS](https://nestjs.com/) | Framework progresivo de Node.js para crear APIs modulares y escalables |
| 🗄️ **Base de datos** | [MongoDB](https://www.mongodb.com/) | Base NoSQL orientada a documentos |
| 🌐 **Frontend** | [Next.js](https://nextjs.org/) | Framework React con SSR, rutas dinámicas y optimización automática |
| 🎨 **Estilos** | [TailwindCSS](https://tailwindcss.com/) | Framework CSS utilitario para diseño moderno y responsivo |
| 🐳 **Contenedores** | [Docker](https://www.docker.com/) | Empaquetado y despliegue de servicios en contenedores |
| ⚙️ **Orquestación** | `docker-compose` | Gestión conjunta del backend, frontend y base de datos |

---

## ⚙️ Arquitectura del proyecto

```bash
AUTH_CENTERHARCO/
├── backend/       # API REST con NestJS + Mongoose
├── frontend/      # Interfaz de usuario con Next.js + TailwindCSS
├── docs/          # Documentación y guías del proyecto
├── docker-compose.yml
└── README.md
```

## ✨ Características principales

- 🔐 **Registro, inicio de sesión y autenticación** mediante **JWT**
- 🧾 **Gestión de usuarios** con **MongoDB + Mongoose**
- ⚡ **Interfaz moderna y responsiva** desarrollada con **Next.js y TailwindCSS**
- 🐳 **Despliegue simplificado** mediante **Docker y docker-compose**
- 🧠 **Arquitectura modular** orientada a **microservicios**
- 📦 **Integración sencilla** con otros servicios o APIs externas

---

## 🚀 Ejecución del proyecto

### 🔧 Requisitos previos

- Tener instalado [**Docker**](https://www.docker.com/get-started)
- Tener instalado [**Node.js**](https://nodejs.org/) *(opcional para desarrollo local)*

---

### ▶️ Comando de ejecución

```bash
# Construir y levantar todos los servicios (backend, frontend y MongoDB)
docker-compose up --build
```
Una vez iniciados los contenedores:

- 🌍 **Frontend:** [http://localhost:3000](http://localhost:3000)
- ⚙️ **Backend:** [http://localhost:4000](http://localhost:4000)

---

## 👨‍💻 Autor

**Hernán Arango Cortés**  
💼 Desarrollador Fullstack  
📧 [hernan.harco@gmail.com](mailto:hernan.harco@gmail.com)  
🌐 [https://effortless-fairy-b2bde9.netlify.app/](https://effortless-fairy-b2bde9.netlify.app/)

<br/>

<p align="left">
  <a href="mailto:hernan.harco@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge" />
  </a>
  <a href="https://effortless-fairy-b2bde9.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portafolio-000000?style=for-the-badge&logo=netlify&logoColor=white" alt="Portfolio Badge" />
  </a>
</p>

---

## 🪄 Licencia

Este proyecto está bajo la licencia **MIT**, lo que permite su libre uso, modificación y distribución con atribución al autor original.

