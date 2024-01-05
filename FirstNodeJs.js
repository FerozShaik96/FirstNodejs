// const http = require("http");
// const handler = require("./Routes");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// const server = http.createServer(app);
// server.listen(3000);
// app.use((req, res, next) => {
//   console.log("Hello");
//   next();
// });
app.use("/add-product", (req, res, next) => {
  res.send(
    "<html><body><form action='/product' method='POST'><input type='text' name='tittle'/><input type='number' name='size'/><button type='submit'>submit</button></form></body></html>"
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express </h1>");
});
// To Crate a server using Express
app.listen(3000);
