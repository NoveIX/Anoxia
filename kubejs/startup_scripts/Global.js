//#region JEI - Items
global.items = {};

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

global.items.JEI_Hide = [
    //Mekanism
    "mekanism:creative_chemical_tank",
    "mekanism:creative_fluid_tank",
];

global.items.GAME_RmOut = [
    //Ad Astra
    "ad_astra:coal_generator",
    "ad_astra:compressor",
    "ad_astra:oxygen_loader",
    "ad_astra:fuel_refinery",
    "ad_astra:iron_plate",
    "ad_astra:steel_plate",
    "ad_astra:iron_rod",
    "ad_astra:oxygen_bucket",

    //Actually Addiction
    "actuallyadditions:tiny_coal",
    "actuallyadditions:tiny_charcoal",

    //ArchitectsPalette
    "architects_palette:withered_bone",

    //Chemlib
    "chemlib:oxygen_bucket",

    //Create Sifting
    "createsifter:dust",
    "createsifter:crushed_end_stone",
    "createsifter:brass_sifter",
    "createsifter:string_mesh",
    "createsifter:andesite_mesh",
    "createsifter:zinc_mesh",
    "createsifter:brass_mesh",
    "createsifter:custom_mesh",
    "createsifter:advanced_brass_mesh",
    "createsifter:advanced_custom_mesh",

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

    //Cyclic
    "cyclic:crafting_stick",
    "cyclic:crafting_bag",
    "cyclic:compressed_cobblestone",
    "cyclic:energy_pipe",
    "cyclic:item_pipe",
    "cyclic:fluid_pipe",
    "cyclic:uncrafter",

    //ChemLib
    "chemlib:iron_plate",
    "chemlib:gold_plate",
    "chemlib:copper_plate",
    "chemlib:tin_plate",
    "chemlib:lead_plate",
    "chemlib:silver_plate",
    "chemlib:nickel_plate",

    //EnderIO
    "enderio:flour",
    "enderio:silicon", //Both InOut
    "enderio:fire_water_bucket",

    //Forbidden Arcanus - Removed for prevent Crash
    "forbidden_arcanus:edelwood_bucket",
    "forbidden_arcanus:edelwood_water_bucket",
    "forbidden_arcanus:edelwood_lava_bucket",
    "forbidden_arcanus:edelwood_milk_bucket",
    "forbidden_arcanus:edelwood_powder_snow_bucket",
    "forbidden_arcanus:edelwood_pufferfish_bucket",
    "forbidden_arcanus:edelwood_salmon_bucket",
    "forbidden_arcanus:edelwood_cod_bucket",
    "forbidden_arcanus:edelwood_tropical_fish_bucket",
    "forbidden_arcanus:edelwood_bat_bucket",
    "forbidden_arcanus:edelwood_squid_bucket",
    "forbidden_arcanus:edelwood_glow_squid_bucket",
    "forbidden_arcanus:edelwood_bee_bucket",
    "forbidden_arcanus:edelwood_magma_cube_bucket",
    "forbidden_arcanus:edelwood_strider_bucket",
    "forbidden_arcanus:edelwood_slime_bucket",
    "forbidden_arcanus:edelwood_chicken_bucket",
    "forbidden_arcanus:edelwood_axolotl_bucket",
    "forbidden_arcanus:edelwood_allay_bucket",
    "forbidden_arcanus:edelwood_mushroom_stew_bucket",
    "forbidden_arcanus:edelwood_suspicious_stew_bucket",
    "forbidden_arcanus:edelwood_beetroot_soup_bucket",
    "forbidden_arcanus:edelwood_bat_soup_bucket",

    //HammerLib
    "hammerlib:gears/wooden",
    "hammerlib:gears/stone",
    "hammerlib:gears/copper",
    "hammerlib:gears/iron",
    "hammerlib:gears/gold",
    "hammerlib:gears/diamond",
    "hammerlib:gears/netherite",

    //Iron Furnace
    "ironfurnaces:upgrade_iron",
    "ironfurnaces:upgrade_gold",
    "ironfurnaces:upgrade_crystal",
    "ironfurnaces:upgrade_silver",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    "ironfurnaces:million_furnace",
    "ironfurnaces:rainbow_coal",

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
    "immersiveengineering:stick_iron",

    //Industrial Foregoing
    "industrialforegoing:iron_gear",
    "industrialforegoing:gold_gear",
    "industrialforegoing:diamond_gear",
    "mifa:netherite_gear", // Addon
    "industrialforegoing:plastic",

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

    //Extended Crafting
    "extendedcrafting:redstone_ingot",

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

    //PamsHarvestcraft
    "pamhc2foodcore:flouritem",

    //OpenComputer
    "oc2r:silicon_blend", //Both InOut
    "oc2r:silicon", //Both InOut

    //Pneumaticraft
    "pneumaticcraft:wheat_flour",

    //Thermal Expansion
    "thermal:saw_blade",
    "thermal:sawdust",
    "thermal:creosote_bucket",

    //Thermal Extra
    "thermal_extra:signalum_hammer",
    "thermal_extra:lumium_hammer",
    "thermal_extra:enderium_hammer",
    "thermal_extra:soul_infused_hammer",
    "thermal_extra:shellite_hammer",
    "thermal_extra:twinite_hammer",
    "thermal_extra:dragonsteel_hammer",
    "thermal_extra:abyssal_hammer",
    "thermal_extra:soul_infused_bucket",
    "thermal_extra:twinite_bucket",
    "thermal_extra:shellite_bucket",
    "thermal_extra:dragonsteel_bucket",
    "thermal_extra:abyssal_bucket",
    "thermal_extra:raw_arcane_gold_bucket",
    "thermal_extra:arcane_gold_dust",
    "thermal_extra:raw_zinc_bucket",
    "thermal_extra:zinc_dust",

    //Twilight Forest
    "twilightforest:uncrafting_table",
];

