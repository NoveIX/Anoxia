ServerEvents.recipes((event) => {
    //Inscriber
    event.remove({ output: "ae2:inscriber" });
    event.shaped("ae2:inscriber", ["ABA", "C A", "ABA"], { A: "#forge:ingots/compressed_iron", B: "minecraft:sticky_piston", C: "#forge:ingots/conductive_alloy" });

    //Disk Drive
    event.remove({ output: "ae2:drive" });
    event.shaped("ae2:drive", ["ABA", "CDE", "FBF"], { A: "ae2:engineering_processor", B: "mekanism:advanced_control_circuit", C: "oc2r:memory_extra_large", D: "enderio:z_logic_controller", E: "ae2:fluix_smart_cable", F: "enderio:dark_bimetal_gear" });

    //Housing
    event.remove({ output: "ae2:item_cell_housing" });
    event.shaped("ae2:item_cell_housing", ["ABA", "B B", "CCC"], { A: "ae2:quartz_vibrant_glass", B: "#forge:ingots/red_alloy", C: "#forge:ingots/iron" });
    event.remove({ output: "ae2:fluid_cell_housing" });
    event.shaped("ae2:fluid_cell_housing", ["ABA", "B B", "CCC"], { A: "ae2:quartz_vibrant_glass", B: "#forge:ingots/red_alloy", C: "#forge:ingots/copper" });
    event.remove({ output: "appmek:chemical_cell_housing" });
    event.shaped("appmek:chemical_cell_housing", ["ABA", "B B", "CCC"], { A: "ae2:quartz_vibrant_glass", B: "#forge:ingots/red_alloy", C: "#forge:ingots/osmium" });
    event.remove({ output: "appflux:fe_cell_housing" });
    event.shaped("appflux:fe_cell_housing", ["ABA", "B B", "CCC"], { A: "ae2:quartz_vibrant_glass", B: "#forge:ingots/red_alloy", C: "#forge:ingots/insulating_resin" });
    event.remove({ output: "ae2things:disk_housing" });
    event.smithing("ae2things:disk_housing", "minecraft:netherite_upgrade_smithing_template", "ae2:item_cell_housing", "#forge:ingots/netherite");

    //Item
    event.remove({ output: "ae2:item_storage_cell_1k" });
    event.shapeless("ae2:item_storage_cell_1k", ["ae2:item_cell_housing", "ae2:cell_component_1k"]);
    event.remove({ output: "ae2:item_storage_cell_4k" });
    event.shapeless("ae2:item_storage_cell_4k", ["ae2:item_cell_housing", "ae2:cell_component_4k"]);
    event.remove({ output: "ae2:item_storage_cell_16k" });
    event.shapeless("ae2:item_storage_cell_16k", ["ae2:item_cell_housing", "ae2:cell_component_16k"]);
    event.remove({ output: "ae2:item_storage_cell_64k" });
    event.shapeless("ae2:item_storage_cell_64k", ["ae2:item_cell_housing", "ae2:cell_component_64k"]);
    event.remove({ output: "ae2:item_storage_cell_256k" });
    event.shapeless("ae2:item_storage_cell_256k", ["ae2:item_cell_housing", "ae2:cell_component_256k"]);

    //Fluid
    event.remove({ output: "ae2:fluid_storage_cell_1k" });
    event.shapeless("ae2:fluid_storage_cell_1k", ["ae2:fluid_cell_housing", "ae2:cell_component_1k"]);
    event.remove({ output: "ae2:fluid_storage_cell_4k" });
    event.shapeless("ae2:fluid_storage_cell_4k", ["ae2:fluid_cell_housing", "ae2:cell_component_4k"]);
    event.remove({ output: "ae2:fluid_storage_cell_16k" });
    event.shapeless("ae2:fluid_storage_cell_16k", ["ae2:fluid_cell_housing", "ae2:cell_component_16k"]);
    event.remove({ output: "ae2:fluid_storage_cell_64k" });
    event.shapeless("ae2:fluid_storage_cell_64k", ["ae2:fluid_cell_housing", "ae2:cell_component_64k"]);
    event.remove({ output: "ae2:fluid_storage_cell_256k" });
    event.shapeless("ae2:fluid_storage_cell_256k", ["ae2:fluid_cell_housing", "ae2:cell_component_256k"]);

    //Mekanism
    event.remove({ output: "appmek:chemical_storage_cell_1k" });
    event.shapeless("appmek:chemical_storage_cell_1k", ["appmek:chemical_cell_housing", "ae2:cell_component_1k"]);
    event.remove({ output: "appmek:chemical_storage_cell_4k" });
    event.shapeless("appmek:chemical_storage_cell_4k", ["appmek:chemical_cell_housing", "ae2:cell_component_4k"]);
    event.remove({ output: "appmek:chemical_storage_cell_16k" });
    event.shapeless("appmek:chemical_storage_cell_16k", ["appmek:chemical_cell_housing", "ae2:cell_component_16k"]);
    event.remove({ output: "appmek:chemical_storage_cell_64k" });
    event.shapeless("appmek:chemical_storage_cell_64k", ["appmek:chemical_cell_housing", "ae2:cell_component_64k"]);
    event.remove({ output: "appmek:chemical_storage_cell_256k" });
    event.shapeless("appmek:chemical_storage_cell_256k", ["appmek:chemical_cell_housing", "ae2:cell_component_256k"]);

    //Energy
    event.remove({ output: "appflux:fe_1k_cell" });
    event.shapeless("appflux:fe_1k_cell", ["appflux:fe_cell_housing", "appflux:core_1k"]);
    event.remove({ output: "appflux:fe_4k_cell" });
    event.shapeless("appflux:fe_4k_cell", ["appflux:fe_cell_housing", "appflux:core_4k"]);
    event.remove({ output: "appflux:fe_16k_cell" });
    event.shapeless("appflux:fe_16k_cell", ["appflux:fe_cell_housing", "appflux:core_16k"]);
    event.remove({ output: "appflux:fe_64k_cell" });
    event.shapeless("appflux:fe_64k_cell", ["appflux:fe_cell_housing", "appflux:core_64k"]);
    event.remove({ output: "appflux:fe_256k_cell" });
    event.shapeless("appflux:fe_256k_cell", ["appflux:fe_cell_housing", "appflux:core_256k"]);

    //Mana
    event.remove({ output: "appbot:mana_storage_cell_1k" });
    event.shapeless("appbot:mana_storage_cell_1k", ["appbot:mana_cell_housing", "anoxia:mana_cell_component_1k"]);
    event.remove({ output: "appbot:mana_storage_cell_4k" });
    event.shapeless("appbot:mana_storage_cell_4k", ["appbot:mana_cell_housing", "anoxia:mana_cell_component_4k"]);
    event.remove({ output: "appbot:mana_storage_cell_16k" });
    event.shapeless("appbot:mana_storage_cell_16k", ["appbot:mana_cell_housing", "anoxia:mana_cell_component_16k"]);
    event.remove({ output: "appbot:mana_storage_cell_64k" });
    event.shapeless("appbot:mana_storage_cell_64k", ["appbot:mana_cell_housing", "anoxia:mana_cell_component_64k"]);
    event.remove({ output: "appbot:mana_storage_cell_256k" });
    event.shapeless("appbot:mana_storage_cell_256k", ["appbot:mana_cell_housing", "anoxia:mana_cell_component_256k"]);

    //Source
    event.remove({ output: "arseng:source_storage_cell_1k" });
    event.shapeless("arseng:source_storage_cell_1k", ["arseng:source_cell_housing", "anoxia:source_cell_component_1k"]);
    event.remove({ output: "arseng:source_storage_cell_4k" });
    event.shapeless("arseng:source_storage_cell_4k", ["arseng:source_cell_housing", "anoxia:source_cell_component_4k"]);
    event.remove({ output: "arseng:source_storage_cell_16k" });
    event.shapeless("arseng:source_storage_cell_16k", ["arseng:source_cell_housing", "anoxia:source_cell_component_16k"]);
    event.remove({ output: "arseng:source_storage_cell_64k" });
    event.shapeless("arseng:source_storage_cell_64k", ["arseng:source_cell_housing", "anoxia:source_cell_component_64k"]);
    event.remove({ output: "arseng:source_storage_cell_256k" });
    event.shapeless("arseng:source_storage_cell_256k", ["arseng:source_cell_housing", "anoxia:source_cell_component_256k"]);

    //DISK
    event.remove({ output: "ae2things:disk_drive_1k" });
    event.shapeless("ae2things:disk_drive_1k", ["ae2things:disk_housing", "ae2:cell_component_1k"]);
    event.remove({ output: "ae2things:disk_drive_4k" });
    event.shapeless("ae2things:disk_drive_4k", ["ae2things:disk_housing", "ae2:cell_component_4k"]);
    event.remove({ output: "ae2things:disk_drive_16k" });
    event.shapeless("ae2things:disk_drive_16k", ["ae2things:disk_housing", "ae2:cell_component_16k"]);
    event.remove({ output: "ae2things:disk_drive_64k" });
    event.shapeless("ae2things:disk_drive_64k", ["ae2things:disk_housing", "ae2:cell_component_64k"]);
    event.remove({ output: "ae2things:disk_drive_256k" });
    event.shapeless("ae2things:disk_drive_256k", ["ae2things:disk_housing", "ae2:cell_component_256k"]);

    //Storage
    event.remove({ output: "ae2:cell_component_1k" });
    event.shaped("ae2:cell_component_1k", ["ABA", "BCB", "ABA"], { A: "ae2:certus_quartz_dust", B: "#forge:gems/certus_quartz", C: "ae2:logic_processor" });
    event.remove({ output: "ae2:cell_component_4k" });
    event.shaped("ae2:cell_component_4k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/electrotine_alloy", B: "ae2:calculation_processor", C: "ae2:cell_component_1k", D: "pneumaticcraft:capacitor" });
    event.remove({ output: "ae2:cell_component_16k" });
    event.shaped("ae2:cell_component_16k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/steel", B: "ae2:calculation_processor", C: "ae2:cell_component_4k", D: "ae2:quartz_vibrant_glass" });
    event.remove({ output: "ae2:cell_component_64k" });
    event.shaped("ae2:cell_component_64k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/dark_steel", B: "ae2:calculation_processor", C: "ae2:cell_component_16k", D: "ae2:quartz_vibrant_glass" });
    event.remove({ output: "ae2:cell_component_256k" });
    event.shaped("ae2:cell_component_256k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/netherite", B: "ae2:calculation_processor", C: "ae2:cell_component_64k", D: "ae2:quartz_vibrant_glass" });

    //Energy
    event.remove({ output: "appflux:core_1k" });
    event.shaped("appflux:core_1k", ["ABA", "BCB", "ABA"], { A: "minecraft:redstone", B: "appflux:redstone_crystal", C: "ae2:logic_processor" });
    event.remove({ output: "appflux:core_4k" });
    event.shaped("appflux:core_4k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/red_alloy", B: "appflux:energy_processor", C: "appflux:core_1k", D: "pneumaticcraft:capacitor" });
    event.remove({ output: "appflux:core_16k" });
    event.shaped("appflux:core_16k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/electrum", B: "appflux:energy_processor", C: "appflux:core_4k", D: "ae2:quartz_vibrant_glass" });
    event.remove({ output: "appflux:core_64k" });
    event.shaped("appflux:core_64k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/energetic_alloy", B: "appflux:energy_processor", C: "appflux:core_16k", D: "ae2:quartz_vibrant_glass" });
    event.remove({ output: "appflux:core_256k" });
    event.shaped("appflux:core_256k", ["ABA", "CDC", "ACA"], { A: "powah:steel_energized", B: "appflux:energy_processor", C: "appflux:core_64k", D: "ae2:quartz_vibrant_glass" });

    //// # =================================================================================================== #

    //// Portable
    //Item
    event.remove({ output: "ae2:portable_item_cell_1k" });
    event.shapeless("ae2:portable_item_cell_1k", ["ae2:chest", "ae2:cell_component_1k", "ae2:energy_cell", "ae2:item_cell_housing"]);
    event.remove({ output: "ae2:portable_item_cell_4k" });
    event.shapeless("ae2:portable_item_cell_4k", ["ae2:chest", "ae2:cell_component_4k", "ae2:energy_cell", "ae2:item_cell_housing"]);
    event.remove({ output: "ae2:portable_item_cell_16k" });
    event.shapeless("ae2:portable_item_cell_16k", ["ae2:chest", "ae2:cell_component_16k", "ae2:energy_cell", "ae2:item_cell_housing"]);
    event.remove({ output: "ae2:portable_item_cell_64k" });
    event.shapeless("ae2:portable_item_cell_64k", ["ae2:chest", "ae2:cell_component_64k", "ae2:energy_cell", "ae2:item_cell_housing"]);
    event.remove({ output: "ae2:portable_item_cell_256k" });
    event.shapeless("ae2:portable_item_cell_256k", ["ae2:chest", "ae2:cell_component_256k", "ae2:energy_cell", "ae2:item_cell_housing"]);

    //Fluid
    event.remove({ output: "ae2:portable_fluid_cell_1k" });
    event.shapeless("ae2:portable_fluid_cell_1k", ["ae2:chest", "ae2:cell_component_1k", "ae2:energy_cell", "ae2:fluid_cell_housing"]);
    event.remove({ output: "ae2:portable_fluid_cell_4k" });
    event.shapeless("ae2:portable_fluid_cell_4k", ["ae2:chest", "ae2:cell_component_4k", "ae2:energy_cell", "ae2:fluid_cell_housing"]);
    event.remove({ output: "ae2:portable_fluid_cell_16k" });
    event.shapeless("ae2:portable_fluid_cell_16k", ["ae2:chest", "ae2:cell_component_16k", "ae2:energy_cell", "ae2:fluid_cell_housing"]);
    event.remove({ output: "ae2:portable_fluid_cell_64k" });
    event.shapeless("ae2:portable_fluid_cell_64k", ["ae2:chest", "ae2:cell_component_64k", "ae2:energy_cell", "ae2:fluid_cell_housing"]);
    event.remove({ output: "ae2:portable_fluid_cell_256k" });
    event.shapeless("ae2:portable_fluid_cell_256k", ["ae2:chest", "ae2:cell_component_256k", "ae2:energy_cell", "ae2:fluid_cell_housing"]);

    //Mekanism
    event.remove({ output: "appmek:portable_chemical_storage_cell_1k" });
    event.shapeless("appmek:portable_chemical_storage_cell_1k", ["ae2:chest", "ae2:cell_component_1k", "ae2:energy_cell", "appmek:chemical_cell_housing"]);
    event.remove({ output: "appmek:portable_chemical_storage_cell_4k" });
    event.shapeless("appmek:portable_chemical_storage_cell_4k", ["ae2:chest", "ae2:cell_component_4k", "ae2:energy_cell", "appmek:chemical_cell_housing"]);
    event.remove({ output: "appmek:portable_chemical_storage_cell_16k" });
    event.shapeless("appmek:portable_chemical_storage_cell_16k", ["ae2:chest", "ae2:cell_component_16k", "ae2:energy_cell", "appmek:chemical_cell_housing"]);
    event.remove({ output: "appmek:portable_chemical_storage_cell_64k" });
    event.shapeless("appmek:portable_chemical_storage_cell_64k", ["ae2:chest", "ae2:cell_component_64k", "ae2:energy_cell", "appmek:chemical_cell_housing"]);
    event.remove({ output: "appmek:portable_chemical_storage_cell_256k" });
    event.shapeless("appmek:portable_chemical_storage_cell_256k", ["ae2:chest", "ae2:cell_component_256k", "ae2:energy_cell", "appmek:chemical_cell_housing"]);

    //Energy
    event.remove({ output: "appflux:fe_1k_portable_cell" });
    event.shapeless("appflux:fe_1k_portable_cell", ["ae2:chest", "appflux:core_1k", "ae2:energy_cell", "appflux:fe_cell_housing"]);
    event.remove({ output: "appflux:fe_4k_portable_cell" });
    event.shapeless("appflux:fe_4k_portable_cell", ["ae2:chest", "appflux:core_4k", "ae2:energy_cell", "appflux:fe_cell_housing"]);
    event.remove({ output: "appflux:fe_16k_portable_cell" });
    event.shapeless("appflux:fe_16k_portable_cell", ["ae2:chest", "appflux:core_16k", "ae2:energy_cell", "appflux:fe_cell_housing"]);
    event.remove({ output: "appflux:fe_64k_portable_cell" });
    event.shapeless("appflux:fe_64k_portable_cell", ["ae2:chest", "appflux:core_64k", "ae2:energy_cell", "appflux:fe_cell_housing"]);
    event.remove({ output: "appflux:fe_256k_portable_cell" });
    event.shapeless("appflux:fe_256k_portable_cell", ["ae2:chest", "appflux:core_256k", "ae2:energy_cell", "appflux:fe_cell_housing"]);

    //Mana
    event.remove({ output: "appbot:portable_mana_storage_cell_1k" });
    event.shapeless("appbot:portable_mana_storage_cell_1k", ["ae2:chest", "anoxia:mana_cell_component_1k", "ae2:energy_cell", "appbot:mana_cell_housing"]);
    event.remove({ output: "appbot:portable_mana_storage_cell_4k" });
    event.shapeless("appbot:portable_mana_storage_cell_4k", ["ae2:chest", "anoxia:mana_cell_component_4k", "ae2:energy_cell", "appbot:mana_cell_housing"]);
    event.remove({ output: "appbot:portable_mana_storage_cell_16k" });
    event.shapeless("appbot:portable_mana_storage_cell_16k", ["ae2:chest", "anoxia:mana_cell_component_16k", "ae2:energy_cell", "appbot:mana_cell_housing"]);
    event.remove({ output: "appbot:portable_mana_storage_cell_64k" });
    event.shapeless("appbot:portable_mana_storage_cell_64k", ["ae2:chest", "anoxia:mana_cell_component_64k", "ae2:energy_cell", "appbot:mana_cell_housing"]);
    event.remove({ output: "appbot:portable_mana_storage_cell_256k" });
    event.shapeless("appbot:portable_mana_storage_cell_256k", ["ae2:chest", "anoxia:mana_cell_component_256k", "ae2:energy_cell", "appbot:mana_cell_housing"]);

    //Source
    event.remove({ output: "arseng:portable_source_cell_1k" });
    event.shapeless("arseng:portable_source_cell_1k", ["ae2:chest", "anoxia:source_cell_component_1k", "ae2:energy_cell", "arseng:source_cell_housing"]);
    event.remove({ output: "arseng:portable_source_cell_4k" });
    event.shapeless("arseng:portable_source_cell_4k", ["ae2:chest", "anoxia:source_cell_component_4k", "ae2:energy_cell", "arseng:source_cell_housing"]);
    event.remove({ output: "arseng:portable_source_cell_16k" });
    event.shapeless("arseng:portable_source_cell_16k", ["ae2:chest", "anoxia:source_cell_component_16k", "ae2:energy_cell", "arseng:source_cell_housing"]);
    event.remove({ output: "arseng:portable_source_cell_64k" });
    event.shapeless("arseng:portable_source_cell_64k", ["ae2:chest", "anoxia:source_cell_component_64k", "ae2:energy_cell", "arseng:source_cell_housing"]);
    event.remove({ output: "arseng:portable_source_cell_256k" });
    event.shapeless("arseng:portable_source_cell_256k", ["ae2:chest", "anoxia:source_cell_component_256k", "ae2:energy_cell", "arseng:source_cell_housing"]);

    //ME Infinity
    event.remove({ output: Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}') });
    event.shaped(Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'), ["ABA", "CDC", "EFE"], {
        A: "ae2:quartz_vibrant_glass",
        B: "compacter:cobbler",
        C: "projectred_core:red_ingot",
        D: "ae2:cell_component_256k",
        E: "minecraft:iron_ingot",
        F: "ae2:item_cell_housing",
    });

    event.remove({ output: Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:f",id:"minecraft:water"}}') });
    event.shaped(Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), ["ABA", "CDC", "EFE"], {
        A: "ae2:quartz_vibrant_glass",
        B: "cookingforblockheads:sink",
        C: "projectred_core:electrotine_ingot",
        D: "ae2:cell_component_256k",
        E: "minecraft:copper_ingot",
        F: "ae2:fluid_cell_housing",
    });
});
