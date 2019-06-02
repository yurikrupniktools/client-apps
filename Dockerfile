FROM node:10 as builder
WORKDIR /app
RUN cat ~/.npmrc > ~/.npmrc
COPY package-lock.json package.json ./
RUN npm install

COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY rollup.config.js .
COPY lerna.json .
COPY packages ./packages

RUN npx lerna bootstrap
RUN npx lerna run build

FROM yurikrupnik/mussia-static-html
WORKDIR /usr/src/app
COPY --from=builder /app/packages/app1/dist .
RUN npm install --only=production
ENV ROOT_PATH assets
CMD npm start

EXPOSE 80
#CMD ["npm", "start"]
