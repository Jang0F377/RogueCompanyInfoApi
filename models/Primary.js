const mongoose = require("mongoose");

const primarySchema = new mongoose.Schema({
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
      fireRate: {
        type: Number,
        required: true,
      },
      range: {
        type: Number,
        required: true,
      },
      handling: {
        type: Number,
        required: true,
      },
      magSize: {
        type: Number,
        required: true,
      },
      reloadTime: {
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
      fireRate: {
        type: Number,
        required: true,
      },
      range: {
        type: Number,
        required: true,
      },
      handling: {
        type: Number,
        required: true,
      },
      magSize: {
        type: Number,
        required: true,
      },
      reloadTime: {
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
      fireRate: {
        type: Number,
        required: true,
      },
      range: {
        type: Number,
        required: true,
      },
      handling: {
        type: Number,
        required: true,
      },
      magSize: {
        type: Number,
        required: true,
      },
      reloadTime: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
    tier3: {
      bodyDamage: {
        type: Number,
        required: true,
      },
      fireRate: {
        type: Number,
        required: true,
      },
      range: {
        type: Number,
        required: true,
      },
      handling: {
        type: Number,
        required: true,
      },
      magSize: {
        type: Number,
        required: true,
      },
      reloadTime: {
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

const Primary = mongoose.model("Primary", primarySchema);

module.exports = Primary;
