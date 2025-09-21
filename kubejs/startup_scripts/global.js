// priority:1001
global.items = {};

//// # =================================================================================================== #

//#region Rm full item
//RmOut - RmIn - RmTags
global.items.GAME_FullRm = [
    //Ad Astra
    "ad_astra:tier_1_rocket",
    "ad_astra:tier_2_rocket",
    "ad_astra:tier_3_rocket",
    "ad_astra:tier_4_rocket",
    "ad_astra:iron_plate",
    "ad_astra:steel_plate",
    "ad_astra:iron_rod",

    //Actually Addiction
    "actuallyadditions:tiny_coal",
    "actuallyadditions:tiny_charcoal",
    "actuallyadditions:tiny_torch",

    //AE2
    "ae2:ender_dust",

    //AppliedFlux
    "appflux:sky_harden_insulating_resin",
    "appflux:mega_fe_cell_housing",
    "appflux:core_1m",
    "appflux:core_4m",
    "appflux:core_16m",
    "appflux:core_64m",
    "appflux:core_256m",
    "appflux:fe_1m_cell",
    "appflux:fe_4m_cell",
    "appflux:fe_16m_cell",
    "appflux:fe_64m_cell",
    "appflux:fe_256m_cell",
    "appflux:fe_1m_portable_cell",
    "appflux:fe_4m_portable_cell",
    "appflux:fe_16m_portable_cell",
    "appflux:fe_64m_portable_cell",
    "appflux:fe_256m_portable_cell",

    //Botanical machinery extra
    "botanicalextramachinery:cell_component_1m",
    "botanicalextramachinery:cell_component_4m",
    "botanicalextramachinery:cell_component_16m",
    "botanicalextramachinery:cell_component_64m",
    "botanicalextramachinery:cell_component_256m",
    "botanicalextramachinery:mana_storage_cell_1m",
    "botanicalextramachinery:mana_storage_cell_4m",
    "botanicalextramachinery:mana_storage_cell_16m",
    "botanicalextramachinery:mana_storage_cell_64m",
    "botanicalextramachinery:mana_storage_cell_256m",

    //ChemLib
    "chemlib:iron_plate",
    "chemlib:gold_plate",
    "chemlib:copper_plate",
    "chemlib:tin_plate",
    "chemlib:lead_plate",
    "chemlib:silver_plate",
    "chemlib:nickel_plate",

    //Crete
    "create:copper_sheet",
    "create:iron_sheet",
    "create:golden_sheet",

    //Create Addition
    "createaddition:copper_rod",
    "createaddition:iron_rod",
    "createaddition:gold_rod",
    "createaddition:electrum_rod",
    "create:copper_sheet",
    "create:iron_sheet",
    "create:golden_sheet",
    "createaddition:electrum_sheet",
    "createaddition:zinc_sheet",
    "createaddition:copper_wire",
    "createaddition:electrum_wire",

    //Create Deco
    "createdeco:zinc_sheet",
    "createdeco:netherite_sheet",

    //Create Sifter
    "createsifter:brass_sifter",
    "createsifter:dust",
    "createsifter:crushed_end_stone",
    "createsifter:string_mesh",
    "createsifter:andesite_mesh",
    "createsifter:zinc_mesh",
    "createsifter:brass_mesh",
    "createsifter:custom_mesh",
    "createsifter:advanced_brass_mesh",
    "createsifter:advanced_custom_mesh",

    //Cyclic
    "cyclic:crafting_stick",
    "cyclic:crafting_bag",
    "cyclic:compressed_cobblestone",
    "cyclic:energy_pipe",
    "cyclic:item_pipe",
    "cyclic:fluid_pipe",
    "cyclic:uncrafter",

    //EnderIO
    "enderio:silicon",
    "enderio:dew_of_the_void_bucket",
    "enderio:vapor_of_levity_bucket",
    "enderio:hootch_bucket",
    "enderio:rocket_fuel_bucket",
    "enderio:liquid_sunshine_bucket",
    "enderio:cloud_seed_bucket",
    "enderio:cloud_seed_concentrated_bucket",
    "enderio:powdered_quartz",
    "enderio:powdered_coal",
    "enderio:powdered_iron",
    "enderio:powdered_gold",
    "enderio:powdered_copper",
    "enderio:powdered_tin",
    "enderio:powdered_ender_pearl",
    "enderio:powdered_obsidian",
    "enderio:powdered_cobalt",
    "enderio:powdered_lapis_lazuli",
    "enderio:powdered_quartz",

    //ExNihilo Sequentia
    "exnihilosequentia:andesite_crook",
    "exnihilosequentia:bamboo_crook",
    "exnihilosequentia:basalt_crook",
    "exnihilosequentia:blackstone_crook",
    "exnihilosequentia:bone_crook",
    "exnihilosequentia:calcite_crook",
    "exnihilosequentia:deepslate_crook",
    "exnihilosequentia:diorite_crook",
    "exnihilosequentia:dripstone_crook",
    "exnihilosequentia:granite_crook",
    "exnihilosequentia:nether_brick_crook",
    "exnihilosequentia:red_nether_brick_crook",
    "exnihilosequentia:terracotta_crook",
    "exnihilosequentia:tuff_crook",
    "exnihilosequentia:andesite_hammer",
    "exnihilosequentia:bamboo_hammer",
    "exnihilosequentia:basalt_hammer",
    "exnihilosequentia:blackstone_hammer",
    "exnihilosequentia:bone_hammer",
    "exnihilosequentia:calcite_hammer",
    "exnihilosequentia:deepslate_hammer",
    "exnihilosequentia:diorite_hammer",
    "exnihilosequentia:dripstone_hammer",
    "exnihilosequentia:granite_hammer",
    "exnihilosequentia:nether_brick_hammer",
    "exnihilosequentia:red_nether_brick_hammer",
    "exnihilosequentia:terracotta_hammer",
    "exnihilosequentia:tuff_hammer",

    //Hammer Lib
    "hammerlib:gears/wooden",
    "hammerlib:gears/stone",
    "hammerlib:gears/copper",
    "hammerlib:gears/iron",
    "hammerlib:gears/gold",
    "hammerlib:gears/diamond",
    "hammerlib:gears/netherite",

    //Immersive Engineering
    "immersiveengineering:coal_coke",
    "immersiveengineering:slag",
    "immersiveengineering:dust_wood",
    "immersiveengineering:plate_copper",
    "immersiveengineering:plate_aluminum",
    "immersiveengineering:plate_lead",
    "immersiveengineering:plate_silver",
    "immersiveengineering:plate_nickel",
    "immersiveengineering:plate_uranium",
    "immersiveengineering:plate_constantan",
    "immersiveengineering:plate_electrum",
    "immersiveengineering:plate_steel",
    "immersiveengineering:plate_iron",
    "immersiveengineering:plate_gold",

    //Industrial Foregoing
    "industrialforegoing:iron_gear",
    "industrialforegoing:gold_gear",
    "industrialforegoing:diamond_gear",
    "mifa:netherite_gear", // Addon
    "industrialforegoing:plastic",

    //Iron Furnace
    "ironfurnaces:upgrade_iron",
    "ironfurnaces:upgrade_gold",
    "ironfurnaces:upgrade_crystal",
    "ironfurnaces:upgrade_silver",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    "ironfurnaces:million_furnace",
    "ironfurnaces:rainbow_coal",

    //Mekanism
    "mekanism:basic_smelting_factory",
    "mekanism:basic_enriching_factory",
    "mekanism:basic_crushing_factory",
    "mekanism:basic_compressing_factory",
    "mekanism:basic_combining_factory",
    "mekanism:basic_purifying_factory",
    "mekanism:basic_injecting_factory",
    "mekanism:basic_infusing_factory",
    "mekanism:basic_sawing_factory",
    "mekanism:advanced_smelting_factory",
    "mekanism:advanced_enriching_factory",
    "mekanism:advanced_crushing_factory",
    "mekanism:advanced_compressing_factory",
    "mekanism:advanced_combining_factory",
    "mekanism:advanced_purifying_factory",
    "mekanism:advanced_injecting_factory",
    "mekanism:advanced_infusing_factory",
    "mekanism:advanced_sawing_factory",
    "mekanism:elite_smelting_factory",
    "mekanism:elite_enriching_factory",
    "mekanism:elite_crushing_factory",
    "mekanism:elite_compressing_factory",
    "mekanism:elite_combining_factory",
    "mekanism:elite_purifying_factory",
    "mekanism:elite_injecting_factory",
    "mekanism:elite_infusing_factory",
    "mekanism:elite_sawing_factory",
    "mekanism:ultimate_smelting_factory",
    "mekanism:ultimate_enriching_factory",
    "mekanism:ultimate_crushing_factory",
    "mekanism:ultimate_compressing_factory",
    "mekanism:ultimate_combining_factory",
    "mekanism:ultimate_purifying_factory",
    "mekanism:ultimate_injecting_factory",
    "mekanism:ultimate_infusing_factory",
    "mekanism:ultimate_sawing_factory",

    //MysticalAgriculture
    "mysticalagriculture:machine_frame",
    "mysticalagriculture:soul_extractor",
    "mysticalagriculture:infusion_crystals",
    "mysticalagriculture:soul_jar",
    "mysticalagriculture:air_agglomeratio",
    "mysticalagriculture:earth_agglomeratio",
    "mysticalagriculture:water_agglomeratio",
    "mysticalagriculture:fire_agglomeratio",
    "mysticalagriculture:nature_agglomeratio",
    "mysticalagriculture:dye_agglomeratio",
    "mysticalagriculture:nether_agglomeratio",
    "mysticalagriculture:coral_agglomeratio",
    "mysticalagriculture:honey_agglomeratio",
    "mysticalagriculture:prismarine_agglomeratio",
    "mysticalagriculture:end_agglomeratio",
    "mysticalagriculture:mystical_flower_agglomeratio",
    "mysticalagriculture:dye_essence",
    "mysticalagriculture:dye_seeds",
    "mysticalagriculture:rubber_essence",
    "mysticalagriculture:rubber_seeds",
    "mysticalagriculture:silicon_essence",
    "mysticalagriculture:silicon_seeds",
    "mysticalagriculture:grains_of_infinity_essence",
    "mysticalagriculture:grains_of_infinity_seeds",
    "mysticalagriculture:mystical_flower_essence",
    "mysticalagriculture:mystical_flower_seeds",
    "mysticalagriculture:marble_essence",
    "mysticalagriculture:marble_seeds",
    "mysticalagriculture:limestone_essence",
    "mysticalagriculture:limestone_seeds",
    "mysticalagriculture:basalt_essence",
    "mysticalagriculture:basalt_seeds",
    "mysticalagriculture:bronze_essence",
    "mysticalagriculture:bronze_seeds",
    "mysticalagriculture:brass_essence",
    "mysticalagriculture:brass_seeds",
    "mysticalagriculture:graphite_essence",
    "mysticalagriculture:graphite_seeds",
    "mysticalagriculture:copper_alloy_essence",
    "mysticalagriculture:copper_alloy_seeds",
    "mysticalagriculture:redstone_alloy_essence",
    "mysticalagriculture:redstone_alloy_seeds",
    "mysticalagriculture:conductive_alloy_essence",
    "mysticalagriculture:conductive_alloy_seeds",
    "mysticalagriculture:manasteel_essence",
    "mysticalagriculture:manasteel_seeds",
    "mysticalagriculture:ironwood_essence",
    "mysticalagriculture:ironwood_seeds",
    "mysticalagriculture:experience_essence",
    "mysticalagriculture:experience_seeds",
    "mysticalagriculture:steel_essence",
    "mysticalagriculture:steel_seeds",
    "mysticalagriculture:constantan_essence",
    "mysticalagriculture:constantan_seeds",
    "mysticalagriculture:electrum_essence",
    "mysticalagriculture:electrum_seeds",
    "mysticalagriculture:invar_essence",
    "mysticalagriculture:invar_seeds",
    "mysticalagriculture:mithril_essence",
    "mysticalagriculture:mithril_seeds",
    "mysticalagriculture:tungsten_essence",
    "mysticalagriculture:tungsten_seeds",
    "mysticalagriculture:titanium_essence",
    "mysticalagriculture:titanium_seeds",
    "mysticalagriculture:chrome_essence",
    "mysticalagriculture:chrome_seeds",
    "mysticalagriculture:signalum_essence",
    "mysticalagriculture:signalum_seeds",
    "mysticalagriculture:lumium_essence",
    "mysticalagriculture:lumium_seeds",
    "mysticalagriculture:flux_infused_ingot_essence",
    "mysticalagriculture:flux_infused_ingot_seeds",
    "mysticalagriculture:hop_graphite_essence",
    "mysticalagriculture:hop_graphite_seeds",
    "mysticalagriculture:soularium_essence",
    "mysticalagriculture:soularium_seeds",
    "mysticalagriculture:dark_steel_essence",
    "mysticalagriculture:dark_steel_seeds",
    "mysticalagriculture:pulsating_alloy_essence",
    "mysticalagriculture:pulsating_alloy_seeds",
    "mysticalagriculture:energetic_alloy_essence",
    "mysticalagriculture:energetic_alloy_seeds",
    "mysticalagriculture:elementium_essence",
    "mysticalagriculture:elementium_seeds",
    "mysticalagriculture:refined_glowstone_essence",
    "mysticalagriculture:refined_glowstone_seeds",
    "mysticalagriculture:refined_obsidian_essence",
    "mysticalagriculture:refined_obsidian_seeds",
    "mysticalagriculture:compressed_iron_essence",
    "mysticalagriculture:compressed_iron_seeds",
    "mysticalagriculture:fluix_essence",
    "mysticalagriculture:fluix_seeds",
    "mysticalagriculture:energized_steel_essence",
    "mysticalagriculture:energized_steel_seeds",
    "mysticalagriculture:blazing_crystal_essence",
    "mysticalagriculture:blazing_crystal_seeds",
    "mysticalagriculture:iridium_essence",
    "mysticalagriculture:iridium_seeds",
    "mysticalagriculture:enderium_essence",
    "mysticalagriculture:enderium_seeds",
    "mysticalagriculture:flux_infused_gem_essence",
    "mysticalagriculture:flux_infused_gem_seeds",
    "mysticalagriculture:vibrant_alloy_essence",
    "mysticalagriculture:vibrant_alloy_seeds",
    "mysticalagriculture:end_steel_essence",
    "mysticalagriculture:end_steel_seeds",
    "mysticalagriculture:terrasteel_essence",
    "mysticalagriculture:terrasteel_seeds",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:yellorium_seeds",
    "mysticalagriculture:cyanite_essence",
    "mysticalagriculture:cyanite_seeds",
    "mysticalagriculture:niotic_crystal_essence",
    "mysticalagriculture:niotic_crystal_seeds",
    "mysticalagriculture:spirited_crystal_essence",
    "mysticalagriculture:spirited_crystal_seeds",
    "mysticalagriculture:uraninite_essence",
    "mysticalagriculture:uraninite_seeds",
    "mysticalagriculture:neutronium_essence",
    "mysticalagriculture:neutronium_seeds",
    "mysticalagriculture:nitro_crystal_essence",
    "mysticalagriculture:nitro_crystal_seeds",
    "mysticalagradditions:neutronium_crux",
    "mysticalagradditions:nitro_crystal_crux",

    //OpenComputer
    "oc2r:silicon_blend",
    "oc2r:silicon",

    //Solar Panel
    "solarflux:twilightforest/twilight_cell_1",
    "solarflux:twilightforest/twilight_cell_2",
    "solarflux:sp_tf.fiery",
    "solarflux:sp_tf.carminite",
    "solarflux:twilightforest/twilight_upgrade",

    //Summoning Altar
    "summoningrituals:indestructible_altar",

    //Thermal Series
    "thermal:sawdust",
    "thermal:saw_blade",

    //Twilight Forest
    "twilightforest:uncrafting_table",
];
//#endregion

