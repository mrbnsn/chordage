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

# Railway.app automatically sets the PORT environment variable
EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
