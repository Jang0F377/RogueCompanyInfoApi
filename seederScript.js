const gadgets = require("./data/gadgets");
const Gadget = require("./models/Gadget");
const perks = require("./data/perks");
const Perk = require("./models/Perk");
const melees = require("./data/meleeWeapons");
const Melee = require("./models/Melee");
const primaries = require("./data/primaryWeapons");
const Primary = require("./models/Primary");
const secondaries = require("./data/secondaryWeapons");
const Secondary = require("./models/Secondary");
const initDatabase = require("./initDatabase");

initDatabase()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

const importData = async () => {
  await Gadget.deleteMany({});
  await Perk.deleteMany({});
  await Melee.deleteMany({});
  await Primary.deleteMany({});
  await Secondary.deleteMany({});
  await Gadget.insertMany(gadgets);
  await Perk.insertMany(perks);
  await Melee.insertMany(melees);
  await Primary.insertMany(primaries);
  await Secondary.insertMany(secondaries);
  console.log("Data Import Success");
  process.exit(0);
};

importData().catch((err) => console.log(err));
