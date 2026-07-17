# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

# Kopiere package Dateien aus dem Unterordner
COPY website-sonja/package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projekts
COPY website-sonja/ .

# Baue die Anwendung
RUN npm run build -- --configuration production

# Stage 2: Serve
FROM nginx:stable-alpine

# Kopiere die gebauten Dateien zu Nginx
# Hinweis: Angular 19 application builder legt Dateien oft in dist/website-sonja/browser ab
COPY --from=build /app/dist/website-sonja/browser /usr/share/nginx/html

# Kopiere eine optionale Nginx Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
