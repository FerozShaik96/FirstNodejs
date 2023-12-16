const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let dataMessage = fs.readFileSync(`./message.txt`, "utf8");
  console.log(dataMessage);
  if (url === "/") {
    res.write("<html>");
    res.write(`<body><h1>${dataMessage}</h1></body>`);
    res.write("<header><title>My First Page</title></header>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});
server.listen(3000);
