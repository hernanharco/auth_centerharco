📚 Manual de Arquitectura y Buenas Prácticas

¡Bienvenido al manual de arquitectura del proyecto Autenciacion para Usuarios!

Este documento es la guía oficial para entender la estructura, los patrones de diseño, y las convenciones de código utilizadas en el frontend (next) y el backend (nest.js).

🚀 Empezar

Este proyecto se adhiere al principio de Documentación como Código.

Instalación (Docker):
Asegúrate de tener Docker Desktop ejecutándose.

docker compose up -d


Servicios Clave:
| Servicio | Puerto Local | Propósito |
| :--- | :--- | :--- |
| Aplicación Principal (Frontend) | http://localhost:5176/ | Vista del usuario final. |
| Manual Interactivo (Storybook) | http://localhost:6007/ | Documentación visual de componentes. |
| Manual Conceptual (VitePress) | http://localhost:7174/ | Guía de arquitectura (este sitio). |

💡 Principios Fundamentales

Este proyecto está construido bajo tres pilares de desarrollo:

Modularidad de Dominio: Los componentes se agrupan por la característica .

Separación de Responsabilidades (SoC): El acceso a datos se aísla en el patrón DAO, y la lógica de estado se aísla en Custom Hooks.

Consistencia: El código debe ser uniforme en todo el proyecto, aplicando las reglas de ESLint/Prettier y las convenciones de nomenclatura definidas aquí.

Utiliza el menú lateral para navegar por las guías detalladas.