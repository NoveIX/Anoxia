StartupEvents.registry('item', (event) => {
  //Ingot
  event.create('enderio:crude_steel_ingot').displayName('Crude Steel Ingot').texture('enderio:item/crude_steel_ingot');
  event.create('enderio:dynamic_alloy_ingot').displayName('Dynamic Alloy Ingot').texture('enderio:item/dynamic_alloy_ingot');
  event.create('enderio:vivid_alloy_ingot').displayName('Vivid Alloy Ingot').texture('enderio:item/vivid_alloy_ingot');

  //Nugget
  event.create('enderio:crude_steel_nugget').displayName('Crude Steel Nugget').texture('enderio:item/crude_steel_nugget');
  event.create('enderio:dynamic_alloy_nugget').displayName('Dynamic Alloy Nugget').texture('enderio:item/dynamic_alloy_nugget');
  event.create('enderio:vivid_alloy_nugget').displayName('Vivid Alloy Nugget').texture('enderio:item/vivid_alloy_nugget');

  //Capacitor - ONLY 1.21.1
  /*
  event.create('enderio:grainy_capacitor', 'enderio:capacitor').displayName('Grainy Capacitor').baseValue(0.5).texture('enderio:item/capacitor/grainy_capacitor');
  event.create('enderio:prismalium_capacitor', 'enderio:capacitor').displayName('Crystalline Capacitor').baseValue(4).texture('enderio:item/capacitor/prismalium_capacitor');
  event.create('enderio:melodium_capacitor', 'enderio:capacitor').displayName('Crystalline Capacitor').baseValue(5).texture('enderio:item/capacitor/melodium_capacitor');
  event.create('enderio:stellarium_capacitor', 'enderio:capacitor').displayName('Crystalline Capacitor').baseValue(6).texture('enderio:item/capacitor/stellarium_capacitor');
  */

  //Grindball - ONLY 1.21.1
  /*
  event.create('enderio:dynamic_alloy_grinding_ball').displayName('Dynamic Alloy Grinding Ball').texture('enderio:item/grinding_ball/dynamic_alloy_grinding_ball');
  event.create('enderio:vivid_alloy_grinding_ball').displayName('Vivid Alloy Grinding Ball').texture('enderio:item/grinding_ball/vivid_alloy_grinding_ball');
  event.create('enderio:prismalium_alloy_grinding_ball').displayName('Prismalium Alloy Grinding Ball').texture('enderio:item/grinding_ball/prismalium_alloy_grinding_ball');
  event.create('enderio:melodium_alloy_grinding_ball').displayName('Melodium Alloy Grinding Ball').texture('enderio:item/grinding_ball/melodium_alloy_grinding_ball');
  event.create('enderio:stellarium_alloy_grinding_ball').displayName('Stellarium Alloy Grinding Ball').texture('enderio:item/grinding_ball/stellarium_alloy_grinding_ball');
  */
});

StartupEvents.registry('block', (event) => {
  //Block
  event.create('enderio:crude_steel_block').displayName('Crude Steel Block').soundType('metal').hardness(5.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:crude_steel_block');
  event.create('enderio:dynamic_alloy_block').displayName('Dynamic Alloy Block').soundType('metal').hardness(5.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_stone_tool');
  event.create('enderio:vivid_alloy_block').displayName('Vivid Alloy Block').soundType('metal').hardness(5.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_stone_tool');
});

//Conduit
EnderIOEvents.conduits((event) => {
  event.registerEnergyConduit('crude_conduit', 'Crude Energy Conduit', 20);
  event.registerEnergyConduit('iron_conduit', 'Iron Energy Conduit', 40);
  event.registerEnergyConduit('copper_conduit', 'Copper Energy Conduit', 80);
  event.registerEnergyConduit('electrum_conduit', 'Electrum Energy Conduit', 160);
  event.registerEnergyConduit('energyy_conduit', 'Energy Conduit', 320);
  event.registerEnergyConduit('energetic_conduit', 'Energetic Energy Conduit', 640);
  event.registerEnergyConduit('vibrant_conduit', 'vibrant Energy Conduit', 1280);
  event.registerEnergyConduit('prismalium_conduit', 'Prismalium Energy Conduit', 2560);
  event.registerEnergyConduit('melodium_conduit', 'Melodium Energy Conduit', 5120);
  event.registerEnergyConduit('stellarium_conduit', 'Stellarium Energy Conduit', 10240);
});
