# Stage 1: Build the React application
FROM node:16 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a shell script that will replace ${PORT} with the environment variable at runtime
RUN echo "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf.temp && mv /etc/nginx/conf.d/default.conf.temp /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'" > entrypoint.sh
RUN chmod +x entrypoint.sh

EXPOSE 80

# Use the entrypoint script to start Nginx
ENTRYPOINT ["sh", "entrypoint.sh"]
