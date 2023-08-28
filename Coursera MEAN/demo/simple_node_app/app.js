const http = require("http");
const fs = require("fs");
const dir = "./public/";
const port = process.env.PORT || 3000;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      render(res, "index.html");
    } else if (req.url === "/about") {
      render(res, "about.html");
    } else if (req.url === "/contact") {
      render(res, "contact.html");
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404 File Not Found</h1>");
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

const render = (res, file) => {};
