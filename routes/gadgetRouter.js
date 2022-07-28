const express = require("express");
const Gadget = require("../models/Gadget");
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

module.exports = gadgetRouter;
