const express = require("express");
const Gadget = require("../models/Gadget");
const Melee = require("../models/Melee");
const gadgetRouter = express.Router();

gadgetRouter.route("/").get((req, res, next) => {
  Gadget.find()
    .then((gadget) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(gadget);
    })
    .catch((err) => next(err));
});

gadgetRouter
  .route("/:gadgetId")
  .get((req, res, next) => {
    Gadget.findById(req.params.gadgetId)
      .then((gadget) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(gadget);
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

module.exports = gadgetRouter;
