# FootballStandingsUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Run using Docker
  - Build the Docker image: docker build -t football-standings .
  - Run the Docker container: docker run -p 4200:4200 football-standings
  - The application will be accessible at http://localhost:4200

## Ci/CD Pipeline
 - The project uses Jenkins for CI/CD. The Jenkinsfile is configured to build, test, and deploy the application.
