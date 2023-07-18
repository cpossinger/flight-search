# Stage 1: Build Angular app
FROM node:latest as builder

WORKDIR /flight-search/frontend

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve Angular app with NGINX
FROM nginx:latest

COPY --from=builder /flight-search/frontend/dist/frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
