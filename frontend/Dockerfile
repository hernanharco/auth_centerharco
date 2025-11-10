#Dockerfile
# =====================================
# 🏗️ ETAPA 1: BUILD (compila el frontend)
# =====================================
FROM node:20 AS builder
WORKDIR /app
RUN corepack enable

# Copiamos archivos de dependencias e instalamos
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiamos el código fuente y construimos el proyecto
COPY . .
RUN pnpm run build


# =====================================
# 🚀 ETAPA 2: PRODUCCIÓN (solo lo necesario)
# =====================================
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copiamos solo el resultado de la build y dependencias necesarias
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
RUN pnpm install --prod --frozen-lockfile

# Exponemos el puerto donde servirá el frontend
EXPOSE 3000

# Comando de inicio
CMD ["pnpm", "start"]
