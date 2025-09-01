# Step 1: Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files to Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
