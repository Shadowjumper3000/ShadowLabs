FROM node:18-alpine AS base
WORKDIR /app
# Copy package files for dependency installation
COPY package.json package-lock.json bun.lockb ./
RUN npm install --legacy-peer-deps

# Development stage
FROM base AS development
WORKDIR /app
ENV NODE_ENV=development
# Copy source code (will be mounted in development)
COPY . .
# Expose Vite dev server port
EXPOSE 8080
# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM base AS build
WORKDIR /app
ENV NODE_ENV=production
# Copy source code for production build
COPY . .
# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
# Install serve to host the built files
RUN npm install -g serve
# Copy the built files from the build stage
COPY --from=build /app/dist ./dist
EXPOSE 8080
# Serve the built files on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]