ServerEvents.recipes((event) => {
    //Inscriber
    event.remove({ output: "ae2:inscriber" });
    event.shaped("ae2:inscriber", ["ABA", "C A", "ABA"], { A: "#forge:ingots/compressed_iron", B: "minecraft:sticky_piston", C: "#forge:ingots/conductive_alloy" });

    //4k Item
    event.remove({ output: "ae2:cell_component_4k" });
    event.shaped("ae2:cell_component_4k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/electrotine_alloy", B: "ae2:calculation_processor", C: "ae2:cell_component_1k", D: "pneumaticcraft:capacitor" });
    event.remove({ output: "appflux:core_4k" });
    event.shaped("appflux:core_4k", ["ABA", "CDC", "ACA"], { A: "#forge:ingots/red_alloy", B: "ae2:calculation_processor", C: "appflux:core_1k", D: "pneumaticcraft:capacitor" });

    //Disk Drive
    event.remove({ output: "ae2:drive" });
    event.shaped("ae2:drive", ["ABA", "CDE", "FBF"], { A: "ae2:engineering_processor", B: "mekanism:advanced_control_circuit", C: "oc2r:memory_extra_large", D: "enderio:z_logic_controller", E: "ae2:fluix_smart_cable", F: "enderio:dark_bimetal_gear" });

    //Mana disk
    event.remove({ output: "appbot:mana_storage_cell_1k" });
    event.shapeless("appbot:mana_storage_cell_1k", ["appbot:mana_cell_housing", "botanicalextramachinery:cell_component_1m"]);

    event.remove({ output: "appbot:mana_storage_cell_4k" });
    event.shapeless("appbot:mana_storage_cell_4k", ["appbot:mana_cell_housing", "botanicalextramachinery:cell_component_4m"]);

    event.remove({ output: "appbot:mana_storage_cell_16k" });
    event.shapeless("appbot:mana_storage_cell_16k", ["appbot:mana_cell_housing", "botanicalextramachinery:cell_component_16m"]);

    event.remove({ output: "appbot:mana_storage_cell_64k" });
    event.shapeless("appbot:mana_storage_cell_64k", ["appbot:mana_cell_housing", "botanicalextramachinery:cell_component_64m"]);

    event.remove({ output: "appbot:mana_storage_cell_256k" });
    event.shapeless("appbot:mana_storage_cell_256k", ["appbot:mana_cell_housing", "botanicalextramachinery:cell_component_256m"]);
});
