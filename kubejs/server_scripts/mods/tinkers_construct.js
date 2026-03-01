ServerEvents.recipes((event) => {
  //#region RemoveID
  const rmRecipeId = [
    //Create
    'createaddition:compat/tconstruct/amethyst_bronze',
    'createaddition:compat/tconstruct/slimesteel',
    'createaddition:compat/tconstruct/pig_iron',
    'createaddition:compat/tconstruct/pig_iron_2',
    'createaddition:compat/tconstruct/rose_gold',
    'createaddition:compat/tconstruct/manyullyn',
    'createaddition:compat/tconstruct/queens_slime',
    'createaddition:compat/tconstruct/hepatizon',

    //Thermal
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_amethyst_bronze_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_manyullyn_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_queens_slime_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_hepatizon_ingot',

    //EnderIO
    'enderio:smelting/tconstruct/smeltery/seared/seared_brick',
    'enderio:smelting/tconstruct/smeltery/scorched/scorched_brick',

    //Tinker
    'tconstruct:compat/create/andesite_alloy_iron',
    'tconstruct:compat/create/andesite_alloy_zinc',

    //Tinker - Machine
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'tconstruct:smeltery/casting/scorched/foundry_controller',

    //Mekanism
    'tconstruct:compat/refined_glowstone_ingot',
    'tconstruct:smeltery/casting/metal/refined_glowstone/block',
    'tconstruct:smeltery/casting/metal/refined_glowstone/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/nugget_sand_cast',
    'tconstruct:compat/refined_obsidian_ingot',
    'tconstruct:smeltery/casting/metal/refined_obsidian/block',
    'tconstruct:smeltery/casting/metal/refined_obsidian/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/nugget_sand_cast',

    //Tinker Construct
    'jaopca:tconstruct.dust_to_molten.coal',
    'jaopca:tconstruct.material_to_molten.coal',
    'jaopca:tconstruct.ore_to_molten_singular.coal',
    'jaopca:tconstruct.storage_block_to_molten.coal',
    'tconstruct:smeltery/alloys/molten_obsidian',
    'tconstruct:smeltery/alloys/molten_netherite',
    'tconstruct:smeltery/alloys/molten_brass',
    'tconstruct:smeltery/alloys/molten_bronze',
    'tconstruct:smeltery/alloys/molten_constantan',
    'tconstruct:smeltery/alloys/molten_electrum',
    'tconstruct:smeltery/alloys/molten_invar',
    'tconstruct:smeltery/alloys/molten_manyullyn',
    'tconstruct:smeltery/alloys/molten_rose_gold',
    //Metal
    'tconstruct:smeltery/alloys/molten_amethyst_bronze',
    'tconstruct:smeltery/alloys/molten_cinderslime',
    'tconstruct:smeltery/alloys/molten_hepatizon',
    'tconstruct:smeltery/alloys/molten_pig_iron',
    'tconstruct:smeltery/alloys/molten_queens_slime',
    'tconstruct:smeltery/alloys/molten_slimesteel',
    'tconstruct:smeltery/alloys/molten_refined_obsidian',
    //Fuel
    'tconstruct:smeltery/melting/fuel/blaze',

    //TC Integrations
    //Inferium
    'mysticalagradditions:tconstruct/melting/inferium/block',
    'mysticalagradditions:tconstruct/melting/inferium/ingot',
    'mysticalagradditions:tconstruct/melting/inferium/nugget',

    //Prudentium
    'mysticalagradditions:tconstruct/melting/prudentium/block',
    'mysticalagradditions:tconstruct/melting/prudentium/ingot',
    'mysticalagradditions:tconstruct/melting/prudentium/nugget',

    //Tertium
    'mysticalagradditions:tconstruct/melting/tertium/block',
    'mysticalagradditions:tconstruct/melting/tertium/ingot',
    'mysticalagradditions:tconstruct/melting/tertium/nugget',

    //Imperium
    'mysticalagradditions:tconstruct/melting/imperium/block',
    'mysticalagradditions:tconstruct/melting/imperium/ingot',
    'mysticalagradditions:tconstruct/melting/imperium/nugget',

    //Supremium
    'mysticalagradditions:tconstruct/melting/supremium/block',
    'mysticalagradditions:tconstruct/melting/supremium/ingot',
    'mysticalagradditions:tconstruct/melting/supremium/nugget',

    //Soulium
    'mysticalagradditions:tconstruct/melting/soulium/block',
    'mysticalagradditions:tconstruct/melting/soulium/ingot',
    'mysticalagradditions:tconstruct/melting/soulium/nugget',

    //Botania
    'tcintegrations:smeltery/melting/metal/manasteel/block',
    'tcintegrations:smeltery/melting/metal/manasteel/ingot',
    'tcintegrations:smeltery/melting/metal/manasteel/nugget',

    //Ars Nouveau
    'tcintegrations:melting/source_gem/block',
    'tcintegrations:melting/source_gem/gem',

    //Desh
    'tcintegrations:smeltery/melting/metal/desh/block',
    'tcintegrations:smeltery/melting/metal/desh/ingot',
    'tcintegrations:smeltery/melting/metal/desh/nugget',
    'tcintegrations:smeltery/melting/metal/desh/ore_singular',
    'tcintegrations:smeltery/melting/metal/desh/raw',
    'tcintegrations:smeltery/melting/metal/desh/raw_block',

    //Ostrum
    'tcintegrations:smeltery/melting/metal/ostrum/block',
    'tcintegrations:smeltery/melting/metal/ostrum/ingot',
    'tcintegrations:smeltery/melting/metal/ostrum/nugget',
    'tcintegrations:smeltery/melting/metal/ostrum/ore_singular',
    'tcintegrations:smeltery/melting/metal/ostrum/raw',
    'tcintegrations:smeltery/melting/metal/ostrum/raw_block',

    //Calorite
    'tcintegrations:smeltery/melting/metal/calorite/block',
    'tcintegrations:smeltery/melting/metal/calorite/ingot',
    'tcintegrations:smeltery/melting/metal/calorite/nugget',
    'tcintegrations:smeltery/melting/metal/calorite/ore_singular',
    'tcintegrations:smeltery/melting/metal/calorite/raw',
    'tcintegrations:smeltery/melting/metal/calorite/raw_block',
  ];
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  event.remove({ output: 'tconstruct:seared_brick' });
  event.blasting('tconstruct:seared_brick', 'tconstruct:grout', 0, 600);
  event.remove({ output: 'tconstruct:scorched_brick' });
  event.blasting('tconstruct:scorched_brick', 'tconstruct:nether_grout', 0, 1200);

  //# ====================================================================================== #

  //#region Alloy
  const alloyPattern = [
    {
      get: { amount: 10, tag: 'tconstruct:molten_steel' },
      put: [
        { amount: 100, tag: 'forge:molten_coal' }, //9 Coal = 1 Ingot
        { amount: 10, tag: 'tconstruct:molten_iron' },
      ],
      degree: 950,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_steel' },
      put: [
        { amount: 3000, fluid: 'mekanism:oxygen' },
        { amount: 10, tag: 'tconstruct:molten_iron' },
      ],
      degree: 950,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_netherite' },
      put: [
        { amount: 40, tag: 'tconstruct:molten_gold' },
        { amount: 40, tag: 'tconstruct:molten_debris' },
      ],
      degree: 1175,
    },
    {
      get: { amount: 20, tag: 'forge:molten_brass' },
      put: [
        { amount: 10, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_zinc' },
      ],
      degree: 605,
    },
    {
      get: { amount: 40, tag: 'forge:molten_bronze' },
      put: [
        { amount: 30, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_tin' },
      ],
      degree: 700,
    },
    {
      get: { amount: 20, tag: 'forge:molten_constantan' },
      put: [
        { amount: 10, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_nickel' },
      ],
      degree: 920,
    },
    {
      get: { amount: 20, tag: 'forge:molten_electrum' },
      put: [
        { amount: 10, tag: 'forge:molten_gold' },
        { amount: 10, tag: 'forge:molten_silver' },
      ],
      degree: 760,
    },
    {
      get: { amount: 30, tag: 'forge:molten_invar' },
      put: [
        { amount: 20, tag: 'forge:molten_iron' },
        { amount: 10, tag: 'forge:molten_nickel' },
      ],
      degree: 900,
    },
    {
      put: [
        { amount: 30, tag: 'forge:molten_cobalt' },
        { amount: 10, tag: 'tconstruct:molten_debris' },
      ],
      get: { amount: 40, tag: 'forge:molten_manyullyn' },
      degree: 1200,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_obsidian' },
      put: [
        { amount: 10, fluid: 'minecraft:water' },
        { amount: 10, fluid: 'minecraft:lava' },
      ],
      degree: 1000,
    },

    //Mekanism
    {
      get: { amount: 90, tag: 'forge:molten_refined_obsidian' },
      put: [
        { amount: 250, tag: 'tconstruct:molten_obsidian' },
        { amount: 400, tag: 'tconstruct:molten_diamond' },
        { amount: 450, tag: 'forge:molten_osmium' },
      ],
      degree: 1475,
    },

    //Tinker Metal
    {
      get: { amount: 90, tag: 'forge:molten_amethyst_bronze' },
      put: [
        { amount: 90, tag: 'forge:molten_bronze' },
        { amount: 100, tag: 'tconstruct:molten_amethyst' },
      ],
      degree: 820,
    },
    {
      get: { amount: 90, fluid: 'tconstruct:molten_cinderslime' },
      put: [
        { amount: 90, tag: 'forge:molten_gold' },
        { amount: 250, tag: 'tconstruct:ichor' },
        { amount: 250, tag: 'tconstruct:scorched_stone' },
      ],
      degree: 1050,
    },

    {
      get: { amount: 180, tag: 'forge:molten_hepatizon' },
      put: [
        { amount: 180, tag: 'forge:molten_copper' },
        { amount: 90, tag: 'forge:molten_cobalt' },
        { amount: 100, tag: 'tconstruct:molten_quartz' },
      ],
      degree: 1400,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_pig_iron' },
      put: [
        { amount: 90, tag: 'forge:molten_iron' },
        { amount: 500, tag: 'tconstruct:meat_soup' },
        { amount: 250, tag: 'forge:honey' },
      ],
      degree: 811,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_queens_slime' },
      put: [
        { amount: 90, tag: 'forge:molten_cobalt' },
        { amount: 90, tag: 'forge:molten_gold' },
        { amount: 250, tag: 'forge:magma' },
      ],
      degree: 1150,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_slimesteel' },
      put: [
        { amount: 90, tag: 'forge:molten_iron' },
        { amount: 250, tag: 'tconstruct:sky_slime' },
        { amount: 250, tag: 'tconstruct:seared_stone' },
      ],
      degree: 900,
    },
  ];
  alloyPattern.forEach((recipe) => {
    event.custom({
      type: 'tconstruct:alloy',
      inputs: recipe.put,
      result: recipe.get,
      temperature: recipe.degree,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region Casting Basin
  const castingBasinPattern = [
    //Create
    {
      get: 'create:andesite_alloy',
      put: { amount: 90, tag: 'forge:molten_platinum' },
      cooling: getCoolingTick(material.platinum, getIngot(1, 'ingot')),
      caster: { item: 'minecraft:polished_andesite' },
      consume: true,
    },
    {
      get: 'tconstruct:smeltery_controller',
      put: { amount: 360, tag: 'forge:molten_copper' },
      cooling: getCoolingTick(material.copper, getIngot(4, 'ingot')),
      caster: { tag: 'tconstruct:smeltery_bricks' },
      consume: true,
    },
    {
      get: 'tconstruct:foundry_controller',
      put: { amount: 1000, tag: 'tconstruct:molten_obsidian' },
      cooling: getCoolingTick(material.obsidian, 1),
      caster: { tag: 'tconstruct:foundry_bricks' },
      consume: true,
    },

    //Refined Glowstone
    {
      get: { tag: 'forge:storage_blocks/refined_glowstone' },
      put: { amount: 810, tag: 'forge:molten_refined_glowstone' },
      cooling: getCoolingTick(material.refinedGlowstone, getIngot(1, 'block')),
    },
    {
      get: { tag: 'forge:storage_blocks/refined_obsidian' },
      put: { amount: 810, tag: 'forge:molten_refined_obsidian' },
      cooling: getCoolingTick(material.refinedObsidian, getIngot(1, 'block')),
    },
  ];
  castingBasinPattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:casting_basin',
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    };

    if (recipe.caster) json.cast = recipe.caster;
    if (recipe.consume) json.cast_consumed = recipe.consume;

    event.custom(json);
  });
  //#endregion

  //# ====================================================================================== #

  //#region Casting Table
  const castingTablePattern = [
    //Anoxia
    {
      get: 'anoxia:obsidian_ingot',
      put: { amount: 250, tag: 'tconstruct:molten_obsidian' },
      cooling: getCoolingTick(material.obsidian, 1),
      ingot: true,
    },

    //Seared Brick
    {
      get: 'tconstruct:seared_brick',
      put: { amount: 125, tag: 'tconstruct:molten_clay' },
      cooling: getCoolingTick(material.clay, 0.5),
      caster: { item: 'minecraft:flint' },
      consume: true,
    },
    {
      get: 'tconstruct:seared_brick',
      put: { amount: 250, tag: 'tconstruct:seared_stone' },
      cooling: getCoolingTick(material.stone, 1),
      ingot: true,
    },

    //Scorched Brick
    {
      get: 'tconstruct:scorched_brick',
      put: { amount: 125, tag: 'forge:magma' },
      cooling: getCoolingTick(material.magma, 0.5),
      caster: { item: 'minecraft:flint' },
      consume: true,
    },
    {
      get: 'tconstruct:scorched_brick',
      put: { amount: 250, tag: 'tconstruct:scorched_stone' },
      cooling: getCoolingTick(material.scorchedStone, 1),
      ingot: true,
    },

    //Refined Glowstone
    {
      get: { tag: 'forge:nuggets/refined_glowstone' },
      put: { amount: 10, tag: 'forge:molten_refined_glowstone' },
      cooling: getCoolingTick(material.refinedGlowstone, getIngot(1, 'nugget')),
      nugget: true,
    },
    {
      get: { tag: 'forge:ingots/refined_glowstone' },
      put: { amount: 450, tag: 'forge:molten_osmium' },
      cooling: getCoolingTick(material.osmium, getIngot(5, 'ingot')),
      caster: { tag: 'forge:dusts/glowstone' },
      consume: true,
    },
    {
      get: { tag: 'forge:ingots/refined_glowstone' },
      put: { amount: 90, tag: 'forge:molten_refined_glowstone' },
      cooling: getCoolingTick(material.refinedGlowstone, getIngot(1, 'ingot')),
      ingot: true,
    },

    //Refined Obsidian
    {
      get: { tag: 'forge:nuggets/refined_obsidian' },
      put: { amount: 10, tag: 'forge:molten_refined_obsidian' },
      cooling: getCoolingTick(material.refinedObsidian, getIngot(1, 'nugget')),
      nugget: true,
    },
    {
      get: { tag: 'forge:ingots/refined_obsidian' },
      put: { amount: 450, tag: 'forge:molten_osmium' },
      cooling: getCoolingTick(material.osmium, getIngot(5, 'ingot')),
      caster: { tag: 'forge:dusts/refined_obsidian' },
      consume: true,
    },
    {
      get: { tag: 'forge:ingots/refined_obsidian' },
      put: { amount: 90, tag: 'forge:molten_refined_obsidian' },
      cooling: getCoolingTick(material.refinedObsidian, getIngot(1, 'ingot')),
      ingot: true,
    },
  ];
  castingTablePattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    };

    if (recipe.nugget) addDualCastRecipe('nugget', json, event);
    else if (recipe.ingot) addDualCastRecipe('ingot', json, event);
    else {
      ((json.cast = recipe.caster), (json.cast_consumed = recipe.consume));
      event.custom(json);
    }
  });
  //#endregion

  //# ====================================================================================== #

  //#region Melting
  const meltingPattern = [
    //Coal
    { get: { amount: 100, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:materials/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(100)) },
    { get: { amount: 150, tag: 'forge:molten_coal' }, put: { tag: 'forge:ores/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(150)) },
    { get: { amount: 900, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:storage_blocks/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(900)) },

    //Coke
    //{ get: { amount: 200, tag: 'forge:molten_coal' }, put: { tag: 'forge:coal_coke' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(200)) },
    //{ get: { amount: 200, tag: 'forge:molten_coal' }, put: { tag: 'forge:dusts/coal_coke' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(100)) },
    //{ get: { amount: 1800, tag: 'forge:molten_coal' }, put: { tag: 'forge:storage_blocks/coal_coke' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(1800)) },

    //Mystical Agradditions
    //Inferium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_nugget' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(10)) },

    //Prudentium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_nugget' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(10)) },

    //Tertium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_nugget' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(10)) },

    //Imperium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_nugget' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(10)) },

    //Supremium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_nugget' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(10)) },

    //Soulium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_nugget' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(10)) },

    //Botania
    { get: { amount: 810, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:storage_blocks/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:ingots/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:nuggets/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(10)) },

    //Ars Nouveau
    { get: { amount: 400, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:storage_blocks/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(400)) },
    { get: { amount: 100, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:gems/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(100)) },

    //Ad Astra
    //Desh
    { get: { amount: 810, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_desh' }, put: { tag: 'forge:ingots/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_desh' }, put: { tag: 'forge:nuggets/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_desh' }, put: { tag: 'forge:ores/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_desh' }, put: { tag: 'forge:raw_materials/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/raw_desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(1080)) },

    //Ostrum
    { get: { amount: 810, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:ingots/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:nuggets/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:ores/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:raw_materials/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/raw_ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(1080)) },

    //Calorite
    { get: { amount: 810, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_calorite' }, put: { tag: 'forge:ingots/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_calorite' }, put: { tag: 'forge:nuggets/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_calorite' }, put: { tag: 'forge:ores/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_calorite' }, put: { tag: 'forge:raw_materials/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/raw_calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(1080)) },
  ];
  meltingPattern.forEach((recipe) => {
    event.custom({
      type: 'tconstruct:melting',
      ingredient: recipe.put,
      result: recipe.get,
      temperature: recipe.degree,
      time: recipe.meltTime,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region MeltingFuel
  const meltingFuelPattern = [
    {
      put: { amount: 50, fluid: 'immersiveengineering:biodiesel' },
      tick: 12,
      speed: 12,
      degree: 1200,
    },
    {
      put: { amount: 50, fluid: 'tconstruct:blazing_blood' },
      tick: 14,
      speed: 14,
      degree: 1400,
    },
    {
      put: { amount: 50, fluid: 'thermal:crude_oil' },
      tick: 16,
      speed: 16,
      degree: 1600,
    },
    {
      put: { amount: 50, fluid: 'pneumaticcraft:kerosene' },
      tick: 18,
      speed: 18,
      degree: 1800,
    },
    {
      put: { amount: 50, fluid: 'ad_astra:fuel' },
      tick: 20,
      speed: 20,
      degree: 2000,
    },
  ];
  meltingFuelPattern.forEach((recipe) => {
    event.custom({
      type: 'tconstruct:melting_fuel',
      duration: recipe.tick, //Tick time for fluid amount
      fluid: recipe.put,
      rate: recipe.speed, //Speed multiplier 1.5
      temperature: recipe.degree,
    });
  });
  //#endregion
});