//#region RmOut item
global.items.GAME_RmOut = [];
//#endregion

//#region RmIn item
global.items.GAME_RmIn = [
    "mysticalagriculture:dye_essence",
    "mysticalagriculture:rubber_essence",
    "mysticalagriculture:silicon_essence",
    "mysticalagriculture:grains_of_infinity_essence",
    "mysticalagriculture:mystical_flower_essence",
    "mysticalagriculture:marble_essence",
    "mysticalagriculture:limestone_essence",
    "mysticalagriculture:basalt_essence",
    "mysticalagriculture:bronze_essence",
    "mysticalagriculture:brass_essence",
    "mysticalagriculture:graphite_essence",
    "mysticalagriculture:copper_alloy_essence",
    "mysticalagriculture:redstone_alloy_essence",
    "mysticalagriculture:conductive_alloy_essence",
    "mysticalagriculture:manasteel_essence",
    "mysticalagriculture:ironwood_essence",
    "mysticalagriculture:experience_essence",
    "mysticalagriculture:steel_essence",
    "mysticalagriculture:constantan_essence",
    "mysticalagriculture:electrum_essence",
    "mysticalagriculture:invar_essence",
    "mysticalagriculture:mithril_essence",
    "mysticalagriculture:tungsten_essence",
    "mysticalagriculture:titanium_essence",
    "mysticalagriculture:chrome_essence",
    "mysticalagriculture:signalum_essence",
    "mysticalagriculture:lumium_essence",
    "mysticalagriculture:flux_infused_ingot_essence",
    "mysticalagriculture:hop_graphite_essence",
    "mysticalagriculture:soularium_essence",
    "mysticalagriculture:dark_steel_essence",
    "mysticalagriculture:pulsating_alloy_essence",
    "mysticalagriculture:energetic_alloy_essence",
    "mysticalagriculture:elementium_essence",
    "mysticalagriculture:refined_glowstone_essence",
    "mysticalagriculture:refined_obsidian_essence",
    "mysticalagriculture:compressed_iron_essence",
    "mysticalagriculture:fluix_essence",
    "mysticalagriculture:energized_steel_essence",
    "mysticalagriculture:blazing_crystal_essence",
    "mysticalagriculture:iridium_essence",
    "mysticalagriculture:enderium_essence",
    "mysticalagriculture:flux_infused_gem_essence",
    "mysticalagriculture:vibrant_alloy_essence",
    "mysticalagriculture:end_steel_essence",
    "mysticalagriculture:terrasteel_essence",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:cyanite_essence",
    "mysticalagriculture:niotic_crystal_essence",
    "mysticalagriculture:spirited_crystal_essence",
    "mysticalagriculture:uraninite_essence",
    "mysticalagriculture:neutronium_essence",
    "mysticalagriculture:nitro_crystal_essence",
];
//#endregion

