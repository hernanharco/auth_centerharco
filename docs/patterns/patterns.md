# 🧩 Patrones de Arquitectura

Este documento describe los patrones de diseño y la arquitectura que guían el desarrollo en AUTH_CENTERHARCO. Comprender estos patrones es esencial para contribuir con código consistente y mantenible.

---

## 1. Patrones de Backend (NestJS / MongoDB)

La arquitectura del backend se basa en la separación de responsabilidades, dividiendo la interacción de datos y la lógica de negocio en capas distintas.

### 1.1. Patrón de Servicio y DAO (Data Access Object)

Este patrón establece una jerarquía clara para el flujo de datos:

| Capa | Propósito | Responsabilidad |
| :--- | :--- | :--- |
| **Controlador** | Recibe la petición HTTP (NestJS). | Valida la entrada y llama al Servicio. |
| **Servicio** (`src/service/`) | **Lógica de Negocio.** | Orquesta operaciones, aplica reglas de negocio, y llama al DAO. |
| **DAO** (`src/service/dao/`) | **Acceso a Datos.** | Implementa el CRUD (Crear, Leer, Actualizar, Borrar) directamente contra MongoDB. |

**Ventajas:**
* **Aislamiento:** Permite cambiar la base de datos sin modificar el código de la lógica de negocio en el Servicio.
* **Pruebas Unitarias:** El Servicio puede ser probado fácilmente al "simular" (mockear) la respuesta del DAO.

### 1.2. Patrón RBAC (Role-Based Access Control)

El Control de Acceso Basado en Roles (RBAC) es el modelo utilizado para gestionar la autorización, es decir, **qué puede hacer** un usuario en el sistema.

#### Mecanismo:

1.  **Definición:** Los **Roles** (`ADMIN`, `EDITOR`, `USER_CLIENTE`) son definidos con un conjunto de **Permisos** (ej. `users:create`, `reports:view`).
2.  **Almacenamiento:** El rol del usuario se almacena en la base de datos (MongoDB).
3.  **Token:** Al iniciar sesión, el `AuthService` inyecta los roles del usuario en el **JWT Payload**.
4.  **Verificación:** En las rutas de los Controladores de NestJS, utilizamos *Guards* y *Decorators* (`@Roles('ADMIN')`) para verificar el JWT y asegurar que el usuario tiene el rol necesario antes de procesar la petición.

## 2. Patrones de Frontend (React / Next.js)

La arquitectura del frontend se centra en la reutilización de lógica y el aislamiento de la interfaz de usuario.

### 2.1. Custom Hooks

El patrón de **Custom Hooks** es nuestra principal herramienta para reutilizar la lógica de estado y los efectos secundarios (como llamadas a la API) a lo largo de la aplicación.

* **Ubicación:** `frontend/src/hooks/`
* **Propósito:** Encapsular todo el ciclo de vida de una pieza de lógica.

**Ejemplo (`useAuth`):**

El *hook* `useAuth` que utilizas es el punto de entrada para toda la lógica de autenticación en la UI. Su responsabilidad incluye:
1.  Hacer la petición de `login/signup` al backend (API).
2.  Manejar el estado local de la sesión (ej. `isLoading`, `isLoggedIn`).
3.  Retornar un objeto de funciones y estados (`{ login, logout, user, isLoading }`) para que cualquier componente los consuma.

### 2.2. Componentes de Composición (Composition)

Los componentes en `src/components/` se construyen priorizando la **Composición** sobre la Herencia.

* **Tipos:**
    * **Componentes UI Atómicos (`src/components/ui/`):** Elementos base simples (ej. `Button`, `Input`).
    * **Componentes de Flujo (`src/components/auth/`, `src/components/dashboard/`):** Combinan múltiples componentes atómicos y aplican la lógica de los Custom Hooks para crear secciones funcionales de la interfaz de usuario (ej. `LoginForm` o `UserProfileCard`).