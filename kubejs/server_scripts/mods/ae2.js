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

    //Disk Size
    const diskSize = ["1k", "4k", "16k", "64k", "256k"];
    diskSize.forEach((size) => {
        //Item disk
        event.remove({ output: `ae2:item_storage_cell_${size}` });
        event.shapeless(`ae2:item_storage_cell_${size}`, ["ae2:item_cell_housing", `ae2:cell_component_${size}`]);

        //Fluid disk
        event.remove({ output: `ae2:fluid_storage_cell_${size}` });
        event.shapeless(`ae2:fluid_storage_cell_${size}`, ["ae2:fluid_cell_housing", `ae2:cell_component_${size}`]);

        //Chemical disk
        event.remove({ output: `appmek:chemical_storage_cell_${size}` });
        event.shapeless(`appmek:chemical_storage_cell_${size}`, ["appmek:chemical_cell_housing", `ae2:cell_component_${size}`]);

        //Energy disk
        event.remove({ output: `appflux:fe_${size}_cell` });
        event.shapeless(`appflux:fe_${size}_cell`, ["appflux:fe_cell_housing", `appflux:core_${size}`]);

        //Mana disk
        event.remove({ output: `appbot:mana_storage_cell_${size}` });
        event.shapeless(`appbot:mana_storage_cell_${size}`, ["appbot:mana_cell_housing", `anoxia:mana_cell_component_${size}`]);

        //Source disk
        event.remove({ output: `arseng:source_storage_cell_${size}` });
        event.shapeless(`arseng:source_storage_cell_${size}`, ["arseng:source_cell_housing", `anoxia:source_cell_component_${size}`]);

        //DISK
        event.remove({ output: `ae2things:disk_drive_${size}` });
        event.shapeless(`ae2things:disk_drive_${size}`, ["ae2things:disk_housing", `ae2:cell_component_${size}`]);

        //Item portable
        event.remove({ output: `ae2:portable_item_cell_${size}` });
        event.shapeless(`ae2:portable_item_cell_${size}`, ["ae2:chest", `ae2:cell_component_${size}`, "ae2:energy_cell", "ae2:item_cell_housing"]);

        //Fluid portable
        event.remove({ output: `ae2:portable_fluid_cell_${size}` });
        event.shapeless(`ae2:portable_fluid_cell_${size}`, ["ae2:chest", `ae2:cell_component_${size}`, "ae2:energy_cell", "ae2:fluid_cell_housing"]);

        //Chemical portable
        event.remove({ output: `appmek:portable_chemical_storage_cell_${size}` });
        event.shapeless(`appmek:portable_chemical_storage_cell_${size}`, ["ae2:chest", `ae2:cell_component_${size}`, "ae2:energy_cell", "appmek:chemical_cell_housing"]);

        //Energy portable
        event.remove({ output: `appflux:fe_${size}_portable_cell` });
        event.shapeless(`appflux:fe_${size}_portable_cell`, ["ae2:chest", `appflux:core_${size}`, "ae2:energy_cell", "appflux:fe_cell_housing"]);

        //Mana portable
        event.remove({ output: `appbot:portable_mana_storage_cell_${size}` });
        event.shapeless(`appbot:portable_mana_storage_cell_${size}`, ["ae2:chest", `anoxia:mana_cell_component_${size}`, "ae2:energy_cell", "appbot:mana_cell_housing"]);

        //Source portable
        event.remove({ output: `arseng:portable_source_cell_${size}` });
        event.shapeless(`arseng:portable_source_cell_${size}`, ["ae2:chest", `anoxia:source_cell_component_${size}`, "ae2:energy_cell", "arseng:source_cell_housing"]);
    });

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

    //# =================================================================================================== #

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
