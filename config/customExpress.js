const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  consign().include('controllers').into(app); // buscando as rotas dentro da pasta controllers
  return app;
}

