---
icon: pen-to-square
date: 2022-02-10
category:
  - nodejs
tag:
  - nodejs
  - express
star: true
sticky: true
---
# express解决跨域问题

## 1.使用cors

```bash
npm install cors --save-dev 
#Or
pnpm install cors --save-dev

const cors = require('cors');
app.use(cors());
```

## 2.手动实现

```bash

app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
next();
});
```