# 🗺️ Estructura del Proyecto

El proyecto AUTH_CENTERHARCO utiliza una arquitectura de repositorio unificado (**monorepo**), organizando la lógica del servidor y la interfaz de usuario en carpetas separadas de alto nivel.

El directorio raíz contiene dos carpetas principales: `backend` y `frontend`.

---

## 1. Directorio Raíz (`AUTH_CENTERHARCO`)

| Carpeta/Archivo | Descripción |
| :--- | :--- |
| **`backend/`** | Contiene el código fuente del servidor (NestJS). |
| **`frontend/`** | Contiene el código fuente de la aplicación web de identidad (Next.js). |
| **`docs/`** | Archivos de la documentación generada por VitePress. |
| **`.qodo`** | Archivos de configuración de herramientas de desarrollo o QA internas (Pendiente de confirmar uso). |
| **`docker-compose.yaml`** | Define y ejecuta los contenedores (backend, base de datos, etc.) en entornos de desarrollo y producción. |
| **`package.json`** | Script de comandos del monorepo y dependencias compartidas. |
| **`pnpm-lock.yaml`** | Bloqueo de dependencias de pnpm. |
| **`index.md`** | Página principal de la documentación. |

## 2. Estructura del Backend (`backend/`)

El backend sigue la estructura modular de NestJS:

| Carpeta/Archivo | Descripción |
| :--- | :--- |
| **`dist/`** | Artefactos de la construcción (código compilado). |
| **`node_modules/`** | Dependencias del backend. |
| **`src/`** | **Código fuente principal.** Contiene módulos, servicios, controladores y entidades. |
| **`test/`** | Archivos de pruebas unitarias e *end-to-end*. |
| **`.env`** | Variables de entorno para el entorno local. |
| **`Dockerfile`** | Instrucciones para construir la imagen de Docker del backend. |
| **`nest-cli.json`** | Archivo de configuración de la interfaz de línea de comandos de NestJS. |
| **`package.json`** | Dependencias específicas del backend y scripts de ejecución. |

## 3. Estructura del Frontend (`frontend/`)

El frontend utiliza el App Router de Next.js, priorizando la convención por función y *layout*:

| Carpeta/Archivo | Descripción |
| :--- | :--- |
| **`.next/`** | Caché de construcción de Next.js. |
| **`node_modules/`** | Dependencias del frontend. |
| **`src/`** | **Código fuente principal de la aplicación.** |
| **`src/app/`** | Contiene las rutas de la aplicación (e.g., `(auth)/login/page.tsx`, `(dashboard)/profile/page.tsx`). |
| **`src/components/`** | Componentes reutilizables. Organizados en subcarpetas (`auth/`, `dashboard/`, `ui/`). |
| **`src/hooks/`** | Lógica reutilizable de React (Custom Hooks, e.g., `useAuth.ts`). |
| **`src/lib/`** | Funciones de utilidad y lógica de negocio que no son componentes (e.g., `actions.ts`, `utils.ts`, `definitions.ts`). |
| **`next.config.ts`** | Archivo de configuración principal de Next.js. |
| **`tailwind.config.ts`** | Configuración de clases de estilos con Tailwind CSS. |
| **`Dockerfile.dev`** | Dockerfile específico para el entorno de desarrollo. |

---

## ❓ ¿Qué sigue?

Hemos cubierto la introducción y la estructura. ¿Quieres que continúe actualizando la documentación, por ejemplo, con el archivo **`blueprint.md`** o la documentación de la carpeta **`patterns`**?