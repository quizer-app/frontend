FROM node:21.0.0-alpine3.18 AS build
WORKDIR /src
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25.3-alpine3.18 AS base
WORKDIR /usr/share/nginx/html
EXPOSE 80
COPY --from=build /src/dist .