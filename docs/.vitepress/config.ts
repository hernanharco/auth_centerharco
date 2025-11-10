// .docs/.vitepress/config.ts

import { defineConfig } from 'vitepress';

export default defineConfig({
  ignoreDeadLinks: true,
  // ... (otras configuraciones)
   themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Componentes (Storybook)', link: 'http://localhost:6007/?path=/docs/configure-your-project--docs', target: '_blank' }
    ],
    sidebar: [
      {
        text: 'Guía del Proyecto',
        items: [
          { text: 'Introducción', link: '/guide/introduction' },
          { text: 'Estructura', link: '/guide/structure' }
        ]
      },
      {
        text: 'Convenciones',
        items: [
          { text: 'Nomenclatura', link: '/conventions/naming' },
          { text: 'Estilo', link: '/conventions/style' }
        ]
      },
      // 👇 AÑADIR ESTA NUEVA SECCIÓN 👇
      {
        text: 'Patrones de Arquitectura',
        // Asumiendo que el archivo principal es /patterns/patterns.md
        // Si el archivo es /patterns.md y no hay subcarpeta, usa el link directo '/patterns'
        items: [
          // Ya que creamos patterns.md y se sugiere que esté en la carpeta patterns/
          { text: 'Patrones Principales', link: '/patterns/patterns' } 
          // Si tuvieras más archivos, irían aquí (ej: { text: 'RBAC', link: '/patterns/rbac' })
        ]
      }
      // 👆 FIN DE LA NUEVA SECCIÓN 👆
    ],
    // ... (otras configuraciones de themeConfig)
  }
});