---
icon: pen-to-square
date: 2022-01-09
category:
  - JavaScript
tag:
  - EventStream
star: true
sticky: true
---

# JavaScript实现EventStream

## 前端
``` javascript
    const closeElement = document.querySelector("#close")
    closeElement.addEventListener("click", () => {
        eventSource.close();
    });
    const eventSource = new EventSource("http://localhost:4001/")
    eventSource.onmessage = (val) => {
        console.log('val', val)
    };
    eventSource.onerror = (val) => {
        console.log('onerror', val)
    };
```

## 后端
```javascript
const http = require('http');
const eventServer = http.createServer((req, res) => {
    //请求头及跨域
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    });
    setInterval(() => {
        res.write('data: The server time is: ' + new Date() + '\n\n');
    }, 1000);
    req.connection.addListener('close', () => {
        console.log('SSE connection closed!');
    }, false);
}).listen(4001);
```