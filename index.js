const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page\n");
  } else if (req.url === "/auth") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("User authentication endpoint active\n");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  }
});

server.listen(port, () => {
  console.log("Server running at http://localhost:3000/");
});
