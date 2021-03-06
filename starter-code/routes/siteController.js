const express        = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("home");
});

siteController.use((req, res, next) => {
  if (req.session.currentUser) { next(); }
  else { res.redirect("/login"); }
});

siteController.get("/secret", (req, res, next) => {
  res.render("secret");
});
module.exports = siteController;
