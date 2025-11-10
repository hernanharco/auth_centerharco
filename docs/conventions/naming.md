# 🏷️ Convenciones de Nomenclatura

Las convenciones de nomenclatura son cruciales para mantener la **legibilidad, consistencia** y **escalabilidad** del código. Este documento establece las reglas a seguir en todo el proyecto AUTH_CENTERHARCO.

---

## 1. Reglas Generales

* **Inglés:** Todos los nombres (variables, funciones, archivos, etc.) deben estar en inglés.
* **Claridad:** Los nombres deben ser descriptivos y reflejar claramente su propósito o el valor que contienen. Evita abreviaturas ambiguas.
* **Consistencia:** Una vez que se elige un estilo (por ejemplo, CamelCase para variables), debe aplicarse de manera uniforme.

## 2. Tipos de Nomenclatura

Utilizamos principalmente tres estilos: **PascalCase**, **camelCase** y **kebab-case**.

### 2.1. `PascalCase` (UpperCamelCase)

Se utiliza para entidades que representan **Clases**, **Componentes** y **Tipos/Interfaces**.

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Clases** (Backend) | PascalCase | `UserService`, `AuthModule` |
| **Componentes** (Frontend) | PascalCase | `LoginButton`, `UserProfile` |
| **Interfaces/Tipos** | PascalCase | `UserPayload`, `AppError` |

### 2.2. `camelCase` (lowerCamelCase)

Se utiliza para la mayoría de las entidades de código que no son clases.

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Variables** | camelCase | `userProfile`, `isLoading` |
| **Funciones/Métodos** | camelCase | `createUser`, `handleLoginSubmit` |
| **Constantes (locales)** | camelCase | `defaultAvatarUrl` |
| **Parámetros de función** | camelCase | `(userId: number, newName: string)` |

### 2.3. `SCREAMING_SNAKE_CASE`

Se utiliza exclusivamente para **Constantes Globales** o valores de configuración inmutables.

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Variables de Entorno** | SCREAMING_SNAKE_CASE | `API_SECRET_KEY`, `DB_HOST` |
| **Constantes (Globales)** | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE`, `DEFAULT_TIMEOUT` |

### 2.4. `kebab-case`

Se utiliza para la nomenclatura de archivos y carpetas que contienen código o componentes, especialmente en el frontend (Next.js/VitePress).

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Archivos de Markdown** | kebab-case | `naming.md`, `introduction.md` |
| **Carpetas de Módulos/Rutas** | kebab-case | `user-management/`, `auth/` |
| **Archivos de Configuración** | kebab-case | `docker-compose.yaml` |

## 3. Nomenclatura Específica de Archivos

### Backend (`backend/src`)

* **Módulos (NestJS):** `auth.module.ts`
* **Servicios:** `users.service.ts`
* **Controladores:** `auth.controller.ts`
* **Entidades:** `user.entity.ts`
* **DTOs:** `create-user.dto.ts` (Se permite el `kebab-case` para DTOs complejos para mayor claridad)

### Frontend (`frontend/src`)

* **Archivos de Rutas (Next.js):**
    * Archivos de página principal: `page.tsx`
    * Archivos de layout: `layout.tsx`
* **Componentes Reutilizables:** Siempre con `PascalCase`.
    * Carpeta: `components/`
    * Archivo: `Button.tsx`, `Modal.tsx`
* **Hooks:** Prefijo `use` + `PascalCase`.
    * Archivo: `hooks/useAuth.ts`