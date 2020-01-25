FROM node:12.14.1-alpine3.11 AS builder
WORKDIR /var/www
COPY ./ ./
RUN yarn install && yarn build

FROM node:12.14.1-alpine3.11
ARG NUXT_PORT="3000"
ARG NUXT_HOST="0.0.0.0"
ENV PORT=$NUXT_PORT \
    HOST=$NUXT_HOST
WORKDIR /var/www
COPY --from=builder /var/www/.nuxt ./.nuxt
COPY --from=builder /var/www/package.json ./package.json
COPY --from=builder /var/www/yarn.lock ./yarn.lock
RUN yarn install --production
EXPOSE $NUXT_PORT
CMD ["yarn", "start"]