# Use the Node alpine official image
FROM node:lts-alpine

# Create and change to the app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install concurrently globally (или можно как devDependency)
RUN npm install -g concurrently

# Copy source code
COPY . .

# Build Angular (SSR)
RUN npm run build

# Expose ports (SSR + json-server)
EXPOSE 4000
EXPOSE 3000

# Start both servers
CMD ["npm", "run", "start:all"]
