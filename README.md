# ShadowLabs

## Development Setup

### Docker Compose Environments

This project uses separate Docker Compose configurations for development and production:

- **Production (default)**: `docker-compose.yml` - No port mapping, services accessed via reverse proxy
- **Development**: `docker-compose.yml` + `docker-compose.dev.yml` - Port mapping and hot reload enabled

### Running the Application

#### Development Environment
```bash
# Start development environment with port mapping
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Access services:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

#### Production Environment
```bash
# Start production environment (no direct port access)
docker compose up --build
```

### VS Code Tasks

Use Ctrl+Shift+P and search for "Tasks: Run Task" to access:

- **Docker: Start Development Environment** (default) - Starts dev environment with port mapping
- **Docker: Start Production Environment** - Starts production environment
- **Docker: Stop Development Environment** - Stops dev containers
- **Docker: Stop Environment** - Stops production containers
- **Docker: Clean Environment** - Removes containers, volumes, and images

### Port Forwarding

In development mode, you can now use VS Code port forwarding on ports 3000 (frontend) and 5000 (backend) without conflicts.
