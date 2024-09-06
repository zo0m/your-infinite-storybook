# YourInfiniteStorybook

## Structure

```
apps/admin/api
apps/admin/web
apps/admin/web-e2e

apps/your-infinite-storybook/api
apps/your-infinite-storybook/web
apps/your-infinite-storybook/web-e2e

apps/landing/web
apps/landing/web-e2e
```

## Packages install

### Config
```
    npm i --save @nestjs/config
    npm i -D dotenv
```

### Validation
```
    npm i class-validator
```

### Prettier
```
    npm i --save-dev @trivago/prettier-plugin-sort-imports
```

### Pug
```
    npm i --save-dev pug pug-plugin-ng @webdiscus/pug-loader @prettier/plugin-pug
```

### GraphQL

```
    npm i @nestjs/apollo @nestjs/graphql @nestjs/typeorm
    npm i graphql @apollo/server @apollo/client apollo-angular
```
```
    npm i --save-dev @graphql-codegen/cli
    npx graphql-codegen init
    npm i
    
     
     graphql-tools graphql-type-json
```


### History -100 ..
```
 1016  nx g @nrwl/angular:application builder-proto
 1017  npm install -D @nrwl/angular
 1018  nx g @nrwl/angular:application builder-proto
 1019  npm install -D @nrwl/nest
 1020  nx g @nrwl/nest:application builder-server-proto
 1021  npm install -D @nrwl/storybook
 1022  nx g @nrwl/storybook:configuration apps/builder-proto
 1023  nx g @nrwl/storybook:configuration builder-proto
 1024  history 10
 1025  nx g @nrwl/storybook:configuration builder-proto
 1026  nx g @nrwl/storybook:configuration builder-proto
 1027  cd ../your-infinite-storybook
 1028  nx g @nrwl/storybook:configuration your-infinite-storybook
 1029  git fetch
 1030  git fetch
 1051  nx serve
 1052  ng add @angular/material
 1053  npm install @angular/material && npx nx g @angular/material:ng-add
 1054  npm i @angular/flex-layout
 1055  npx nx g @angular/material:ng-add --project=your-infinite-storybook-web
 1056  npm i @trivago/prettier-plugin-sort-imports
 1057  npm i @trivago/prettier-plugin-sort-imports --save-dev
 1058  npm i @webdiscus/pug-loader --save-dev
 1059  npm i --save-dev pug-plugin-ng
 1060  npm i --save-dev pug
 1061  npm add --save-dev prettier @prettier/plugin-pug
 1062  npm i @nestjs/apollo @nestjs/graphql @nestjs/typeorm
igka@m your-infinite-storybook %
```

## Generating

### Libraries
```
@nrwl/angular	library	Creates an Angular library.
@nrwl/nest	library	Create a new NestJS library.
@nrwl/node	library	Create a node library.
@nrwl/workspace	library	Create a library.
@schematics/angular	library	Generate a library project for Angular.
@nestjs/schematics	library	Create a Nest library (mono-repo).
```

## Data structure

```
Project {
    name
}
File {
    name
    path
    extension
}
Component {
    name
    path
    type
}
```
