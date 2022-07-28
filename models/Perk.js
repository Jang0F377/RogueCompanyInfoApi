const mongoose = require("mongoose");

const perkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Perk = mongoose.model("Perk", perkSchema);
module.exports = Perk;
