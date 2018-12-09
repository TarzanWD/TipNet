FROM node:9.11-alpine
EXPOSE 8080

RUN mkdir -p /app
WORKDIR /app

RUN apk update

RUN apk add dumb-init

# first copy only dependency files for caching yarn install
COPY package.json /app/package.json

RUN cd /app
RUN ls
# install nodejs packages
RUN npm install

ENTRYPOINT ["dumb-init"]
