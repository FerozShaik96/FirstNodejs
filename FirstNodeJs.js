// const http = require("http");
// const handler = require("./Routes");
const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contact");
const successfulRoute = require("./routes/successful");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// const server = http.createServer(app);
// server.listen(3000);
// app.use((req, res, next) => {
//   console.log("Hello");
//   next();
// });
app.use("/successful", successfulRoute);
app.use("/contact", contactRoute);
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "Error.html"));
});
// To Crate a server using Express
app.listen(3000);
