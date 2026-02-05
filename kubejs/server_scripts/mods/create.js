ServerEvents.recipes((event) => {
  event.remove({ type: 'createaddition:liquid_burning' });

  //#region Remove ID
  const RmRecipeID = [
    'create:crafting/materials/andesite_alloy',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'create:mixing/andesite_alloy',
    'create:mixing/andesite_alloy_from_zinc',

    //Unification
    'tacz_c:thin_brass_sheet_cutting',
    'tacz_c:thin_copper_sheet_cutting',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //#region Recipes
  //Shaft
  event.remove({ output: 'create:shaft' });
  event.shaped(Item.of('create:shaft', 4), ['A', 'A'], { A: 'create:andesite_alloy' });

  //Cogwheel
  event.remove({ output: 'create:cogwheel' });
  event.shapeless('create:cogwheel', ['create:shaft', '#forge:gears/wood']);

  //Large cogwheel
  event.remove({ output: 'create:large_cogwheel' });
  event.shapeless('create:large_cogwheel', ['create:cogwheel', '#forge:gears/wood']);
  event.shapeless('create:large_cogwheel', ['create:shaft', '#forge:gears/wood', '#forge:gears/wood']);

  //Millstone
  event.remove({ output: 'create:millstone' });
  event.shaped('create:millstone', [' A ', ' B ', 'CCC'], { A: 'supplementaries:timber_frame', B: 'create:large_cogwheel', C: 'anoxia:compressed_andesite' });

  //Willmill Bearing
  event.remove({ output: 'create:windmill_bearing' });
  event.shaped('create:windmill_bearing', [' A ', 'BCB', 'BDB'], { A: '#bookshelf:slime_balls', B: 'anoxia:compressed_deepslate', C: 'minecraft:piston', D: 'create:shaft' });
  event.shaped('create:windmill_bearing', ['ABA', 'ACA'], { A: 'anoxia:compressed_deepslate', B: 'minecraft:sticky_piston', C: 'create:shaft' });

  //Windmill Sail Frame
  event.remove({ output: 'create:white_sail' });
  event.shaped('create:white_sail', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:string', B: '#forge:rods/wooden', C: 'projectred_core:silicon' });
  event.shapeless('create:white_sail', ['create:sail_frame']);

  //Sawmill
  event.remove({ output: 'create:mechanical_saw' });
  event.shaped('create:mechanical_saw', ['A', 'B'], { A: '#forge:sawblades', B: 'create:andesite_casing' });

  //Spool
  event.remove({ output: 'createaddition:spool' });
  event.shaped(Item.of('createaddition:spool', 3), ['AAA', ' B ', 'AAA'], { A: '#forge:plates/iron', B: '#forge:rods/iron' });

  //Copper Spool
  event.remove({ output: 'createaddition:copper_spool' });
  event.shaped('createaddition:copper_spool', ['AAA', 'ABA', 'AAA'], { A: '#forge:wires/copper', B: 'createaddition:spool' });
  event.shapeless('createaddition:copper_spool', ['immersiveengineering:wirecoil_copper']);

  //Gold Spool
  event.remove({ output: 'createaddition:gold_spool' });
  event.shaped('createaddition:gold_spool', ['AAA', 'ABA', 'AAA'], { A: '#forge:wires/gold', B: 'createaddition:spool' });

  //Electrum Spool
  event.remove({ output: 'createaddition:electrum_spool' });
  event.shaped('createaddition:electrum_spool', ['AAA', 'ABA', 'AAA'], { A: '#forge:wires/electrum', B: 'createaddition:spool' });
  event.shapeless('createaddition:electrum_spool', ['immersiveengineering:wirecoil_electrum']);

  //Capacitor
  event.remove({ output: 'createaddition:capacitor' });
  event.shaped('createaddition:capacitor', ['ABC', 'D D'], { A: '#forge:plates/copper', B: 'minecraft:redstone_torch', C: '#forge:plates/zinc', D: '#forge:wires/iron' });
  event.shaped('createaddition:capacitor', ['CBA', 'D D'], { A: '#forge:plates/copper', B: 'minecraft:redstone_torch', C: '#forge:plates/zinc', D: '#forge:wires/iron' });
  //#endregion

  //# =================================================================================================== #

  const CuttingPatern = [
    //Unification
    { get: [{ count: 10, item: 'tacz_c:thin_copper_sheet' }], put: [{ tag: 'forge:plates/copper' }] },
    { get: [{ count: 10, item: 'tacz_c:thin_brass_sheet' }], put: [{ tag: 'forge:plates/brass' }] },
  ];
  CuttingPatern.forEach((recipe) => {
    event.custom({
      type: 'create:cutting',
      ingredients: recipe.put,
      results: recipe.get,
      processingTime: 100,
    });
  });
  //# =================================================================================================== #

  //#region Compacting
  const CompactingPattern = [{ get: [{ item: 'createaddition:cake_base' }], put: [{ tag: 'forge:eggs' }, { item: 'minecraft:sugar' }, { item: 'minecraft:sugar' }, { tag: 'forge:dough' }] }];
  CompactingPattern.forEach((recipe) => {
    event.custom({
      type: 'create:compacting',
      ingredients: recipe.put,
      results: recipe.get,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Cutting
  const CuttingPattern = [{ get: [{ count: 3, item: 'create:shaft' }], put: [{ item: 'create:andesite_alloy' }] }];
  CuttingPattern.forEach((recipe) => {
    event.custom({
      type: 'create:cutting',
      ingredients: recipe.put,
      processingTime: 200,
      results: recipe.get,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Deploy
  const DeployPattern = [
    { get: [{ item: 'create:cogwheel' }], put: [{ item: 'create:shaft' }, { tag: 'forge:gears/wood' }] },
    { get: [{ item: 'create:large_cogwheel' }], put: [{ item: 'create:cogwheel' }, { tag: 'forge:gears/wood' }] },
  ];
  DeployPattern.forEach((recipe) => {
    event.custom({
      type: 'create:deploying',
      ingredients: recipe.put,
      results: recipe.get,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Liquid Burning
  const LiquidBurningPattern = [
    //Minecraft
    { get: 2400, put: { fluid: 'minecraft:lava', amount: 1000 } },

    //Ad Astra
    { get: 19200, put: { fluid: 'ad_astra:fuel', amount: 1000 }, heat: true },

    //Create
    { get: 4800, put: { fluidTag: 'forge:plantoil', amount: 1000 } },
    { get: 8400, put: { fluidTag: 'forge:crude_oil', amount: 1000 } },
    { get: 9600, put: { fluidTag: 'forge:biofuel', amount: 1000 }, heat: true },
    { get: 10800, put: { fluidTag: 'forge:biodiesel', amount: 1000 }, heat: true },

    //Immersive
    { get: 4800, put: { fluidTag: 'forge:creosote', amount: 1000 } },

    //Pneumaticcraft
    { get: 3600, put: { fluidTag: 'forge:ethanol', amount: 1000 } },
    { get: 12000, put: { fluidTag: 'forge:diesel', amount: 1000 }, heat: true },
    { get: 14400, put: { fluid: 'pneumaticcraft:kerosene', amount: 1000 }, heat: true },
    { get: 16800, put: { fluid: 'pneumaticcraft:gasoline', amount: 1000 }, heat: true },
    { get: 19200, put: { fluid: 'pneumaticcraft:lpg', amount: 1000 }, heat: true },

    //Thermal
    { get: 1200, put: { fluid: 'thermal:tree_oil', amount: 1000 } },
    { get: 10800, put: { fluid: 'thermal:light_oil', amount: 1000 } },
    { get: 12000, put: { fluid: 'thermal:heavy_oil', amount: 1000 } },
    { get: 15600, put: { fluid: 'thermal:refined_fuel', amount: 1000 }, heat: true },

    //Tinker
    { get: 6000, put: { fluid: 'tconstruct:blazing_blood', amount: 1000 }, heat: true },
  ];
  LiquidBurningPattern.forEach((recipe) => {
    const data = {
      type: 'createaddition:liquid_burning',
      input: recipe.put,
      burnTime: recipe.get,
    };

    if (recipe.heat) data.superheated = recipe.heat;

    event.custom(data);
  });
  //#endregion

  //# =================================================================================================== #

  //#region Milling
  const MillStonePattern = [
    //Misc
    { get: [{ item: 'minecraft:sand' }], put: [{ item: 'minecraft:gravel' }] },
    { get: [{ item: 'exnihilosequentia:dust' }], put: [{ item: 'minecraft:sand' }] },
  ];
  MillStonePattern.forEach((recipe) => {
    event.custom({
      type: 'create:milling',
      ingredients: recipe.put,
      results: recipe.get,
      processingTime: 200,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Mixing
  const MixingPattern = [
    {
      //Andesite Alloy
      get: [{ item: 'create:andesite_alloy' }],
      put: [{ item: 'minecraft:polished_andesite' }, { tag: 'forge:ingots/platinum' }],
      heat: 'heated',
    },
    {
      //Restore Mixing Dough => PamHC Dought
      get: [{ item: 'pamhc2foodcore:doughitem' }],
      put: [{ tag: 'forge:flour/wheat' }, { amount: 1000, fluid: 'minecraft:water', nbt: {} }],
    },
  ];
  MixingPattern.forEach((recipe) => {
    const data = {
      type: 'create:mixing',
      ingredients: recipe.put,
      results: recipe.get,
    };

    if (recipe.heat) data.heatRequirement = recipe.heat;

    event.custom(data);
  });
  //#endregion

  //# =================================================================================================== #

  //#region Mechanical Crafting
  event.remove({ output: 'create:crushing_wheel' });
  event.custom({
    type: 'create:mechanical_crafting',
    acceptMirrored: false,
    key: {
      A: { item: 'create:andesite_alloy' },
      P: { tag: 'minecraft:planks' },
      S: { item: 'anoxia:compressed_andesite' },
    },
    pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
    result: { count: 1, item: 'create:crushing_wheel' },
  });

  //# =================================================================================================== #

  //#region Splashing
  const SplashingPattern = [
    {
      //Restore Splash Dough => PamHC Dought
      get: [{ item: 'pamhc2foodcore:doughitem' }],
      put: [{ tag: 'forge:flour/wheat' }],
    },
  ];
  SplashingPattern.forEach((recipe) => {
    event.custom({
      type: 'create:splashing',
      ingredients: recipe.put,
      results: recipe.get,
    });
  });
  //#endregion
});
