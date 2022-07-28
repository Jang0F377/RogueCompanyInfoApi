const express = require("express");
const Secondary = require("../models/Secondary");
const Melee = require("../models/Melee");
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

secondaryRouter
  .route("/:secondaryId")
  .get((req, res, next) => {
    Secondary.findById(req.params.secondaryId)
      .then((secondary) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(secondary);
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

module.exports = secondaryRouter;
