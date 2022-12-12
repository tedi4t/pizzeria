FROM node:lts-alpine3.13

EXPOSE 5000

WORKDIR /usr/src/project

COPY package*.json ./

RUN npm i

COPY . .

ENTRYPOINT ["npm", "start"]
