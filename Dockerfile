# Use the official Angular CLI image to build the project.
FROM trion/ng-cli as builder
WORKDIR /app
COPY . .
RUN npm install
RUN ng build --prod

# Nginx to serve the built files
FROM nginx:alpine
COPY --from=builder /app/dist/my-angular-app /usr/share/nginx/html
