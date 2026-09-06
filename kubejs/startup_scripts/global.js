//priority:940

//Define Game item fluid and recipe
const gameItem = anoxia.game.item;
const gameFluid = anoxia.game.fluid;
const gameRecipe = anoxia.game.recipe;

//Define generic func
const funcGeneric = anoxia.function.generic;

//# ====================================================================================== #

//#region RmOut item
gameItem.rmOut = [
  //Ad Astra
  'ad_astra:iron_plate',
  'ad_astra:steel_plate',
  'ad_astra:iron_rod',

  //Actually Addiction
  'actuallyadditions:tiny_coal',
  'actuallyadditions:tiny_charcoal',
  'actuallyadditions:tiny_torch',
  'actuallyadditions:crafter_on_a_stick',

  //AE2
  'ae2:ender_dust',

  //AppliedFlux
  'appflux:sky_harden_insulating_resin',
  'appflux:mega_fe_cell_housing',

  //Botanical machinery extra
  'botanicalmachinery:mana_battery_creative',

  //Crete
  'create:copper_sheet',
  'create:iron_sheet',
  'create:golden_sheet',

  //Create Addition
  'createaddition:iron_rod',
  'create:copper_sheet',
  'create:iron_sheet',
  'create:golden_sheet',
  'createaddition:electrum_sheet',
  'createaddition:zinc_sheet',
  'createaddition:copper_wire',
  'createaddition:electrum_wire',

  //Create Deco
  'createdeco:zinc_sheet',
  'createdeco:netherite_sheet',
  'createdeco:netherite_nugget',

  //Create Sifter
  'createsifter:brass_sifter',
  'createsifter:dust',
  'createsifter:crushed_end_stone',
  'createsifter:string_mesh',
  'createsifter:andesite_mesh',
  'createsifter:zinc_mesh',
  'createsifter:brass_mesh',
  'createsifter:custom_mesh',
  'createsifter:advanced_brass_mesh',
  'createsifter:advanced_custom_mesh',

  //Cyclic
  'cyclic:crafting_stick',
  'cyclic:crafting_bag',
  'cyclic:compressed_cobblestone',
  'cyclic:energy_pipe',
  'cyclic:item_pipe',
  'cyclic:fluid_pipe',
  'cyclic:uncrafter',

  //EnderIO
  'enderio:silicon',
  'enderio:dew_of_the_void_bucket',
  'enderio:vapor_of_levity_bucket',
  'enderio:hootch_bucket',
  'enderio:rocket_fuel_bucket',
  'enderio:liquid_sunshine_bucket',
  'enderio:cloud_seed_bucket',
  'enderio:cloud_seed_concentrated_bucket',
  'enderio:powdered_quartz',
  'enderio:powdered_coal',
  'enderio:powdered_iron',
  'enderio:powdered_gold',
  'enderio:powdered_copper',
  'enderio:powdered_tin',
  'enderio:powdered_ender_pearl',
  'enderio:powdered_obsidian',
  'enderio:powdered_cobalt',
  'enderio:powdered_lapis_lazuli',
  'enderio:powdered_quartz',
  'enderio:light',
  'enderio:light_inverted',
  'enderio:powered_light',
  'enderio:powered_light_inverted',
  'enderio:powered_light_wireless',
  'enderio:powered_light_inverted_wireless',
  'enderio:energy_conduit',

  //ExNihilo Sequentia
  'exnihilosequentia:andesite_crook',
  'exnihilosequentia:bamboo_crook',
  'exnihilosequentia:basalt_crook',
  'exnihilosequentia:blackstone_crook',
  'exnihilosequentia:bone_crook',
  'exnihilosequentia:calcite_crook',
  'exnihilosequentia:deepslate_crook',
  'exnihilosequentia:diorite_crook',
  'exnihilosequentia:dripstone_crook',
  'exnihilosequentia:granite_crook',
  'exnihilosequentia:nether_brick_crook',
  'exnihilosequentia:red_nether_brick_crook',
  'exnihilosequentia:terracotta_crook',
  'exnihilosequentia:tuff_crook',
  'exnihilosequentia:andesite_hammer',
  'exnihilosequentia:bamboo_hammer',
  'exnihilosequentia:basalt_hammer',
  'exnihilosequentia:blackstone_hammer',
  'exnihilosequentia:bone_hammer',
  'exnihilosequentia:calcite_hammer',
  'exnihilosequentia:deepslate_hammer',
  'exnihilosequentia:diorite_hammer',
  'exnihilosequentia:dripstone_hammer',
  'exnihilosequentia:granite_hammer',
  'exnihilosequentia:nether_brick_hammer',
  'exnihilosequentia:red_nether_brick_hammer',
  'exnihilosequentia:terracotta_hammer',
  'exnihilosequentia:tuff_hammer',
  'exnihilosequentia:end_cake',

  //Hammer Lib
  'hammerlib:gears/wooden',
  'hammerlib:gears/stone',
  'hammerlib:gears/copper',
  'hammerlib:gears/iron',
  'hammerlib:gears/gold',
  'hammerlib:gears/diamond',
  'hammerlib:gears/netherite',
  'hammerlib:test_machine',
  'hammerlib:wrench',

  //Immersive Engineering
  'immersiveengineering:coal_coke',
  'immersiveengineering:slag',
  'immersiveengineering:dust_wood',
  'immersiveengineering:plate_copper',
  'immersiveengineering:plate_aluminum',
  'immersiveengineering:plate_lead',
  'immersiveengineering:plate_silver',
  'immersiveengineering:plate_nickel',
  'immersiveengineering:plate_uranium',
  'immersiveengineering:plate_constantan',
  'immersiveengineering:plate_electrum',
  'immersiveengineering:plate_steel',
  'immersiveengineering:plate_iron',
  'immersiveengineering:plate_gold',
  'immersiveposts:stick_electrum',

  //Industrial Foregoing
  'industrialforegoing:iron_gear',
  'industrialforegoing:gold_gear',
  'industrialforegoing:diamond_gear',
  'mifa:netherite_gear', //Addon
  'industrialforegoing:plastic',

  //Iron Furnace
  'ironfurnaces:upgrade_iron',
  'ironfurnaces:upgrade_gold',
  'ironfurnaces:upgrade_crystal',
  'ironfurnaces:upgrade_silver',
  'ironfurnaces:rainbow_core',
  'ironfurnaces:rainbow_plating',
  'ironfurnaces:million_furnace',
  'ironfurnaces:rainbow_coal',

  //Mekanism
  'mekanism:basic_smelting_factory',
  'mekanism:basic_enriching_factory',
  'mekanism:basic_crushing_factory',
  'mekanism:basic_compressing_factory',
  'mekanism:basic_combining_factory',
  'mekanism:basic_purifying_factory',
  'mekanism:basic_injecting_factory',
  'mekanism:basic_infusing_factory',
  'mekanism:basic_sawing_factory',
  'mekanism:advanced_smelting_factory',
  'mekanism:advanced_enriching_factory',
  'mekanism:advanced_crushing_factory',
  'mekanism:advanced_compressing_factory',
  'mekanism:advanced_combining_factory',
  'mekanism:advanced_purifying_factory',
  'mekanism:advanced_injecting_factory',
  'mekanism:advanced_infusing_factory',
  'mekanism:advanced_sawing_factory',
  'mekanism:elite_smelting_factory',
  'mekanism:elite_enriching_factory',
  'mekanism:elite_crushing_factory',
  'mekanism:elite_compressing_factory',
  'mekanism:elite_combining_factory',
  'mekanism:elite_purifying_factory',
  'mekanism:elite_injecting_factory',
  'mekanism:elite_infusing_factory',
  'mekanism:elite_sawing_factory',
  'mekanism:ultimate_smelting_factory',
  'mekanism:ultimate_enriching_factory',
  'mekanism:ultimate_crushing_factory',
  'mekanism:ultimate_compressing_factory',
  'mekanism:ultimate_combining_factory',
  'mekanism:ultimate_purifying_factory',
  'mekanism:ultimate_injecting_factory',
  'mekanism:ultimate_infusing_factory',
  'mekanism:ultimate_sawing_factory',
  'mekanism:dust_quartz',

  //MysticalAgriculture
  'mysticalagriculture:machine_frame',
  'mysticalagriculture:soul_extractor',
  'mysticalagriculture:soul_jar',
  'mysticalagradditions:neutronium_crux',
  'mysticalagradditions:nitro_crystal_crux',

  //MM
  'mm:coke_oven_fluid_port_input',

  //OpenComputer
  'oc2r:silicon_blend',
  'oc2r:silicon',

  //Simple Storage
  'storagenetwork:request_expanded',

  //Solar Panel
  'solarflux:twilightforest/twilight_cell_1',
  'solarflux:twilightforest/twilight_cell_2',
  'solarflux:sp_tf.fiery',
  'solarflux:sp_tf.carminite',
  'solarflux:twilightforest/twilight_upgrade',

  //Summoning Altar
  'summoningrituals:indestructible_altar',

  //tinkerConstruct Construct
  'tconstruct:rose_gold_nugget',
  'tconstruct:rose_gold_ingot',
  'tconstruct:rose_gold_block',

  //Thermal Series
  'thermal:sawdust',
  'thermal:saw_blade',

  //Twilight Forest
  'twilightforest:uncrafting_table',
];

