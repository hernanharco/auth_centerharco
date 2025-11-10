/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // 1️⃣ Stories: rutas relativas dentro del contenedor
  // Suponemos que los stories están en storybook/src/
  stories: ["../frontend/src/**/*.stories.@(js|jsx|ts|tsx)", "../frontend/src/**/*.mdx"],

  // 2️⃣ Addons recomendados
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],

  // 3️⃣ Framework
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // 4️⃣ Configuración de Vite para Docker
  viteFinal: async (config) => {
    return {
      ...config,
      server: {
        host: "0.0.0.0", // Permite acceso desde fuera del contenedor
        port: 80, // Puerto fijo dentro del contenedor
        strictPort: true, // Evita que Vite cambie de puerto
      },
      resolve: {
        ...config.resolve,
        alias: {
          "@": "/app/src", // Ajusta según tu estructura
        },
      },
    };
  },
};

export default config;
