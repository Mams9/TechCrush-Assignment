# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# The app listens on port 3000
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