//Ad Astra
funcGeneric.AddToArray(gameItem.rmOut, 'ad_astra:tier_', ['1_rocket', '2_rocket', '3_rocket']);

//Applied Flux
funcGeneric.AddToArray(gameItem.rmOut, 'appflux:core_', ['1m', '4m', '16m', '64m', '256m']);
funcGeneric.AddToArray(gameItem.rmOut, 'appflux:fe_', ['1m', '4m', '16m', '64m', '256m']).Suffix(['_cell', '_portable_cell']);

//Botanical machinery extra
funcGeneric.AddToArray(gameItem.rmOut, 'botanicalextramachinery:', ['1m', '4m', '16m', '64m', '256m']).Prefix(['cell_component_', 'mana_storage_cell_']);
funcGeneric.AddToArray(gameItem.rmOut, 'botanicalextramachinery:', ['base', 'upgraded', 'advanced', 'ultimate']).Suffix('_orechid');
funcGeneric.AddToArray(gameItem.rmOut, 'botanicalextramachinery:catalyst_', ['mana', 'living_rock', 'water', 'seed', 'stone', 'wood']).Suffix('_infinity');

//ChemLib
funcGeneric.AddToArray(gameItem.rmOut, 'chemlib:', ['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'nickel']).Suffix('_plate');

//Mystical Agriculture
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['air', 'earth', 'water', 'fire', 'nature', 'dye', 'nether', 'coral', 'honey', 'prismarine', 'end', 'mystical_flower']).Suffix('_agglomeratio');
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['dye', 'rubber', 'silicon', 'grains_of_infinity', 'mystical_flower', 'marble', 'limestone', 'basalt', 'bronze', 'brass']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['graphite', 'amethyst_bronze', 'slimesteel', 'pig_iron', 'copper_alloy', 'redstone_alloy', 'conductive_alloy', 'manasteel', 'ironwood', 'experience']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['steel', 'constantan', 'electrum', 'invar', 'mithril', 'tungsten', 'titanium', 'chrome', 'signalum', 'lumium']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['flux_infused_ingot', 'hop_graphite', 'rose_gold', 'soularium', 'dark_steel', 'pulsating_alloy', 'energetic_alloy', 'elementium', 'refined_glowstone', 'refined_obsidian']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['compressed_iron', 'fluix', 'energized_steel', 'blazing_crystal', 'iridium', 'enderium', 'flux_infused_gem', 'manyullyn', 'queens_slime', 'hepatizon']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['vibrant_alloy', 'end_steel', 'terrasteel', 'yellorium', 'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite', 'neutronium', 'nitro_crystaldye']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['rubber', 'silicon', 'grains_of_infinity', 'mystical_flower', 'marble', 'limestone', 'basalt', 'bronze', 'brass', 'graphite']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['amethyst_bronze', 'slimesteel', 'pig_iron', 'copper_alloy', 'redstone_alloy', 'conductive_alloy', 'manasteel', 'ironwood', 'experience', 'steel']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['constantan', 'electrum', 'invar', 'mithril', 'tungsten', 'titanium', 'chrome', 'signalum', 'lumium', 'flux_infused_ingot']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['hop_graphite', 'rose_gold', 'soularium', 'dark_steel', 'pulsating_alloy', 'energetic_alloy', 'elementium', 'refined_glowstone', 'refined_obsidian', 'compressed_iron']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['fluix', 'energized_steel', 'blazing_crystal', 'iridium', 'enderium', 'flux_infused_gem', 'manyullyn', 'queens_slime', 'hepatizon', 'vibrant_alloy']).Suffix(['_essence', '_seeds']);
funcGeneric.AddToArray(gameItem.rmOut, 'mysticalagriculture:', ['end_steel', 'terrasteel', 'yellorium', 'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite', 'neutronium', 'nitro_crystal']).Suffix(['_essence', '_seeds']);

