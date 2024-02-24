// const http = require("http");
// const handler = require("./Routes");
const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// const server = http.createServer(app);
// server.listen(3000);
// app.use((req, res, next) => {
//   console.log("Hello");
//   next();
// });
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
// To Crate a server using Express
app.listen(3000);
