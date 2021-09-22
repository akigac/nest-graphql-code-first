# Overvew
This project is copy from 23-graphql-code-first.
(https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first)

# setup
yarn install

# start
npm run start
npm run start:dev

# sample query
```
query GetRecipe {
  recipe(id: "1") {
    id
    title
    description
    creationDate
    ingredients
  }
}
```

# others
## Initial construction
- Pull all samples
```
git clone https://github.com/nestjs/nest.git
```
- sample copy
```
cp -R nest/23-nest-graphql-code-first ./nest-graphql-code-first
cd nest-graphql-code-first
```