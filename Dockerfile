
FROM node:21.0.0-alpine3.18 AS build
WORKDIR /src
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine3.17 AS base
USER app
WORKDIR /app
EXPOSE 80
COPY --from=build /src/dist .