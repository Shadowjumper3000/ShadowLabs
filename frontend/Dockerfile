FROM node:20-slim

WORKDIR /app

# Install curl
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]