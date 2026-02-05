ServerEvents.recipes((event) => {
  //#region Remove ID
  const RmRecipeID = [
    //Oak
    'immersiveengineering:sawmill/oak_log',
    'immersiveengineering:sawmill/oak_wood',
    'immersiveengineering:sawmill/stripped_oak_log',
    'thermal:machines/sawmill/sawmill_oak_logs',
    'mekanism:sawing/log/oak',

    //Spruce
    'immersiveengineering:sawmill/spruce_log',
    'immersiveengineering:sawmill/spruce_wood',
    'immersiveengineering:sawmill/stripped_spruce_log',
    'thermal:machines/sawmill/sawmill_spruce_logs',
    'mekanism:sawing/log/spruce',

    //Birch
    'immersiveengineering:sawmill/birch_log',
    'immersiveengineering:sawmill/birch_wood',
    'immersiveengineering:sawmill/stripped_birch_log',
    'thermal:machines/sawmill/sawmill_birch_logs',
    'mekanism:sawing/log/birch',

    //Jungle
    'immersiveengineering:sawmill/jungle_log',
    'immersiveengineering:sawmill/jungle_wood',
    'immersiveengineering:sawmill/stripped_jungle_log',
    'thermal:machines/sawmill/sawmill_jungle_logs',
    'mekanism:sawing/log/jungle',

    //Acacia
    'immersiveengineering:sawmill/acacia_log',
    'immersiveengineering:sawmill/acacia_wood',
    'immersiveengineering:sawmill/stripped_acacia_log',
    'thermal:machines/sawmill/sawmill_acacia_logs',
    'mekanism:sawing/log/acacia',

    //Dark oak
    'immersiveengineering:sawmill/dark_oak_log',
    'immersiveengineering:sawmill/dark_oak_wood',
    'immersiveengineering:sawmill/stripped_dark_oak_log',
    'thermal:machines/sawmill/sawmill_dark_oak_logs',
    'mekanism:sawing/log/dark_oak',

    //Mangrove
    'immersiveengineering:sawmill/mangrove_log',
    'immersiveengineering:sawmill/mangrove_wood',
    'immersiveengineering:sawmill/stripped_mangrove_log',
    'thermal:machines/sawmill/sawmill_mangrove_logs',
    'mekanism:sawing/log/mangrove',

    //Cherry
    'immersiveengineering:sawmill/cherry_log',
    'immersiveengineering:sawmill/cherry_wood',
    'immersiveengineering:sawmill/stripped_cherry_log',
    'thermal:machines/sawmill/sawmill_cherry_logs',
    'mekanism:sawing/log/cherry',

    //Crimson
    'immersiveengineering:sawmill/crimson_log',
    'immersiveengineering:sawmill/crimson_wood',
    'immersiveengineering:sawmill/stripped_crimson_log',
    'thermal:machines/sawmill/sawmill_crimson_stems',
    'mekanism:sawing/log/crimson',

    //Warped
    'immersiveengineering:sawmill/warped_log',
    'immersiveengineering:sawmill/warped_wood',
    'immersiveengineering:sawmill/stripped_warped_log',
    'thermal:machines/sawmill/sawmill_warped_stems',
    'mekanism:sawing/log/warped',

    //Aeronos
    'thermal:machines/sawmill/sawmill_aeronos_caps',
    'mekanism:sawing/log/aeronos',

    //Strophar
    'thermal:machines/sawmill/sawmill_strophar_caps',
    'mekanism:sawing/log/strophar',

    //Glacial
    'thermal:machines/sawmill/sawmill_glacian_logs',
    'mekanism:sawing/log/glacian',

    //Quark
    'thermal:compat/quark/sawmill_quark_ancient_logs',
    'thermal:compat/quark/sawmill_quark_azalea_logs',
    'thermal:compat/quark/sawmill_quark_blossom_logs',

    //Thermal
    'thermal:machines/sawmill/sawmill_rubberwood_logs',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //#region Func Wood
  function WoodFarmerStrip(get, put) {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: put }],
      result: [{ item: get }, { item: 'farmersdelight:tree_bark' }],
      sound: 'minecraft:item.axe.strip',
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_strip',
      },
    });
  }

  function WoodFarmerChop(get, put) {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: put }],
      result: [{ count: 2, item: get }],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_dig',
      },
    });
  }

  function WoodCreateStrip(get, put) {
    event.custom({
      type: 'create:cutting',
      ingredients: [{ item: put }],
      processingTime: 50,
      results: [{ count: 1, item: get }],
    });
  }

  function WoodCreateSaw(get, put) {
    event.custom({
      type: 'create:cutting',
      ingredients: [{ item: put }],
      processingTime: 50,
      results: [{ count: 4, item: get }],
    });
  }

  function WoodImmersiveOneStrip(get, srp) {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 800,
      input: [{ item: srp }],
      result: { count: 6, item: get },
      secondaries: [{ output: { item: 'mekanism:sawdust' }, stripping: false }],
    });
  }

  function WoodImmersiveStrip(get, srpLog, srpWood) {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 800,
      input: [{ item: srpLog }, { item: srpWood }],
      result: { count: 6, item: get },
      secondaries: [{ output: { item: 'mekanism:sawdust' }, stripping: false }],
    });
  }

  function WoodImmersiveSaw(get, put, srp) {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 1600,
      input: { item: put },
      result: { count: 6, item: get },
      secondaries: [
        { output: { item: 'mekanism:sawdust' }, stripping: true },
        { output: { item: 'mekanism:sawdust' }, stripping: false },
      ],
      stripped: { item: srp },
    });
  }

  function WoodThermalSaw(get, put) {
    event.custom({
      type: 'thermal:sawmill',
      ingredient: { tag: put },
      result: [
        { item: get, count: 8 },
        { item: 'mekanism:sawdust', chance: 1.0 },
      ],
      energy: 1000,
      experience: 0.15,
    });
  }

  function WoodMekanismSaw(get, put) {
    event.custom({
      type: 'mekanism:sawing',
      input: { ingredient: { tag: put } },
      mainOutput: { count: 8, item: get },
      secondaryChance: 1.0,
      secondaryOutput: { item: 'mekanism:sawdust' },
    });
  }
  //#endregion

  //# =================================================================================================== #

  //#region Wood
  const WoodPattern = [
    //Minecraft
    { log: 'minecraft:oak_log', srpLog: 'minecraft:stripped_oak_log', wood: 'minecraft:oak_wood', srpWood: 'minecraft:stripped_oak_wood', plank: 'minecraft:oak_planks', logTag: 'minecraft:oak_logs' },
    { log: 'minecraft:spruce_log', srpLog: 'minecraft:stripped_spruce_log', wood: 'minecraft:spruce_wood', srpWood: 'minecraft:stripped_spruce_wood', plank: 'minecraft:spruce_planks', logTag: 'minecraft:spruce_logs' },
    { log: 'minecraft:birch_log', srpLog: 'minecraft:stripped_birch_log', wood: 'minecraft:birch_wood', srpWood: 'minecraft:stripped_birch_wood', plank: 'minecraft:birch_planks', logTag: 'minecraft:birch_logs' },
    { log: 'minecraft:jungle_log', srpLog: 'minecraft:stripped_jungle_log', wood: 'minecraft:jungle_wood', srpWood: 'minecraft:stripped_jungle_wood', plank: 'minecraft:jungle_planks', logTag: 'minecraft:jungle_logs' },
    { log: 'minecraft:acacia_log', srpLog: 'minecraft:stripped_acacia_log', wood: 'minecraft:acacia_wood', srpWood: 'minecraft:stripped_acacia_wood', plank: 'minecraft:acacia_planks', logTag: 'minecraft:acacia_logs' },
    { log: 'minecraft:dark_oak_log', srpLog: 'minecraft:stripped_dark_oak_log', wood: 'minecraft:dark_oak_wood', srpWood: 'minecraft:stripped_dark_oak_wood', plank: 'minecraft:dark_oak_planks', logTag: 'minecraft:dark_oak_logs' },
    { log: 'minecraft:mangrove_log', srpLog: 'minecraft:stripped_mangrove_log', wood: 'minecraft:mangrove_wood', srpWood: 'minecraft:stripped_mangrove_wood', plank: 'minecraft:mangrove_planks', logTag: 'minecraft:mangrove_logs' },
    { log: 'minecraft:cherry_log', srpLog: 'minecraft:stripped_cherry_log', wood: 'minecraft:cherry_wood', srpWood: 'minecraft:stripped_cherry_wood', plank: 'minecraft:cherry_planks', logTag: 'minecraft:cherry_logs' },
    { log: 'minecraft:crimson_stem', srpLog: 'minecraft:stripped_crimson_stem', wood: 'minecraft:crimson_hyphae', srpWood: 'minecraft:stripped_crimson_hyphae', plank: 'minecraft:crimson_planks', logTag: 'minecraft:crimson_stems' },
    { log: 'minecraft:warped_stem', srpLog: 'minecraft:stripped_warped_stem', wood: 'minecraft:warped_hyphae', srpWood: 'minecraft:stripped_warped_hyphae', plank: 'minecraft:warped_planks', logTag: 'minecraft:warped_stems' },

    //Ad Astra
    { log: 'ad_astra:aeronos_stem', wood: 'ad_astra:aeronos_cap', plank: 'ad_astra:aeronos_planks', logTag: 'ad_astra:aeronos_caps' },
    { log: 'ad_astra:strophar_stem', wood: 'ad_astra:strophar_cap', plank: 'ad_astra:strophar_planks', logTag: 'ad_astra:strophar_caps' },
    { log: 'ad_astra:glacian_log', srpLog: 'ad_astra:stripped_glacian_log', plank: 'ad_astra:glacian_planks', logTag: 'ad_astra:glacian_logs' },

    //Architects
    { log: 'architects_palette:twisted_log', srpLog: 'architects_palette:stripped_twisted_log', wood: 'architects_palette:twisted_wood', srpWood: 'architects_palette:stripped_twisted_wood', plank: 'architects_palette:twisted_planks', logTag: 'architects_palette:twisted_logs' },

    //Ars
    { log: 'ars_elemental:yellow_archwood_log', srpLog: 'ars_elemental:stripped_yellow_archwood_log', wood: 'ars_elemental:yellow_archwood', srpWood: 'ars_elemental:stripped_yellow_archwood', plank: 'ars_nouveau:archwood_planks', logTag: 'forge:logs/archwood' },
    { log: 'ars_nouveau:blue_archwood_log', srpLog: 'ars_nouveau:stripped_blue_archwood_log', wood: 'ars_nouveau:blue_archwood_wood', srpWood: 'ars_nouveau:stripped_blue_archwood_wood', plank: 'ars_nouveau:archwood_planks' },
    { log: 'ars_nouveau:red_archwood_log', srpLog: 'ars_nouveau:stripped_red_archwood_log', wood: 'ars_nouveau:red_archwood_wood', srpWood: 'ars_nouveau:stripped_red_archwood_wood', plank: 'ars_nouveau:archwood_planks' },
    { log: 'ars_nouveau:purple_archwood_log', srpLog: 'ars_nouveau:stripped_purple_archwood_log', wood: 'ars_nouveau:purple_archwood_wood', srpWood: 'ars_nouveau:stripped_purple_archwood_wood', plank: 'ars_nouveau:archwood_planks' },
    { log: 'ars_nouveau:green_archwood_log', srpLog: 'ars_nouveau:stripped_green_archwood_log', wood: 'ars_nouveau:green_archwood_wood', srpWood: 'ars_nouveau:stripped_green_archwood_wood', plank: 'ars_nouveau:archwood_planks' },

    //Botania
    { log: 'botania:livingwood_log', srpLog: 'botania:stripped_livingwood_log', wood: 'botania:livingwood', srpWood: 'botania:stripped_livingwood', plank: 'botania:livingwood_planks', logTag: 'botania:livingwood_logs' },
    { log: 'botania:glimmering_livingwood_log', srpLog: 'botania:glimmering_stripped_livingwood_log', wood: 'botania:glimmering_livingwood', srpWood: 'botania:glimmering_stripped_livingwood', plank: 'botania:livingwood_planks' },
    { log: 'botania:dreamwood_log', srpLog: 'botania:stripped_dreamwood_log', wood: 'botania:dreamwood', srpWood: 'botania:stripped_dreamwood', plank: 'botania:dreamwood_planks', logTag: 'botania:dreamwood_logs' },
    { log: 'botania:glimmering_dreamwood_log', srpLog: 'botania:glimmering_stripped_dreamwood_log', wood: 'botania:glimmering_dreamwood', srpWood: 'botania:glimmering_stripped_dreamwood', plank: 'botania:dreamwood_planks' },

    //Quark
    { log: 'quark:ancient_log', srpLog: 'quark:stripped_ancient_log', wood: 'quark:ancient_wood', srpWood: 'quark:stripped_ancient_wood', plank: 'quark:ancient_planks', logTag: 'quark:ancient_logs' },
    { log: 'quark:azalea_log', srpLog: 'quark:stripped_azalea_log', wood: 'quark:azalea_wood', srpWood: 'quark:stripped_azalea_wood', plank: 'quark:azalea_planks', logTag: 'quark:azalea_logs' },
    { log: 'quark:blossom_log', srpLog: 'quark:stripped_blossom_log', wood: 'quark:blossom_wood', srpWood: 'quark:stripped_blossom_wood', plank: 'quark:blossom_planks', logTag: 'quark:blossom_logs' },

    //Twilight
    { log: 'twilightforest:twilight_oak_log', srpLog: 'twilightforest:stripped_twilight_oak_log', wood: 'twilightforest:twilight_oak_wood', srpWood: 'twilightforest:stripped_twilight_oak_wood', plank: 'twilightforest:twilight_oak_planks', logTag: 'twilightforest:twilight_oak_logs' },
    { log: 'twilightforest:canopy_log', srpLog: 'twilightforest:stripped_canopy_log', wood: 'twilightforest:canopy_wood', srpWood: 'twilightforest:stripped_canopy_wood', plank: 'twilightforest:canopy_planks', logTag: 'twilightforest:canopy_logs' },
    { log: 'twilightforest:mangrove_log', srpLog: 'twilightforest:stripped_mangrove_log', wood: 'twilightforest:mangrove_wood', srpWood: 'twilightforest:stripped_mangrove_wood', plank: 'twilightforest:mangrove_planks', logTag: 'twilightforest:mangrove_logs' },
    { log: 'twilightforest:dark_log', srpLog: 'twilightforest:stripped_dark_log', wood: 'twilightforest:dark_wood', srpWood: 'twilightforest:stripped_dark_wood', plank: 'twilightforest:dark_planks', logTag: 'twilightforest:darkwood_logs' },
    { log: 'twilightforest:time_log', srpLog: 'twilightforest:stripped_time_log', wood: 'twilightforest:time_wood', srpWood: 'twilightforest:stripped_time_wood', plank: 'twilightforest:time_planks', logTag: 'twilightforest:timewood_logs' },
    { log: 'twilightforest:transformation_log', srpLog: 'twilightforest:stripped_transformation_log', wood: 'twilightforest:transformation_wood', srpWood: 'twilightforest:stripped_transformation_wood', plank: 'twilightforest:transformation_planks', logTag: 'twilightforest:transwood_logs' },
    { log: 'twilightforest:mining_log', srpLog: 'twilightforest:stripped_mining_log', wood: 'twilightforest:mining_wood', srpWood: 'twilightforest:stripped_mining_wood', plank: 'twilightforest:mining_planks', logTag: 'twilightforest:mining_logs' },
    { log: 'twilightforest:sorting_log', srpLog: 'twilightforest:stripped_sorting_log', wood: 'twilightforest:sorting_wood', srpWood: 'twilightforest:stripped_sorting_wood', plank: 'twilightforest:sorting_planks', logTag: 'twilightforest:sortwood_logs' },

    //Thermal
    { log: 'thermal:rubberwood_log', srpLog: 'thermal:stripped_rubberwood_log', wood: 'thermal:rubberwood_wood', srpWood: 'thermal:stripped_rubberwood_wood', plank: 'thermal:rubberwood_planks', logTag: 'forge:rubberwood_logs' },
  ];
  WoodPattern.forEach((recipe) => {
    //Log
    if (recipe.log) {
      event.remove({ input: recipe.log, type: 'farmersdelight:cutting' });
      event.remove({ input: recipe.log, type: 'create:cutting' });

      //Stripped Log
      if (recipe.srpLog) {
        //Farmer
        event.remove({ input: recipe.srpLog, type: 'farmersdelight:cutting' });
        WoodFarmerStrip(recipe.srpLog, recipe.log);
        WoodFarmerChop(recipe.plank, recipe.srpLog);

        //Create
        event.remove({ input: recipe.srpLog, type: 'create:cutting' });
        WoodCreateStrip(recipe.srpLog, recipe.log);
        WoodCreateSaw(recipe.plank, recipe.srpLog);

        //Immersive
        WoodImmersiveSaw(recipe.plank, recipe.log, recipe.srpLog);

        //Ad Astra
        if (recipe.log === 'ad_astra:glacian_log') WoodImmersiveOneStrip(recipe.plank, recipe.srpLog);
      }

      //Ad Astra
      if (recipe.log.startsWith('ad_astra') && recipe.log.endsWith('stem')) {
        WoodFarmerChop(recipe.plank, recipe.log);
        WoodCreateSaw(recipe.plank, recipe.log);
      }
    }

    //Wood
    if (recipe.wood) {
      event.remove({ input: recipe.wood, type: 'farmersdelight:cutting' });
      event.remove({ input: recipe.wood, type: 'create:cutting' });

      //Stripped Wood
      if (recipe.srpWood) {
        //Farmer
        event.remove({ input: recipe.srpWood, type: 'farmersdelight:cutting' });
        WoodFarmerStrip(recipe.srpWood, recipe.wood);
        WoodFarmerChop(recipe.plank, recipe.srpWood);

        //Create
        event.remove({ input: recipe.srpWood, type: 'create:cutting' });
        WoodCreateStrip(recipe.srpWood, recipe.wood);
        WoodCreateSaw(recipe.plank, recipe.srpWood);

        //Immersive
        WoodImmersiveSaw(recipe.plank, recipe.wood, recipe.srpWood);
      }

      //Ad Astra
      if (recipe.log.startsWith('ad_astra') && recipe.log.endsWith('cap')) {
        WoodFarmerChop(recipe.plank, recipe.wood);
        WoodCreateSaw(recipe.plank, recipe.wood);
      }
    }

    //Immersive
    if (recipe.srpLog && recipe.srpWood) {
      WoodImmersiveStrip(recipe.plank, recipe.srpLog, recipe.srpWood);

      //Ad Astra
      if (recipe.log.startsWith('ad_astra') && recipe.wood.startsWith('ad_astra')) WoodImmersiveStrip(recipe.plank, recipe.log, recipe.wood);
    }

    //Tag
    if (recipe.logTag) {
      //Crafting
      event.remove({ output: recipe.plank, input: `#${recipe.logTag}`, type: 'minecraft:crafting_shaped' });
      event.remove({ output: recipe.plank, input: `#${recipe.logTag}`, type: 'minecraft:crafting_shapeless' });
      event.shapeless(recipe.plank, [`#${recipe.logTag}`]);

      //Thermal
      WoodThermalSaw(recipe.plank, recipe.logTag);

      //Mekanism
      WoodMekanismSaw(recipe.plank, recipe.logTag);
    }
  });
  //#endregion
});
