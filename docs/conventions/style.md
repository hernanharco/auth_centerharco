# 🎨 Guía de Estilo y Formato

Este documento establece las directrices de estilo, formato y organización del código para el proyecto AUTH_CENTERHARCO. El objetivo principal es mantener una **calidad, legibilidad y uniformidad** máxima en toda la base de código.

---

## 1. Reglas Generales de Formato

### 1.1. Indentación y Espaciado

* **Indentación:** Usar **2 espacios** para la indentación.
* **Longitud de Línea:** Máximo de **120 caracteres** (aunque se recomienda mantenerse por debajo de 100).
* **Espacios en Bloques:** Usar siempre un espacio antes de la llave de apertura:
    ```typescript
    // Correcto
    if (user.isAdmin) { /* ... */ }

    // Incorrecto
    if (user.isAdmin){ /* ... */ }
    ```

### 1.2. Puntuación

* **Punto y Coma (Semicolons):** **Obligatorio** al final de cada declaración.
* **Coma Final (Trailing Commas):** Se debe usar comas finales en objetos, arrays y parámetros de funciones de varias líneas para facilitar las revisiones de código (git diffs).
* **Citas (Quotes):** Usar **comillas simples (`'`)** para todas las cadenas de texto, salvo que sea imprescindible el uso de comillas dobles o *template literals*.

## 2. Estilo de Código (JavaScript / TypeScript)

### 2.1. Declaración de Variables

* **Const vs Let:** Usar **`const`** por defecto. Usar **`let`** solo cuando el valor deba ser reasignado.
* **Destructuración:** Preferir la destructuración de objetos y arrays al acceder a sus propiedades.

    ```typescript
    // Correcto
    const { userId, username } = user;

    // Incorrecto
    const userId = user.userId;
    const username = user.username;
    ```

### 2.2. Funciones

* **Funciones Flecha:** Usar la sintaxis de función de flecha (`=>`) para callbacks, métodos de clase que necesiten mantener el contexto (`this`), y componentes React.
* **Retorno Implícito:** Usar el retorno implícito de una sola línea cuando sea apropiado.

    ```typescript
    // Retorno implícito
    const getItemId = (item: Item) => item.id;

    // Retorno explícito para lógica de varias líneas
    const calculateTotal = (items: Item[]) => {
      let total = 0;
      items.forEach(item => total += item.price);
      return total;
    };
    ```

### 2.3. Tipado (TypeScript)

* **Tipado Explícito:** Tipar todas las funciones (argumentos y valores de retorno), interfaces, y variables complejas.
* **Interfaces vs Types:** Usar **Interfaces** para definir la forma de los objetos, clases y props de componentes. Usar **Types** para alias de tipos, uniones o intersecciones.
* **Evitar `any`:** El uso de `any` está prohibido. Utilizar `unknown` o tipos más específicos cuando sea necesario.

### 2.4. Módulos e Imports

* **Orden de Imports:** Agrupar y ordenar los *imports* en este orden, separados por una línea en blanco:
    1.  Módulos de Node.js (e.g., `fs`, `path`).
    2.  Librerías externas (e.g., `react`, `nest/common`).
    3.  Módulos y alias internos del proyecto (e.g., `@/components`, `@/lib`).
    4.  Archivos relativos (e.g., `./`, `../`).
* **Importación por Defecto vs Nombrada:** Usar la importación por defecto para módulos que exportan un único objeto principal; usar importaciones nombradas para utilidades específicas.

## 3. Estilo Específico de Frontend (React / Next.js)

### 3.1. Componentes

* **Componentes de Función:** Todos los componentes deben ser funciones de flecha tipadas con `FC` (Function Component) o simplemente el tipo de la función con `Props`.
* **Props:** Las `props` deben desestructurarse en el argumento de la función.
* **Condicionales:** Usar operadores ternarios o cortocircuito (`&&`) dentro de JSX para lógica simple. Usar bloques `if`/`else` fuera del `return` para lógica compleja.

    ```tsx
    // Correcto - Lógica simple en JSX
    return (
      <button>
        {isLoading ? 'Cargando...' : 'Enviar'}
      </button>
    );

    // Correcto - Lógica compleja fuera del return
    if (!data) {
      return <LoadingSpinner />;
    }
    return (
      // ... JSX del componente
    );
    ```

### 3.2. Estilo (Tailwind CSS)

* **Clases:** Las clases de Tailwind deben estar definidas directamente en el elemento JSX (`className="..."`).
* **Ordenamiento:** Utilizar el plugin de ordenamiento de clases de Tailwind (Prettier) para mantener una secuencia lógica y consistente (Ejemplo: `flex` antes de `p-4`).

## 4. Herramientas de Automatización

Para asegurar el cumplimiento de estas guías, utilizamos:

| Herramienta | Propósito | Configuración Clave |
| :--- | :--- | :--- |
| **Prettier** | Formato de código automatizado. | 2 espacios, semicolons, trailing commas. |
| **ESLint** | Análisis estático, detección de errores y problemas de estilo. | Reglas de React Hooks, tipado de TypeScript. |

Se espera que todos los desarrolladores ejecuten estas herramientas o configuren su editor para el **formato automático al guardar** (`Format On Save`).