//Powah
funcGeneric.AddToArray(gameItem.rmOut, 'powah:ender_cell_', ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']);

//#endregion

//#region RmIn item
gameItem.rmIn = [];

//Mystical Agriculture
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['dye', 'rubber', 'silicon', 'grains_of_infinity', 'mystical_flower', 'marble', 'limestone', 'basalt', 'bronze', 'brass']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['graphite', 'amethyst_bronze', 'slimesteel', 'pig_iron', 'copper_alloy', 'redstone_alloy', 'conductive_alloy', 'manasteel', 'ironwood', 'experience']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['steel', 'constantan', 'electrum', 'invar', 'mithril', 'tungsten', 'titanium', 'chrome', 'signalum', 'lumium']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['flux_infused_ingot', 'hop_graphite', 'rose_gold', 'soularium', 'dark_steel', 'pulsating_alloy', 'energetic_alloy', 'elementium', 'refined_glowstone', 'refined_obsidian']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['compressed_iron', 'fluix', 'energized_steel', 'blazing_crystal', 'iridium', 'enderium', 'flux_infused_gem', 'manyullyn', 'queens_slime', 'hepatizon']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['vibrant_alloy', 'end_steel', 'terrasteel', 'yellorium', 'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite', 'neutronium', 'nitro_crystaldye']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['rubber', 'silicon', 'grains_of_infinity', 'mystical_flower', 'marble', 'limestone', 'basalt', 'bronze', 'brass', 'graphite']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['amethyst_bronze', 'slimesteel', 'pig_iron', 'copper_alloy', 'redstone_alloy', 'conductive_alloy', 'manasteel', 'ironwood', 'experience', 'steel']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['constantan', 'electrum', 'invar', 'mithril', 'tungsten', 'titanium', 'chrome', 'signalum', 'lumium', 'flux_infused_ingot']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['hop_graphite', 'rose_gold', 'soularium', 'dark_steel', 'pulsating_alloy', 'energetic_alloy', 'elementium', 'refined_glowstone', 'refined_obsidian', 'compressed_iron']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['fluix', 'energized_steel', 'blazing_crystal', 'iridium', 'enderium', 'flux_infused_gem', 'manyullyn', 'queens_slime', 'hepatizon', 'vibrant_alloy']).Suffix('_essence');
funcGeneric.AddToArray(gameItem.rmIn, 'mysticalagriculture:', ['end_steel', 'terrasteel', 'yellorium', 'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite', 'neutronium', 'nitro_crystal']).Suffix('_essence');
//#endregion

