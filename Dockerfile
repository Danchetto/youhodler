FROM node:20.10.0-alpine as base

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production && npm cache clean --force && npm install typescript -g

COPY . .

FROM base as production

ENV NODE_ENV=production

ARG PORT
ARG SERVICE_COMISSION
ARG UPDATE_FREQUENCY_SEC
ARG BINANCE_API_URL

ENV PORT=$PORT
ENV SERVICE_COMISSION=$SERVICE_COMISSION
ENV UPDATE_FREQUENCY_SEC=$UPDATE_FREQUENCY_SEC
ENV BINANCE_API_URL=$BINANCE_API_URL

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
