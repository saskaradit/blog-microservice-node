# Base Image
FROM node:alpine

# File Directory
WORKDIR /app

COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]