# Node.js & Docker Deployment Assignment

A simple Node.js (Express) application containerized with Docker and pushed to Docker Hub.

## App Overview
- `GET /` – simple HTML landing page
- `GET /api/status` – JSON health check (hostname, uptime, timestamp)
- `GET /api/hello?name=YourName` – JSON greeting

## Tech Stack
- Node.js 18 + Express
- Docker
- Docker Hub

## Project Structure
```
.
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
## Screenshots

### 1. Docker Build Command
![Docker Build](screenshots/docker-build.png)

### 2. Docker Hub Image
![Docker Hub](screenshots/dockerhub-image.png)

### 3. Running Docker Container (`docker ps`)
![Docker PS](screenshots/docker-ps.png)

### 4. Live Application
![Live App](screenshots/live-app.png)
