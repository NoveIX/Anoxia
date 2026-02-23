ServerEvents.recipes((event) => {
  //#region RemoveID
  const RmRecipeID = [
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
    'tconstruct:smeltery/casting/metal/refined_glowstone',

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
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  event.remove({ output: 'tconstruct:seared_brick' });
  event.blasting('tconstruct:seared_brick', 'tconstruct:grout', 0, 400);
  event.remove({ output: 'tconstruct:scorched_brick' });
  event.blasting('tconstruct:scorched_brick', 'tconstruct:nether_grout', 0, 600);

  //# =================================================================================================== #

  //#region Alloy
  const AlloyPattern = [
    /*  {
      get: { amount: 10, tag: 'tconstruct:molten_steel' },
      put: [
        { amount: 100, tag: 'forge:molten_coal' }, // 9 Coal = 1 Ingot
        { amount: 10, tag: 'tconstruct:molten_iron' },
      ],
      heat: 950,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_steel' },
      put: [
        { amount: 3000, fluid: 'mekanism:oxygen' },
        { amount: 10, tag: 'tconstruct:molten_iron' },
      ],
      heat: 950,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_netherite' },
      put: [
        { amount: 40, tag: 'tconstruct:molten_gold' },
        { amount: 40, tag: 'tconstruct:molten_debris' },
      ],
      heat: 1175,
    },
    {
      get: { amount: 20, tag: 'forge:molten_brass' },
      put: [
        { amount: 10, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_zinc' },
      ],
      heat: 605,
    },
    {
      get: { amount: 40, tag: 'forge:molten_bronze' },
      put: [
        { amount: 30, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_tin' },
      ],
      heat: 700,
    },
    {
      get: { amount: 20, tag: 'forge:molten_constantan' },
      put: [
        { amount: 10, tag: 'forge:molten_copper' },
        { amount: 10, tag: 'forge:molten_nickel' },
      ],
      heat: 920,
    },
    {
      get: { amount: 20, tag: 'forge:molten_electrum' },
      put: [
        { amount: 10, tag: 'forge:molten_gold' },
        { amount: 10, tag: 'forge:molten_silver' },
      ],
      heat: 760,
    },
    {
      get: { amount: 30, tag: 'forge:molten_invar' },
      put: [
        { amount: 20, tag: 'forge:molten_iron' },
        { amount: 10, tag: 'forge:molten_nickel' },
      ],
      heat: 900,
    },
    {
      put: [
        { amount: 30, tag: 'forge:molten_cobalt' },
        { amount: 10, tag: 'tconstruct:molten_debris' },
      ],
      get: { amount: 40, tag: 'forge:molten_manyullyn' },
      heat: 1200,
    },
    {
      get: { amount: 10, tag: 'tconstruct:molten_obsidian' },
      put: [
        { amount: 10, fluid: 'minecraft:water' },
        { amount: 10, fluid: 'minecraft:lava' },
      ],
      heat: 1000,
    }, */
    //Mekanism
    //Tinker Metal
    /*
    {
      get: { amount: 180, fluid: 'tconstruct:molten_slimesteel' },
      put: [
        { amount: 90, tag: 'forge:molten_iron' },
        { amount: 250, tag: 'tconstruct:sky_slime' },
        { amount: 250, tag: 'tconstruct:seared_stone' },
      ],
      heat: 900,
    },
    {
      get: { amount: 90, tag: 'forge:molten_amethyst_bronze' },
      put: [
        { amount: 90, tag: 'forge:molten_bronze' },
        { amount: 100, tag: 'tconstruct:molten_amethyst' },
      ],
      heat: 820,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_pig_iron' },
      put: [
        { amount: 90, tag: 'forge:molten_iron' },
        { amount: 500, tag: 'tconstruct:meat_soup' },
        { amount: 250, tag: 'forge:honey' },
      ],
      heat: 811,
    },
    {
      get: { amount: 90, fluid: 'tconstruct:molten_cinderslime' },
      put: [
        { amount: 90, tag: 'forge:molten_gold' },
        { amount: 250, tag: 'tconstruct:ichor' },
        { amount: 250, tag: 'tconstruct:scorched_stone' },
      ],
      heat: 1050,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_queens_slime' },
      put: [
        { amount: 90, tag: 'forge:molten_cobalt' },
        { amount: 90, tag: 'forge:molten_gold' },
        { amount: 250, tag: 'forge:magma' },
      ],
      heat: 1150,
    },
    {
      get: { amount: 180, tag: 'forge:molten_hepatizon' },
      put: [
        { amount: 180, tag: 'forge:molten_copper' },
        { amount: 90, tag: 'forge:molten_cobalt' },
        { amount: 100, tag: 'tconstruct:molten_quartz' },
      ],
      heat: 1400,
    },
    */
  ];
  AlloyPattern.forEach((recipe) => {
    event.custom({
      type: 'tconstruct:alloy',
      inputs: recipe.put,
      result: recipe.get,
      temperature: recipe.heat,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Casting Basin
  const CastingBasinPattern = [
    //Create
    {
      get: 'create:andesite_alloy',
      put: { amount: 90, tag: 'forge:molten_platinum' },
      consume: true,
      cooling: GetCoolingTick(Material.Platinum, 1),
      caster: { item: 'minecraft:polished_andesite' },
    },
    {
      get: 'tconstruct:smeltery_controller',
      put: { amount: 360, tag: 'forge:molten_copper' },
      consume: true,
      cooling: GetCoolingTick(Material.Copper, 4),
      caster: { tag: 'tconstruct:smeltery_bricks' },
    },
    {
      get: 'tconstruct:foundry_controller',
      put: { amount: 1000, tag: 'tconstruct:molten_obsidian' },
      consume: true,
      cooling: GetCoolingTick(Material.Obsidian, 1),
      caster: { tag: 'tconstruct:foundry_bricks' },
    },
  ];
  CastingBasinPattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:casting_basin',
      cast: recipe.caster,
      cast_consumed: recipe.consume,
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    };

    if (!recipe.consume) json.cast_consumed = recipe.consume;

    event.custom(json);
  });
  //#endregion

  //# =================================================================================================== #

  //#region Casting Table
  const CastingTablePattern = [
    //Anoxia
    {
      get: 'anoxia:obsidian_ingot',
      put: { amount: 250, tag: 'tconstruct:molten_obsidian' },
      cooling: GetCoolingTick(Material.Obsidian, 1),
      caster: { tag: 'tconstruct:casts/multi_use/ingot' },
    },
    {
      get: 'anoxia:obsidian_ingot',
      put: { amount: 250, tag: 'tconstruct:molten_obsidian' },
      consume: true,
      cooling: GetCoolingTick(Material.Obsidian, 1),
      caster: { tag: 'tconstruct:casts/single_use/ingot' },
    },

    //Seared Brick
    {
      get: 'tconstruct:seared_brick',
      put: { amount: 250, tag: 'tconstruct:seared_stone' },
      cooling: GetCoolingTick(Material.Stone, 1),
      caster: { tag: 'tconstruct:casts/multi_use/ingot' },
    },
    {
      get: 'tconstruct:seared_brick',
      put: { amount: 250, tag: 'tconstruct:seared_stone' },
      consume: true,
      cooling: GetCoolingTick(Material.Stone, 1),
      caster: { tag: 'tconstruct:casts/single_use/ingot' },
    },
    {
      get: 'tconstruct:seared_brick',
      put: { amount: 125, tag: 'tconstruct:molten_clay' },
      consume: true,
      cooling: GetCoolingTick(Material.Clay, 0.5),
      caster: { item: 'minecraft:flint' },
    },

    //Scorched Brick
    {
      get: 'tconstruct:scorched_brick',
      put: { amount: 250, tag: 'tconstruct:scorched_stone' },
      cooling: GetCoolingTick(Material.ScorchedStone, 1),
      caster: { tag: 'tconstruct:casts/multi_use/ingot' },
    },
    {
      get: 'tconstruct:scorched_brick',
      put: { amount: 250, tag: 'tconstruct:scorched_stone' },
      consume: true,
      cooling: GetCoolingTick(Material.ScorchedStone, 1),
      caster: { tag: 'tconstruct:casts/single_use/ingot' },
    },
    {
      get: 'tconstruct:scorched_brick',
      put: { amount: 125, tag: 'forge:magma' },
      consume: true,
      cooling: GetCoolingTick(Material.Magma, 0.5),
      caster: { item: 'minecraft:flint' },
    },

    //Mekanism
    {
      get: { tag: 'forge:ingots/refined_glowstone' },
      put: { amount: 450, tag: 'forge:molten_osmium' },
      consume: true,
      cooling: GetCoolingTick(Material.Osmium, 5),
      caster: { tag: 'forge:dusts/glowstone' },
    },
    {
      get: { tag: 'forge:ingots/refined_obsidian' },
      put: { amount: 450, tag: 'forge:molten_osmium' },
      consume: true,
      cooling: GetCoolingTick(Material.Osmium, 5),
      caster: { tag: 'forge:dusts/refined_obsidian' },
    },
  ];
  CastingTablePattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:casting_table',
      cast: recipe.caster,
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    };

    if (recipe.consume) json.cast_consumed = recipe.consume;

    event.custom(json);
  });
  //#endregion

  //# =================================================================================================== #

  //#region Melting
  const MeltingPattern = [
    //Coal
    { get: { amount: 100, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:materials/coal' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(100)) },
    { get: { amount: 150, tag: 'forge:molten_coal' }, put: { tag: 'forge:ores/coal' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(150)) },
    { get: { amount: 900, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:storage_blocks/coal' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(900)) },

    //Coke
    //{ get: { amount: 200, tag: 'forge:molten_coal' }, put: { tag: 'forge:coal_coke' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(200)) },
    //{ get: { amount: 200, tag: 'forge:molten_coal' }, put: { tag: 'forge:dusts/coal_coke' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(100)) },
    //{ get: { amount: 1800, tag: 'forge:molten_coal' }, put: { tag: 'forge:storage_blocks/coal_coke' }, degree: 900, meltTime: GetMeltingTick(Material.Coal, FromAmount(1800)) },

    //Mystical Agradditions
    //Inferium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Inferium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Inferium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Inferium, FromAmount(10)) },

    //Prudentium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Prudentium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Prudentium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Prudentium, FromAmount(10)) },

    //Tertium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Tertium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Tertium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Tertium, FromAmount(10)) },

    //Imperium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Imperium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Imperium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Imperium, FromAmount(10)) },

    //Supremium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Supremium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Supremium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Supremium, FromAmount(10)) },

    //Soulium
    { get: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot_block' }, degree: 800, meltTime: GetMeltingTick(Material.Soulium, FromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot' }, degree: 800, meltTime: GetMeltingTick(Material.Soulium, FromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_nugget' }, degree: 800, meltTime: GetMeltingTick(Material.Soulium, FromAmount(10)) },

    //Botania
    { get: { amount: 810, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:storage_blocks/manasteel' }, degree: 950, meltTime: GetMeltingTick(Material.ManaSteel, FromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:ingots/manasteel' }, degree: 950, meltTime: GetMeltingTick(Material.ManaSteel, FromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_manasteel' }, put: { tag: 'forge:nuggets/manasteel' }, degree: 950, meltTime: GetMeltingTick(Material.ManaSteel, FromAmount(10)) },

    //Ars Nouveau
    { get: { amount: 400, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:storage_blocks/source_gem' }, degree: 980, meltTime: GetMeltingTick(Material.Source, FromAmount(400)) },
    { get: { amount: 100, tag: 'forge:molten_source_gem' }, put: { tag: 'forge:gems/source_gem' }, degree: 980, meltTime: GetMeltingTick(Material.Source, FromAmount(100)) },

    //Ad Astra
    //Desh
    { get: { amount: 810, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_desh' }, put: { tag: 'forge:ingots/desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_desh' }, put: { tag: 'forge:nuggets/desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_desh' }, put: { tag: 'forge:ores/desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_desh' }, put: { tag: 'forge:raw_materials/desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_desh' }, put: { tag: 'forge:storage_blocks/raw_desh' }, degree: 500, meltTime: GetMeltingTick(Material.Desh, FromAmount(1080)) },

    //Ostrum
    { get: { amount: 810, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:ingots/ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:nuggets/ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:ores/ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:raw_materials/ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_ostrum' }, put: { tag: 'forge:storage_blocks/raw_ostrum' }, degree: 500, meltTime: GetMeltingTick(Material.Ostrum, FromAmount(1080)) },

    //Calorite
    { get: { amount: 810, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(810)) },
    { get: { amount: 90, tag: 'forge:molten_calorite' }, put: { tag: 'forge:ingots/calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(90)) },
    { get: { amount: 10, tag: 'forge:molten_calorite' }, put: { tag: 'forge:nuggets/calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(10)) },
    { get: { amount: 270, tag: 'forge:molten_calorite' }, put: { tag: 'forge:ores/calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(270)) },
    { get: { amount: 120, tag: 'forge:molten_calorite' }, put: { tag: 'forge:raw_materials/calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(120)) },
    { get: { amount: 1080, tag: 'forge:molten_calorite' }, put: { tag: 'forge:storage_blocks/raw_calorite' }, degree: 500, meltTime: GetMeltingTick(Material.Calorite, FromAmount(1080)) },
  ];
  MeltingPattern.forEach((recipe) => {
    event.custom({
      type: 'tconstruct:melting',
      ingredient: recipe.put,
      result: recipe.get,
      temperature: recipe.degree,
      time: recipe.meltTime,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region TinkerCompating
  const TinkerCompatingPattern = [
    //Mekanism
    {
      get: { tag: 'forge:storage_blocks/refined_glowstone' },
      put: { amount: 810, tag: 'forge:molten_refined_glowstone' },
      cooling: GetCoolingTick(Material.RefinedGlowstone, FromAmount(810)),
    },
  ];
  TinkerCompatingPattern.forEach((recipe) => {
    //ingot
    event.custom({
      type: 'tconstruct:casting_table',
      cast: { tag: 'tconstruct:casts/multi_use/ingot' },
      cooling_time: 61,
      fluid: { amount: 90, tag: 'forge:molten_refined_glowstone' },
      result: { tag: 'forge:ingots/refined_glowstone' },
    });

    //Ingot
    event.custom({
      type: 'tconstruct:casting_table',
      cast: { tag: 'tconstruct:casts/single_use/ingot' },
      cast_consumed: true,
      cooling_time: 61,
      fluid: { amount: 90, tag: 'forge:molten_refined_glowstone' },
      result: { tag: 'forge:ingots/refined_glowstone' },
    });

    //Block
    event.custom({
      type: 'tconstruct:casting_basin',
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    });
  });
  //#endregion
});
