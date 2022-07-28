const mongoose = require("mongoose");

const meleeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unique: {
    type: Boolean,
    required: false,
  },
  stats: {
    base: {
      bodyDamage: {
        type: Number,
        required: true,
      },
      throwDamage: {
        type: Number,
        required: true,
      },
      swingRate: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
    tier1: {
      bodyDamage: {
        type: Number,
        required: true,
      },
      throwDamage: {
        type: Number,
        required: true,
      },
      swingRate: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
    tier2: {
      bodyDamage: {
        type: Number,
        required: true,
      },
      throwDamage: {
        type: Number,
        required: true,
      },
      swingRate: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
  },
});

const Melee = mongoose.model("Melee", meleeSchema);
module.exports = Melee;
