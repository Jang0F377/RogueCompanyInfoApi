const gadgets = [
  {
    name: "Smoke Grenade",
    unique: false,
    level: {
      base: {
        desc: "A grenade that releases a thick cloud of obscuring smoke.",
      },
      tier1: {
        desc: "Increased smoke duration.",
      },
      tier2: {
        desc: "Increased grenade count by 1.",
      },
    },
  },
  {
    name: "Grenade",
    unique: false,
    level: {
      base: {
        desc: "A grenade that explodes after a short fuse and can be cooked.",
      },
      tier1: {
        desc: "Increased explosion radius.",
      },
      tier2: {
        desc: "Damage increased to 150.",
      },
    },
  },
  {
    name: "C4",
    unique: false,
    level: {
      base: {
        desc: "A plastic explosive device that can be detonated remotely.",
      },
      tier1: {
        desc: "Increased throw distance.",
      },
      tier2: {
        desc: "Damage increased to 150.",
      },
    },
  },
  {
    name: "Active Protection System",
    unique: false,
    level: {
      base: {
        desc: "Deploy a gadget that negates the next incoming projectile.",
      },
      tier1: {
        desc: "Increased gadget count by 1.",
      },
      tier2: {
        desc: "Increased durability and detection radius.",
      },
    },
  },
  {
    name: "EMP Grenade",
    unique: false,
    level: {
      base: {
        desc: "Damage equipment and prevent targets from using their abilities, gadgets and radar for a duration.",
      },
      tier1: {
        desc: "Increased EMP duration.",
      },
      tier2: {
        desc: "Increased grenade count by 1.",
      },
    },
  },
  {
    name: "Incendiary Grenade",
    unique: false,
    level: {
      base: {
        desc: "A grenade that creates a lingering pool of fire.",
      },
      tier1: {
        desc: "Increased radius.",
      },
      tier2: {
        desc: "Increased fire duration.",
      },
    },
  },
  {
    name: "Flashbang",
    unique: false,
    level: {
      base: {
        desc: "A grenade that temporarily blinds anyone within its blast radius.",
      },
      tier1: {
        desc: "Increased explosion radius.",
      },
      tier2: {
        desc: "Increased grenade count by 1.",
      },
    },
  },
  {
    name: "Semtex Grenade",
    unique: false,
    level: {
      base: {
        desc: "A grenade that sticks to surfaces, and people, before exploding.",
      },
      tier1: {
        desc: "Increased throw speed and increases stuck damage to 250.",
      },
      tier2: {
        desc: "Increased explosion radius.",
      },
    },
  },
  {
    name: "Sticky Sensor",
    unique: false,
    level: {
      base: {
        desc: "A gadget that sticks to surfaces and reveals enemies.",
      },
      tier1: {
        desc: "Increased reveal radius.",
      },
      tier2: {
        desc: "Increased gadget count by 1.",
      },
    },
  },
  {
    name: "Adrenaline Shot",
    unique: false,
    level: {
      base: {
        desc: "An adrenaline shot that heals, instantly starts health regeneration and increases movement speed.",
      },
      tier1: {
        desc: "Bonus movement speed lasts longer.",
      },
      tier2: {
        desc: "Carry an additional Shot.",
      },
    },
  },
  {
    name: "Bounce Grenade",
    unique: false,
    level: {
      base: {
        desc: "A grenade that starts its fuse when bouncing off of walls.",
      },
      tier1: {
        desc: "Increased explosion radius.",
      },
      tier2: {
        desc: "Increased damage to 125.",
      },
    },
  },
  {
    name: "Tear Gas Grenade",
    unique: true,
    level: {
      base: {
        desc: "A grenade that creates a field of disorienting gas.",
      },
      tier1: {
        desc: "Increases gas duration.",
      },
      tier2: {
        desc: "Increased grenade count by 1.",
      },
    },
  },
  {
    name: "Cluster Smoke",
    unique: true,
    level: {
      base: {
        desc: "A grenade that releases a cluster of thick clouds of obscuring smoke.",
      },
      tier1: {
        desc: "Increases smoke duration.",
      },
      tier2: {
        desc: "Increase number of clusters to 3.",
      },
    },
  },
  {
    name: "Trip Mine",
    unique: true,
    level: {
      base: {
        desc: "A deployable mine that detonates when enemies approach from the front.",
      },
      tier1: {
        desc: "Tripmine becomes less conspicuous and increases durability.",
      },
      tier2: {
        desc: "Carry an additional Tripmine.",
      },
    },
  },
];

module.exports = gadgets;
