
FROM node:20-slim AS builder
WORKDIR /app
# Install dependencies first for better caching
COPY package.json package-lock.json bun.lockb ./
RUN npm install --legacy-peer-deps
# Copy only source code after dependencies are installed
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]