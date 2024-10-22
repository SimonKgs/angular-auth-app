# AuthApp

This app demonstrates authentication practices using Angular as the frontend and NestJS as the backend. It serves as an example of how to use signals, computed properties, effects over signals, guards, services, .env files, and APIs, all within the new Angular paradigm. The project follows the latest changes in Angular's structure, including the use of standalone components and routes.


## Initial configuration

Avoid using Angular CLI on the first run.

Before using Angular CLI, you'll need to set up the environment. Follow these steps to get started:

1. Copy the environment file:
  Copy the .env.template and rename to .env

2. Fill in the variables:
  Update the .env file with your personal environment variables.

3. Create Angular environments (optional):
  Run the following command to generate Angular environment files:
```
npm run envs
```
  This command will also be executed automatically when you run start or build

4. Run the app:
```
npm start
```
  For a production build, use:
```
npm run build
```

5. Run with Angular CLI:
  Once the environment is set up, you can run the app using Angular CLI:
```
ng serve -o
```


## Errors

There is a known issue in Angular (at the time of creating this app) related to checking stylesheets. To fix or patch this issue, you need to modify a specific line at the following path:

packages/angular/build/src/tools/vite/middlewares/assets-middleware.js

```
            if (componentId.length > 0) 
              // Validate component ID
-              if (/^[_.\-\p{Letter}\d]+-c\d{9}$/u.test(componentId)) 
+              if (/^[_.\-\p{Letter}\d]+-c\d+$/u.test(componentId)) 
```

For more details, you can view the repository here:
[angular-cli](https://github.com/angular/angular-cli/pull/28658/commits/77781f027ce29412908cbd4b3affc1c00ed54746)