global.items.GAME_RmIn = [
    //Ender IO
    "enderio:silicon", //Both InOut

    //OpenComputer
    "oc2r:silicon_blend", //Both InOut
    "oc2r:silicon", //Both InOut

    //Mystacal Agriculture
    "mysticalagriculture:silicon_essence",

    //Thermal Extra
    "thermal_extra:soul_infused_bucket",
    "thermal_extra:twinite_bucket",
    "thermal_extra:shellite_bucket",
    "thermal_extra:dragonsteel_bucket",
    "thermal_extra:abyssal_bucket",
    "thermal_extra:raw_arcane_gold_bucket",
    "thermal_extra:arcane_gold_dust",
    "thermal_extra:raw_zinc_bucket",
    "thermal_extra:zinc_dust",
];
//#endregion

//#region Fluid
global.fluid = {};

global.fluid.GAME_RmOut = [
    //Ad Astra
    "ad_astra:oxygen",

    //EnderIO
    "enderio:fire_water",

    //Chemlib
    "chemlib:oxygen_fluid",

    //Thermal
    "thermal:creosote",

    //Thermal Extra
    "thermal_extra:soul_infused",
    "thermal_extra:twinite",
    "thermal_extra:shellite",
    "thermal_extra:dragonsteel",
    "thermal_extra:abyssal",
    "thermal_extra:zinc_dust",
    "thermal_extra:raw_arcane_gold",
    "thermal_extra:raw_zinc",
];

global.fluid.GAME_RmIn = [
    //Ad Astra
    "ad_astra:oxygen",

    //EnderIO
    "enderio:fire_water",

    //Chemlib
    "chemlib:oxygen_fluid",

    //Thermal
    "thermal:creosote",

    //Thermal Extra
    "thermal_extra:soul_infused",
    "thermal_extra:twinite",
    "thermal_extra:shellite",
    "thermal_extra:dragonsteel",
    "thermal_extra:abyssal",
    "thermal_extra:raw_arcane_gold",
    "thermal_extra:raw_zinc",
];
//#endregion
