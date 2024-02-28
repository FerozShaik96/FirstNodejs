const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/successful");
});

module.exports = router;
