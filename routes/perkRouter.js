const express = require("express");
const Perk = require("../models/Perk");
const Melee = require("../models/Melee");
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

perkRouter
  .route("/:perkId")
  .get((req, res, next) => {
    Perk.findById(req.params.perkId)
      .then((perk) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(perk);
      })
      .catch((err) => next(err));
  })
  .post((res) => {
    res.statusCode = 403;
    res.end("Operation not supported on this path.");
  })
  .put((res) => {
    res.statusCode = 403;
    res.end("Operation not supported on this path.");
  })
  .delete((res) => {
    res.statusCode = 403;
    res.end("Operation not supported on this path.");
  });

module.exports = perkRouter;
