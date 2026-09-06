ServerEvents.recipes((event) => {
  event.remove({ type: 'tconstruct:melting_fuel' });

  //# ====================================================================================== #

  //Cast
  const TypeCast = ['_sand_cast', '_gold_cast'];

  //#region RemoveID
  const rmRecipeId = [
    // Compact Smeltery
    'enderio:smelting/tconstruct/smeltery/seared/seared_brick',
    'enderio:smelting/tconstruct/smeltery/scorched/scorched_brick',

    //Create
    'tconstruct:compat/create/andesite_alloy_iron',
    'tconstruct:compat/create/andesite_alloy_zinc',

    //Tinker compat mekanism
    'tconstruct:compat/refined_obsidian_ingot',
    'tconstruct:compat/refined_glowstone_ingot',

    //Tinker - Machine
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'tconstruct:smeltery/casting/scorched/foundry_controller',
  ];

  // Create and Thermal compact alloy recipe
  funcGeneric.AddToArray(rmRecipeId, 'createaddition:compat/tconstruct/', ['amethyst_bronze', 'slimesteel', 'pig_iron', 'pig_iron_2', 'rose_gold', 'manyullyn', 'queens_slime', 'hepatizon']);
  funcGeneric.AddToArray(rmRecipeId, 'thermal:compat/tconstruct/', ['amethyst_bronze', 'slimesteel', 'pigiron', 'rose_gold', 'manyullyn', 'queens_slime', 'hepatizon']).Prefix('smelter_alloy_tconstruct_').Suffix('_ingot');

  // Tinker Alloy
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/alloys/', ['obsidian', 'netherite', 'brass', 'bronze', 'constantan', 'electrum', 'invar', 'manyullyn', 'rose_gold', 'amethyst_bronze', 'cinderslime', 'hepatizon', 'pig_iron', 'queens_slime', 'slimesteel', 'refined_obsidian']).Prefix('molten_');

  //# ====================================================================================== #

  //AD ASTRA

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/desh/', ['block', 'ingot', 'nugget', 'ore_singular', 'raw', 'raw_block']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/desh/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/desh/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/ostrum/', ['block', 'ingot', 'nugget', 'ore_singular', 'raw', 'raw_block']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/ostrum/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/ostrum/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/calorite/', ['block', 'ingot', 'nugget', 'ore_singular', 'raw', 'raw_block']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/calorite/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/calorite/', 'block');

  //ARS NOUVEAU

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/source_gem/', ['block', 'gem']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/source/', 'gem').Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/source/', 'block');

  //BOTANIA

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/manasteel/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/manasteel/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/manasteel/', 'block');

  //CHEMLIB

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/zinc/', ['block', 'ingot', 'nugget', 'dust', 'plate']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/zinc/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/zinc/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/platinum/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/platinum/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/platinum/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/tungsten/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/tungsten/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/tungsten/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/chromium/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/chromium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/chromium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/cadmium/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/cadmium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/cadmium/', 'block');

  //CREATE

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/brass/', ['block', 'ingot', 'nugget', 'plate']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/brass/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/brass/', 'block');

  //MEKANISM

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/osmium/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/osmium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/osmium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/uranium/', ['block', 'ingot', 'nugget', 'dust', 'plate']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/uranium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/uranium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/refined_glowstone/', ['block', 'ingot', 'nugget', 'helmet', 'chestplate', 'leggings', 'boots', 'axes', 'shovel', 'sword', 'mekanism_shield']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/refined_glowstone/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/refined_glowstone/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/refined_obsidian/', ['block', 'ingot', 'nugget', 'helmet', 'chestplate', 'leggings', 'boots', 'axes', 'shovel', 'sword', 'mekanism_shield']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/refined_obsidian/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/refined_obsidian/', 'block');

  //MINECRAFT

  funcGeneric.AddToArray(rmRecipeId, 'jaopca:tconstruct.', ['ore_to_molten_singular', 'molten_to_storage_block']).Suffix('.coal');
  funcGeneric.AddToArray(rmRecipeId, 'jaopca:tconstruct.', ['storage_block', 'material', 'dust']).Suffix('_to_molten.coal');
  funcGeneric.AddToArray(rmRecipeId, 'jaopca:tconstruct.', 'material').Prefix('molten_to_').Suffix(['_sand_cast.coal', '_gold_cast.coal']);

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/clay/', ['block', 'ball']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/clay/', 'brick');
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/clay/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/glass/', ['block', 'pane', 'sand']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/glass/', ['block', 'pane']);

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/obsidian/', ['block', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/obsidian/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/emerald/', ['block', 'dust', 'gear', 'gem']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/emerald/', 'gem');
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/emerald/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/quartz/', ['block', 'decorative_block', 'slab', 'gem', 'dust', 'gear']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/quartz/', 'gem').Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/quartz/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/amethyst/', ['block', 'gem']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/amethyst/', 'gem').Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/amethyst/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/diamond/', ['block', 'gem', 'dust', 'gear']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/diamond/', 'gem').Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/diamond/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/netherite/', ['debris_nugget', 'ore', 'scrap']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/netherite/', ['debris_nugget', 'scrap']).Suffix(TypeCast);

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/iron/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/iron/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/iron/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/gold/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/gold/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/gold/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/copper/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/copper/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/copper/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/netherite/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/netherite/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/netherite/', 'block');

  //MYSTICAL AGRICULTURE

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/inferium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/inferium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/inferium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/prudentium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/prudentium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/prudentium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/tertium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/tertium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/tertium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/imperium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/imperium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/imperium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/supremium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/supremium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/supremium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/soulium/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/soulium/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/soulium/', 'block');

  //THERMAL SERIES

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/steel/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/steel/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/steel/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/rose_gold/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/rose_gold/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/rose_gold/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/tin/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/tin/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/tin/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/lead/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/lead/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/lead/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/silver/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/silver/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/silver/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/nickel/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/nickel/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/nickel/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/bronze/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/bronze/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/bronze/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/electrum/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/electrum/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/electrum/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/invar/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/invar/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/invar/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/constantan/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/constantan/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/constantan/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/enderium/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/enderium/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/enderium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/lumium/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/lumium/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/lumium/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/signalum/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'gear', 'coin']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/signalum/', ['ingot', 'nugget', 'coin']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/signalum/', 'block');

  //TINKER CONSTRUCT

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/cobalt/', ['block', 'ingot', 'nugget', 'dust']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/cobalt/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/cobalt/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/knightmetal/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/knightmetal/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/knightmetal/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/slimesteel/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/slimesteel/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/slimesteel/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/amethyst_bronze/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/amethyst_bronze/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/amethyst_bronze/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/pig_iron/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/pig_iron/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/pig_iron/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/manyullyn/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/manyullyn/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/manyullyn/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/hepatizon/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/hepatizon/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/hepatizon/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/cinderslime/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/cinderslime/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/cinderslime/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/queens_slime/', ['block', 'ingot', 'nugget']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/queens_slime/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/queens_slime/', 'block');

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/melting/metal/aluminum/', ['block', 'ingot', 'nugget', 'dust', 'plate', 'sheetmetal']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/aluminum/', ['ingot', 'nugget']).Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:tconstruct/casting/metal/aluminum/', 'block');

  //TWILIGHT FOREST

  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/melting/metal/steeleaf/', ['block', 'ingot']);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/steeleaf/', 'ingot').Suffix(TypeCast);
  funcGeneric.AddToArray(rmRecipeId, 'tconstruct:smeltery/casting/metal/steeleaf/', 'block');

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
      get: { amount: 20, tag: 'tconstruct:molten_brass' },
      put: [
        { amount: 10, tag: 'tconstruct:molten_copper' },
        { amount: 10, tag: 'tconstruct:molten_zinc' },
      ],
      degree: 605,
    },
    {
      get: { amount: 40, tag: 'tconstruct:molten_bronze' },
      put: [
        { amount: 30, tag: 'tconstruct:molten_copper' },
        { amount: 10, tag: 'tconstruct:molten_tin' },
      ],
      degree: 700,
    },
    {
      get: { amount: 20, tag: 'tconstruct:molten_constantan' },
      put: [
        { amount: 10, tag: 'tconstruct:molten_copper' },
        { amount: 10, tag: 'tconstruct:molten_nickel' },
      ],
      degree: 920,
    },
    {
      get: { amount: 20, tag: 'tconstruct:molten_electrum' },
      put: [
        { amount: 10, tag: 'tconstruct:molten_gold' },
        { amount: 10, tag: 'tconstruct:molten_silver' },
      ],
      degree: 760,
    },
    {
      get: { amount: 30, tag: 'tconstruct:molten_invar' },
      put: [
        { amount: 20, tag: 'tconstruct:molten_iron' },
        { amount: 10, tag: 'tconstruct:molten_nickel' },
      ],
      degree: 900,
    },
    {
      put: [
        { amount: 30, tag: 'tconstruct:molten_cobalt' },
        { amount: 10, tag: 'tconstruct:molten_debris' },
      ],
      get: { amount: 40, tag: 'tconstruct:molten_manyullyn' },
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
      get: { amount: 90, tag: 'tconstruct:molten_refined_obsidian' },
      put: [
        { amount: 250, tag: 'tconstruct:molten_obsidian' },
        { amount: 400, tag: 'tconstruct:molten_diamond' },
        { amount: 450, tag: 'tconstruct:molten_osmium' },
      ],
      degree: 1475,
    },

    //Tinker Metal
    {
      get: { amount: 90, tag: 'tconstruct:molten_amethyst_bronze' },
      put: [
        { amount: 90, tag: 'tconstruct:molten_bronze' },
        { amount: 100, tag: 'tconstruct:molten_amethyst' },
      ],
      degree: 820,
    },
    {
      get: { amount: 90, fluid: 'tconstruct:molten_cinderslime' },
      put: [
        { amount: 90, tag: 'tconstruct:molten_gold' },
        { amount: 250, tag: 'tconstruct:ichor' },
        { amount: 250, tag: 'tconstruct:scorched_stone' },
      ],
      degree: 1050,
    },
    {
      get: { amount: 180, tag: 'tconstruct:molten_hepatizon' },
      put: [
        { amount: 180, tag: 'tconstruct:molten_copper' },
        { amount: 90, tag: 'tconstruct:molten_cobalt' },
        { amount: 100, tag: 'tconstruct:molten_quartz' },
      ],
      degree: 1400,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_pig_iron' },
      put: [
        { amount: 90, tag: 'tconstruct:molten_iron' },
        { amount: 500, tag: 'tconstruct:meat_soup' },
        { amount: 250, tag: 'forge:honey' },
      ],
      degree: 811,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_queens_slime' },
      put: [
        { amount: 90, tag: 'tconstruct:molten_cobalt' },
        { amount: 90, tag: 'tconstruct:molten_gold' },
        { amount: 250, tag: 'forge:magma' },
      ],
      degree: 1150,
    },
    {
      get: { amount: 180, fluid: 'tconstruct:molten_slimesteel' },
      put: [
        { amount: 90, tag: 'tconstruct:molten_iron' },
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
    //AD ASTRA

    { get: 'ad_astra:desh_block', put: { amount: 810, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'ad_astra:ostrum_block', put: { amount: 810, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'ad_astra:calorite_block', put: { amount: 810, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },

    //ARS NOUVEAU

    { get: 'ars_nouveau:source_gem_block', put: { amount: 400, tag: 'tcintegrations:molten_source_gem' }, cooling: getCoolingTick(material.source, fromAmount(400)) },

    //BOTANIA

    { get: 'botania:manasteel_block', put: { amount: 810, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(810)) },

    //CHEMLIB

    { get: 'chemlib:aluminum_metal_block', put: { amount: 810, tag: 'tconstruct:molten_aluminum' }, cooling: getCoolingTick(material.aluminum, fromAmount(810)) },
    { get: 'chemlib:zinc_metal_block', put: { amount: 810, tag: 'tconstruct:molten_zinc' }, cooling: getCoolingTick(material.zinc, fromAmount(810)) },
    { get: 'chemlib:platinum_metal_block', put: { amount: 810, tag: 'tconstruct:molten_platinum' }, cooling: getCoolingTick(material.platinum, fromAmount(810)) },
    { get: 'chemlib:tungsten_metal_block', put: { amount: 810, tag: 'tconstruct:molten_tungsten' }, cooling: getCoolingTick(material.tungsten, fromAmount(810)) },
    { get: 'chemlib:chromium_metal_block', put: { amount: 810, tag: 'tconstruct:molten_chromium' }, cooling: getCoolingTick(material.chromium, fromAmount(810)) },
    { get: 'chemlib:cadmium_metal_block', put: { amount: 810, tag: 'tconstruct:molten_cadmium' }, cooling: getCoolingTick(material.cadmium, fromAmount(810)) },

    //CREATE

    { get: 'create:brass_block', put: { amount: 810, tag: 'tconstruct:molten_brass' }, cooling: getCoolingTick(material.brass, fromAmount(810)) },

    //MEKANISM

    { get: 'mekanism:block_osmium', put: { amount: 810, tag: 'tconstruct:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(810)) },
    { get: 'mekanism:block_uranium', put: { amount: 810, tag: 'tconstruct:molten_uranium' }, cooling: getCoolingTick(material.uranium, fromAmount(810)) },
    { get: 'mekanism:block_refined_glowstone', put: { amount: 810, tag: 'tconstruct:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(810)) },
    { get: 'mekanism:block_refined_obsidian', put: { amount: 810, tag: 'tconstruct:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(810)) },

    //MINECRAFT

    { get: 'minecraft:coal_block', put: { amount: 900, tag: 'forge:molten_coal' }, cooling: getCoolingTick(material.coal, fromAmount(900)) },
    { get: 'minecraft:terracotta', put: { amount: 1000, tag: 'tconstruct:molten_clay' }, cooling: getCoolingTick(material.clay, getIngot(1, 'block')) },
    { get: 'tconstruct:clear_glass', put: { amount: 1000, tag: 'tconstruct:molten_glass' }, cooling: getCoolingTick(material.glass, getIngot(1, 'block')) },
    { get: 'minecraft:obsidian', put: { amount: 1000, tag: 'tconstruct:molten_obsidian' }, cooling: getCoolingTick(material.obsidian, getIngot(1, 'block')) },
    { get: 'minecraft:emerald_block', put: { amount: 900, tag: 'tconstruct:molten_emerald' }, cooling: getCoolingTick(material.emerald, fromAmount(900)) },
    { get: 'minecraft:quartz_block', put: { amount: 400, tag: 'tconstruct:molten_quartz' }, cooling: getCoolingTick(material.quartz, fromAmount(400)) },
    { get: 'minecraft:amethyst_block', put: { amount: 400, tag: 'tconstruct:molten_amethyst' }, cooling: getCoolingTick(material.amethyst, fromAmount(400)) },
    { get: 'minecraft:diamond_block', put: { amount: 900, tag: 'tconstruct:molten_diamond' }, cooling: getCoolingTick(material.diamond, fromAmount(900)) },
    { get: 'minecraft:iron_block', put: { amount: 810, tag: 'tconstruct:molten_iron' }, cooling: getCoolingTick(material.iron, fromAmount(810)) },
    { get: 'minecraft:gold_block', put: { amount: 810, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, fromAmount(810)) },
    { get: 'minecraft:copper_block', put: { amount: 810, tag: 'tconstruct:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(810)) },
    { get: 'minecraft:netherite_block', put: { amount: 400, tag: 'tconstruct:molten_netherite' }, cooling: getCoolingTick(material.netherite, fromAmount(810)) },

    //MYSTICAL AGRICULTURE

    { get: 'mysticalagriculture:inferium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:prudentium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:tertium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:imperium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:supremium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },
    { get: 'mysticalagriculture:soulium_ingot_block', put: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.coal, fromAmount(810)) },

    //THERMAL SERIES

    { get: 'thermal:steel_block', put: { amount: 810, tag: 'tconstruct:molten_steel' }, cooling: getCoolingTick(material.steel, fromAmount(810)) },
    { get: 'thermal:rose_gold_block', put: { amount: 810, tag: 'tconstruct:molten_rose_gold' }, cooling: getCoolingTick(material.roseGold, fromAmount(810)) },
    { get: 'thermal:tin_block', put: { amount: 810, tag: 'tconstruct:molten_tin' }, cooling: getCoolingTick(material.tin, fromAmount(810)) },
    { get: 'thermal:lead_block', put: { amount: 810, tag: 'tconstruct:molten_lead' }, cooling: getCoolingTick(material.lead, fromAmount(810)) },
    { get: 'thermal:silver_block', put: { amount: 810, tag: 'tconstruct:molten_silver' }, cooling: getCoolingTick(material.silver, fromAmount(810)) },
    { get: 'thermal:nickel_block', put: { amount: 810, tag: 'tconstruct:molten_nickel' }, cooling: getCoolingTick(material.nickel, fromAmount(810)) },
    { get: 'thermal:bronze_block', put: { amount: 810, tag: 'tconstruct:molten_bronze' }, cooling: getCoolingTick(material.bronze, fromAmount(810)) },
    { get: 'thermal:electrum_block', put: { amount: 810, tag: 'tconstruct:molten_electrum' }, cooling: getCoolingTick(material.electrum, fromAmount(810)) },
    { get: 'thermal:invar_block', put: { amount: 810, tag: 'tconstruct:molten_invar' }, cooling: getCoolingTick(material.invar, fromAmount(810)) },
    { get: 'thermal:constantan_block', put: { amount: 810, tag: 'tconstruct:molten_constantan' }, cooling: getCoolingTick(material.constantan, fromAmount(810)) },
    { get: 'thermal:enderium_block', put: { amount: 810, tag: 'tconstruct:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(810)) },
    { get: 'thermal:lumium_block', put: { amount: 810, tag: 'tconstruct:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(810)) },
    { get: 'thermal:signalum_block', put: { amount: 810, tag: 'tconstruct:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(810)) },

    //TINKER CONSTRUCT

    { get: 'tconstruct:cobalt_block', put: { amount: 810, tag: 'tconstruct:molten_cobal' }, cooling: getCoolingTick(material.cobalt, fromAmount(810)) },
    { get: 'tconstruct:knightmetal_block', put: { amount: 810, tag: 'tconstruct:molten_knightmetal' }, cooling: getCoolingTick(material.knightMetal, fromAmount(810)) },
    { get: 'tconstruct:slimesteel_block', put: { amount: 810, tag: 'tconstruct:molten_slimesteel' }, cooling: getCoolingTick(material.slimeSteel, fromAmount(810)) },
    { get: 'tconstruct:amethyst_bronze_block', put: { amount: 810, tag: 'tconstruct:molten_amethyst_bronze' }, cooling: getCoolingTick(material.amethystBronze, fromAmount(810)) },
    { get: 'tconstruct:pig_iron_block', put: { amount: 810, tag: 'tconstruct:molten_pig_iron' }, cooling: getCoolingTick(material.pigIron, fromAmount(810)) },
    { get: 'tconstruct:manyullyn_block', put: { amount: 810, tag: 'tconstruct:molten_manyullyn' }, cooling: getCoolingTick(material.manyullyn, fromAmount(810)) },
    { get: 'tconstruct:hepatizon_block', put: { amount: 810, tag: 'tconstruct:molten_hepatizon' }, cooling: getCoolingTick(material.hepatizon, fromAmount(810)) },
    { get: 'tconstruct:cinderslime_block', put: { amount: 810, tag: 'tconstruct:molten_cinderslime' }, cooling: getCoolingTick(material.cinderSlime, fromAmount(810)) },
    { get: 'tconstruct:queens_slime_block', put: { amount: 810, tag: 'tconstruct:molten_queens_slime' }, cooling: getCoolingTick(material.queensSlime, fromAmount(810)) },

    //TWILIGHT FOREST

    { get: 'twilightforest:steeleaf_block', put: { amount: 810, tag: 'tconstruct:molten_ssteeleaf' }, cooling: getCoolingTick(material.steeLeaf, fromAmount(810)) },

    //ITEMS

    //Golden Apple
    { get: 'minecraft:enchanted_golden_apple', put: { amount: 6480, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, getIngot(9, 'ingot')), caster: { item: 'minecraft:apple' }, consume: true },
    { get: 'minecraft:enchanted_golden_apple', put: { amount: 5760, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, getIngot(8, 'ingot')), caster: { item: 'minecraft:golden_apple' }, consume: true },

    //Andesite alloy
    { get: 'create:andesite_alloy', put: { amount: 90, tag: 'tconstruct:molten_platinum' }, cooling: getCoolingTick(material.platinum, fromAmount(90)), caster: { item: 'minecraft:polished_andesite' }, consume: true },

    //MACHINES

    //Controller
    { get: 'tconstruct:smeltery_controller', put: { amount: 360, tag: 'tconstruct:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(360)), caster: { tag: 'tconstruct:smeltery_bricks' }, consume: true },
    { get: 'tconstruct:foundry_controller', put: { amount: 1000, tag: 'tconstruct:molten_obsidian' }, cooling: getCoolingTick(material.obsidian, getIngot(1, 'block')), caster: { tag: 'tconstruct:foundry_bricks' }, consume: true },
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
    //AD ASTRA

    { get: 'ad_astra:desh_nugget', put: { amount: 10, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), castType: 'nugget' },
    { get: 'ad_astra:desh_ingot', put: { amount: 90, tag: 'tcintegrations:molten_desh' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), castType: 'ingot' },

    { get: 'ad_astra:ostrum_nugget', put: { amount: 10, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), castType: 'nugget' },
    { get: 'ad_astra:ostrum_ingot', put: { amount: 90, tag: 'tcintegrations:molten_ostrum' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), castType: 'ingot' },

    { get: 'ad_astra:calorite_nugget', put: { amount: 10, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), castType: 'nugget' },
    { get: 'ad_astra:calorite_ingot', put: { amount: 90, tag: 'tcintegrations:molten_calorite' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), castType: 'ingot' },

    //ARS NOUVEAU

    { get: 'ars_nouveau:source_gem', put: { amount: 100, tag: 'tcintegrations:molten_source_gem' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    //BOTANIA

    { get: 'botania:manasteel_nugget', put: { amount: 10, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(10)), castType: 'nugget' },
    { get: 'botania:manasteel_ingot', put: { amount: 90, tag: 'tcintegrations:molten_manasteel' }, cooling: getCoolingTick(material.manaSteel, fromAmount(90)), castType: 'ingot' },

    //CHEMLIB

    { get: 'chemlib:aluminum_nugget', put: { amount: 10, tag: 'tconstruct:molten_aluminum' }, cooling: getCoolingTick(material.aluminum, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:aluminum_ingot', put: { amount: 90, tag: 'tconstruct:molten_aluminum' }, cooling: getCoolingTick(material.aluminum, fromAmount(90)), castType: 'igot' },

    { get: 'chemlib:zinc_nugget', put: { amount: 10, tag: 'tconstruct:molten_zinc' }, cooling: getCoolingTick(material.zinc, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:zinc_ingot', put: { amount: 90, tag: 'tconstruct:molten_zinc' }, cooling: getCoolingTick(material.zinc, fromAmount(90)), castType: 'ingot' },

    { get: 'chemlib:platinum_nugget', put: { amount: 10, tag: 'tconstruct:molten_platinum' }, cooling: getCoolingTick(material.platinum, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:platinum_ingot', put: { amount: 90, tag: 'tconstruct:molten_platinum' }, cooling: getCoolingTick(material.platinum, fromAmount(90)), castType: 'ingot' },

    { get: 'chemlib:tungsten_nugget', put: { amount: 90, tag: 'tconstruct:molten_tungsten' }, cooling: getCoolingTick(material.tungsten, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:tungsten_ingot', put: { amount: 90, tag: 'tconstruct:molten_tungsten' }, cooling: getCoolingTick(material.tungsten, fromAmount(90)), castType: 'ingot' },

    { get: 'chemlib:chromium_nugget', put: { amount: 90, tag: 'tconstruct:molten_chromium' }, cooling: getCoolingTick(material.chromium, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:chromium_ingot', put: { amount: 90, tag: 'tconstruct:molten_chromium' }, cooling: getCoolingTick(material.chromium, fromAmount(90)), castType: 'ingot' },

    { get: 'chemlib:cadmium_nugget', put: { amount: 90, tag: 'tconstruct:molten_cadmium' }, cooling: getCoolingTick(material.cadmium, fromAmount(10)), castType: 'nugget' },
    { get: 'chemlib:cadmium_ingot', put: { amount: 90, tag: 'tconstruct:molten_cadmium' }, cooling: getCoolingTick(material.cadmium, fromAmount(90)), castType: 'ingot' },

    //CREATE

    { get: 'create:brass_nugget', put: { amount: 90, tag: 'tconstruct:molten_brass' }, cooling: getCoolingTick(material.brass, fromAmount(10)), castType: 'nugget' },
    { get: 'create:brass_ingot', put: { amount: 90, tag: 'tconstruct:molten_brass' }, cooling: getCoolingTick(material.brass, fromAmount(90)), castType: 'ingot' },

    //MEKANISM

    { get: 'mekanism:nugget_osmium', put: { amount: 10, fluid: 'tconstruct:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(10)), castType: 'nugget' },
    { get: 'mekanism:ingot_osmium', put: { amount: 90, fluid: 'tconstruct:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(90)), castType: 'ingot' },

    { get: 'mekanism:nugget_uranium', put: { amount: 10, fluid: 'tconstruct:molten_uranium' }, cooling: getCoolingTick(material.uranium, fromAmount(10)), castType: 'nugget' },
    { get: 'mekanism:ingot_uranium', put: { amount: 90, fluid: 'tconstruct:molten_uranium' }, cooling: getCoolingTick(material.uranium, fromAmount(90)), castType: 'ingot' },
    { get: 'powah:uraninite', put: { amount: 100, fluid: 'tconstruct:molten_uranium' }, cooling: getCoolingTick(material.uranium, fromAmount(100)), castType: 'gem' },

    { get: 'mekanism:nugget_refined_glowstone', put: { amount: 10, tag: 'tconstruct:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mekanism:ingot_refined_glowstone', put: { amount: 90, tag: 'tconstruct:molten_refined_glowstone' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mekanism:ingot_refined_glowstone', put: { amount: 450, tag: 'tconstruct:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(450)), caster: { tag: 'forge:dusts/glowstone' }, consume: true },

    { get: 'mekanism:nugget_refined_obsidian', put: { amount: 10, tag: 'tconstruct:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(10)), castType: 'nugget' },
    { get: 'mekanism:ingot_refined_obsidian', put: { amount: 90, tag: 'tconstruct:molten_refined_obsidian' }, cooling: getCoolingTick(material.refinedObsidian, fromAmount(90)), castType: 'ingot' },
    { get: 'mekanism:ingot_refined_obsidian', put: { amount: 450, tag: 'tconstruct:molten_osmium' }, cooling: getCoolingTick(material.osmium, fromAmount(450)), caster: { tag: 'forge:dusts/refined_obsidian' }, consume: true },

    //MINECRAFT

    { get: 'minecraft:coal', put: { amount: 100, tag: 'forge:molten_coal' }, cooling: getCoolingTick(material.coal, fromAmount(100)), castType: 'gem' },

    { get: 'minecraft:brick', put: { amount: 250, tag: 'tconstruct:molten_clay' }, cooling: getCoolingTick(material.clay, 1), castType: 'ingot' },

    { get: 'tconstruct:clear_glass_pane', put: { amount: 250, tag: 'tconstruct:molten_glass' }, cooling: getCoolingTick(material.glass, 1) },

    { get: 'anoxia:obsidian_ingot', put: { amount: 250, tag: 'tconstruct:molten_obsidian' }, cooling: getCoolingTick(material.obsidian, 1), castType: 'ingot' },

    { get: 'minecraft:emerald', put: { amount: 100, tag: 'tconstruct:molten_emerald' }, cooling: getCoolingTick(material.emerald, fromAmount(100)), castType: 'gem' },

    { get: 'minecraft:quartz', put: { amount: 100, tag: 'tconstruct:molten_quartz' }, cooling: getCoolingTick(material.quartz, fromAmount(100)), castType: 'gem' },

    { get: 'minecraft:amethyst_shard', put: { amount: 100, tag: 'tconstruct:molten_amethyst' }, cooling: getCoolingTick(material.amethyst, fromAmount(100)), castType: 'gem' },

    { get: 'minecraft:diamond', put: { amount: 100, tag: 'tconstruct:molten_diamond' }, cooling: getCoolingTick(material.diamond, fromAmount(100)), castType: 'gem' },

    { get: 'tconstruct:debris_nugget', put: { amount: 10, tag: 'tconstruct:molten_debris' }, cooling: getCoolingTick(material.ancientDebris, fromAmount(10)), castType: 'nugget' },
    { get: 'minecraft:netherite_scrap', put: { amount: 90, tag: 'tconstruct:molten_debris' }, cooling: getCoolingTick(material.ancientDebris, fromAmount(90)), castType: 'ingot' },

    { get: 'minecraft:iron_nugget', put: { amount: 10, tag: 'tconstruct:molten_iron' }, cooling: getCoolingTick(material.iron, fromAmount(10)), castType: 'nugget' },
    { get: 'minecraft:iron_ingot', put: { amount: 90, tag: 'tconstruct:molten_iron' }, cooling: getCoolingTick(material.iron, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:iron_coin', put: { amount: 30, tag: 'tconstruct:molten_iron' }, cooling: getCoolingTick(material.iron, fromAmount(30)), castType: 'coin' },

    { get: 'minecraft:gold_nugget', put: { amount: 10, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, fromAmount(10)), castType: 'nugget' },
    { get: 'minecraft:gold_ingot', put: { amount: 90, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:gold_coin', put: { amount: 30, tag: 'tconstruct:molten_gold' }, cooling: getCoolingTick(material.gold, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:copper_nugget', put: { amount: 10, tag: 'tconstruct:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(10)), castType: 'nugget' },
    { get: 'minecraft:copper_ingot', put: { amount: 90, tag: 'tconstruct:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:copper_coin', put: { amount: 30, tag: 'tconstruct:molten_copper' }, cooling: getCoolingTick(material.copper, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:netherite_nugget', put: { amount: 10, tag: 'tconstruct:molten_netherite' }, cooling: getCoolingTick(material.netherite, fromAmount(10)), castType: 'nugget' },
    { get: 'minecraft:netherite_ingot', put: { amount: 90, tag: 'tconstruct:molten_netherite' }, cooling: getCoolingTick(material.netherite, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:netherite_coin', put: { amount: 30, tag: 'tconstruct:molten_netherite' }, cooling: getCoolingTick(material.netherite, fromAmount(30)), castType: 'coin' },

    //MYSTICAL AGRICULTURE

    { get: 'mysticalagriculture:inferium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:inferium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:inferium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_inferium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    { get: 'mysticalagriculture:prudentium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:prudentium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:prudentium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_prudentium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    { get: 'mysticalagriculture:tertium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:tertium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:tertium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_tertium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    { get: 'mysticalagriculture:imperium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:imperium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:imperium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_imperium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    { get: 'mysticalagriculture:supremium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:supremium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:supremium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_supremium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    { get: 'mysticalagriculture:soulium_nugget', put: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(10)), castType: 'nugget' },
    { get: 'mysticalagriculture:soulium_ingot', put: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(90)), castType: 'ingot' },
    { get: 'mysticalagriculture:soulium_gemstone', put: { amount: 100, fluid: 'mysticalagradditions:molten_soulium' }, cooling: getCoolingTick(material.refinedGlowstone, fromAmount(100)), castType: 'gem' },

    //THERMAL SERIES

    { get: 'thermal:steel_nugget', put: { amount: 10, tag: 'tconstruct:molten_steel' }, cooling: getCoolingTick(material.steel, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:steel_ingot', put: { amount: 90, tag: 'tconstruct:molten_steel' }, cooling: getCoolingTick(material.steel, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:steel_coin', put: { amount: 30, tag: 'tconstruct:molten_steel' }, cooling: getCoolingTick(material.steel, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:rose_gold_nugget', put: { amount: 10, tag: 'tconstruct:molten_rose_gold' }, cooling: getCoolingTick(material.roseGold, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:rose_gold_ingot', put: { amount: 90, tag: 'tconstruct:molten_rose_gold' }, cooling: getCoolingTick(material.roseGold, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:rose_gold_coin', put: { amount: 30, tag: 'tconstruct:molten_rose_gold' }, cooling: getCoolingTick(material.roseGold, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:tin_nugget', put: { amount: 10, tag: 'tconstruct:molten_tin' }, cooling: getCoolingTick(material.tin, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:tin_ingot', put: { amount: 90, tag: 'tconstruct:molten_tin' }, cooling: getCoolingTick(material.tin, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:tin_coin', put: { amount: 30, tag: 'tconstruct:molten_tin' }, cooling: getCoolingTick(material.tin, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:lead_nugget', put: { amount: 10, tag: 'tconstruct:molten_lead' }, cooling: getCoolingTick(material.lead, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:lead_ingot', put: { amount: 90, tag: 'tconstruct:molten_lead' }, cooling: getCoolingTick(material.lead, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:lead_coin', put: { amount: 30, tag: 'tconstruct:molten_lead' }, cooling: getCoolingTick(material.lead, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:silver_nugget', put: { amount: 10, tag: 'tconstruct:molten_silver' }, cooling: getCoolingTick(material.silver, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:silver_ingot', put: { amount: 90, tag: 'tconstruct:molten_silver' }, cooling: getCoolingTick(material.silver, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:silver_coin', put: { amount: 30, tag: 'tconstruct:molten_silver' }, cooling: getCoolingTick(material.silver, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:nickel_nugget', put: { amount: 10, tag: 'tconstruct:molten_nickel' }, cooling: getCoolingTick(material.nickel, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:nickel_ingot', put: { amount: 90, tag: 'tconstruct:molten_nickel' }, cooling: getCoolingTick(material.nickel, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:nickel_coin', put: { amount: 30, tag: 'tconstruct:molten_nickel' }, cooling: getCoolingTick(material.nickel, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:bronze_nugget', put: { amount: 10, tag: 'tconstruct:molten_bronze' }, cooling: getCoolingTick(material.bronze, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:bronze_ingot', put: { amount: 90, tag: 'tconstruct:molten_bronze' }, cooling: getCoolingTick(material.bronze, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:bronze_coin', put: { amount: 30, tag: 'tconstruct:molten_bronze' }, cooling: getCoolingTick(material.bronze, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:electrum_nugget', put: { amount: 10, tag: 'tconstruct:molten_electrum' }, cooling: getCoolingTick(material.electrum, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:electrum_ingot', put: { amount: 90, tag: 'tconstruct:molten_electrum' }, cooling: getCoolingTick(material.electrum, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:electrum_coin', put: { amount: 30, tag: 'tconstruct:molten_electrum' }, cooling: getCoolingTick(material.electrum, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:invar_nugget', put: { amount: 10, tag: 'tconstruct:molten_invar' }, cooling: getCoolingTick(material.invar, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:invar_ingot', put: { amount: 90, tag: 'tconstruct:molten_invar' }, cooling: getCoolingTick(material.invar, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:invar_coin', put: { amount: 30, tag: 'tconstruct:molten_invar' }, cooling: getCoolingTick(material.invar, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:constantan_nugget', put: { amount: 10, tag: 'tconstruct:molten_constantan' }, cooling: getCoolingTick(material.constantan, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:constantan_ingot', put: { amount: 90, tag: 'tconstruct:molten_constantan' }, cooling: getCoolingTick(material.constantan, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:constantan_coin', put: { amount: 30, tag: 'tconstruct:molten_constantan' }, cooling: getCoolingTick(material.constantan, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:enderium_nugget', put: { amount: 10, tag: 'tconstruct:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:enderium_ingot', put: { amount: 90, tag: 'tconstruct:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:enderium_coin', put: { amount: 30, tag: 'tconstruct:molten_enderium' }, cooling: getCoolingTick(material.enderium, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:lumium_nugget', put: { amount: 10, tag: 'tconstruct:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:lumium_ingot', put: { amount: 90, tag: 'tconstruct:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:lumium_coin', put: { amount: 30, tag: 'tconstruct:molten_lumium' }, cooling: getCoolingTick(material.lumium, fromAmount(30)), castType: 'coin' },

    { get: 'thermal:signalum_nugget', put: { amount: 10, tag: 'tconstruct:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(10)), castType: 'nugget' },
    { get: 'thermal:signalum_ingot', put: { amount: 90, tag: 'tconstruct:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(90)), castType: 'ingot' },
    { get: 'thermal:signalum_coin', put: { amount: 30, tag: 'tconstruct:molten_signalum' }, cooling: getCoolingTick(material.signalum, fromAmount(30)), castType: 'coin' },

    //TINKER CONSTRUCT

    { get: 'tconstruct:cobalt_nugget', put: { amount: 10, tag: 'tconstruct:molten_cobalt' }, cooling: getCoolingTick(material.cobalt, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:cobalt_ingot', put: { amount: 90, tag: 'tconstruct:molten_cobalt' }, cooling: getCoolingTick(material.cobalt, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:knightmetal_nugget', put: { amount: 10, tag: 'tconstruct:molten_knightmetal' }, cooling: getCoolingTick(material.knightMetal, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:knightmetal_ingot', put: { amount: 90, tag: 'tconstruct:molten_knightmetal' }, cooling: getCoolingTick(material.knightMetal, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:slimesteel_nugget', put: { amount: 10, tag: 'tconstruct:molten_slimesteel' }, cooling: getCoolingTick(material.slimeSteel, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:slimesteel_ingot', put: { amount: 90, tag: 'tconstruct:molten_slimesteel' }, cooling: getCoolingTick(material.slimeSteel, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:amethyst_bronze_nugget', put: { amount: 10, tag: 'tconstruct:molten_amethyst_bronze' }, cooling: getCoolingTick(material.amethystBronze, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:amethyst_bronze_ingot', put: { amount: 90, tag: 'tconstruct:molten_amethyst_bronze' }, cooling: getCoolingTick(material.amethystBronze, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:pig_iron_nugget', put: { amount: 10, tag: 'tconstruct:molten_pig_iron' }, cooling: getCoolingTick(material.pigIron, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:pig_iron_ingot', put: { amount: 90, tag: 'tconstruct:molten_pig_iron' }, cooling: getCoolingTick(material.pigIron, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:manyullyn_nugget', put: { amount: 10, tag: 'tconstruct:molten_manyullyn' }, cooling: getCoolingTick(material.manyullyn, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:manyullyn_ingot', put: { amount: 90, tag: 'tconstruct:molten_manyullyn' }, cooling: getCoolingTick(material.manyullyn, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:hepatizon_nugget', put: { amount: 10, tag: 'tconstruct:molten_hepatizon' }, cooling: getCoolingTick(material.hepatizon, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:hepatizon_ingot', put: { amount: 90, tag: 'tconstruct:molten_hepatizon' }, cooling: getCoolingTick(material.hepatizon, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:cinderslime_nugget', put: { amount: 10, tag: 'tconstruct:molten_cinderslime' }, cooling: getCoolingTick(material.cinderSlime, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:cinderslime_ingot', put: { amount: 90, tag: 'tconstruct:molten_cinderslime' }, cooling: getCoolingTick(material.cinderSlime, fromAmount(90)), castType: 'ingot' },

    { get: 'tconstruct:queens_slime_nugget', put: { amount: 10, tag: 'tconstruct:molten_queens_slime' }, cooling: getCoolingTick(material.queensSlime, fromAmount(10)), castType: 'nugget' },
    { get: 'tconstruct:queens_slime_ingot', put: { amount: 90, tag: 'tconstruct:molten_queens_slime' }, cooling: getCoolingTick(material.queensSlime, fromAmount(90)), castType: 'igot' },

    //TWILIGHT FOREST

    { get: 'twilightforest:steeleaf_ingot', put: { amount: 90, tag: 'tconstruct:molten_steeleaf' }, cooling: getCoolingTick(material.steeLeaf, fromAmount(90)), castType: 'ingot' },

    //ITEMS

    //Seared Brick
    { get: 'tconstruct:seared_brick', put: { amount: 125, tag: 'tconstruct:molten_clay' }, cooling: getCoolingTick(material.clay, 1), caster: { item: 'minecraft:flint' }, consume: true },
    { get: 'tconstruct:seared_brick', put: { amount: 250, tag: 'tconstruct:seared_stone' }, cooling: getCoolingTick(material.stone, 1.5), castType: 'ingot' },

    //Scorched Brick
    { get: 'tconstruct:scorched_brick', put: { amount: 125, tag: 'forge:magma' }, cooling: getCoolingTick(material.magma, 1), caster: { item: 'minecraft:flint' }, consume: true },
    { get: 'tconstruct:scorched_brick', put: { amount: 250, tag: 'tconstruct:scorched_stone' }, cooling: getCoolingTick(material.scorchedStone, 1.5), castType: 'ingot' },
  ];
  castingTablePattern.forEach((recipe) => {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: recipe.cooling,
      fluid: recipe.put,
      result: recipe.get,
    };

    if (recipe.castType == 'nugget') addDualCastRecipe('nugget', json, event);
    else if (recipe.castType == 'ingot') addDualCastRecipe('ingot', json, event);
    else if (recipe.castType == 'gem') addDualCastRecipe('gem', json, event);
    else if (recipe.castType == 'coin') addDualCastRecipe('coin', json, event);
    else {
      ((json.cast = recipe.caster), (json.cast_consumed = recipe.consume));
      event.custom(json);
    }
  });
  //#endregion

  //# ====================================================================================== #

  //#region Melting
  const QuartzBlock = [{ tag: 'forge:storage_blocks/quartz' }, { item: 'minecraft:smooth_quartz' }, { item: 'minecraft:quartz_pillar' }, { item: 'minecraft:quartz_bricks' }, { item: 'minecraft:chiseled_quartz_block' }, { item: 'minecraft:quartz_stairs' }, { item: 'minecraft:smooth_quartz_stairs' }];
  const meltingPattern = [
    //AD ASTRA

    { get: { amount: 810, tag: 'tcintegrations:molten_desh' }, put: { tag: 'forge:storage_blocks/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(810)) },
    { get: { amount: 90, tag: 'tcintegrations:molten_desh' }, put: [{ tag: 'forge:ingots/desh' }, { tag: 'forge:dusts/desh' }, { tag: 'forge:plates/desh' }], degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(90)) },
    { get: { amount: 10, tag: 'tcintegrations:molten_desh' }, put: { tag: 'forge:nuggets/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(10)) },
    { get: { amount: 270, tag: 'tcintegrations:molten_desh' }, put: { tag: 'forge:ores/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(270)) },
    { get: { amount: 120, tag: 'tcintegrations:molten_desh' }, put: { tag: 'forge:raw_materials/desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(120)) },
    { get: { amount: 1080, tag: 'tcintegrations:molten_desh' }, put: { tag: 'forge:storage_blocks/raw_desh' }, degree: 500, meltTime: getMeltingTick(material.desh, fromAmount(1080)) },

    { get: { amount: 810, tag: 'tcintegrations:molten_ostrum' }, put: { tag: 'forge:storage_blocks/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(810)) },
    { get: { amount: 90, tag: 'tcintegrations:molten_ostrum' }, put: [{ tag: 'forge:ingots/ostrum' }, { tag: 'forge:dusts/ostrum' }, { tag: 'forge:plates/ostrum' }], degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(90)) },
    { get: { amount: 10, tag: 'tcintegrations:molten_ostrum' }, put: { tag: 'forge:nuggets/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(10)) },
    { get: { amount: 270, tag: 'tcintegrations:molten_ostrum' }, put: { tag: 'forge:ores/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(270)) },
    { get: { amount: 120, tag: 'tcintegrations:molten_ostrum' }, put: { tag: 'forge:raw_materials/ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(120)) },
    { get: { amount: 1080, tag: 'tcintegrations:molten_ostrum' }, put: { tag: 'forge:storage_blocks/raw_ostrum' }, degree: 500, meltTime: getMeltingTick(material.ostrum, fromAmount(1080)) },

    { get: { amount: 810, tag: 'tcintegrations:molten_calorite' }, put: { tag: 'forge:storage_blocks/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(810)) },
    { get: { amount: 90, tag: 'tcintegrations:molten_calorite' }, put: [{ tag: 'forge:ingots/calorite' }, { tag: 'forge:dusts/calorite' }, { tag: 'forge:plates/calorite' }], degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(90)) },
    { get: { amount: 10, tag: 'tcintegrations:molten_calorite' }, put: { tag: 'forge:nuggets/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(10)) },
    { get: { amount: 270, tag: 'tcintegrations:molten_calorite' }, put: { tag: 'forge:ores/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(270)) },
    { get: { amount: 120, tag: 'tcintegrations:molten_calorite' }, put: { tag: 'forge:raw_materials/calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(120)) },
    { get: { amount: 1080, tag: 'tcintegrations:molten_calorite' }, put: { tag: 'forge:storage_blocks/raw_calorite' }, degree: 500, meltTime: getMeltingTick(material.calorite, fromAmount(1080)) },

    //ARS NOUVEAU

    { get: { amount: 400, tag: 'tcintegrations:molten_source_gem' }, put: { tag: 'forge:storage_blocks/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(400)) },
    { get: { amount: 100, tag: 'tcintegrations:molten_source_gem' }, put: { tag: 'forge:gems/source_gem' }, degree: 980, meltTime: getMeltingTick(material.source, fromAmount(100)) },

    //BOTANIA

    { get: { amount: 810, tag: 'tcintegrations:molten_manasteel' }, put: { tag: 'forge:storage_blocks/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(810)) },
    { get: { amount: 90, tag: 'tcintegrations:molten_manasteel' }, put: { tag: 'forge:ingots/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(90)) },
    { get: { amount: 10, tag: 'tcintegrations:molten_manasteel' }, put: { tag: 'forge:nuggets/manasteel' }, degree: 950, meltTime: getMeltingTick(material.manaSteel, fromAmount(10)) },

    //CHEMLIB

    { get: { amount: 810, tag: 'tconstruct:molten_aluminum' }, put: { tag: 'forge:storage_blocks/aluminum' }, degree: 425, meltTime: getMeltingTick(material.aluminum, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_aluminum' }, put: [{ tag: 'forge:ingots/aluminum' }, { tag: 'forge:dusts/aluminum' }, { tag: 'forge:plates/aluminum' }, { tag: 'forge:sheetmetals/aluminum' }, { tag: 'forge:wires/aluminum' }], degree: 425, meltTime: getMeltingTick(material.aluminum, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_aluminum' }, put: { tag: 'forge:nuggets/aluminum' }, degree: 425, meltTime: getMeltingTick(material.aluminum, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_zinc' }, put: { tag: 'forge:storage_blocks/zinc' }, degree: 420, meltTime: getMeltingTick(material.zinc, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_zinc' }, put: [{ tag: 'forge:ingots/zinc' }, { tag: 'forge:dusts/zinc' }, { tag: 'forge:plates/zinc' }], degree: 420, meltTime: getMeltingTick(material.zinc, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_zinc' }, put: { tag: 'forge:nuggets/zinc' }, degree: 420, meltTime: getMeltingTick(material.zinc, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_platinum' }, put: { tag: 'forge:storage_blocks/platinum' }, degree: 970, meltTime: getMeltingTick(material.platinum, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_platinum' }, put: [{ tag: 'forge:ingots/platinum' }, { tag: 'forge:dusts/platinum' }, { tag: 'forge:plates/platinum' }], degree: 970, meltTime: getMeltingTick(material.platinum, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_platinum' }, put: { tag: 'forge:nuggets/platinum' }, degree: 970, meltTime: getMeltingTick(material.platinum, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_tungsten' }, put: { tag: 'forge:storage_blocks/tungsten' }, degree: 950, meltTime: getMeltingTick(material.tungsten, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_tungsten' }, put: [{ tag: 'forge:ingots/tungsten' }, { tag: 'forge:dusts/tungsten' }, { tag: 'forge:plates/tungsten' }], degree: 950, meltTime: getMeltingTick(material.tungsten, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_tungsten' }, put: { tag: 'forge:nuggets/tungsten' }, degree: 950, meltTime: getMeltingTick(material.tungsten, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_chromium' }, put: { tag: 'forge:storage_blocks/chromium' }, degree: 950, meltTime: getMeltingTick(material.chromium, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_chromium' }, put: [{ tag: 'forge:ingots/chromium' }, { tag: 'forge:dusts/chromium' }, { tag: 'forge:plates/chromium' }], degree: 950, meltTime: getMeltingTick(material.chromium, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_chromium' }, put: { tag: 'forge:nuggets/chromium' }, degree: 950, meltTime: getMeltingTick(material.chromium, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_cadmium' }, put: { tag: 'forge:storage_blocks/cadmium' }, degree: 950, meltTime: getMeltingTick(material.cadmium, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_cadmium' }, put: [{ tag: 'forge:ingots/cadmium' }, { tag: 'forge:dusts/cadmium' }, { tag: 'forge:plates/cadmium' }], degree: 950, meltTime: getMeltingTick(material.cadmium, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_cadmium' }, put: { tag: 'forge:nuggets/cadmium' }, degree: 950, meltTime: getMeltingTick(material.cadmium, fromAmount(10)) },

    //CREATE

    { get: { amount: 810, tag: 'tconstruct:molten_brass' }, put: { tag: 'forge:storage_blocks/brass' }, degree: 605, meltTime: getMeltingTick(material.brass, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_brass' }, put: [{ tag: 'forge:ingots/brass' }, { tag: 'forge:plates/brass' }], degree: 605, meltTime: getMeltingTick(material.brass, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_brass' }, put: { tag: 'forge:nuggets/brass' }, degree: 605, meltTime: getMeltingTick(material.brass, fromAmount(10)) },

    //MEKANISM

    { get: { amount: 810, tag: 'tconstruct:molten_osmium' }, put: { tag: 'forge:storage_blocks/osmium' }, degree: 975, meltTime: getMeltingTick(material.osmium, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_osmium' }, put: [{ tag: 'forge:ingots/osmium' }, { tag: 'forge:dusts/osmium' }, { tag: 'forge:plates/osmium' }], degree: 975, meltTime: getMeltingTick(material.osmium, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_osmium' }, put: { tag: 'forge:nuggets/osmium' }, degree: 975, meltTime: getMeltingTick(material.osmium, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_uranium' }, put: { tag: 'forge:storage_blocks/uranium' }, degree: 830, meltTime: getMeltingTick(material.uranium, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_uranium' }, put: [{ tag: 'forge:ingots/uranium' }, { tag: 'forge:dusts/uranium' }, { tag: 'forge:plates/uranium' }, { tag: 'forge:sheetmetals/uranium' }], degree: 830, meltTime: getMeltingTick(material.uranium, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_uranium' }, put: { tag: 'forge:nuggets/uranium' }, degree: 830, meltTime: getMeltingTick(material.uranium, fromAmount(10)) },

    { get: { amount: 10, tag: 'tconstruct:molten_refined_glowstone' }, put: { tag: 'forge:nuggets/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(10)) },
    { get: { amount: 90, tag: 'tconstruct:molten_refined_glowstone' }, put: { tag: 'forge:ingots/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(90)) },
    { get: { amount: 810, tag: 'tconstruct:molten_refined_glowstone' }, put: { tag: 'forge:storage_blocks/refined_glowstone' }, degree: 825, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(810)) },

    { get: { amount: 10, tag: 'tconstruct:molten_refined_obsidian' }, put: { tag: 'forge:nuggets/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(10)) },
    { get: { amount: 90, tag: 'tconstruct:molten_refined_obsidian' }, put: { tag: 'forge:ingots/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(90)) },
    { get: { amount: 810, tag: 'tconstruct:molten_refined_obsidian' }, put: { tag: 'forge:storage_blocks/refined_obsidian' }, degree: 1475, meltTime: getMeltingTick(material.refinedGlowstone, fromAmount(810)) },

    //MINECRAFT

    { get: { amount: 900, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:storage_blocks/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(900)) },
    { get: { amount: 200, tag: 'forge:molten_coal' }, put: { tag: 'forge:ores/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(200)) },
    { get: { amount: 100, tag: 'forge:molten_coal' }, put: { tag: 'anoxia:materials/coal' }, degree: 900, meltTime: getMeltingTick(material.coal, fromAmount(100)) },

    { get: { amount: 1000, tag: 'tconstruct:molten_clay' }, put: { item: 'minecraft:clay' }, degree: 450, meltTime: getMeltingTick(material.clay, getIngot(1, 'block')) },
    { get: { amount: 250, tag: 'tconstruct:molten_clay' }, put: { item: 'minecraft:clay_ball' }, degree: 450, meltTime: getMeltingTick(material.clay, fromAmount(250)) },

    { get: { amount: 1000, tag: 'tconstruct:molten_glass' }, put: { tag: 'minecraft:smelts_to_glass' }, degree: 750, meltTime: getMeltingTick(material.glass, getIngot(1, 'block')) },
    { get: { amount: 1000, tag: 'tconstruct:molten_glass' }, put: { tag: 'forge:glass/silica' }, degree: 750, meltTime: getMeltingTick(material.glass, getIngot(1, 'block')) },
    { get: { amount: 250, tag: 'tconstruct:molten_glass' }, put: { tag: 'forge:glass_panes/silica' }, degree: 750, meltTime: getMeltingTick(material.glass, fromAmount(250)) },

    { get: { amount: 1000, tag: 'tconstruct:molten_obsidian' }, put: { item: 'minecraft:obsidian' }, degree: 1000, meltTime: getMeltingTick(material.obsidian, getIngot(1, 'block')) },
    { get: { amount: 500, tag: 'tconstruct:molten_obsidian' }, put: { item: 'anoxia:obsidian_with_iron' }, degree: 1000, meltTime: getMeltingTick(material.obsidian, 2) },
    { get: { amount: 250, tag: 'tconstruct:molten_obsidian' }, put: [{ tag: 'forge:ingots/obsidian' }, { tag: 'forge:dusts/obsidian' }], degree: 1000, meltTime: getMeltingTick(material.obsidian, 1) },

    { get: { amount: 900, tag: 'tconstruct:molten_emerald' }, put: { tag: 'forge:storage_blocks/emerald' }, degree: 934, meltTime: getMeltingTick(material.emerald, fromAmount(900)) },
    { get: { amount: 100, tag: 'tconstruct:molten_emerald' }, put: [{ item: 'minecraft:emerald' }, { tag: 'forge:dusts/emerald' }], degree: 934, meltTime: getMeltingTick(material.emerald, fromAmount(100)) },
    { get: { amount: 400, tag: 'tconstruct:molten_emerald' }, put: { tag: 'forge:gears/emerald' }, degree: 934, meltTime: getMeltingTick(material.emerald, fromAmount(400)) },

    { get: { amount: 400, tag: 'tconstruct:molten_quartz' }, put: QuartzBlock, degree: 637, meltTime: getMeltingTick(material.quartz, fromAmount(400)) },
    { get: { amount: 200, tag: 'tconstruct:molten_quartz' }, put: [{ item: 'minecraft:quartz_slab' }, { item: 'minecraft:smooth_quartz_slab' }], degree: 637, meltTime: getMeltingTick(material.quartz, fromAmount(200)) },
    { get: { amount: 100, tag: 'tconstruct:molten_quartz' }, put: [{ item: 'minecraft:quartz' }, { tag: 'forge:dusts/quartz' }], degree: 637, meltTime: getMeltingTick(material.quartz, fromAmount(100)) },
    { get: { amount: 400, tag: 'tconstruct:molten_quartz' }, put: { tag: 'forge:gears/quartz' }, degree: 637, meltTime: getMeltingTick(material.quartz, fromAmount(400)) },

    { get: { amount: 400, tag: 'tconstruct:molten_amethyst' }, put: { tag: 'forge:storage_blocks/amethyst' }, degree: 950, meltTime: getMeltingTick(material.amethyst, fromAmount(400)) },
    { get: { amount: 100, tag: 'tconstruct:molten_amethyst' }, put: { tag: 'forge:gems/amethyst' }, degree: 950, meltTime: getMeltingTick(material.amethyst, fromAmount(100)) },

    { get: { amount: 900, tag: 'tconstruct:molten_diamond' }, put: { tag: 'forge:storage_blocks/diamond' }, degree: 1450, meltTime: getMeltingTick(material.diamond, fromAmount(900)) },
    { get: { amount: 100, tag: 'tconstruct:molten_diamond' }, put: [{ tag: 'forge:gems/diamond' }, { tag: 'forge:dusts/diamond' }], degree: 1450, meltTime: getMeltingTick(material.diamond, fromAmount(100)) },
    { get: { amount: 400, tag: 'tconstruct:molten_diamond' }, put: { tag: 'forge:gears/diamond' }, degree: 1450, meltTime: getMeltingTick(material.diamond, fromAmount(400)) },

    { get: { amount: 120, tag: 'tconstruct:molten_debris' }, put: { tag: 'forge:ores/netherite_scrap' }, degree: 1175, meltTime: getMeltingTick(material.ancientDebris, fromAmount(120)) },
    { get: { amount: 90, tag: 'tconstruct:molten_debris' }, put: { tag: 'forge:ingots/netherite_scrap' }, degree: 1175, meltTime: getMeltingTick(material.ancientDebris, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_debris' }, put: { tag: 'forge:nuggets/netherite_scrap' }, degree: 1175, meltTime: getMeltingTick(material.ancientDebris, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_iron' }, put: { tag: 'forge:storage_blocks/iron' }, degree: 900, meltTime: getMeltingTick(material.iron, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_iron' }, put: [{ tag: 'forge:ingots/iron' }, { tag: 'forge:dusts/iron' }, { tag: 'forge:plates/iron' }, { tag: 'forge:sheetmetals/iron' }, { tag: 'forge:wires/iron' }], degree: 900, meltTime: getMeltingTick(material.iron, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_iron' }, put: { tag: 'forge:nuggets/iron' }, degree: 900, meltTime: getMeltingTick(material.iron, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_iron' }, put: { tag: 'forge:gears/iron' }, degree: 900, meltTime: getMeltingTick(material.iron, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_iron' }, put: { tag: 'forge:coins/iron' }, degree: 900, meltTime: getMeltingTick(material.iron, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_gold' }, put: { tag: 'forge:storage_blocks/gold' }, degree: 900, meltTime: getMeltingTick(material.gold, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_gold' }, put: [{ tag: 'forge:ingots/gold' }, { tag: 'forge:dusts/gold' }, { tag: 'forge:plates/gold' }, { tag: 'forge:sheetmetals/gold' }, { tag: 'forge:wires/gold' }], degree: 900, meltTime: getMeltingTick(material.gold, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_gold' }, put: { tag: 'forge:nuggets/gold' }, degree: 900, meltTime: getMeltingTick(material.gold, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_gold' }, put: { tag: 'forge:gears/gold' }, degree: 900, meltTime: getMeltingTick(material.gold, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_gold' }, put: { tag: 'forge:coins/gold' }, degree: 900, meltTime: getMeltingTick(material.gold, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_copper' }, put: { tag: 'forge:storage_blocks/copper' }, degree: 900, meltTime: getMeltingTick(material.copper, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_copper' }, put: [{ tag: 'forge:ingots/copper' }, { tag: 'forge:dusts/copper' }, { tag: 'forge:plates/copper' }, { tag: 'forge:sheetmetals/copper' }, { tag: 'forge:wires/copper' }], degree: 900, meltTime: getMeltingTick(material.copper, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_copper' }, put: { tag: 'forge:nuggets/copper' }, degree: 900, meltTime: getMeltingTick(material.copper, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_copper' }, put: { tag: 'forge:gears/copper' }, degree: 900, meltTime: getMeltingTick(material.copper, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_copper' }, put: { tag: 'forge:coins/copper' }, degree: 900, meltTime: getMeltingTick(material.copper, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_netherite' }, put: { tag: 'forge:storage_blocks/netherite' }, degree: 1250, meltTime: getMeltingTick(material.netherite, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_netherite' }, put: [{ tag: 'forge:ingots/netherite' }, { tag: 'forge:plates/netherite' }, { tag: 'forge:plates/netherite' }, { tag: 'forge:dusts/netherite' }], degree: 1250, meltTime: getMeltingTick(material.netherite, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_netherite' }, put: { tag: 'forge:nuggets/netherite' }, degree: 1250, meltTime: getMeltingTick(material.netherite, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_netherite' }, put: { tag: 'forge:gears/netherite' }, degree: 1250, meltTime: getMeltingTick(material.netherite, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_netherite' }, put: { tag: 'forge:coins/netherite' }, degree: 1250, meltTime: getMeltingTick(material.netherite, fromAmount(30)) },

    //MYSTICAL AGRICULTURE

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot_block' }, degree: 850, meltTime: getMeltingTick(material.inferium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_ingot' }, degree: 850, meltTime: getMeltingTick(material.inferium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_inferium' }, put: { item: 'mysticalagriculture:inferium_nugget' }, degree: 850, meltTime: getMeltingTick(material.inferium, fromAmount(10)) },

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot_block' }, degree: 1100, meltTime: getMeltingTick(material.prudentium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_ingot' }, degree: 1100, meltTime: getMeltingTick(material.prudentium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_prudentium' }, put: { item: 'mysticalagriculture:prudentium_nugget' }, degree: 1100, meltTime: getMeltingTick(material.prudentium, fromAmount(10)) },

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot_block' }, degree: 1350, meltTime: getMeltingTick(material.tertium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_ingot' }, degree: 1350, meltTime: getMeltingTick(material.tertium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_tertium' }, put: { item: 'mysticalagriculture:tertium_nugget' }, degree: 1350, meltTime: getMeltingTick(material.tertium, fromAmount(10)) },

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot_block' }, degree: 1600, meltTime: getMeltingTick(material.imperium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_ingot' }, degree: 1600, meltTime: getMeltingTick(material.imperium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_imperium' }, put: { item: 'mysticalagriculture:imperium_nugget' }, degree: 1600, meltTime: getMeltingTick(material.imperium, fromAmount(10)) },

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot_block' }, degree: 1850, meltTime: getMeltingTick(material.supremium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_ingot' }, degree: 1850, meltTime: getMeltingTick(material.supremium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_supremium' }, put: { item: 'mysticalagriculture:supremium_nugget' }, degree: 1850, meltTime: getMeltingTick(material.supremium, fromAmount(10)) },

    { get: { amount: 810, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot_block' }, degree: 1200, meltTime: getMeltingTick(material.soulium, fromAmount(810)) },
    { get: { amount: 90, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_ingot' }, degree: 1200, meltTime: getMeltingTick(material.soulium, fromAmount(90)) },
    { get: { amount: 10, fluid: 'mysticalagradditions:molten_soulium' }, put: { item: 'mysticalagriculture:soulium_nugget' }, degree: 1200, meltTime: getMeltingTick(material.soulium, fromAmount(10)) },

    //THERMAL SERIES

    { get: { amount: 810, tag: 'tconstruct:molten_steel' }, put: { tag: 'forge:storage_blocks/steel' }, degree: 900, meltTime: getMeltingTick(material.steel, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_steel' }, put: [{ tag: 'forge:ingots/steel' }, { tag: 'forge:dusts/steel' }, { tag: 'forge:plates/steel' }, { tag: 'forge:sheetmetals/steel' }, { tag: 'forge:wires/steel' }], degree: 900, meltTime: getMeltingTick(material.steel, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_steel' }, put: { tag: 'forge:nuggets/steel' }, degree: 900, meltTime: getMeltingTick(material.steel, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_steel' }, put: { tag: 'forge:gears/steel' }, degree: 900, meltTime: getMeltingTick(material.steel, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_steel' }, put: { tag: 'forge:coins/steel' }, degree: 900, meltTime: getMeltingTick(material.steel, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_rose_gold' }, put: { tag: 'forge:storage_blocks/rose_gold' }, degree: 900, meltTime: getMeltingTick(material.roseGold, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_rose_gold' }, put: [{ tag: 'forge:ingots/rose_gold' }, { tag: 'forge:dusts/rose_gold' }, { tag: 'forge:plates/rose_gold' }], degree: 900, meltTime: getMeltingTick(material.roseGold, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_rose_gold' }, put: { tag: 'forge:nuggets/rose_gold' }, degree: 900, meltTime: getMeltingTick(material.roseGold, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_rose_gold' }, put: { tag: 'forge:gears/rose_gold' }, degree: 900, meltTime: getMeltingTick(material.roseGold, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_rose_gold' }, put: { tag: 'forge:coins/rose_gold' }, degree: 900, meltTime: getMeltingTick(material.roseGold, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_tin' }, put: { tag: 'forge:storage_blocks/tin' }, degree: 225, meltTime: getMeltingTick(material.tin, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_tin' }, put: [{ tag: 'forge:ingots/tin' }, { tag: 'forge:dusts/tin' }, { tag: 'forge:plates/tin' }], degree: 225, meltTime: getMeltingTick(material.tin, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_tin' }, put: { tag: 'forge:nuggets/tin' }, degree: 225, meltTime: getMeltingTick(material.tin, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_tin' }, put: { tag: 'forge:gears/tin' }, degree: 225, meltTime: getMeltingTick(material.tin, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_tin' }, put: { tag: 'forge:coins/tin' }, degree: 225, meltTime: getMeltingTick(material.tin, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_lead' }, put: { tag: 'forge:storage_blocks/lead' }, degree: 330, meltTime: getMeltingTick(material.lead, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_lead' }, put: [{ tag: 'forge:ingots/lead' }, { tag: 'forge:dusts/lead' }, { tag: 'forge:plates/lead' }, { tag: 'forge:sheetmetals/lead' }, { tag: 'forge:wires/lead' }], degree: 330, meltTime: getMeltingTick(material.lead, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_lead' }, put: { tag: 'forge:nuggets/lead' }, degree: 330, meltTime: getMeltingTick(material.lead, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_lead' }, put: { tag: 'forge:gears/lead' }, degree: 330, meltTime: getMeltingTick(material.lead, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_lead' }, put: { tag: 'forge:coins/lead' }, degree: 330, meltTime: getMeltingTick(material.lead, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_silver' }, put: { tag: 'forge:storage_blocks/silver' }, degree: 790, meltTime: getMeltingTick(material.silver, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_silver' }, put: [{ tag: 'forge:ingots/silver' }, { tag: 'forge:dusts/silver' }, { tag: 'forge:plates/silver' }, { tag: 'forge:sheetmetals/silver' }], degree: 790, meltTime: getMeltingTick(material.silver, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_silver' }, put: { tag: 'forge:nuggets/silver' }, degree: 790, meltTime: getMeltingTick(material.silver, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_silver' }, put: { tag: 'forge:gears/silver' }, degree: 790, meltTime: getMeltingTick(material.silver, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_silver' }, put: { tag: 'forge:coins/silver' }, degree: 790, meltTime: getMeltingTick(material.silver, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_nickel' }, put: { tag: 'forge:storage_blocks/nickel' }, degree: 950, meltTime: getMeltingTick(material.nickel, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_nickel' }, put: [{ tag: 'forge:ingots/nickel' }, { tag: 'forge:dusts/nickel' }, { tag: 'forge:plates/nickel' }, { tag: 'forge:sheetmetals/nickel' }], degree: 950, meltTime: getMeltingTick(material.nickel, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_nickel' }, put: { tag: 'forge:nuggets/nickel' }, degree: 950, meltTime: getMeltingTick(material.nickel, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_nickel' }, put: { tag: 'forge:gears/nickel' }, degree: 950, meltTime: getMeltingTick(material.nickel, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_nickel' }, put: { tag: 'forge:coins/nickel' }, degree: 950, meltTime: getMeltingTick(material.nickel, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_bronze' }, put: { tag: 'forge:storage_blocks/bronze' }, degree: 700, meltTime: getMeltingTick(material.bronze, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_bronze' }, put: [{ tag: 'forge:ingots/bronze' }, { tag: 'forge:plates/bronze' }, { tag: 'forge:dusts/bronze' }], degree: 700, meltTime: getMeltingTick(material.bronze, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_bronze' }, put: { tag: 'forge:nuggets/bronze' }, degree: 700, meltTime: getMeltingTick(material.bronze, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_bronze' }, put: { tag: 'forge:gears/bronze' }, degree: 700, meltTime: getMeltingTick(material.bronze, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_bronze' }, put: { tag: 'forge:coins/bronze' }, degree: 700, meltTime: getMeltingTick(material.bronze, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_electrum' }, put: { tag: 'forge:storage_blocks/electrum' }, degree: 760, meltTime: getMeltingTick(material.electrum, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_electrum' }, put: [{ tag: 'forge:ingots/electrum' }, { tag: 'forge:plates/electrum' }, { tag: 'forge:dusts/electrum' }, { tag: 'forge:sheetmetals/electrum' }, { tag: 'forge:wires/electrum' }], degree: 760, meltTime: getMeltingTick(material.electrum, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_electrum' }, put: { tag: 'forge:nuggets/electrum' }, degree: 760, meltTime: getMeltingTick(material.electrum, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_electrum' }, put: { tag: 'forge:gears/electrum' }, degree: 760, meltTime: getMeltingTick(material.electrum, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_electrum' }, put: { tag: 'forge:coins/electrum' }, degree: 760, meltTime: getMeltingTick(material.electrum, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_invar' }, put: { tag: 'forge:storage_blocks/invar' }, degree: 900, meltTime: getMeltingTick(material.invar, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_invar' }, put: [{ tag: 'forge:ingots/invar' }, { tag: 'forge:plates/invar' }, { tag: 'forge:dusts/invar' }], degree: 900, meltTime: getMeltingTick(material.invar, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_invar' }, put: { tag: 'forge:nuggets/invar' }, degree: 900, meltTime: getMeltingTick(material.invar, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_invar' }, put: { tag: 'forge:gears/invar' }, degree: 900, meltTime: getMeltingTick(material.invar, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_invar' }, put: { tag: 'forge:coins/invar' }, degree: 900, meltTime: getMeltingTick(material.invar, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_constantan' }, put: { tag: 'forge:storage_blocks/constantan' }, degree: 920, meltTime: getMeltingTick(material.constantan, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_constantan' }, put: [{ tag: 'forge:ingots/constantan' }, { tag: 'forge:plates/constantan' }, { tag: 'forge:dusts/constantan' }, { tag: 'forge:sheetmetals/constantan' }], degree: 920, meltTime: getMeltingTick(material.constantan, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_constantan' }, put: { tag: 'forge:nuggets/constantan' }, degree: 920, meltTime: getMeltingTick(material.constantan, fromAmount(10)) },
    { get: { amount: 360, tag: 'tconstruct:molten_constantan' }, put: { tag: 'forge:gears/constantan' }, degree: 920, meltTime: getMeltingTick(material.constantan, fromAmount(360)) },
    { get: { amount: 30, tag: 'tconstruct:molten_constantan' }, put: { tag: 'forge:coins/constantan' }, degree: 920, meltTime: getMeltingTick(material.constantan, fromAmount(30)) },

    { get: { amount: 810, tag: 'tconstruct:molten_enderium' }, put: { tag: 'forge:storage_blocks/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(810)) },
    { get: { amount: 30, tag: 'tconstruct:molten_enderium' }, put: { tag: 'forge:coins/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(30)) },
    { get: { amount: 90, tag: 'tconstruct:molten_enderium' }, put: [{ tag: 'forge:dusts/enderium' }, { tag: 'forge:ingots/enderium' }, { tag: 'forge:plates/enderium' }], degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(90)) },
    { get: { amount: 360, tag: 'tconstruct:molten_enderium' }, put: { tag: 'forge:gears/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(360)) },
    { get: { amount: 10, tag: 'tconstruct:molten_enderium' }, put: { tag: 'forge:nuggets/enderium' }, degree: 1600, meltTime: getMeltingTick(material.enderium, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_lumium' }, put: { tag: 'forge:storage_blocks/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(810)) },
    { get: { amount: 30, tag: 'tconstruct:molten_lumium' }, put: { tag: 'forge:coins/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(30)) },
    { get: { amount: 90, tag: 'tconstruct:molten_lumium' }, put: [{ tag: 'forge:dusts/lumium' }, { tag: 'forge:ingots/lumium' }, { tag: 'forge:plates/lumium' }], degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(90)) },
    { get: { amount: 360, tag: 'tconstruct:molten_lumium' }, put: { tag: 'forge:gears/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(360)) },
    { get: { amount: 10, tag: 'tconstruct:molten_lumium' }, put: { tag: 'forge:nuggets/lumium' }, degree: 1400, meltTime: getMeltingTick(material.lumium, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_signalum' }, put: { tag: 'forge:storage_blocks/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(810)) },
    { get: { amount: 30, tag: 'tconstruct:molten_signalum' }, put: { tag: 'forge:coins/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(30)) },
    { get: { amount: 90, tag: 'tconstruct:molten_signalum' }, put: [{ tag: 'forge:dusts/signalum' }, { tag: 'forge:ingots/signalum' }, { tag: 'forge:plates/signalum' }], degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(90)) },
    { get: { amount: 360, tag: 'tconstruct:molten_signalum' }, put: { tag: 'forge:gears/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(360)) },
    { get: { amount: 10, tag: 'tconstruct:molten_signalum' }, put: { tag: 'forge:nuggets/signalum' }, degree: 1200, meltTime: getMeltingTick(material.signalum, fromAmount(10)) },

    //TINKER CONSTRUCT

    { get: { amount: 810, tag: 'tconstruct:molten_cobalt' }, put: { tag: 'forge:storage_blocks/cobalt' }, degree: 900, meltTime: getMeltingTick(material.cobalt, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_cobalt' }, put: [{ tag: 'forge:ingots/cobalt' }, { tag: 'forge:dusts/cobalt' }, { tag: 'forge:plates/cobalt' }], degree: 900, meltTime: getMeltingTick(material.cobalt, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_cobalt' }, put: { tag: 'forge:nuggets/cobalt' }, degree: 900, meltTime: getMeltingTick(material.cobalt, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_knightmetal' }, put: { tag: 'forge:storage_blocks/knightmetal' }, degree: 1300, meltTime: getMeltingTick(material.knightMetal, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_knightmetal' }, put: { tag: 'forge:ingots/knightmetal' }, degree: 1300, meltTime: getMeltingTick(material.knightMetal, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_knightmetal' }, put: { tag: 'forge:nuggets/knightmetal' }, degree: 1300, meltTime: getMeltingTick(material.knightMetal, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_slimesteel' }, put: { tag: 'forge:storage_blocks/slimesteel' }, degree: 900, meltTime: getMeltingTick(material.slimeSteel, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_slimesteel' }, put: { tag: 'forge:ingots/slimesteel' }, degree: 900, meltTime: getMeltingTick(material.slimeSteel, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_slimesteel' }, put: { tag: 'forge:nuggets/slimesteel' }, degree: 900, meltTime: getMeltingTick(material.slimeSteel, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_amethyst_bronze' }, put: { tag: 'forge:storage_blocks/amethyst_bronze' }, degree: 820, meltTime: getMeltingTick(material.amethystBronze, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_amethyst_bronze' }, put: { tag: 'forge:ingots/amethyst_bronze' }, degree: 820, meltTime: getMeltingTick(material.amethystBronze, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_amethyst_bronze' }, put: { tag: 'forge:nuggets/amethyst_bronze' }, degree: 820, meltTime: getMeltingTick(material.amethystBronze, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_pig_iron' }, put: { tag: 'forge:storage_blocks/pig_iron' }, degree: 811, meltTime: getMeltingTick(material.pigIron, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_pig_iron' }, put: { tag: 'forge:ingots/pig_iron' }, degree: 811, meltTime: getMeltingTick(material.pigIron, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_pig_iron' }, put: { tag: 'forge:nuggets/pig_iron' }, degree: 811, meltTime: getMeltingTick(material.pigIron, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_manyullyn' }, put: { tag: 'forge:storage_blocks/manyullyn' }, degree: 1200, meltTime: getMeltingTick(material.manyullyn, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_manyullyn' }, put: { tag: 'forge:ingots/manyullyn' }, degree: 1200, meltTime: getMeltingTick(material.manyullyn, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_manyullyn' }, put: { tag: 'forge:nuggets/manyullyn' }, degree: 1200, meltTime: getMeltingTick(material.manyullyn, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_hepatizon' }, put: { tag: 'forge:storage_blocks/hepatizon' }, degree: 1400, meltTime: getMeltingTick(material.hepatizon, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_hepatizon' }, put: { tag: 'forge:ingots/hepatizon' }, degree: 1400, meltTime: getMeltingTick(material.hepatizon, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_hepatizon' }, put: { tag: 'forge:nuggets/hepatizon' }, degree: 1400, meltTime: getMeltingTick(material.hepatizon, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_cinderslime' }, put: { tag: 'forge:storage_blocks/cinderslime' }, degree: 1050, meltTime: getMeltingTick(material.cinderSlime, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_cinderslime' }, put: { tag: 'forge:ingots/cinderslime' }, degree: 1050, meltTime: getMeltingTick(material.cinderSlime, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_cinderslime' }, put: { tag: 'forge:nuggets/cinderslime' }, degree: 1050, meltTime: getMeltingTick(material.cinderSlime, fromAmount(10)) },

    { get: { amount: 810, tag: 'tconstruct:molten_queens_slime' }, put: { tag: 'forge:storage_blocks/queens_slime' }, degree: 1150, meltTime: getMeltingTick(material.queensSlime, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_queens_slime' }, put: { tag: 'forge:ingots/queens_slime' }, degree: 1150, meltTime: getMeltingTick(material.queensSlime, fromAmount(90)) },
    { get: { amount: 10, tag: 'tconstruct:molten_queens_slime' }, put: { tag: 'forge:nuggets/queens_slime' }, degree: 1150, meltTime: getMeltingTick(material.queensSlime, fromAmount(10)) },

    //TWILIGHT FOREST

    { get: { amount: 810, tag: 'tconstruct:molten_steeleaf' }, put: { tag: 'forge:storage_blocks/steeleaf' }, degree: 934, meltTime: getMeltingTick(material.steeLeaf, fromAmount(810)) },
    { get: { amount: 90, tag: 'tconstruct:molten_steeleaf' }, put: { tag: 'forge:ingots/steeleaf' }, degree: 934, meltTime: getMeltingTick(material.steeLeaf, fromAmount(90)) },
  ];
  meltingPattern.forEach((recipe) => {
    //console.log(`processing recipe: ${recipe.get.fluid} or ${recipe.get.tag} with ${recipe.meltTime}`);
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
