ServerEvents.recipes((event) => {
    const RmRecipeID = [
        //Unification
        "thermal:machines/pyrolyzer/pyrolyzer_logs", //Rm Creosote
        "thermal:machines/pyrolyzer/pyrolyzer_coal", //Rm Creosote
        "thermal:machines/press/unpacking/press_sawdust_unpacking", //Rm Sawdust
        "thermal:machines/pulverizer/pulverizer_logs", //Rm Sawdust
        "thermal:machines/pulverizer/pulverizer_diamond_tools", //Rm Sawdust

        //Mystical Seed
        //T0
        "thermal:compat/mysticalagriculture/insolator_mysticalag_air_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_earth_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_water_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_fire_seeds",

        //T1
        "thermal:compat/mysticalagriculture/insolator_mysticalag_inferium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_stone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_dirt_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_wood_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_ice_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_deepslate_seeds",

        //T2
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nature_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_dye_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nether_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_coal_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_coral_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_honey_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_amethyst_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_pig_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_chicken_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_cow_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_sheep_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_squid_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_fish_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_slime_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_turtle_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_rubber_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_silicon_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_sulfur_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_aluminum_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_saltpeter_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_apatite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_grains_of_infinity_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_mystical_flower_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_marble_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_limestone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_basalt_seeds",

        //T3
        "thermal:compat/mysticalagriculture/insolator_mysticalag_iron_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_copper_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nether_quartz_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_glowstone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_redstone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_obsidian_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_prismarine_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_skeleton_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_creeper_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_spider_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_rabbit_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_tin_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_bronze_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_zinc_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_brass_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_silver_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_lead_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_graphite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_blizz_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_blitz_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_basalz_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_copper_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_redstone_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_conductive_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_manasteel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_steeleaf_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_ironwood_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_sky_stone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_certus_quartz_seeds",

        //T4
        "thermal:compat/mysticalagriculture/insolator_mysticalag_gold_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_lapis_lazuli_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_end_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_experience_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_blaze_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_ghast_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_enderman_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_steel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nickel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_constantan_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_electrum_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_invar_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_mithril_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_tungsten_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_titanium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_uranium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_chrome_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_ruby_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_sapphire_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_peridot_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_soulium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_signalum_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_lumium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_flux_infused_ingot_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_hop_graphite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_soularium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_dark_steel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_pulsating_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_energetic_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_elementium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_osmium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_fluorite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_refined_glowstone_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_refined_obsidian_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_knightmetal_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_fiery_ingot_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_compressed_iron_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_fluix_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_energized_steel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_blazing_crystal_seeds",

        //T5
        "thermal:compat/mysticalagriculture/insolator_mysticalag_diamond_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_emerald_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_netherite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_wither_skeleton_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_platinum_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_iridium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_enderium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_flux_infused_gem_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_vibrant_alloy_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_end_steel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_terrasteel_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_yellorium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_cyanite_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_niotic_crystal_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_spirited_crystal_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_uraninite_seeds",

        //T6
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nether_star_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_dragon_egg_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_gaia_spirit_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_neutronium_seeds",
        "thermal:compat/mysticalagriculture/insolator_mysticalag_nitro_crystal_seeds",
    ];
    RmRecipeID.forEach((id) => {
        event.remove({ id: id });
    });

    //// # =================================================================================================== #

    //#region Crafting

    //Flux Coil
    event.remove({ output: "thermal:rf_coil" });
    event.shaped("thermal:rf_coil", ["  A", " B ", "A  "], { A: "#forge:ingots/red_alloy", B: "#forge:ingots/electrum" });

    //Coal Coke
    event.shapeless(Item.of("thermal:coal_coke", 9), ["#forge:storage_blocks/coal_coke"]);

    //Servo
    event.remove({ output: "thermal:redstone_servo" });
    event.shaped("thermal:redstone_servo", ["A A", " B ", "A A"], { A: "minecraft:redstone", B: "minecraft:iron_ingot" });

    ////Machine

    //Machine Frame
    event.remove({ output: "thermal:machine_frame" });
    event.shaped("thermal:machine_frame", ["ABA", "BCB", "ABA"], { A: "#forge:gears/netherite", B: "thermal:obsidian_glass", C: "industrialforegoing:machine_frame_advanced" });

    //Energetic Infuser
    event.remove({ output: "thermal:charge_bench" });
    event.shaped("thermal:charge_bench", ["AAA", "BCB", "DED"], { A: "thermal:rf_coil", B: "thermal:energy_cell", C: "thermal:machine_frame", D: "#forge:gears/electrum", E: "#forge:storage_blocks/redstone_alloy" });

    //Redstone Furnace
    event.remove({ output: "thermal:machine_furnace" });
    event.shaped("thermal:machine_furnace", [" A ", "BCB", "DED"], { A: ["#forge:ingots/red_alloy", "#forge:ingots/electrotine_alloy"], B: "ironfurnaces:diamond_furnace", C: "thermal:machine_frame", D: "#forge:gears/gold", E: "thermal:rf_coil" });

    //Sawmill
    event.remove({ output: "thermal:machine_sawmill" });
    event.shaped("thermal:machine_sawmill", [" A ", "BCB", "DED"], { A: "#forge:sawblades", B: "#forge:treated_wood", C: "thermal:machine_frame", D: "#forge:gears/copper", E: "thermal:rf_coil" });

    //Pulverizer
    event.remove({ output: "thermal:machine_pulverizer" });
    event.shaped("thermal:machine_pulverizer", [" A ", "BCB", "DED"], { A: "minecraft:flint", B: "enderio:sag_mill", C: "thermal:machine_frame", D: "#forge:gears/steel", E: "thermal:rf_coil" });

    //Induction Smelter
    event.remove({ output: "thermal:machine_smelter" });
    event.shaped("thermal:machine_smelter", [" A ", "BCB", "DED"], { A: "minecraft:fire_charge", B: "enderio:alloy_smelter", C: "thermal:machine_frame", D: "#forge:gears/enderium", E: "thermal:rf_coil" });

    //Phytogenic Insolator
    event.remove({ output: "thermal:machine_insolator" });
    event.shaped("thermal:machine_insolator", [" A ", "BCB", "DED"], { A: "minecraft:daylight_detector", B: "thermal:phytogro", C: "thermal:machine_frame", D: "#forge:gears/lumium", E: "thermal:rf_coil" });

    //Centrifugal Separator
    event.remove({ output: "thermal:machine_centrifuge" });
    event.shaped("thermal:machine_centrifuge", [" A ", "BCB", "DED"], { A: "minecraft:compass", B: "#forge:plates/constantan", C: "thermal:machine_frame", D: "#forge:gears/tin", E: "thermal:rf_coil" });

    //Multiservo Press
    event.remove({ output: "thermal:machine_press" });
    event.shaped("thermal:machine_press", [" A ", "BCB", "DED"], { A: "minecraft:piston", B: "#forge:plates/copper", C: "thermal:machine_frame", D: "#forge:gears/constantan", E: "thermal:rf_coil" });

    //Magma Crucible
    event.remove({ output: "thermal:machine_crucible" });
    event.shaped("thermal:machine_crucible", [" A ", "BCB", "DED"], { A: "thermal:obsidian_glass", B: "immersiveengineering:blastbrick_reinforced", C: "thermal:machine_frame", D: "#forge:gears/netherite", E: "thermal:rf_coil" });

    //Blast Chiller
    event.remove({ output: "thermal:machine_chiller" });
    event.shaped("thermal:machine_chiller", [" A ", "BCB", "DED"], { A: "actuallyadditions:empowered_diamatine_crystal", B: "#forge:ices/dry", C: "thermal:machine_frame", D: "#forge:gears/sapphire", E: "thermal:rf_coil" });

    //Fractionating Still
    event.remove({ output: "thermal:machine_refinery" });
    event.shaped("thermal:machine_refinery", [" A ", "BCB", "DED"], { A: "minecraft:campfire", B: "portabletanks:basic_portable_tank", C: "thermal:machine_frame", D: "#forge:gears/diamond", E: "thermal:rf_coil" });

    //Pyrolyzer
    event.remove({ output: "thermal:machine_pyrolyzer" });
    event.shaped("thermal:machine_pyrolyzer", [" A ", "BCB", "DED"], { A: "#forge:coal_coke", B: "immersiveengineering:cokebrick", C: "thermal:machine_frame", D: "#forge:gears/iron", E: "thermal:rf_coil" });

    //Fluid Encapsulator
    event.remove({ output: "thermal:machine_bottler" });
    event.shaped("thermal:machine_bottler", [" A ", "BCB", "DED"], { A: "minecraft:piston", B: "minecraft:bucket", C: "thermal:machine_frame", D: "#forge:gears/bronze", E: "thermal:rf_coil" });

    //Alchemical Imbuer
    event.remove({ output: "thermal:machine_brewer" });
    event.shaped("thermal:machine_brewer", [" A ", "BCB", "DED"], { A: "minecraft:brewing_stand", B: "minecraft:glass_bottle", C: "thermal:machine_frame", D: "#forge:gears/silver", E: "thermal:rf_coil" });

    //Crystallizer
    event.remove({ output: "thermal:machine_crystallizer" });
    event.shaped("thermal:machine_crystallizer", [" A ", "BCB", "DED"], { A: "#create:polished_rose_quartz", B: "#forge:plates/iron", C: "thermal:machine_frame", D: "#forge:gears/ruby", E: "thermal:rf_coil" });

    //Sequential Fabricator
    event.remove({ output: "thermal:machine_crafter" });
    event.shaped("thermal:machine_crafter", [" A ", "BCB", "DED"], { A: "quark:crafter", B: "enderio:crafter", C: "thermal:machine_frame", D: "#forge:gears/quartz", E: "thermal:rf_coil" });

    ////Dynamo

    //Stirling
    event.remove({ output: "thermal:dynamo_stirling" });
    event.shaped("thermal:dynamo_stirling", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/iron", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Compression
    event.remove({ output: "thermal:dynamo_compression" });
    event.shaped("thermal:dynamo_compression", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/bronze", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Magmatic
    event.remove({ output: "thermal:dynamo_magmatic" });
    event.shaped("thermal:dynamo_magmatic", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/invar", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Numismatic
    event.remove({ output: "thermal:dynamo_numismatic" });
    event.shaped("thermal:dynamo_numismatic", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/constantan", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Lapidary
    event.remove({ output: "thermal:dynamo_lapidary" });
    event.shaped("thermal:dynamo_lapidary", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/lapis", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Disenchantment
    event.remove({ output: "thermal:dynamo_disenchantment" });
    event.shaped("thermal:dynamo_disenchantment", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/emerald", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    //Gourmand
    event.remove({ output: "thermal:dynamo_gourmand" });
    event.shaped("thermal:dynamo_gourmand", [" A ", "BCB", "DED"], { A: "thermal:rf_coil", B: "immersiveengineering:component_steel", C: "#forge:gears/gold", D: "immersiveengineering:capacitor_mv", E: "thermal:redstone_servo" });

    ////Component

    //15X /MS
    event.remove({ output: "thermal_more:15x_upgrade_augment" });
    event.shaped("thermal_more:15x_upgrade_augment", ["ABA", "CDE", "FGF"], { A: "#forge:dyes/purple", B: "#forge:dyes/magenta", C: "thermal:upgrade_augment_1", D: "thermalendergy:endergy_upgrade_3", E: "thermal:upgrade_augment_2", F: "#forge:gears/melodium", G: "#forge:gears/stellarium" });
    event.shaped("thermal_more:15x_upgrade_augment", ["ABC", "DEF", "GHG"], {
        A: "#forge:dyes/purple",
        B: "thermal:upgrade_augment_2",
        C: "#forge:dyes/magenta",
        D: "thermal:upgrade_augment_1",
        E: "thermalendergy:endergy_upgrade_1",
        F: "thermal:upgrade_augment_3",
        G: "#forge:gears/melodium",
        H: "#forge:gears/stellarium",
    });

    //20X
    event.remove({ output: "thermal_more:20x_upgrade_augment" });
    event.shaped("thermal_more:20x_upgrade_augment", ["ABA", "CDE", "FGF"], { A: "#forge:dyes/lime", B: "#forge:dyes/green", C: "thermal:upgrade_augment_1", D: "thermal_more:15x_upgrade_augment", E: "thermal:upgrade_augment_2", F: "#forge:gears/melodium", G: "#forge:gears/stellarium" });

    //25X /S
    event.remove({ output: "thermal_more:25x_upgrade_augment" });
    event.shaped("thermal_more:25x_upgrade_augment", ["ABA", "CDE", "FFF"], { A: "#forge:dyes/lime", B: "#forge:dyes/green", C: "thermal:upgrade_augment_1", D: "thermal_more:20x_upgrade_augment", E: "thermal:upgrade_augment_2", F: "#forge:gears/stellarium" });

    //30X
    event.remove({ output: "thermal_more:30x_upgrade_augment" });
    event.shaped("thermal_more:30x_upgrade_augment", ["AAA", "BCB", "BCB"], { A: "#forge:dyes/light_blue", B: "#forge:gears/stellarium", C: "thermal_more:15x_upgrade_augment" });

    //35X /SN
    event.remove({ output: "thermal_more:35x_upgrade_augment" });
    event.shaped("thermal_more:35x_upgrade_augment", ["ABA", "CDC", "FEF"], { A: "#forge:dyes/pink", B: "#forge:dyes/magenta", C: "#forge:gears/stellarium", D: "thermal_more:15x_upgrade_augment", E: "thermal_more:20x_upgrade_augment", F: "avaritia:neutron_gear" });

    //40X
    event.remove({ output: "thermal_more:40x_upgrade_augment" });
    event.shaped("thermal_more:40x_upgrade_augment", ["ABA", "CDC", "EDE"], { A: "#forge:dyes/red", B: "#forge:dyes/black", C: "#forge:gears/stellarium", D: "thermal_more:20x_upgrade_augment", E: "avaritia:neutron_gear" });
    event.shaped("thermal_more:40x_upgrade_augment", ["ABA", "CDC", "EFE"], { A: "#forge:dyes/red", B: "#forge:dyes/black", C: "#forge:gears/stellarium", D: "thermal_more:15x_upgrade_augment", E: "avaritia:neutron_gear", F: "thermal_more:25x_upgrade_augment" });

    //45X /N
    event.remove({ output: "thermal_more:45x_upgrade_augment" });
    event.shaped("thermal_more:45x_upgrade_augment", ["ABA", "CDC", "CEC"], { A: "#forge:dyes/green", B: "#forge:dyes/black", C: "avaritia:neutron_gear", D: "thermal_more:15x_upgrade_augment", E: "thermal_more:30x_upgrade_augment" });
    event.shaped("thermal_more:45x_upgrade_augment", ["ABA", "CDC", "CEC"], { A: "#forge:dyes/green", B: "#forge:dyes/black", C: "avaritia:neutron_gear", D: "thermal_more:20x_upgrade_augment", E: "thermal_more:25x_upgrade_augment" });

    //50X
    event.remove({ output: "thermal_more:mega_upgrade_augment" });
    event.shaped("thermal_more:mega_upgrade_augment", ["AAA", "BCB", "BCB"], { A: "#forge:dyes/yellow", B: "avaritia:neutron_gear", C: "thermal_more:25x_upgrade_augment" });
    event.shaped("thermal_more:mega_upgrade_augment", ["AAA", "BCB", "BDB"], { A: "#forge:dyes/yellow", B: "avaritia:neutron_gear", C: "thermal_more:15x_upgrade_augment", D: "thermal_more:35x_upgrade_augment" });
    event.shaped("thermal_more:mega_upgrade_augment", ["AAA", "BCB", "BDB"], { A: "#forge:dyes/yellow", B: "avaritia:neutron_gear", C: "thermal_more:20x_upgrade_augment", D: "thermal_more:30x_upgrade_augment" });

    //#endregion

    //// # =================================================================================================== #

    //#region Insolator
    const InsolatorPattern = [
        //T0
        { get: "mysticalagriculture:air_essence", put: "mysticalagriculture:air_seeds", rsflux: 100000 },
        { get: "mysticalagriculture:earth_essence", put: "mysticalagriculture:earth_seeds", rsflux: 100000 },
        { get: "mysticalagriculture:water_essence", put: "mysticalagriculture:water_seeds", rsflux: 100000 },
        { get: "mysticalagriculture:fire_essence", put: "mysticalagriculture:fire_seeds", rsflux: 100000 },

        //T1
        { get: "mysticalagriculture:inferium_essence", put: "mysticalagriculture:inferium_seeds", rsflux: 200000 },
        { get: "mysticalagriculture:stone_essence", put: "mysticalagriculture:stone_seeds", rsflux: 200000 },
        { get: "mysticalagriculture:dirt_essence", put: "mysticalagriculture:dirt_seeds", rsflux: 200000 },
        { get: "mysticalagriculture:wood_essence", put: "mysticalagriculture:wood_seeds", rsflux: 200000 },
        { get: "mysticalagriculture:ice_essence", put: "mysticalagriculture:ice_seeds", rsflux: 200000 },
        { get: "mysticalagriculture:deepslate_essence", put: "mysticalagriculture:deepslate_seeds", rsflux: 200000 },

        //T2
        { get: "mysticalagriculture:nature_essence", put: "mysticalagriculture:nature_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:dye_essence", put: "mysticalagriculture:dye_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:nether_essence", put: "mysticalagriculture:nether_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:coal_essence", put: "mysticalagriculture:coal_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:coral_essence", put: "mysticalagriculture:coral_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:honey_essence", put: "mysticalagriculture:honey_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:amethyst_essence", put: "mysticalagriculture:amethyst_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:pig_essence", put: "mysticalagriculture:pig_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:chicken_essence", put: "mysticalagriculture:chicken_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:cow_essence", put: "mysticalagriculture:cow_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:sheep_essence", put: "mysticalagriculture:sheep_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:squid_essence", put: "mysticalagriculture:squid_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:fish_essence", put: "mysticalagriculture:fish_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:slime_essence", put: "mysticalagriculture:slime_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:turtle_essence", put: "mysticalagriculture:turtle_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:rubber_essence", put: "mysticalagriculture:rubber_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:silicon_essence", put: "mysticalagriculture:silicon_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:sulfur_essence", put: "mysticalagriculture:sulfur_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:aluminum_essence", put: "mysticalagriculture:aluminum_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:saltpeter_essence", put: "mysticalagriculture:saltpeter_seeds", rsflux: 300000 },
        { get: "mysticalagriculture:apatite_essence", put: "mysticalagriculture:apatite_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:grains_of_infinity_essence", put: "mysticalagriculture:grains_of_infinity_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:mystical_flower_essence", put: "mysticalagriculture:mystical_flower_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:marble_essence", put: "mysticalagriculture:marble_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:limestone_essence", put: "mysticalagriculture:limestone_seeds", rsflux: 300000 },
        //{ get: "mysticalagriculture:basalt_essence", put: "mysticalagriculture:basalt_seeds", rsflux: 300000 },

        //T3
        { get: "mysticalagriculture:iron_essence", put: "mysticalagriculture:iron_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:copper_essence", put: "mysticalagriculture:copper_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:nether_quartz_essence", put: "mysticalagriculture:nether_quartz_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:glowstone_essence", put: "mysticalagriculture:glowstone_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:redstone_essence", put: "mysticalagriculture:redstone_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:obsidian_essence", put: "mysticalagriculture:obsidian_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:prismarine_essence", put: "mysticalagriculture:prismarine_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:zombie_essence", put: "mysticalagriculture:zombie_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:skeleton_essence", put: "mysticalagriculture:skeleton_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:creeper_essence", put: "mysticalagriculture:creeper_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:spider_essence", put: "mysticalagriculture:spider_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:rabbit_essence", put: "mysticalagriculture:rabbit_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:tin_essence", put: "mysticalagriculture:tin_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:bronze_essence", put: "mysticalagriculture:bronze_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:zinc_essence", put: "mysticalagriculture:zinc_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:brass_essence", put: "mysticalagriculture:brass_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:silver_essence", put: "mysticalagriculture:silver_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:lead_essence", put: "mysticalagriculture:lead_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:graphite_essence", put: "mysticalagriculture:graphite_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:blizz_essence", put: "mysticalagriculture:blizz_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:blitz_essence", put: "mysticalagriculture:blitz_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:basalz_essence", put: "mysticalagriculture:basalz_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:copper_alloy_essence", put: "mysticalagriculture:copper_alloy_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:redstone_alloy_essence", put: "mysticalagriculture:redstone_alloy_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:conductive_alloy_essence", put: "mysticalagriculture:conductive_alloy_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:manasteel_essence", put: "mysticalagriculture:manasteel_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:steeleaf_essence", put: "mysticalagriculture:steeleaf_seeds", rsflux: 400000 },
        //{ get: "mysticalagriculture:ironwood_essence", put: "mysticalagriculture:ironwood_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:sky_stone_essence", put: "mysticalagriculture:sky_stone_seeds", rsflux: 400000 },
        { get: "mysticalagriculture:certus_quartz_essence", put: "mysticalagriculture:certus_quartz_seeds", rsflux: 400000 },

        //T4
        { get: "mysticalagriculture:gold_essence", put: "mysticalagriculture:gold_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:lapis_lazuli_essence", put: "mysticalagriculture:lapis_lazuli_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:end_essence", put: "mysticalagriculture:end_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:experience_essence", put: "mysticalagriculture:experience_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:blaze_essence", put: "mysticalagriculture:blaze_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:ghast_essence", put: "mysticalagriculture:ghast_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:enderman_essence", put: "mysticalagriculture:enderman_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:steel_essence", put: "mysticalagriculture:steel_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:nickel_essence", put: "mysticalagriculture:nickel_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:constantan_essence", put: "mysticalagriculture:constantan_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:electrum_essence", put: "mysticalagriculture:electrum_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:invar_essence", put: "mysticalagriculture:invar_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:mithril_essence", put: "mysticalagriculture:mithril_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:tungsten_essence", put: "mysticalagriculture:tungsten_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:titanium_essence", put: "mysticalagriculture:titanium_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:uranium_essence", put: "mysticalagriculture:uranium_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:chrome_essence", put: "mysticalagriculture:chrome_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:ruby_essence", put: "mysticalagriculture:ruby_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:sapphire_essence", put: "mysticalagriculture:sapphire_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:peridot_essence", put: "mysticalagriculture:peridot_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:soulium_essence", put: "mysticalagriculture:soulium_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:signalum_essence", put: "mysticalagriculture:signalum_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:lumium_essence", put: "mysticalagriculture:lumium_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:flux_infused_ingot_essence", put: "mysticalagriculture:flux_infused_ingot_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:hop_graphite_essence", put: "mysticalagriculture:hop_graphite_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:soularium_essence", put: "mysticalagriculture:soularium_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:dark_steel_essence", put: "mysticalagriculture:dark_steel_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:pulsating_alloy_essence", put: "mysticalagriculture:pulsating_alloy_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:energetic_alloy_essence", put: "mysticalagriculture:energetic_alloy_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:elementium_essence", put: "mysticalagriculture:elementium_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:osmium_essence", put: "mysticalagriculture:osmium_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:fluorite_essence", put: "mysticalagriculture:fluorite_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:refined_glowstone_essence", put: "mysticalagriculture:refined_glowstone_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:refined_obsidian_essence", put: "mysticalagriculture:refined_obsidian_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:knightmetal_essence", put: "mysticalagriculture:knightmetal_seeds", rsflux: 500000 },
        { get: "mysticalagriculture:fiery_ingot_essence", put: "mysticalagriculture:fiery_ingot_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:compressed_iron_essence", put: "mysticalagriculture:compressed_iron_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:fluix_essence", put: "mysticalagriculture:fluix_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:energized_steel_essence", put: "mysticalagriculture:energized_steel_seeds", rsflux: 500000 },
        //{ get: "mysticalagriculture:blazing_crystal_essence", put: "mysticalagriculture:blazing_crystal_seeds", rsflux: 500000 },

        //T5
        { get: "mysticalagriculture:diamond_essence", put: "mysticalagriculture:diamond_seeds", rsflux: 600000 },
        { get: "mysticalagriculture:emerald_essence", put: "mysticalagriculture:emerald_seeds", rsflux: 600000 },
        { get: "mysticalagriculture:netherite_essence", put: "mysticalagriculture:netherite_seeds", rsflux: 600000 },
        { get: "mysticalagriculture:wither_skeleton_essence", put: "mysticalagriculture:wither_skeleton_seeds", rsflux: 600000 },
        { get: "mysticalagriculture:platinum_essence", put: "mysticalagriculture:platinum_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:iridium_essence", put: "mysticalagriculture:iridium_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:enderium_essence", put: "mysticalagriculture:enderium_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:flux_infused_gem_essence", put: "mysticalagriculture:flux_infused_gem_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:vibrant_alloy_essence", put: "mysticalagriculture:vibrant_alloy_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:end_steel_essence", put: "mysticalagriculture:end_steel_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:terrasteel_essence", put: "mysticalagriculture:terrasteel_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:yellorium_essence", put: "mysticalagriculture:yellorium_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:cyanite_essence", put: "mysticalagriculture:cyanite_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:niotic_crystal_essence", put: "mysticalagriculture:niotic_crystal_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:spirited_crystal_essence", put: "mysticalagriculture:spirited_crystal_seeds", rsflux: 600000 },
        //{ get: "mysticalagriculture:uraninite_essence", put: "mysticalagriculture:uraninite_seeds", rsflux: 600000 },

        //T6
        { get: "mysticalagriculture:nether_star_essence", put: "mysticalagriculture:nether_star_seeds", rsflux: 700000 },
        { get: "mysticalagriculture:dragon_egg_essence", put: "mysticalagriculture:dragon_egg_seeds", rsflux: 700000 },
        { get: "mysticalagriculture:gaia_spirit_essence", put: "mysticalagriculture:gaia_spirit_seeds", rsflux: 700000 },
        //{ get: "mysticalagriculture:neutronium_essence", put: "mysticalagriculture:neutronium_seeds", rsflux: 700000 },
        //{ get: "mysticalagriculture:nitro_crystal_essence", put: "mysticalagriculture:nitro_crystal_seeds", rsflux: 700000 },
    ];
    InsolatorPattern.forEach((recipe) => {
        if (recipe.put.startsWith("mysticalagriculture")) {
            event.custom({
                type: "thermal:insolator",
                ingredient: { item: recipe.put },
                result: [{ item: recipe.get }, { item: recipe.put }],
                energy: recipe.rsflux,
            });
        }
    });
    //#endregion

    //#region Press
    const PressPattern = [
        {
            //EnderIO Integration => Energized Gear
            get: [{ item: "enderio:energized_gear" }],
            put: [{ tag: "forge:ingots/energetic_alloy", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 4000,
        },
        {
            //EnderIO Integration => Vibrant Gear
            get: [{ item: "enderio:vibrant_gear" }],
            put: [{ tag: "forge:ingots/vibrant_alloy", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 6000,
        },
        {
            //EnderIO Integration => DarkSteel Gear
            get: [{ item: "enderio:dark_bimetal_gear" }],
            put: [{ tag: "forge:ingots/dark_steel", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 8000,
        },

        //Unification
        {
            //thermal:sawdust => mekanism:sawdust
            get: [{ item: "mekanism:sawdust", count: 9 }],
            put: [{ item: "thermal:sawdust_block" }, { item: "thermal:press_unpacking_die" }],
            rsflux: 400,
        },
        {
            //thermal:sawdust => mekanism:sawdust
            get: [{ item: "thermal:sawdust_block" }],
            put: [{ tag: "forge:dusts/wood", count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            rsflux: 400,
        },
    ];
    PressPattern.forEach((recipe) => {
        event.custom({
            type: "thermal:press",
            ingredients: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Pulverizer
    const PulverizerPattern = [
        //Unification
        {
            //thermal:sawdust => mekanism:sawdust
            get: [{ item: "mekanism:sawdust", count: 8 }],
            put: { tag: "minecraft:logs" },
            rsflux: 1000,
        },
    ];
    PulverizerPattern.forEach((recipe) => {
        event.custom({
            type: "thermal:pulverizer",
            ingredient: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region PulverizerRecycle
    const PulverizerRecyclePattern = [
        //Unification
        {
            //thermal:sawdust => mekanism:sawdust
            get: [
                { item: "minecraft:diamond", count: 1 },
                { item: "mekanism:sawdust", count: 1 },
            ],
            put: { tag: "forge:tools/diamond" },
            state: [{ tag: "forge:tools/diamond", type: "cofh_core:tag_exists" }],
        },
    ];
    PulverizerRecyclePattern.forEach((recipe) => {
        event.custom({
            type: "thermal:pulverizer_recycle",
            ingredient: recipe.put,
            result: recipe.get,
            experience: 0.5,
            conditions: recipe.state,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Pyrolyzer
    const PyrolyzerPattern = [
        //Unification
        {
            get: [{ item: "minecraft:charcoal" }, { fluid: "thermal:creosote", amount: 250 }],
            put: { tag: "minecraft:logs" },
            rsflux: 2000,
        },
        {
            get: [{ item: "thermal:coal_coke" }, { item: "thermal:tar", chance: 0.25 }, { fluid: "thermal:creosote", amount: 500 }],
            put: { item: "minecraft:coal" },
            rsflux: 4000,
        },
        {
            get: [{ item: "thermal:coal_coke_block" }, { item: "thermal:tar", chance: 0.25 }, { fluid: "thermal:creosote", amount: 4500 }],
            put: { item: "minecraft:coal_block" },
            rsflux: 36000,
        },
    ];
    PyrolyzerPattern.forEach((recipe) => {
        event.custom({
            type: "thermal:pyrolyzer",
            ingredient: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
            experience: 0.15,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Refinery
    const RefineryPattern = [{ get: "ad_astra:fuel", put: "thermal:refined_fuel", extra: "thermal:sulfur_dust" }];
    RefineryPattern.forEach((recipe) => {
        event.custom({
            type: "thermal:refinery",
            ingredient: { fluid: recipe.put, amount: 100 },
            result: [
                { fluid: recipe.get, amount: 100 },
                { item: recipe.extra, chance: 0.2 },
            ],
            energy: 6000,
            experience: 0.3,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Smelter
    const SmelterPattern = [
        {
            //ProjectRED Integration => Red Ingot
            get: [{ item: "projectred_core:red_ingot", count: 2 }],
            put: [
                { tag: "forge:dusts/redstone", count: 2 },
                { tag: "forge:ingots/osmium", count: 1 },
            ],
            rsflux: 32000,
        },
        {
            //ProjectRED Integration => Electrotine Ingot
            get: [{ item: "projectred_core:electrotine_ingot", count: 2 }],
            put: [
                { tag: "forge:dusts/electrotine", count: 2 },
                { tag: "forge:ingots/osmium", count: 1 },
            ],
            rsflux: 32000,
        },
    ];
    SmelterPattern.forEach((recipe) => {
        event.custom({
            type: "thermal:smelter",
            ingredients: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
        });
    });
    //#endregion
});
