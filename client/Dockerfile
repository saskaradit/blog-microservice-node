# Base Image
FROM node:alpine

ENV CI=true

# File Directory
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]