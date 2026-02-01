# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# Runtime
FROM nginx:1.27-alpine

# Optional: add a minimal nginx config for SPA-like routing (Astro is static so default is ok)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Keep default nginx entrypoint
