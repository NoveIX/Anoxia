ServerEvents.recipes((event) => {
  event.remove({ type: 'tconstruct:melting_fuel' });

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

    //Tinker - Machine
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'tconstruct:smeltery/casting/scorched/foundry_controller',

    //Material

    //Ad Astra
    'tcintegrations:smeltery/melting/metal/desh/block',
    'tcintegrations:smeltery/melting/metal/desh/ingot',
    'tcintegrations:smeltery/melting/metal/desh/nugget',
    'tcintegrations:smeltery/melting/metal/desh/ore_singular',
    'tcintegrations:smeltery/melting/metal/desh/raw',
    'tcintegrations:smeltery/melting/metal/desh/raw_block',
    'tcintegrations:smeltery/casting/metal/desh/ingot_gold_cast',
    'tcintegrations:smeltery/casting/metal/desh/ingot_sand_cast',
    'tcintegrations:smeltery/casting/metal/desh/nugget_gold_cast',
    'tcintegrations:smeltery/casting/metal/desh/nugget_sand_cast',
    'tcintegrations:smeltery/casting/metal/desh/block',
    'tcintegrations:smeltery/melting/metal/ostrum/block',
    'tcintegrations:smeltery/melting/metal/ostrum/ingot',
    'tcintegrations:smeltery/melting/metal/ostrum/nugget',
    'tcintegrations:smeltery/melting/metal/ostrum/ore_singular',
    'tcintegrations:smeltery/melting/metal/ostrum/raw',
    'tcintegrations:smeltery/melting/metal/ostrum/raw_block',
    'tcintegrations:smeltery/casting/metal/ostrum/ingot_gold_cast',
    'tcintegrations:smeltery/casting/metal/ostrum/ingot_sand_cast',
    'tcintegrations:smeltery/casting/metal/ostrum/nugget_gold_cast',
    'tcintegrations:smeltery/casting/metal/ostrum/nugget_sand_cast',
    'tcintegrations:smeltery/casting/metal/ostrum/block',
    'tcintegrations:smeltery/melting/metal/calorite/block',
    'tcintegrations:smeltery/melting/metal/calorite/ingot',
    'tcintegrations:smeltery/melting/metal/calorite/nugget',
    'tcintegrations:smeltery/melting/metal/calorite/ore_singular',
    'tcintegrations:smeltery/melting/metal/calorite/raw',
    'tcintegrations:smeltery/melting/metal/calorite/raw_block',
    'tcintegrations:smeltery/casting/metal/calorite/ingot_gold_cast',
    'tcintegrations:smeltery/casting/metal/calorite/ingot_sand_cast',
    'tcintegrations:smeltery/casting/metal/calorite/nugget_gold_cast',
    'tcintegrations:smeltery/casting/metal/calorite/nugget_sand_cast',
    'tcintegrations:smeltery/casting/metal/calorite/block',

    //Ars Nouveau
    'tcintegrations:casting/source/gem_gold_cast',
    'tcintegrations:casting/source/gem_sand_cast',
    'tcintegrations:casting/source/block',
    'tcintegrations:melting/source_gem/gem',
    'tcintegrations:melting/source_gem/block',

    //Botania
    'tcintegrations:smeltery/casting/metal/manasteel/nugget_gold_cast',
    'tcintegrations:smeltery/casting/metal/manasteel/nugget_sand_cast',
    'tcintegrations:smeltery/casting/metal/manasteel/ingot_gold_cast',
    'tcintegrations:smeltery/casting/metal/manasteel/ingot_sand_cast',
    'tcintegrations:smeltery/casting/metal/manasteel/block',
    'tcintegrations:smeltery/melting/metal/manasteel/nugget',
    'tcintegrations:smeltery/melting/metal/manasteel/ingot',
    'tcintegrations:smeltery/melting/metal/manasteel/block',

    //Create
    'tconstruct:compat/create/andesite_alloy_iron',
    'tconstruct:compat/create/andesite_alloy_zinc',

    //JAOPCA
    'jaopca:tconstruct.dust_to_molten.coal',
    'jaopca:tconstruct.material_to_molten.coal',
    'jaopca:tconstruct.ore_to_molten_singular.coal',
    'jaopca:tconstruct.storage_block_to_molten.coal',
    'jaopca:tconstruct.molten_to_material_gold_cast.coal',
    'jaopca:tconstruct.molten_to_material_sand_cast.coal',
    'jaopca:tconstruct.molten_to_storage_block.coal',

    //Mekanism
    'tconstruct:smeltery/melting/metal/refined_glowstone/sword',
    'tconstruct:smeltery/melting/metal/refined_glowstone/shovel',
    'tconstruct:smeltery/melting/metal/refined_glowstone/nugget',
    'tconstruct:smeltery/melting/metal/refined_glowstone/mekanism_shield',
    'tconstruct:smeltery/melting/metal/refined_glowstone/leggings',
    'tconstruct:smeltery/melting/metal/refined_glowstone/ingot',
    'tconstruct:smeltery/melting/metal/refined_glowstone/helmet',
    'tconstruct:smeltery/melting/metal/refined_glowstone/chestplate',
    'tconstruct:smeltery/melting/metal/refined_glowstone/boots',
    'tconstruct:smeltery/melting/metal/refined_glowstone/block',
    'tconstruct:smeltery/melting/metal/refined_glowstone/axes',
    'tconstruct:compat/refined_glowstone_ingot',
    'tconstruct:smeltery/casting/metal/refined_glowstone/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/nugget_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_glowstone/block',
    'tconstruct:compat/refined_obsidian_ingot',
    'tconstruct:smeltery/melting/metal/refined_obsidian/sword',
    'tconstruct:smeltery/melting/metal/refined_obsidian/shovel',
    'tconstruct:smeltery/melting/metal/refined_obsidian/nugget',
    'tconstruct:smeltery/melting/metal/refined_obsidian/mekanism_shield',
    'tconstruct:smeltery/melting/metal/refined_obsidian/leggings',
    'tconstruct:smeltery/melting/metal/refined_obsidian/ingot',
    'tconstruct:smeltery/melting/metal/refined_obsidian/helmet',
    'tconstruct:smeltery/melting/metal/refined_obsidian/chestplate',
    'tconstruct:smeltery/melting/metal/refined_obsidian/boots',
    'tconstruct:smeltery/melting/metal/refined_obsidian/block',
    'tconstruct:smeltery/melting/metal/refined_obsidian/axes',
    'tconstruct:smeltery/casting/metal/refined_obsidian/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/nugget_sand_cast',
    'tconstruct:smeltery/casting/metal/refined_obsidian/block',

    //Mystical Agradditions
    'mysticalagradditions:tconstruct/casting/inferium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/inferium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/inferium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/inferium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/inferium/block',
    'mysticalagradditions:tconstruct/melting/inferium/nugget',
    'mysticalagradditions:tconstruct/melting/inferium/ingot',
    'mysticalagradditions:tconstruct/melting/inferium/block',
    'mysticalagradditions:tconstruct/casting/prudentium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/prudentium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/prudentium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/prudentium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/prudentium/block',
    'mysticalagradditions:tconstruct/melting/prudentium/block',
    'mysticalagradditions:tconstruct/melting/prudentium/ingot',
    'mysticalagradditions:tconstruct/melting/prudentium/nugget',
    'mysticalagradditions:tconstruct/casting/tertium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/tertium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/tertium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/tertium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/tertium/block',
    'mysticalagradditions:tconstruct/melting/tertium/nugget',
    'mysticalagradditions:tconstruct/melting/tertium/ingot',
    'mysticalagradditions:tconstruct/melting/tertium/block',
    'mysticalagradditions:tconstruct/casting/imperium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/imperium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/imperium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/imperium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/imperium/block',
    'mysticalagradditions:tconstruct/melting/imperium/nugget',
    'mysticalagradditions:tconstruct/melting/imperium/ingot',
    'mysticalagradditions:tconstruct/melting/imperium/block',
    'mysticalagradditions:tconstruct/casting/supremium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/supremium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/supremium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/supremium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/supremium/block',
    'mysticalagradditions:tconstruct/melting/supremium/nugget',
    'mysticalagradditions:tconstruct/melting/supremium/ingot',
    'mysticalagradditions:tconstruct/melting/supremium/block',
    'mysticalagradditions:tconstruct/casting/soulium/nugget_gold_cast',
    'mysticalagradditions:tconstruct/casting/soulium/nugget_sand_cast',
    'mysticalagradditions:tconstruct/casting/soulium/ingot_gold_cast',
    'mysticalagradditions:tconstruct/casting/soulium/ingot_sand_cast',
    'mysticalagradditions:tconstruct/casting/soulium/block',
    'mysticalagradditions:tconstruct/melting/soulium/nugget',
    'mysticalagradditions:tconstruct/melting/soulium/ingot',
    'mysticalagradditions:tconstruct/melting/soulium/block',

    //Tinker Construct
    'tconstruct:smeltery/alloys/molten_obsidian',
    'tconstruct:smeltery/alloys/molten_netherite',
    'tconstruct:smeltery/alloys/molten_brass',
    'tconstruct:smeltery/alloys/molten_bronze',
    'tconstruct:smeltery/alloys/molten_constantan',
    'tconstruct:smeltery/alloys/molten_electrum',
    'tconstruct:smeltery/alloys/molten_invar',
    'tconstruct:smeltery/alloys/molten_manyullyn',
    'tconstruct:smeltery/alloys/molten_rose_gold',
    'tconstruct:smeltery/alloys/molten_amethyst_bronze',
    'tconstruct:smeltery/alloys/molten_cinderslime',
    'tconstruct:smeltery/alloys/molten_hepatizon',
    'tconstruct:smeltery/alloys/molten_pig_iron',
    'tconstruct:smeltery/alloys/molten_queens_slime',
    'tconstruct:smeltery/alloys/molten_slimesteel',
    'tconstruct:smeltery/alloys/molten_refined_obsidian',

    //Thermal Expansion
    'tconstruct:smeltery/melting/metal/signalum/block',
    'tconstruct:smeltery/melting/metal/signalum/coin',
    'tconstruct:smeltery/melting/metal/signalum/dust',
    'tconstruct:smeltery/melting/metal/signalum/gear',
    'tconstruct:smeltery/melting/metal/signalum/ingot',
    'tconstruct:smeltery/melting/metal/signalum/nugget',
    'tconstruct:smeltery/melting/metal/signalum/plate',
    'tconstruct:smeltery/casting/metal/signalum/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/signalum/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/signalum/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/signalum/nugget_sand_cast',
    'tconstruct:smeltery/casting/metal/signalum/coin_gold_cast',
    'tconstruct:smeltery/casting/metal/signalum/coin_sand_cast',
    'tconstruct:smeltery/casting/metal/signalum/block',
    'tconstruct:smeltery/melting/metal/lumium/block',
    'tconstruct:smeltery/melting/metal/lumium/coin',
    'tconstruct:smeltery/melting/metal/lumium/dust',
    'tconstruct:smeltery/melting/metal/lumium/gear',
    'tconstruct:smeltery/melting/metal/lumium/ingot',
    'tconstruct:smeltery/melting/metal/lumium/nugget',
    'tconstruct:smeltery/melting/metal/lumium/plate',
    'tconstruct:smeltery/casting/metal/lumium/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/lumium/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/lumium/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/lumium/nugget_sand_cast',
    'tconstruct:smeltery/casting/metal/lumium/coin_gold_cast',
    'tconstruct:smeltery/casting/metal/lumium/coin_sand_cast',
    'tconstruct:smeltery/casting/metal/lumium/block',
    'tconstruct:smeltery/melting/metal/enderium/block',
    'tconstruct:smeltery/melting/metal/enderium/coin',
    'tconstruct:smeltery/melting/metal/enderium/dust',
    'tconstruct:smeltery/melting/metal/enderium/gear',
    'tconstruct:smeltery/melting/metal/enderium/ingot',
    'tconstruct:smeltery/melting/metal/enderium/nugget',
    'tconstruct:smeltery/melting/metal/enderium/plate',
    'tconstruct:smeltery/casting/metal/enderium/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/enderium/ingot_sand_cast',
    'tconstruct:smeltery/casting/metal/enderium/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/enderium/nugget_sand_cast',
    'tconstruct:smeltery/casting/metal/enderium/coin_gold_cast',
    'tconstruct:smeltery/casting/metal/enderium/coin_sand_cast',
    'tconstruct:smeltery/casting/metal/enderium/block',
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
    //Ad Astra
    { get: 'ad_astra:desh_block', put: { amount: 810, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'ad_astra:ostrum_block', put: { amount: 810, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'ad_astra:calorite_block', put: { amount: 810, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },

    //Ars Nouveau
    { get: 'ars_nouveau:source_gem_block', put: { amount: 400, tag: 'tcintegrations:molten_source_gem' }, cooling: getCoolingTick(material.source, fromAmount(400)) },

    //Botania
    { get: 'botania:manasteel_block', put: { amount: 810, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(810)) },

    //Create
    { get: 'create:andesite_alloy', put: { amount: 90, tag: 'forge:molten_platinum' }, cooling: getCoolingTick(material.platinum, fromAmount(90)), caster: { item: 'minecraft:polished_andesite' }, consume: true },

    //Mekanism
    { get: 'mekanism:block_refined_glowstone', put: { amount: 810, tag: 'forge:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(810)) },
    { get: 'mekanism:block_refined_obsidian', put: { amount: 810, tag: 'forge:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(810)) },

    //Mystical Agriculture
    { get: 'mysticalagriculture:inferium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:prudentium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:tertium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:imperium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:supremium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:soulium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },

    //Tinker Construct
    { get: 'tconstruct:smeltery_controller', put: { amount: 360, tag: 'forge:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(360)), caster: { tag: 'tconstruct:smeltery_bricks' }, consume: true },
    { get: 'tconstruct:foundry_controller', put: { amount: 1000, tag: 'tconstruct:molten_obsidian' }, cooling: getCoolingTick(material.obsidian, getIngot(1, 'block')), caster: { tag: 'tconstruct:foundry_bricks' }, consume: true },

    //Thermal
    { get: 'thermal:signalum_block', put: { amount: 810, tag: 'forge:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(810)) },
    { get: 'thermal:lumium_block', put: { amount: 810, tag: 'forge:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(810)) },
    { get: 'thermal:enderium_block', put: { amount: 810, tag: 'forge:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(810)) },

    //Coal
    { get: 'minecraft:coal_block', put: { amount: 900, tag: 'forge:molten_coal' }, cooling: getCoolingTick(material.coal, fromAmount(900)) },
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
    { get: 'anoxia:obsidian_ingot', put: { amount: 250, tag: 'tconstruct:molten_obsidian' }, cooling: getCoolingTick(material.obsidian, 1.5), ingot: true },

    //Ad Astra
    { get: 'ad_astra:desh_nugget', put: { amount: 10, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), nugget: true },
    { get: 'ad_astra:desh_ingot', put: { amount: 90, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), ingot: true },
    { get: 'ad_astra:ostrum_nugget', put: { amount: 10, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), nugget: true },
    { get: 'ad_astra:ostrum_ingot', put: { amount: 90, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), ingot: true },
    { get: 'ad_astra:calorite_nugget', put: { amount: 10, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), nugget: true },
    { get: 'ad_astra:calorite_ingot', put: { amount: 90, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), ingot: true },

    //Ars Nouveau
    { get: 'ars_nouveau:source_gem', put: { amount: 100, tag: 'tcintegrations:molten_source_gem' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },

    //Botania
    { get: 'botania:manasteel_nugget', put: { amount: 10, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), nugget: true },
    { get: 'botania:manasteel_ingot', put: { amount: 90, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), ingot: true },

    //Mekanism
    { get: 'mekanism:nugget_refined_glowstone', put: { amount: 10, tag: 'forge:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mekanism:ingot_refined_glowstone', put: { amount: 90, tag: 'forge:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mekanism:ingot_refined_glowstone', put: { amount: 450, tag: 'forge:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(450)), caster: { tag: 'forge:dusts/glowstone' }, consume: true },
    { get: 'mekanism:nugget_refined_obsidian', put: { amount: 10, tag: 'forge:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(10)), nugget: true },
    { get: 'mekanism:ingot_refined_obsidian', put: { amount: 90, tag: 'forge:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(90)), ingot: true },
    { get: 'mekanism:ingot_refined_obsidian', put: { amount: 450, tag: 'forge:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(450)), caster: { tag: 'forge:dusts/refined_obsidian' }, consume: true },

    //Mystical Agriculture
    { get: 'mysticalagriculture:inferium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:inferium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:inferium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },
    { get: 'mysticalagriculture:prudentium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:prudentium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:prudentium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },
    { get: 'mysticalagriculture:tertium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:tertium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:tertium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },
    { get: 'mysticalagriculture:imperium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:imperium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:imperium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },
    { get: 'mysticalagriculture:supremium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:supremium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:supremium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },
    { get: 'mysticalagriculture:soulium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), nugget: true },
    { get: 'mysticalagriculture:soulium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), ingot: true },
    { get: 'mysticalagriculture:soulium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), gem: true },

    //Tinker Construct
    { get: 'tconstruct:seared_brick', put: { amount: 125, tag: 'tconstruct:molten_clay' }, cooling: getCoolingTick(material.clay, 1), caster: { item: 'minecraft:flint' }, consume: true },
    { get: 'tconstruct:seared_brick', put: { amount: 250, tag: 'tconstruct:seared_stone' }, cooling: getCoolingTick(material.stone, 1.5), ingot: true },
    { get: 'tconstruct:scorched_brick', put: { amount: 125, tag: 'forge:magma' }, cooling: getCoolingTick(material.magma, 1), caster: { item: 'minecraft:flint' }, consume: true },
    { get: 'tconstruct:scorched_brick', put: { amount: 250, tag: 'tconstruct:scorched_stone' }, cooling: getCoolingTick(material.scorchedStone, 1.5), ingot: true },

    //Thermal Expansion
    { get: 'thermal:signalum_ingot', put: { amount: 90, tag: 'forge:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(90)), ingot: true },
    { get: 'thermal:signalum_nugget', put: { amount: 10, tag: 'forge:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(10)), ingot: true },
    { get: 'thermal:signalum_coin', put: { amount: 30, tag: 'forge:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(30)), ingot: true },
    { get: 'thermal:lumium_ingot', put: { amount: 90, tag: 'forge:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(90)), ingot: true },
    { get: 'thermal:lumium_nugget', put: { amount: 10, tag: 'forge:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(10)), ingot: true },
    { get: 'thermal:lumium_coin', put: { amount: 30, tag: 'forge:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(30)), ingot: true },
    { get: 'thermal:enderium_ingot', put: { amount: 90, tag: 'forge:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(90)), ingot: true },
    { get: 'thermal:enderium_nugget', put: { amount: 10, tag: 'forge:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(10)), ingot: true },
    { get: 'thermal:enderium_coin', put: { amount: 30, tag: 'forge:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(30)), ingot: true },

    //Coal
    { get: 'minecraft:coal', put: { amount: 100, tag: 'forge:molten_coal' }, cooling: getCoolingTick(material.coal, fromAmount(100)), gem: true },
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
    else if (recipe.gem) addDualCastRecipe('gem', json, event);
    else if (recipe.coin) addDualCastRecipe('coin', json, event);
    else {
      ((json.cast = recipe.caster), (json.cast_consumed = recipe.consume));
      event.custom(json);
    }
  });
  //#endregion

  //# ====================================================================================== #

  //#region Melting
  const meltingPattern = [
    //Ars Nouveau
    { get: { amount: 400, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:storage_blocks/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(400)) },
    { get: { amount: 100, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:gems/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(100)) },

    //Ad Astra
    { get: { amount: 810, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_desh' }, put: [{ tag: 'forge:dusts/desh' }, { tag: 'forge:ingots/desh' }, { tag: 'forge:plates/desh' }], degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_desh' }, put: { tag: 'forge:nuggets/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_desh' }, put: { tag: 'forge:ores/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_desh' }, put: { tag: 'forge:raw_materials/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/raw_desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(1080)) },
    { get: { amount: 810, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_ostrum' }, put: [{ tag: 'forge:dusts/ostrum' }, { tag: 'forge:ingots/ostrum' }, { tag: 'forge:plates/ostrum' }], degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:nuggets/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:ores/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:raw_materials/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/raw_ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(1080)) },
    { get: { amount: 810, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_calorite' }, put: [{ tag: 'forge:dusts/calorite' }, { tag: 'forge:ingots/calorite' }, { tag: 'forge:plates/calorite' }], degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_calorite' }, put: { tag: 'forge:nuggets/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_calorite' }, put: { tag: 'forge:ores/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_calorite' }, put: { tag: 'forge:raw_materials/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/raw_calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(1080)) },

    //Botania
    { get: { amount: 810, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:storage_blocks/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:ingots/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:nuggets/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(10)) },

    //Mekanism
    { get: { amount: 10, tag: 'forge:molten_refined_glowstone' }, put: { tag: 'forge:nuggets/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(10)) },
    { get: { amount: 90, tag: 'forge:molten_refined_glowstone' }, put: { tag: 'forge:ingots/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(90)) },
    { get: { amount: 810, tag: 'forge:molten_refined_glowstone' }, put: { tag: 'forge:storage_blocks/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(810)) },
    { get: { amount: 10, tag: 'forge:molten_refined_obsidian' }, put: { tag: 'forge:nuggets/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(10)) },
    { get: { amount: 90, tag: 'forge:molten_refined_obsidian' }, put: { tag: 'forge:ingots/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(90)) },
    { get: { amount: 810, tag: 'forge:molten_refined_obsidian' }, put: { tag: 'forge:storage_blocks/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(810)) },

    //Mystical Agradditions
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_nugget' }, degree: 800, meltTime: getMeltingTick(material.inferium, fromAmount(10)) },
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_nugget' }, degree: 800, meltTime: getMeltingTick(material.prudentium, fromAmount(10)) },
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_nugget' }, degree: 800, meltTime: getMeltingTick(material.tertium, fromAmount(10)) },
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_nugget' }, degree: 800, meltTime: getMeltingTick(material.imperium, fromAmount(10)) },
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_nugget' }, degree: 800, meltTime: getMeltingTick(material.supremium, fromAmount(10)) },
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot_block' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_nugget' }, degree: 800, meltTime: getMeltingTick(material.soulium, fromAmount(10)) },

    //Thermal Expansion
    { get: { amount: 810, tag: 'forge:molten_signalum' }, put: { tag: 'forge:storage_blocks/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(810)) },
    { get: { amount: 30, tag: 'forge:molten_signalum' }, put: { tag: 'forge:coins/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(30)) },
    { get: { amount: 90, tag: 'forge:molten_signalum' }, put: [{ tag: 'forge:dusts/signalum' }, { tag: 'forge:ingots/signalum' }, { tag: 'forge:plates/signalum' }], degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(90)) },
    { get: { amount: 360, tag: 'forge:molten_signalum' }, put: { tag: 'forge:gears/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(360)) },
    { get: { amount: 10, tag: 'forge:molten_signalum' }, put: { tag: 'forge:nuggets/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(10)) },
    { get: { amount: 810, tag: 'forge:molten_lumium' }, put: { tag: 'forge:storage_blocks/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(810)) },
    { get: { amount: 30, tag: 'forge:molten_lumium' }, put: { tag: 'forge:coins/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(30)) },
    { get: { amount: 90, tag: 'forge:molten_lumium' }, put: [{ tag: 'forge:dusts/lumium' }, { tag: 'forge:ingots/lumium' }, { tag: 'forge:plates/lumium' }], degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(90)) },
    { get: { amount: 360, tag: 'forge:molten_lumium' }, put: { tag: 'forge:gears/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(360)) },
    { get: { amount: 10, tag: 'forge:molten_lumium' }, put: { tag: 'forge:nuggets/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(10)) },
    { get: { amount: 810, tag: 'forge:molten_enderium' }, put: { tag: 'forge:storage_blocks/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(810)) },
    { get: { amount: 30, tag: 'forge:molten_enderium' }, put: { tag: 'forge:coins/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(30)) },
    { get: { amount: 90, tag: 'forge:molten_enderium' }, put: [{ tag: 'forge:dusts/enderium' }, { tag: 'forge:ingots/enderium' }, { tag: 'forge:plates/enderium' }], degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(90)) },
    { get: { amount: 360, tag: 'forge:molten_enderium' }, put: { tag: 'forge:gears/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(360)) },
    { get: { amount: 10, tag: 'forge:molten_enderium' }, put: { tag: 'forge:nuggets/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(10)) },

    //Coal
    { get: { amount: 100, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:materials/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(100)) },
    { get: { amount: 150, tag: 'forge:molten_coal' }, put: { tag: 'forge:ores/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(150)) },
    { get: { amount: 900, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:storage_blocks/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(900)) },

    //Obsidian
    { get: { amount: 250, tag: 'tconstruct:molten_obsidian' }, put: { tag: 'forge:ingots/obsidian' }, degree: 1000, meltTime: getMeltingTick(material.obsidian, 1) },
    { get: { amount: 500, tag: 'tconstruct:molten_obsidian' }, put: { item: 'anoxia:obsidian_with_iron' }, degree: 1000, meltTime: getMeltingTick(material.obsidian, 2) },
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
    { speed: 8, degree: 800 },
    { put: { amount: 50, fluid: 'minecraft:lava' }, tick: 100, speed: 10, degree: 1000 },
    { put: { amount: 50, fluid: 'immersiveengineering:biodiesel' }, tick: 120, speed: 12, degree: 1200 },
    { put: { amount: 50, fluid: 'tconstruct:blazing_blood' }, tick: 140, speed: 14, degree: 1400 },
    { put: { amount: 50, fluid: 'thermal:crude_oil' }, tick: 160, speed: 16, degree: 1600 },
    { put: { amount: 50, fluid: 'pneumaticcraft:kerosene' }, tick: 180, speed: 18, degree: 1800 },
    { put: { amount: 50, fluid: 'ad_astra:fuel' }, tick: 200, speed: 20, degree: 2000 },
  ];
  meltingFuelPattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:melting_fuel',
      rate: recipe.speed, //Speed multiplier 1.5
      temperature: recipe.degree,
    };

    // Add propriery only fluid
    if (recipe.tick) json.duration = recipe.tick; //Tick time for fluid amount
    if (recipe.speed) json.fluid = recipe.put;

    event.custom(json);
  });
  //#endregion
});
