const mongoose = require("mongoose");

const gadgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unique: {
    type: Boolean,
    required: false,
  },
  level: {
    base: {
      desc: {
        type: String,
        required: true,
      },
    },
    tier1: {
      desc: {
        type: String,
        required: true,
      },
    },
    tier2: {
      desc: {
        type: String,
        required: true,
      },
    },
  },
});

const Gadget = mongoose.model("Gadget", gadgetSchema);
module.exports = Gadget;
