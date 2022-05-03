//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const bodyParser = require("body-parser");

const cool = require('cool-ascii-faces');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {

  });
});

app.get("/skills", function(req, res) {
  res.render("skills", {

  });
});

app.get("/profile", function(req, res) {
  res.render("profile", {

  });
});

app.get("/portfolio", function(req, res) {
  res.render("portfolio", {

  });
});

app.get("/home", function(req, res) {
  res.render("home", {

  });
});

app.get('/cool', (req, res) => res.send(cool()))

const PORT = process.env.PORT || 5000;



app.listen(PORT);
