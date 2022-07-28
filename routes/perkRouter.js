const express = require("express");
const Perk = require("../models/Perk");
const perkRouter = express.Router();

perkRouter.route("/").get((req, res, next) => {
  Perk.find()
    .then((perk) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(perk);
    })
    .catch((err) => next(err));
});

module.exports = perkRouter;
