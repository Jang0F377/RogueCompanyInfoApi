const express = require("express");
const Primary = require("../models/Primary");
const Melee = require("../models/Melee");
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

primaryRouter
  .route("/:primaryId")
  .get((req, res, next) => {
    Primary.findById(req.params.primaryId)
      .then((primary) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(primary);
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

module.exports = primaryRouter;
