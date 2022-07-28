const mongoose = require("mongoose");
const config = require("./config");

const initDatabase = async () => {
  await mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = initDatabase;
