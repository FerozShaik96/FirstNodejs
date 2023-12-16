const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<header><title>My First Page</title></header>");
    res.write("<body><h1>Hello from my Node.js</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/home") {
    res.write("<html>");
    res.write("<header><title>My First Page</title></header>");
    res.write("<body><h1>Wlcome Home</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<header><title>My First Page</title></header>");
    res.write("<body><h1>welcome to About Page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<header><title>My First Page</title></header>");
    res.write("<body><h1>Welcome to Node.js Project</h1></body>");
    res.write("</html>");
    res.end();
  }
});
server.listen(3000);
