FROM node:18-alpine as base
WORKDIR /app
# Copy package files for dependency installation
COPY package.json package-lock.json bun.lockb ./
RUN npm install --legacy-peer-deps

# Development stage
FROM base as development
WORKDIR /app
ENV NODE_ENV=development
# Copy source code (will be mounted in development)
COPY . .
# Expose Vite dev server port
EXPOSE 8080
# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM base as build
WORKDIR /app
ENV NODE_ENV=production
# Copy source code for production build
COPY . .
# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine as production
WORKDIR /usr/share/nginx/html
# Copy the built files from the build stage
COPY --from=build /app/dist .
# Copy a custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
# Create a simple nginx config to run on port 8080
RUN echo 'server { listen 8080; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]