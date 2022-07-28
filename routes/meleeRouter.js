const express = require("express");
const Melee = require("../models/Melee");
const meleeRouter = express.Router();

meleeRouter
  .route("/")
  .get((req, res, next) => {
    Melee.find()
      .then((melee) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(melee);
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

meleeRouter
  .route("/:meleeId")
  .get((req, res, next) => {
    Melee.findById(req.params.meleeId)
      .then((melee) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(melee);
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

module.exports = meleeRouter;
