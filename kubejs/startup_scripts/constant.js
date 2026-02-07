//priority:980

Anoxia.Constant.Tinker.Material = {
  //Metal
  Iron: { MeltPoint: 1538 },
  Gold: { MeltPoint: 1064 },
  Copper: { MeltPoint: 1085 },
  Netherite: { MeltPoint: 2255 },
  Tin: { MeltPoint: 232 },
  Lead: { MeltPoint: 328 },
  Silver: { MeltPoint: 961 },
  Nickel: { MeltPoint: 1455 },
  Platinum: { MeltPoint: 1768 },
  Aluminum: { MeltPoint: 660 },
  Desh: { MeltPoint: 1540 },
  Ostrum: { MeltPoint: 1825 },
  Calorite: { MeltPoint: 1950 },

  //Alloy
  Steel: { MeltPoint: 1450 },
  RoseGold: { MeltPoint: 960 },
  Signalum: { MeltPoint: 1279 },
  Lumium: { MeltPoint: 1357 },
  Enderium: { MeltPoint: 1753 },
  Bronze: { MeltPoint: 913 },
  Electrum: { MeltPoint: 1064 },
  Invar: { MeltPoint: 1427 },
  Constantan: { MeltPoint: 1447 },
  Brass: { MeltPoint: 945 },

  //Gem
  Lapis: { MeltPoint: 1533 },
  Diamond: { MeltPoint: 3557 },
  Emerald: { MeltPoint: 2852 },
  Quartz: { MeltPoint: 1713 },
  Ruby: { MeltPoint: 2047 },
  Sapphire: { MeltPoint: 2047 },
  Coal: { MeltPoint: 1126 },

  //Stone
  Clay: { MeltPoint: 1129 },
  Stone: { MeltPoint: 1351 },
  Magma: { MeltPoint: 1511 },
  ScorchedStone: { MeltPoint: 1702 },
  Obsidian: { MeltPoint: 2132 },
};

Anoxia.Constant.Tinker.SmeltingFactor = {
  BaseTime: {
    Cooling: 60,
    Melting: 400,
  },

  Furnace: {
    Heat: 0.8,
  },

  Environment: {
    Conduction: 0.6, // Contact
    Convection: 0.0, // air / liquid / wind
    Radiation: 2.2, // IR / vuoto
  },

  EnvironmentWeight: {
    Conduction: 0.4,
    Convection: 0.0,
    Radiation: 2.8,
  },
};
