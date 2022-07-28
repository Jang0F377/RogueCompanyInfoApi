const express = require("express");
const Secondary = require("../models/Secondary");
const secondaryRouter = express.Router();

secondaryRouter.route("/").get((req, res, next) => {
  Secondary.find()
    .then((secondary) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(secondary);
    })
    .catch((err) => next(err));
});

module.exports = secondaryRouter;
