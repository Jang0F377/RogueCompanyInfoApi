const express = require("express");
const Primary = require("../models/Primary");
const primaryRouter = express.Router();

primaryRouter.route("/").get((req, res, next) => {
  Primary.find()
    .then((primary) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(primary);
    })
    .catch((err) => next(err));
});

module.exports = primaryRouter;
