# ==== Base ====
FROM node:20-alpine AS base

# Directorio de trabajo
WORKDIR /docs

# Habilitar Corepack (para pnpm)
RUN corepack enable

# ==== Instalar dependencias locales ====
# Copiamos solo los archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos dependencias del proyecto localmente
RUN pnpm install --frozen-lockfile

# ==== Build (si tienes scripts de build, opcional) ====
# Por ejemplo, si tienes un build de VitePress:
COPY . .
RUN pnpm run build
 
# ==== Runner ====
# Servimos los archivos de forma ligera
# Instalamos serve localmente (no global)
RUN pnpm add serve

# Puerto que exponemos
EXPOSE 80

# Comando para iniciar el servidor
CMD ["npx", "serve", "-s", ".vitepress/dist", "-l", "80"]
