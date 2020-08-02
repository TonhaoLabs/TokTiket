FROM node:14.7.0-stretch-slim

ENV path=/app

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

CMD npm start