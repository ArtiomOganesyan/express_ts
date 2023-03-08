1. npm install express dotenv
2. npm install -D typescript @types/express @types/node concurrently nodemon
3. npx tsc --init
4. change tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "./dist"

    // rest options remain same
  }
}
```

5. edit package.json

```
    {
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
```

6. create index.ts
