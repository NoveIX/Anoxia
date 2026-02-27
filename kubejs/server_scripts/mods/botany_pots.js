ServerEvents.recipes((event) => {
  event.remove({ type: 'botanypots:soil' });

  //# ====================================================================================== #

  //#region Definition Soil
  //Propriety All Seed
  const growthMod = 1;
  const treeTicks = 2400;
  const allNotMagicalSoil = ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'Soil', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT0 = 2400;
  const soilT0 = ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT1 = 3300; //Original 3000 * 1.1
  const soilT1 = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT2 = 4320; //Original 3600 * 1.2
  const soilT2 = ['T2', 'T3', 'T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT3 = 5460; //Original 4200 * 1.3
  const soilT3 = ['T3', 'T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT4 = 6720; //Original 4800 * 1.4
  const soilT4 = ['T4', 'T5', 'T6', 'N', 'I'];

  const growthTicksT5 = 8100; //Original 5400 * 1.5
  const soilT5 = ['T5', 'T6', 'N', 'I'];

  const growthTicksT6 = 9600; //Original 6000 * 1.6
  const soilT6 = ['T6', 'N', 'I'];
  //#endregion

  //# ====================================================================================== #

  //#region Soil
  //Soil Type
  const soilPattern = [
    { type: 'minecraft:grass_block', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'Soil'], multiplier: 0.8 },
    { type: 'minecraft:dirt', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'Soil'], multiplier: 0.8 },
    { type: 'farmersdelight:rich_soil', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'Soil'], multiplier: 0.9 },
    { type: 'twilightforest:uberous_soil', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T0'], multiplier: 1 },
    { type: 'mysticalagriculture:inferium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T1'], multiplier: 1.1 },
    { type: 'mysticalagriculture:prudentium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T2'], multiplier: 1.2 },
    { type: 'mysticalagriculture:tertium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T3'], multiplier: 1.3 },
    { type: 'mysticalagriculture:imperium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T4'], multiplier: 1.4 },
    { type: 'mysticalagriculture:supremium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T5'], multiplier: 1.5 },
    { type: 'mysticalagradditions:insanium_farmland', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'T6'], multiplier: 1.6 },
    { type: 'avaritia:neutron', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'N'], multiplier: 2 },
    { type: 'avaritia:infinity', category: ['grass', 'dirt', 'stone', 'mushroom', 'soul_sand', 'I'], multiplier: 3 },
  ];
  soilPattern.forEach((soil) => event.recipes.botanypots.soil(soil.type, { block: soil.type }, soil.category, -1, soil.multiplier));
  //#endregion

  //# ====================================================================================== #

  //#region Mystical
  const mysticalPattern = [
    //Tier 0
    { seed: 'mysticalagriculture:air_seeds', essence: 'mysticalagriculture:air_essence', crop: 'mysticalagriculture:air_crop', tier: soilT0, growth: growthTicksT0 },
    { seed: 'mysticalagriculture:earth_seeds', essence: 'mysticalagriculture:earth_essence', crop: 'mysticalagriculture:earth_crop', tier: soilT0, growth: growthTicksT0 },
    { seed: 'mysticalagriculture:water_seeds', essence: 'mysticalagriculture:water_essence', crop: 'mysticalagriculture:water_crop', tier: soilT0, growth: growthTicksT0 },
    { seed: 'mysticalagriculture:fire_seeds', essence: 'mysticalagriculture:fire_essence', crop: 'mysticalagriculture:fire_crop', tier: soilT0, growth: growthTicksT0 },

    //Tier 1
    { seed: 'mysticalagriculture:inferium_seeds', essence: 'mysticalagriculture:inferium_essence', crop: 'mysticalagriculture:inferium_crop', tier: soilT1, growth: growthTicksT1 },
    { seed: 'mysticalagriculture:stone_seeds', essence: 'mysticalagriculture:stone_essence', crop: 'mysticalagriculture:stone_crop', tier: soilT1, growth: growthTicksT1 },
    { seed: 'mysticalagriculture:dirt_seeds', essence: 'mysticalagriculture:dirt_essence', crop: 'mysticalagriculture:dirt_crop', tier: soilT1, growth: growthTicksT1 },
    { seed: 'mysticalagriculture:wood_seeds', essence: 'mysticalagriculture:wood_essence', crop: 'mysticalagriculture:wood_crop', tier: soilT1, growth: growthTicksT1 },
    { seed: 'mysticalagriculture:ice_seeds', essence: 'mysticalagriculture:ice_essence', crop: 'mysticalagriculture:ice_crop', tier: soilT1, growth: growthTicksT1 },
    { seed: 'mysticalagriculture:deepslate_seeds', essence: 'mysticalagriculture:deepslate_essence', crop: 'mysticalagriculture:deepslate_crop', tier: soilT1, growth: growthTicksT1 },

    //Tier 2
    { seed: 'mysticalagriculture:nature_seeds', essence: 'mysticalagriculture:nature_essence', crop: 'mysticalagriculture:nature_crop', tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:dye_seeds", essence: "mysticalagriculture:dye_essence", crop: "mysticalagriculture:dye_crop", tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:nether_seeds', essence: 'mysticalagriculture:nether_essence', crop: 'mysticalagriculture:nether_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:coal_seeds', essence: 'mysticalagriculture:coal_essence', crop: 'mysticalagriculture:coal_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:coral_seeds', essence: 'mysticalagriculture:coral_essence', crop: 'mysticalagriculture:coral_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:honey_seeds', essence: 'mysticalagriculture:honey_essence', crop: 'mysticalagriculture:honey_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:amethyst_seeds', essence: 'mysticalagriculture:amethyst_essence', crop: 'mysticalagriculture:amethyst_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:pig_seeds', essence: 'mysticalagriculture:pig_essence', crop: 'mysticalagriculture:pig_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:chicken_seeds', essence: 'mysticalagriculture:chicken_essence', crop: 'mysticalagriculture:chicken_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:cow_seeds', essence: 'mysticalagriculture:cow_essence', crop: 'mysticalagriculture:cow_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:sheep_seeds', essence: 'mysticalagriculture:sheep_essence', crop: 'mysticalagriculture:sheep_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:squid_seeds', essence: 'mysticalagriculture:squid_essence', crop: 'mysticalagriculture:squid_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:fish_seeds', essence: 'mysticalagriculture:fish_essence', crop: 'mysticalagriculture:fish_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:slime_seeds', essence: 'mysticalagriculture:slime_essence', crop: 'mysticalagriculture:slime_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:turtle_seeds', essence: 'mysticalagriculture:turtle_essence', crop: 'mysticalagriculture:turtle_crop', tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:rubber_seeds", essence: "mysticalagriculture:rubber_essence", crop: "mysticalagriculture:rubber_crop", tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:silicon_seeds", essence: "mysticalagriculture:silicon_essence", crop: "mysticalagriculture:silicon_crop", tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:sulfur_seeds', essence: 'mysticalagriculture:sulfur_essence', crop: 'mysticalagriculture:sulfur_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:aluminum_seeds', essence: 'mysticalagriculture:aluminum_essence', crop: 'mysticalagriculture:aluminum_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:saltpeter_seeds', essence: 'mysticalagriculture:saltpeter_essence', crop: 'mysticalagriculture:saltpeter_crop', tier: soilT2, growth: growthTicksT2 },
    { seed: 'mysticalagriculture:apatite_seeds', essence: 'mysticalagriculture:apatite_essence', crop: 'mysticalagriculture:apatite_crop', tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:grains_of_infinity_seeds", essence: "mysticalagriculture:grains_of_infinity_essence", crop: "mysticalagriculture:grains_of_infinity_crop", tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:mystical_flower_seeds", essence: "mysticalagriculture:mystical_flower_essence", crop: "mysticalagriculture:mystical_flower_crop", tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:marble_seeds", essence: "mysticalagriculture:marble_essence", crop: "mysticalagriculture:marble_crop", tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:limestone_seeds", essence: "mysticalagriculture:limestone_essence", crop: "mysticalagriculture:limestone_crop", tier: soilT2, growth: growthTicksT2 },
    //{ seed: "mysticalagriculture:basalt_seeds", essence: "mysticalagriculture:basalt_essence", crop: "mysticalagriculture:basalt_crop", tier: soilT2, growth: growthTicksT2 },

    //Tier 3
    { seed: 'mysticalagriculture:iron_seeds', essence: 'mysticalagriculture:iron_essence', crop: 'mysticalagriculture:iron_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:copper_seeds', essence: 'mysticalagriculture:copper_essence', crop: 'mysticalagriculture:copper_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:nether_quartz_seeds', essence: 'mysticalagriculture:nether_quartz_essence', crop: 'mysticalagriculture:nether_quartz_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:glowstone_seeds', essence: 'mysticalagriculture:glowstone_essence', crop: 'mysticalagriculture:glowstone_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:redstone_seeds', essence: 'mysticalagriculture:redstone_essence', crop: 'mysticalagriculture:redstone_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:obsidian_seeds', essence: 'mysticalagriculture:obsidian_essence', crop: 'mysticalagriculture:obsidian_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:prismarine_seeds', essence: 'mysticalagriculture:prismarine_essence', crop: 'mysticalagriculture:prismarine_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:zombie_seeds', essence: 'mysticalagriculture:zombie_essence', crop: 'mysticalagriculture:zombie_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:skeleton_seeds', essence: 'mysticalagriculture:skeleton_essence', crop: 'mysticalagriculture:skeleton_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:creeper_seeds', essence: 'mysticalagriculture:creeper_essence', crop: 'mysticalagriculture:creeper_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:spider_seeds', essence: 'mysticalagriculture:spider_essence', crop: 'mysticalagriculture:spider_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:rabbit_seeds', essence: 'mysticalagriculture:rabbit_essence', crop: 'mysticalagriculture:rabbit_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:tin_seeds', essence: 'mysticalagriculture:tin_essence', crop: 'mysticalagriculture:tin_crop', tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:bronze_seeds", essence: "mysticalagriculture:bronze_essence", crop: "mysticalagriculture:bronze_crop", tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:zinc_seeds', essence: 'mysticalagriculture:zinc_essence', crop: 'mysticalagriculture:zinc_crop', tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:brass_seeds", essence: "mysticalagriculture:brass_essence", crop: "mysticalagriculture:brass_crop", tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:silver_seeds', essence: 'mysticalagriculture:silver_essence', crop: 'mysticalagriculture:silver_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:lead_seeds', essence: 'mysticalagriculture:lead_essence', crop: 'mysticalagriculture:lead_crop', tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:graphite_seeds", essence: "mysticalagriculture:graphite_essence", crop: "mysticalagriculture:graphite_crop", tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:blizz_seeds', essence: 'mysticalagriculture:blizz_essence', crop: 'mysticalagriculture:blizz_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:blitz_seeds', essence: 'mysticalagriculture:blitz_essence', crop: 'mysticalagriculture:blitz_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:basalz_seeds', essence: 'mysticalagriculture:basalz_essence', crop: 'mysticalagriculture:basalz_crop', tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:amethyst_bronze_seeds", essence: "mysticalagriculture:amethyst_bronze_essence", crop: "mysticalagriculture:amethyst_bronze_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:slimesteel_seeds", essence: "mysticalagriculture:slimesteel_essence", crop: "mysticalagriculture:slimesteel_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:pig_iron_seeds", essence: "mysticalagriculture:pig_iron_essence", crop: "mysticalagriculture:pig_iron_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:copper_alloy_seeds", essence: "mysticalagriculture:copper_alloy_essence", crop: "mysticalagriculture:copper_alloy_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:redstone_alloy_seeds", essence: "mysticalagriculture:redstone_alloy_essence", crop: "mysticalagriculture:redstone_alloy_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:conductive_alloy_seeds", essence: "mysticalagriculture:conductive_alloy_essence", crop: "mysticalagriculture:conductive_alloy_crop", tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:manasteel_seeds", essence: "mysticalagriculture:manasteel_essence", crop: "mysticalagriculture:manasteel_crop", tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:steeleaf_seeds', essence: 'mysticalagriculture:steeleaf_essence', crop: 'mysticalagriculture:steeleaf_crop', tier: soilT3, growth: growthTicksT3 },
    //{ seed: "mysticalagriculture:ironwood_seeds", essence: "mysticalagriculture:ironwood_essence", crop: "mysticalagriculture:ironwood_crop", tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:sky_stone_seeds', essence: 'mysticalagriculture:sky_stone_essence', crop: 'mysticalagriculture:sky_stone_crop', tier: soilT3, growth: growthTicksT3 },
    { seed: 'mysticalagriculture:certus_quartz_seeds', essence: 'mysticalagriculture:certus_quartz_essence', crop: 'mysticalagriculture:certus_quartz_crop', tier: soilT3, growth: growthTicksT3 },

    //Tier 4
    { seed: 'mysticalagriculture:gold_seeds', essence: 'mysticalagriculture:gold_essence', crop: 'mysticalagriculture:gold_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:lapis_lazuli_seeds', essence: 'mysticalagriculture:lapis_lazuli_essence', crop: 'mysticalagriculture:lapis_lazuli_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:end_seeds', essence: 'mysticalagriculture:end_essence', crop: 'mysticalagriculture:end_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:experience_seeds", essence: "mysticalagriculture:experience_essence", crop: "mysticalagriculture:experience_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:blaze_seeds', essence: 'mysticalagriculture:blaze_essence', crop: 'mysticalagriculture:blaze_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:ghast_seeds', essence: 'mysticalagriculture:ghast_essence', crop: 'mysticalagriculture:ghast_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:enderman_seeds', essence: 'mysticalagriculture:enderman_essence', crop: 'mysticalagriculture:enderman_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:steel_seeds", essence: "mysticalagriculture:steel_essence", crop: "mysticalagriculture:steel_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:nickel_seeds', essence: 'mysticalagriculture:nickel_essence', crop: 'mysticalagriculture:nickel_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:constantan_seeds", essence: "mysticalagriculture:constantan_essence", crop: "mysticalagriculture:constantan_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:electrum_seeds", essence: "mysticalagriculture:electrum_essence", crop: "mysticalagriculture:electrum_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:invar_seeds", essence: "mysticalagriculture:invar_essence", crop: "mysticalagriculture:invar_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:mithril_seeds", essence: "mysticalagriculture:mithril_essence", crop: "mysticalagriculture:mithril_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:tungsten_seeds", essence: "mysticalagriculture:tungsten_essence", crop: "mysticalagriculture:tungsten_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:titanium_seeds", essence: "mysticalagriculture:titanium_essence", crop: "mysticalagriculture:titanium_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:uranium_seeds', essence: 'mysticalagriculture:uranium_essence', crop: 'mysticalagriculture:uranium_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:chrome_seeds", essence: "mysticalagriculture:chrome_essence", crop: "mysticalagriculture:chrome_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:ruby_seeds', essence: 'mysticalagriculture:ruby_essence', crop: 'mysticalagriculture:ruby_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:sapphire_seeds', essence: 'mysticalagriculture:sapphire_essence', crop: 'mysticalagriculture:sapphire_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:peridot_seeds', essence: 'mysticalagriculture:peridot_essence', crop: 'mysticalagriculture:peridot_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:soulium_seeds', essence: 'mysticalagriculture:soulium_essence', crop: 'mysticalagriculture:soulium_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:signalum_seeds", essence: "mysticalagriculture:signalum_essence", crop: "mysticalagriculture:signalum_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:lumium_seeds", essence: "mysticalagriculture:lumium_essence", crop: "mysticalagriculture:lumium_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:flux_infused_ingot_seeds", essence: "mysticalagriculture:flux_infused_ingot_essence", crop: "mysticalagriculture:flux_infused_ingot_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:hop_graphite_seeds", essence: "mysticalagriculture:hop_graphite_essence", crop: "mysticalagriculture:hop_graphite_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:cobalt_seeds', essence: 'mysticalagriculture:cobalt_essence', crop: 'mysticalagriculture:cobalt_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:rose_gold_seeds", essence: "mysticalagriculture:rose_gold_essence", crop: "mysticalagriculture:rose_gold_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:soularium_seeds", essence: "mysticalagriculture:soularium_essence", crop: "mysticalagriculture:soularium_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:dark_steel_seeds", essence: "mysticalagriculture:dark_steel_essence", crop: "mysticalagriculture:dark_steel_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:pulsating_alloy_seeds", essence: "mysticalagriculture:pulsating_alloy_essence", crop: "mysticalagriculture:pulsating_alloy_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:energetic_alloy_seeds", essence: "mysticalagriculture:energetic_alloy_essence", crop: "mysticalagriculture:energetic_alloy_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:elementium_seeds", essence: "mysticalagriculture:elementium_essence", crop: "mysticalagriculture:elementium_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:osmium_seeds', essence: 'mysticalagriculture:osmium_essence', crop: 'mysticalagriculture:osmium_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:fluorite_seeds', essence: 'mysticalagriculture:fluorite_essence', crop: 'mysticalagriculture:fluorite_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:refined_glowstone_seeds", essence: "mysticalagriculture:refined_glowstone_essence", crop: "mysticalagriculture:refined_glowstone_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:refined_obsidian_seeds", essence: "mysticalagriculture:refined_obsidian_essence", crop: "mysticalagriculture:refined_obsidian_crop", tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:knightmetal_seeds', essence: 'mysticalagriculture:knightmetal_essence', crop: 'mysticalagriculture:knightmetal_crop', tier: soilT4, growth: growthTicksT4 },
    { seed: 'mysticalagriculture:fiery_ingot_seeds', essence: 'mysticalagriculture:fiery_ingot_essence', crop: 'mysticalagriculture:fiery_ingot_crop', tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:compressed_iron_seeds", essence: "mysticalagriculture:compressed_iron_essence", crop: "mysticalagriculture:compressed_iron_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:fluix_seeds", essence: "mysticalagriculture:fluix_essence", crop: "mysticalagriculture:fluix_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:energized_steel_seeds", essence: "mysticalagriculture:energized_steel_essence", crop: "mysticalagriculture:energized_steel_crop", tier: soilT4, growth: growthTicksT4 },
    //{ seed: "mysticalagriculture:blazing_crystal_seeds", essence: "mysticalagriculture:blazing_crystal_essence", crop: "mysticalagriculture:blazing_crystal_crop", tier: soilT4, growth: growthTicksT4 },

    //Tier 5
    { seed: 'mysticalagriculture:diamond_seeds', essence: 'mysticalagriculture:diamond_essence', crop: 'mysticalagriculture:diamond_crop', tier: soilT5, growth: growthTicksT5 },
    { seed: 'mysticalagriculture:emerald_seeds', essence: 'mysticalagriculture:emerald_essence', crop: 'mysticalagriculture:emerald_crop', tier: soilT5, growth: growthTicksT5 },
    { seed: 'mysticalagriculture:netherite_seeds', essence: 'mysticalagriculture:netherite_essence', crop: 'mysticalagriculture:netherite_crop', tier: soilT5, growth: growthTicksT5 },
    { seed: 'mysticalagriculture:wither_skeleton_seeds', essence: 'mysticalagriculture:wither_skeleton_essence', crop: 'mysticalagriculture:wither_skeleton_crop', tier: soilT5, growth: growthTicksT5 },
    { seed: 'mysticalagriculture:platinum_seeds', essence: 'mysticalagriculture:platinum_essence', crop: 'mysticalagriculture:platinum_crop', tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:iridium_seeds", essence: "mysticalagriculture:iridium_essence", crop: "mysticalagriculture:iridium_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:enderium_seeds", essence: "mysticalagriculture:enderium_essence", crop: "mysticalagriculture:enderium_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:flux_infused_gem_seeds", essence: "mysticalagriculture:flux_infused_gem_essence", crop: "mysticalagriculture:flux_infused_gem_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:manyullyn_seeds", essence: "mysticalagriculture:manyullyn_essence", crop: "mysticalagriculture:manyullyn_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:queens_slime_seeds", essence: "mysticalagriculture:queens_slime_essence", crop: "mysticalagriculture:queens_slime_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:hepatizon_seeds", essence: "mysticalagriculture:hepatizon_essence", crop: "mysticalagriculture:hepatizon_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:vibrant_alloy_seeds", essence: "mysticalagriculture:vibrant_alloy_essence", crop: "mysticalagriculture:vibrant_alloy_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:end_steel_seeds", essence: "mysticalagriculture:end_steel_essence", crop: "mysticalagriculture:end_steel_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:terrasteel_seeds", essence: "mysticalagriculture:terrasteel_essence", crop: "mysticalagriculture:terrasteel_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:yellorium_seeds", essence: "mysticalagriculture:yellorium_essence", crop: "mysticalagriculture:yellorium_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:cyanite_seeds", essence: "mysticalagriculture:cyanite_essence", crop: "mysticalagriculture:cyanite_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:niotic_crystal_seeds", essence: "mysticalagriculture:niotic_crystal_essence", crop: "mysticalagriculture:niotic_crystal_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:spirited_crystal_seeds", essence: "mysticalagriculture:spirited_crystal_essence", crop: "mysticalagriculture:spirited_crystal_crop", tier: soilT5, growth: growthTicksT5 },
    //{ seed: "mysticalagriculture:uraninite_seeds", essence: "mysticalagriculture:uraninite_essence", crop: "mysticalagriculture:uraninite_crop", tier: soilT5, growth: growthTicksT5 },

    //Tier 6
    { seed: 'mysticalagriculture:nether_star_seeds', essence: 'mysticalagriculture:nether_star_essence', crop: 'mysticalagriculture:nether_star_crop', tier: soilT6, growth: growthTicksT6 },
    { seed: 'mysticalagriculture:dragon_egg_seeds', essence: 'mysticalagriculture:dragon_egg_essence', crop: 'mysticalagriculture:dragon_egg_crop', tier: soilT6, growth: growthTicksT6 },
    { seed: 'mysticalagriculture:gaia_spirit_seeds', essence: 'mysticalagriculture:gaia_spirit_essence', crop: 'mysticalagriculture:gaia_spirit_crop', tier: soilT6, growth: growthTicksT6 },
    //{ seed: "mysticalagriculture:neutronium_seeds", essence: "mysticalagriculture:neutronium_essence", crop: "mysticalagriculture:neutronium_crop", tier: soilT6, growth: growthTicksT6 },
    //{ seed: "mysticalagriculture:nitro_crystal_seeds", essence: "mysticalagriculture:nitro_crystal_essence", crop: "mysticalagriculture:nitro_crystal_crop", tier: soilT6, growth: growthTicksT6 },
  ];
  mysticalPattern.forEach((recipe) => {
    event.remove({ input: recipe.seed, type: 'botanypots:crop' });
    event.recipes.botanypots.crop(recipe.seed, recipe.tier, { block: recipe.crop }, [Item.of(recipe.essence).withChance(1).withRolls(1), Item.of(recipe.seed).withChance(0.01).withRolls(1), Item.of('mysticalagriculture:fertilized_essence').withChance(0.1).withRolls(1)], recipe.growth, growthMod);
  });
  //#endregion

  //# ====================================================================================== #

  //#region Tree
  const treePattern = [
    //Vanilla
    { sapling: 'minecraft:oak_sapling', log: 'minecraft:oak_log', leaves: 'minecraft:oak_leaves', extra: Item.of('minecraft:apple').withChance(0.05).withRolls(1, 2) },
    { sapling: 'minecraft:spruce_sapling', log: 'minecraft:spruce_log', leaves: 'minecraft:spruce_leaves' },
    { sapling: 'minecraft:birch_sapling', log: 'minecraft:birch_log', leaves: 'minecraft:birch_leaves' },
    { sapling: 'minecraft:jungle_sapling', log: 'minecraft:jungle_log', leaves: 'minecraft:jungle_leaves', extra: Item.of('minecraft:cocoa_beans').withChance(0.05).withRolls(1) },
    { sapling: 'minecraft:acacia_sapling', log: 'minecraft:acacia_log', leaves: 'minecraft:acacia_leaves' },
    { sapling: 'minecraft:dark_oak_sapling', log: 'minecraft:dark_oak_log', leaves: 'minecraft:dark_oak_leaves', extra: Item.of('minecraft:apple').withChance(0.05).withRolls(1, 2) },
    { sapling: 'minecraft:mangrove_propagule', log: 'minecraft:mangrove_log', leaves: 'minecraft:mangrove_leaves', extra: Item.of('minecraft:mangrove_roots').withChance(0.1).withRolls(1, 2) },
    { sapling: 'minecraft:cherry_sapling', log: 'minecraft:cherry_log', leaves: 'minecraft:cherry_leaves' },

    //Architects Palette
    { sapling: 'architects_palette:twisted_sapling', log: 'architects_palette:twisted_log', leaves: 'architects_palette:twisted_leaves' },

    //Ars
    { sapling: 'ars_elemental:yellow_archwood_sapling', log: 'ars_elemental:yellow_archwood_log', leaves: 'ars_elemental:yellow_archwood_leaves' },
    { sapling: 'ars_nouveau:blue_archwood_sapling', log: 'ars_nouveau:blue_archwood_log', leaves: 'ars_nouveau:blue_archwood_leaves' },
    { sapling: 'ars_nouveau:red_archwood_sapling', log: 'ars_nouveau:red_archwood_log', leaves: 'ars_nouveau:red_archwood_leaves' },
    { sapling: 'ars_nouveau:purple_archwood_sapling', log: 'ars_nouveau:purple_archwood_log', leaves: 'ars_nouveau:purple_archwood_leaves' },
    { sapling: 'ars_nouveau:green_archwood_sapling', log: 'ars_nouveau:green_archwood_log', leaves: 'ars_nouveau:green_archwood_leaves' },

    //Quark
    { sapling: 'quark:ancient_sapling', log: 'quark:ancient_log', leaves: 'quark:ancient_leaves' },
    { sapling: 'quark:blue_blossom_sapling', log: 'quark:blossom_log', leaves: 'quark:blue_blossom_leaves' },
    { sapling: 'quark:lavender_blossom_sapling', log: 'quark:blossom_log', leaves: 'quark:lavender_blossom_leaves' },
    { sapling: 'quark:orange_blossom_sapling', log: 'quark:blossom_log', leaves: 'quark:orange_blossom_leaves' },
    { sapling: 'quark:yellow_blossom_sapling', log: 'quark:blossom_log', leaves: 'quark:yellow_blossom_leaves' },
    { sapling: 'quark:red_blossom_sapling', log: 'quark:blossom_log', leaves: 'quark:red_blossom_leaves' },

    //Twilight
    { sapling: 'twilightforest:twilight_oak_sapling', log: 'twilightforest:twilight_oak_log', leaves: 'twilightforest:twilight_oak_leaves' },
    { sapling: 'twilightforest:canopy_sapling', log: 'twilightforest:canopy_log', leaves: 'twilightforest:canopy_leaves' },
    { sapling: 'twilightforest:mangrove_sapling', log: 'twilightforest:mangrove_log', leaves: 'twilightforest:mangrove_leaves', extra: Item.of('twilightforest:mangrove_root').withChance(0.2).withRolls(1, 2) },
    { sapling: 'twilightforest:darkwood_sapling', log: 'twilightforest:dark_log', leaves: 'twilightforest:dark_leaves' },
    { sapling: 'twilightforest:time_sapling', log: 'twilightforest:time_log', leaves: 'twilightforest:time_leaves' },
    { sapling: 'twilightforest:transformation_sapling', log: 'twilightforest:transformation_log', leaves: 'twilightforest:transformation_leaves' },
    { sapling: 'twilightforest:mining_sapling', log: 'twilightforest:mining_log', leaves: 'twilightforest:mining_leaves' },
    { sapling: 'twilightforest:sorting_sapling', log: 'twilightforest:sorting_log', leaves: 'twilightforest:sorting_leaves' },
    { sapling: 'twilightforest:rainbow_oak_sapling', log: 'twilightforest:twilight_oak_log', leaves: 'twilightforest:rainbow_oak_leaves' },

    //Thermal
    { sapling: 'thermal:rubberwood_sapling', log: 'thermal:rubberwood_log', leaves: 'thermal:rubberwood_leaves' },
  ];

  //# ====================================================================================== #

  const twilightSapling = [
    'twilightforest:twilight_oak_sapling',
    'twilightforest:canopy_sapling',
    'twilightforest:mangrove_sapling',
    'twilightforest:darkwood_sapling',
    'twilightforest:time_sapling',
    'twilightforest:transformation_sapling',
    'twilightforest:mining_sapling',
    'twilightforest:sorting_sapling',
    'twilightforest:rainbow_oak_sapling',
  ];

  const rootsDrop = [
    Item.of('rootsclassic:elderberry').withChance(0.05).withRolls(1, 2),
    Item.of('rootsclassic:nightshade').withChance(0.05).withRolls(1, 2),
    Item.of('rootsclassic:blackcurrant').withChance(0.05).withRolls(1, 2),
    Item.of('rootsclassic:redcurrant').withChance(0.05).withRolls(1, 2),
    Item.of('rootsclassic:whitecurrant').withChance(0.05).withRolls(1, 2),
    Item.of('delightful:green_tea_leaf').withChance(0.05).withRolls(1, 2),
  ];

  //# ====================================================================================== #

  treePattern.forEach((recipe) => {
    const drops = [Item.of(recipe.log).withChance(1).withRolls(2, 4), Item.of(recipe.sapling).withChance(0.15).withRolls(1, 2), Item.of(recipe.leaves).withChance(0.3).withRolls(1, 2)];

    //Twilight Core
    if (recipe.sapling === 'twilightforest:time_sapling') drops.push(Item.of('twilightforest:time_log_core').withChance(0.01).withRolls(1));
    if (recipe.sapling === 'twilightforest:transformation_sapling') drops.push(Item.of('twilightforest:transformation_log_core').withChance(0.01).withRolls(1));
    if (recipe.sapling === 'twilightforest:mining_sapling') drops.push(Item.of('twilightforest:mining_log_core').withChance(0.01).withRolls(1));
    if (recipe.sapling === 'twilightforest:sorting_sapling') drops.push(Item.of('twilightforest:sorting_log_core').withChance(0.01).withRolls(1));

    //Twigs
    drops.push(Item.of('twigs:twig').withChance(0.1).withRolls(1, 2));

    //LivingRoot
    if (twilightSapling.includes(recipe.sapling)) drops.push(Item.of('twilightforest:liveroot').withChance(0.05).withRolls(1, 2));

    //Extra
    if (recipe.extra) drops.push(recipe.extra);

    //Rubber
    if (recipe.sapling === 'thermal:rubberwood_sapling') drops.push(Item.of('industrialforegoing:tinydryrubber').withChance(0.05).withRolls(1, 2));

    //Roots
    rootsDrop.forEach((root) => drops.push(root));

    //Create recipes
    event.remove({ input: recipe.sapling, type: 'botanypots:crop' });
    event.recipes.botanypots.crop(recipe.sapling, allNotMagicalSoil, { block: recipe.sapling }, drops, treeTicks, growthMod);
  });
  //#endregion

  //# ====================================================================================== #

  //#region Fertilizer
  const fertilizerPattern = [
    { item: 'minecraft:bone_meal', range: [100, 300] },
    { item: 'create:tree_fertilizer', range: [400, 600] },

    { item: 'industrialforegoing:fertilizer', range: [300, 500] },
    { item: 'immersiveengineering:fertilizer', range: [800, 1000] },

    { item: 'thermal:phytogro', range: [700, 900] },
    { item: 'thermal:compost', range: [200, 400] },

    { item: 'mysticalagriculture:mystical_fertilizer', range: [15000, 15000] },
  ];
  fertilizerPattern.forEach((recipe) => event.recipes.botanypots.fertilizer(recipe.item, recipe.range[0], recipe.range[1]));
  //#endregion
});
