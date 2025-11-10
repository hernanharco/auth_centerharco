# ----------------------------------------
# STAGE 1: BUILDER
# Propósito: Instalar dependencias y generar los archivos estáticos de Storybook.
# ----------------------------------------
FROM node:20-slim AS builder

# Directorio de trabajo
WORKDIR /app

# Habilitar Corepack para pnpm
RUN corepack enable

# 1. Copiamos archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# 2. Instalamos y limpiamos caché. Usamos --frozen-lockfile.
RUN pnpm install --frozen-lockfile && pnpm store prune

# 3. Copiamos el resto del código fuente (necesario para la compilación)
COPY . .

# 4. Ejecutamos el script de build de Storybook
RUN pnpm run build-storybook

# ----------------------------------------
# STAGE 2: RUNNER (Final Image)
# Propósito: Servir los archivos estáticos de forma ligera.
# ----------------------------------------
    #Usamos 'slim' para una imagen final limpia y estable
FROM node:20-slim AS runner 

# Directorio de trabajo
WORKDIR /app

# 1. Instalamos 'serve' globalmente usando NPM (soluciona el problema de PNPM global)
RUN npm install -g serve

# 2. Copiamos los archivos estáticos generados desde la etapa 'builder'
# Los colocamos en una subcarpeta clara.
COPY --from=builder /app/storybook-static ./storybook-static

# 3. Puerto de la aplicación final
EXPOSE 80

# 4. Comando de inicio: servimos la carpeta compilada
# El comando 'serve' ya está en el PATH gracias a la instalación global de npm.
CMD ["serve", "-s", "storybook-static", "-l", "80"]