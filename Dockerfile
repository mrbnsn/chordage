# Stage 1: Build the React application
FROM node:16 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Remove the default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# Replace with our own custom configuration file
COPY nginx.conf /etc/nginx/conf.d

# Expose the port nginx is reachable on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
