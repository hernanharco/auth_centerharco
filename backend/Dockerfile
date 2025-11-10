# =====================================
# 🏗️ ETAPA 1: BUILD (compila el código)
# =====================================
FROM node:20 AS builder
WORKDIR /usr/src/app

# Habilitamos pnpm (viene con corepack desde Node 16+)
RUN corepack enable

# Copiamos archivos de dependencias e instalamos todo (incluyendo dev deps)
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código fuente y construimos NestJS (dist/)
COPY . .
RUN pnpm run build


# =====================================
# 🧩 ETAPA 2: PRODUCCIÓN (imagen final)
# =====================================
FROM node:20-alpine AS prod
WORKDIR /usr/src/app

# Establecemos variable de entorno
ENV NODE_ENV=production

# Copiamos únicamente lo necesario para ejecutar
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

# Instalamos solo dependencias de producción
RUN pnpm install --prod --frozen-lockfile

# Exponemos el puerto donde corre NestJS
EXPOSE 3000

# Comando de inicio
CMD ["pnpm", "run", "start:prod"]
