FROM node:12
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
COPY yarn.lock  .
RUN yarn && yarn cache clean
COPY . .
CMD node ./src/index.js