//// # =================================================================================================== #

//#region JEI add item
global.items.JEI_Add = [
    //Immersive
    "immersiveengineering:storage_aluminum",
    "immersiveengineering:storage_lead",
    "immersiveengineering:storage_silver",
    "immersiveengineering:storage_nickel",
    "immersiveengineering:storage_uranium",
    "immersiveengineering:storage_constantan",
    "immersiveengineering:storage_electrum",
    "immersiveengineering:storage_steel",

    //Mekanism
    "mekanism:creative_chemical_tank",
    "mekanism:creative_fluid_tank",
];
//#endregion

//#region JEI hide iteme
global.items.JEI_Hide = [
    //Mekanism
    "mekanism:creative_chemical_tank",
    "mekanism:creative_fluid_tank",
];
//#endregion

//// # =================================================================================================== #

global.fluid = {};

//#region Rm Full fluid
//RmOut - RmIn - RmTags
global.fluid.GAME_FullRm = [
    //EnderIO
    "enderio:dew_of_the_void",
    "enderio:vapor_of_levity",
    "enderio:hootch",
    "enderio:rocket_fuel",
    "enderio:liquid_sunshine",
    "enderio:cloud_seed",
    "enderio:cloud_seed_concentrated",
];
//#endregion

//#region RmOut fluid
global.fluid.GAME_RmOut = [];
//#endregion

//#region RmIn fluid
global.fluid.GAME_RmIn = [];
//#endregion

//// # =================================================================================================== #

//#region Rm recipeID
global.recipe = {};

//#region Rm recipeID
global.recipe.GAME_Rmid = [
    //EnderIO
    "enderio:smelting/industrialforegoing/plastic", //Rm Plastic
    "enderio:smelting/oc2r/silicon", //Rm Silicon

    //ClearLog
    "mysticalagriculture:essence/chisel/marble",
    "pamhc2foodcore:caramelcupcakeitem_x4",
    "mysticalagriculture:essence/chisel/basalt",
    "pamhc2foodcore:melonpieitem",
    "mysticalagriculture:essence/chisel/limestone",
    "pamhc2foodcore:honeymuffinitem",
];

/* ServerEvents.recipes((event) => {
    event.remove({ id:  });
}); */
