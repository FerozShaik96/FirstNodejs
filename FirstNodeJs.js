// const http = require("http");
// const handler = require("./Routes");
const express = require("express");
const app = express();
// const server = http.createServer(app);
// server.listen(3000);
app.use((req, res, next) => {
  console.log("Hello");
  next();
});
app.use((req, res, next) => {
  res.send("<h1>Hello from Express </h1>");
});
// To Crate a server using Express
app.listen(3000);
