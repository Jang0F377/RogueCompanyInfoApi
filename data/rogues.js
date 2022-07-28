const prim = require("./primaryWeapons");
const second = require("./secondaryWeapons");
const melee = require("./meleeWeapons");
const gadgets = require("./gadgets");
const perks = require("./perks");

const rogues = [
  {
    id: 0,
    name: "Anvil",
    role: "Defender",
    ability: {
      usable: {
        name: "Barricade",
        description:
          "Deploy a barricade that blocks damage and movement. " +
          "Activate again to break the glass and create medium cover.",
      },
      passive: {
        name: "Immunity",
        description: "Gain immunity to Disorients and Blind Effects.",
      },
    },
    primaryGun: {
      0: prim[0],
      1: prim[1],
    },
    startingGun: {
      0: second[0],
    },
    melee: {
      0: melee[1],
    },
    gadgets: {
      0: gadgets[3],
      1: gadgets[2],
    },
    perks: {
      0: perks[1],
      1: perks[17],
      2: perks[9],
      3: perks[3],
      4: perks[8],
      5: perks[4],
      6: perks[18],
      7: perks[19],
    },
  },
  {
    id: 1,
    name: "Cannon",
    role: "Defender",
    ability: {
      usable: {
        name: "Gatling Gun",
        description:
          "A devastating Gatling Gun that fires faster the longer it is fired. Can be mounted for increased accuracy and fire rate.",
      },
      passive: {
        name: "Conflict Connoisseur",
        description:
          "Landing shots has a chance to return ammo to your current magazine. If your Gatling Gun is equipped, its duration is extended slightly.",
      },
    },
    primaryGun: {
      0: prim[19],
      1: prim[16],
    },
    startingGun: {
      0: second[2],
    },
    melee: {
      0: melee[6],
    },
    gadgets: {
      0: gadgets[2],
      1: gadgets[9],
    },
    perks: {
      0: perks[0],
      1: perks[20],
      2: perks[2],
      3: perks[15],
      4: perks[18],
      5: perks[19],
      6: perks[3],
      7: perks[4],
    },
  },
];

module.exports = rogues;
