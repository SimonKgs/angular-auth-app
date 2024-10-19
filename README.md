# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0-next.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# BUGS

There is an error in time I create this app on angular when it is checking the style sheets.
to fix or patch it I must modify a line on the following route:

packages/angular/build/src/tools/vite/middlewares/assets-middleware.js

<!-- // Shim the stylesheet if a component ID is provided
            if (componentId.length > 0) {
              // Validate component ID
-              if (/^[_.\-\p{Letter}\d]+-c\d{9}$/u.test(componentId)) {
+              if (/^[_.\-\p{Letter}\d]+-c\d+$/u.test(componentId)) { -->

you can see it on this rep:
https://github.com/angular/angular-cli/pull/28658/commits/77781f027ce29412908cbd4b3affc1c00ed54746