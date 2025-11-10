/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Define dónde buscar los archivos de stories
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  
  // Define los addons que usará Storybook
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  
  // Configuración del framework (React + Vite)
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  
  // Configuración de la documentación
  docs: {
    autodocs: "tag",
  },
};

export default config;