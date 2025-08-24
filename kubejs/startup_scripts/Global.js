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
    "ad_astra:compressor",
    "ad_astra:iron_plate",
    "ad_astra:steel_plate",
    "ad_astra:iron_rod",

    //Actually Addiction
    "actuallyadditions:tiny_coal",
    "actuallyadditions:tiny_charcoal",
    "actuallyadditions:tiny_torch",

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
    "mysticalagriculture:infusion_crystals",

    //OpenComputer
    "oc2r:silicon_blend",
    "oc2r:silicon",

    //Solar Panel
    "solarflux:twilightforest/twilight_cell_1",
    "solarflux:twilightforest/twilight_cell_2",
    "solarflux:sp_tf.fiery",
    "solarflux:sp_tf.carminite",
    "solarflux:twilightforest/twilight_upgrade",

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
global.items.GAME_RmIn = [];
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
global.fluid.GAME_FullRm = [];
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
