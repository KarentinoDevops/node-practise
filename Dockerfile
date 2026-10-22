FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["node" , "server.js"]