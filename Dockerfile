# Stage 1: Build the React application
#FROM node:16 AS build
FROM node:16
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install -g serve
RUN npm install
COPY . /app
RUN npm run build
#CMD ["npm", "start"]
RUN serve -s build

# Stage 2: Serve the app using Nginx
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 3001
#CMD ["nginx", "-g", "daemon off;"]
