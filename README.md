# AuthApp

Dont use Angular CLI the first time you run the project, first you need to create the enviroment to do that follow these steps:

## Initial configuration

1. Copy the .env.template and rename to .env
2. Fill the variables with your personal variables
3. Create Angular envs using the following command:
```
npm run envs
```
It also will be executed automatically if you run start or build
```
npm start
```
or to production use
```
npm run build
```

5. Having the environment created, you can now run the app using angular CLI
```
ng serve -o
```


# Errors

There is an error on Angular in time I create this app, when it checks the style sheets.
to fix or patch it I must modify a line on the following route:

packages/angular/build/src/tools/vite/middlewares/assets-middleware.js

```
            if (componentId.length > 0) 
              // Validate component ID
-              if (/^[_.\-\p{Letter}\d]+-c\d{9}$/u.test(componentId)) 
+              if (/^[_.\-\p{Letter}\d]+-c\d+$/u.test(componentId)) 
```

you can see it on this rep:
https://github.com/angular/angular-cli/pull/28658/commits/77781f027ce29412908cbd4b3affc1c00ed54746