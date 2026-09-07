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
├── .dockerignore
└── README.md
```

## Run Locally (without Docker)
```bash
npm install
npm start
# App available at http://localhost:3000
```

## Build the Docker Image
```bash
docker build -t YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0 .
```

## Run the Container
```bash
docker run -d -p 3000:3000 YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

## Push to Docker Hub
```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

## Pull from Docker Hub
```bash
docker pull YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

---

## Screenshots

### 1. Docker Build Command
![Docker Build](screenshots/docker-build.png)

### 2. Docker Hub Image
![Docker Hub](screenshots/docker-hub.png)

### 3. Running Docker Container (`docker ps`)
![Docker PS](screenshots/docker-ps.png)

### 4. Live Application
![Live App](screenshots/live-app.png)