//#region jei add item
gameItem.jeiAdd = [
  //Immersive
  'immersiveengineering:coke',

  //EnderIO
  'enderio:clear_glass',
  'enderio:fused_quartz',

  //Mekanism
  'mekanism:creative_chemical_tank',
  'mekanism:creative_fluid_tank',
];

//Immersive
funcGeneric.AddToArray(gameItem.jeiAdd, 'immersiveengineering:storage_', ['aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'electrum', 'steel']);

//EnderIO
funcGeneric.AddToArray(gameItem.jeiAdd, '#enderio:clear_glass_', ['p', 'np', 'm', 'nm', 'a', 'na', 'd', 'dp', 'dnp', 'dm', 'dnm', 'da', 'dna', 'e', 'ep', 'enp', 'em', 'enm', 'ea', 'ena']);
funcGeneric.AddToArray(gameItem.jeiAdd, '#enderio:fused_quartz_', ['p', 'np', 'm', 'nm', 'a', 'na', 'd', 'dp', 'dnp', 'dm', 'dnm', 'da', 'dna', 'e', 'ep', 'enp', 'em', 'enm', 'ea', 'ena']);
//#endregion

//#region jei hide item
gameItem.jeiHide = [
  //Mekanism
  'mekanism:creative_chemical_tank',
  'mekanism:creative_fluid_tank',

  //EnderIO
  '#enderio:clear_glass',
  '#enderio:fused_quartz',
];

//EnderIO
funcGeneric.AddToArray(gameItem.jeiHide, '#enderio:clear_glass_', ['p', 'np', 'm', 'nm', 'a', 'na', 'd', 'dp', 'dnp', 'dm', 'dnm', 'da', 'dna', 'e', 'ep', 'enp', 'em', 'enm', 'ea', 'ena']);
funcGeneric.AddToArray(gameItem.jeiHide, '#enderio:fused_quartz_', ['p', 'np', 'm', 'nm', 'a', 'na', 'd', 'dp', 'dnp', 'dm', 'dnm', 'da', 'dna', 'e', 'ep', 'enp', 'em', 'enm', 'ea', 'ena']);

//#endregion

//# ====================================================================================== #

//#region RmOut fluid
gameFluid.rmOut = [
  //EnderIO
  'enderio:dew_of_the_void',
  'enderio:vapor_of_levity',
  'enderio:hootch',
  'enderio:rocket_fuel',
  'enderio:liquid_sunshine',
  'enderio:cloud_seed',
  'enderio:cloud_seed_concentrated',

  //tinkerConstruct
  'tconstruct:molten_nicrosil',
  'tconstruct:molten_pewter',
];
//#endregion

//#region RmIn fluid
gameFluid.rmIn = [
  //EnderIO
  'enderio:dew_of_the_void',
  'enderio:vapor_of_levity',
  'enderio:hootch',
  'enderio:rocket_fuel',
  'enderio:liquid_sunshine',
  'enderio:cloud_seed',
  'enderio:cloud_seed_concentrated',

  //tinkerConstruct
  'tconstruct:molten_nicrosil',
  'tconstruct:molten_pewter',
];
//#endregion

//#region jei add fluid
gameFluid.jeiAdd = [];
//#endregion

//#region jei hide fluid
gameFluid.jeiHide = [];
//#endregion

//# ====================================================================================== #

//#region RmID
gameRecipe.rmId = [
  //Minecraft
  'minecraft:ens_ancient_debris',

  //Ad Astra
  'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',

  //Create Addition
  'createaddition:compat/tconstruct/tinkers_bronze', // Void recipe copper + glass

  //EnderIO
  'enderio:smelting/oc2r/silicon', //Rm Silicon
  'enderio:iron_ingot_from_smelting',
  'enderio:iron_ingot_from_blasting',
  'enderio:smelting/enderio/iron_ingot_from_smelting',
  'enderio:gold_ingot_from_smelting',
  'enderio:gold_ingot_from_blasting',
  'enderio:smelting/enderio/gold_ingot_from_smelting',
  'enderio:copper_ingot_from_smelting',
  'enderio:copper_ingot_from_blasting',
  'enderio:smelting/enderio/copper_ingot_from_smelting',

  //Mekanism
  'mekanismtools:refined_glowstone/nugget_from_smelting',
  'mekanismtools:refined_glowstone/nugget_from_blasting',
  'enderio:smelting/mekanismtools/refined_glowstone/nugget_from_smelting',
  'mekanismtools:refined_obsidian/nugget_from_smelting',
  'mekanismtools:refined_obsidian/nugget_from_blasting',
  'enderio:smelting/mekanismtools/refined_obsidian/nugget_from_smelting',

  //Pneumatic Craft
  'pneumaticcraft:thermo_plant/plastic_from_biodiesel',
  'pneumaticcraft:thermo_plant/lubricant_from_biodiesel',

  //Productive bees
  'productivebees:block_conversion/pams/lemon/stage1',
  //'productivebees:/tconstruct/honeycomb/*', //=> Disabled in Openloader
];

//Productive Bees
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/', ['ae2/honeycomb_fluix', 'materials/honeycomb_silicon', 'ars_nouveau/honeycomb_arcane', 'botanicadds/honeycomb_gaiasteel', 'gems/honeycomb_peridot']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/', ['industrialforegoing/honeycomb_pink_slimy', 'materials/honeycomb_plastic', 'pneumaticcraft/honeycomb_compressed_iron', 'raw_materials/honeycomb_iridium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/botania/honeycomb_', ['manasteel', 'terrasteel', 'elementium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/dusts/honeycomb_', ['bismuth', 'titanium', 'tungsten']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/mekanism/honeycomb_', ['refined_glowstone', 'refined_obsidian']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/mysticalagriculture/honeycomb_', ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'awakened_supremium', 'prosperity', 'soulium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/powah/honeycomb_', ['energized_steel', 'blazing_crystal', 'niotic_crystal', 'spirited_crystal', 'nitro_crystal']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/thermal/honeycomb_', ['destabilized_redstone', 'energized_glowstone', 'resonant_ender']);
//cobalt => Disabled in productive_bees.js
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:centrifuge/tconstruct/honeycomb_', ['amethyst_bronze', 'ender_slimy', 'hepatizon', 'ichor_slimy', 'knightslime', 'manyullyn', 'pig_iron', 'queens_slime', 'rose_gold', 'sky_slimy', 'slimesteel', 'soulsteel']);

//Productive Bees create compat
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/', ['ad_astra/honeycomb_oily', 'ae2/honeycomb_silicon', 'ars_nouveau/honeycomb_arcane', 'botanicadds/honeycomb_gaiasteel', 'honeycomb_ether_gas', 'irons_spellbooks/honeycomb_arcane_debris', 'immersivengineering/honeycomb_hop_graphite']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/alloys/honeycomb_', ['brazen', 'steel', 'signalum', 'lumium', 'enderium', 'bronze', 'electrum', 'invar', 'constantan']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/botania/honeycomb_', ['manasteel', 'terrasteel', 'elementium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['actinium', 'americium', 'antimony', 'argon', 'arsenic', 'astatine', 'barium', 'berkelium', 'beryllium', 'bohrium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['boron', 'bromine', 'cadmium', 'calcium', 'californium', 'cerium', 'cesium', 'chlorine', 'chromium', 'copernicium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['curium', 'darmstadtium', 'dubnium', 'dysprosium', 'einsteinium', 'erbium', 'europium', 'fermium', 'flerovium', 'fluorine']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['francium', 'gadolinium', 'gallium', 'germanium', 'hafnium', 'hassium', 'helium', 'holmium', 'hydrogen', 'indium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['iodine', 'krypton', 'lanthanum', 'lawrencium', 'lithium', 'livermorium', 'lutetium', 'magnesium', 'manganese', 'meitnerium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['mendelevium', 'mercury', 'molybdenum', 'moscovium', 'neodymium', 'neon', 'neptunium', 'nihonium', 'niobium', 'nitrogen']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['nobelium', 'oganesson', 'oxygen', 'palladium', 'phosphorus', 'plutonium', 'polonium', 'potassium', 'praseodymium', 'promethium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['protactinium', 'radium', 'radon', 'rhenium', 'rhodium', 'roentgenium', 'rubidium', 'ruthenium', 'rutherfordium', 'samarium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['scandium', 'selenium', 'seaborgium', 'silicium', 'sodium', 'strontium', 'tantalum', 'technetium', 'tellurium', 'tennessine']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/chemlib/honeycomb_', ['terbium', 'thallium', 'thorium', 'thulium', 'vanadium', 'xenon', 'ytterbium', 'yttrium', 'zirconium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/mekanism/honeycomb_', ['refined_glowstone', 'refined_obsidian']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/mysticalagriculture/honeycomb_', ['prosperity', 'inferium', 'awakened_supremium', 'soulium']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/pneumaticcraft/honeycomb_', ['compressed_iron', 'oily']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/powah/honeycomb_', ['energized_steel', 'blazing_crystal', 'niotic_crystal', 'spirited_crystal', 'nitro_crystal']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/thermal/honeycomb_', ['destabilized_redstone', 'energized_glowstone', 'resonant_ender', 'oily']);
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/thermalendergy/honeycomb_', ['prismalium', 'melodium', 'stellarium']);
//cobalt => Disabled in productive_bees.js
funcGeneric.AddToArray(gameRecipe.rmId, 'productivebees:create/mixing/tconstruct/honeycomb_'[('amethyst_bronze', 'ender_slimy', 'hepatizon', 'ichor_slimy', 'knightslime', 'manyullyn', 'pig_iron', 'queens_slime', 'sky_slimy', 'slimesteel', 'soulsteel')]);

//Create Sentry
funcGeneric.AddToArray(gameRecipe.rmId, 'sentrymechanicalarm:cutting/ammo_cutting/'[('9mm', '12g', '30_06', '40mm', '45_70', '45acp', '46x30', '50ae', '50bmg', '57x28', '58x42', '68x51fury', '308', '338', '357mag', '545x39', '556x45', '762x25', '762x39', '762x54', 'rpg_rocket')]);
funcGeneric.AddToArray(gameRecipe.rmId, 'sentrymechanicalarm:deploying/ammo_template/', ['9mm', '12g', '30_06', '40mm', '45_70', '45acp', '46x30', '50ae', '50bmg', '57x28', '58x42', '68x51fury', '308', '338', '357mag', '545x39', '556x45', '762x25', '762x39', '762x54', 'rpg_rocket']);
funcGeneric.AddToArray(gameRecipe.rmId, 'sentry:sequenced_assembly/assembly/', ['9mm', '12g', '30_06', '40mm', '45_70', '45acp', '46x30', '50ae', '50bmg', '57x28', '58x42', '68x51fury', '308', '338', '357mag', '545x39', '556x45', '762x25', '762x39', '762x54', 'rpg_rocket']);

//Tinker Construct
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/steel/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/tin/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/pewter/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/chromium/', ['raw', 'raw_block', 'ore_dense', 'ore_singular', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/duralumin/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/lead/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/silver/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/nickel/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/zinc/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/zinc/geore/', ['bud_large', 'bud_medium', 'bud_small', 'cluster']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/tungsten/', ['ore_dense', 'ore_singular', 'ore_sparse', 'raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/uranium/', ['ore_dense', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/nicrosil/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/cadmium/', ['raw', 'raw_block', 'ore_dense', 'ore_singular', 'ore_sparse']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/bendalloy/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/brass/', ['raw', 'raw_block']);
funcGeneric.AddToArray(gameRecipe.rmId, 'tconstruct:smeltery/melting/metal/electrum/', ['raw', 'raw_block']);
//#endregion

//ServerEvents.recipes((event) => event.remove({ id: '' }));
