const melee = [
  {
    name: "Throwing Axe",
    unique: false,
    stats: {
      base: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "The Throwing Axe is a fearsome thrown weapon.",
      },
      tier1: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Increases throw speed.",
      },
      tier2: {
        bodyDamage: 40,
        throwDamage: 150,
        swingRate: 2.17,
        desc: "Increases throw damage.",
      },
    },
  },
  {
    name: "Baseball Bat",
    unique: false,
    stats: {
      base: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "The baseball bat is a savage, dinger slingin, melee weapon.",
      },
      tier1: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Improves lunge distance.",
      },
      tier2: {
        bodyDamage: 65,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Increases swing damage.",
      },
    },
  },
  {
    name: "Katana",
    unique: false,
    stats: {
      base: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "The Katana is a razor-sharp melee weapon.",
      },
      tier1: {
        bodyDamage: 40,
        throwDamage: 125,
        swingRate: 2.17,
        desc: "Increases throw damage.",
      },
      tier2: {
        bodyDamage: 50,
        throwDamage: 125,
        swingRate: 2.17,
        desc: "Increases swing damage.",
      },
    },
  },
  {
    name: "Claymore",
    unique: true,
    stats: {
      base: {
        bodyDamage: 50,
        throwDamage: 100,
        swingRate: 1.52,
        desc: "A Scottish two-handed greatsword.",
      },
      tier1: {
        bodyDamage: 50,
        throwDamage: 100,
        swingRate: 1.52,
        desc: "Greatly increases melee lunge distance.",
      },
      tier2: {
        bodyDamage: 70,
        throwDamage: 100,
        swingRate: 1.52,
        desc: "Increases swing damage.",
      },
    },
  },
  {
    name: "Kukri",
    unique: true,
    stats: {
      base: {
        bodyDamage: 40,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "A knife with a forward-curved blade, designed for chopping.",
      },
      tier1: {
        bodyDamage: 50,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Increases melee damage.",
      },
      tier2: {
        bodyDamage: 50,
        throwDamage: 125,
        swingRate: 2.17,
        desc: "Increases throw damage.",
      },
    },
  },
  {
    name: "Rosie",
    unique: true,
    stats: {
      base: {
        bodyDamage: 45,
        throwDamage: 0,
        swingRate: 2.17,
        desc: "Scorch's prosthetic arm.",
      },
      tier1: {
        bodyDamage: 45,
        throwDamage: 0,
        swingRate: 2.17,
        desc: "Increased melee lunge distance.",
      },
      tier2: {
        bodyDamage: 55,
        throwDamage: 0,
        swingRate: 2.17,
        desc: "Melee attacks deal more damage and apply a damage over time to enemies.",
      },
    },
  },
  {
    name: "Sledgehammer",
    unique: true,
    stats: {
      base: {
        bodyDamage: 50,
        throwDamage: 75,
        swingRate: 1.52,
        desc: "The right tool for the job, depending on who's swinging it.",
      },
      tier1: {
        bodyDamage: 50,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Increase swing speed.",
      },
      tier2: {
        bodyDamage: 70,
        throwDamage: 75,
        swingRate: 2.17,
        desc: "Increases swing damage.",
      },
    },
  },
];

module.exports = melee;
