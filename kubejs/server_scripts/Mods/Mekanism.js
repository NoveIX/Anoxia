ServerEvents.recipes((event) => {
    //Advanced Circuit
    event.remove({ output: "mekanism:advanced_control_circuit" });
    event.shaped("mekanism:advanced_control_circuit", ["SSS", "ACA", "SSS"], { S: "#forge:ingots/signalum", A: "mekanism:alloy_infused", C: "mekanism:basic_control_circuit" });

    //Elite Circuit
    event.remove({ output: "mekanism:elite_control_circuit" });
    event.shaped("mekanism:elite_control_circuit", ["SSS", "ACA", "SSS"], { S: "#forge:ingots/enderium", A: "mekanism:alloy_reinforced", C: "mekanism:advanced_control_circuit" });

    //Utimate Circuit
    event.remove({ output: "mekanism:ultimate_control_circuit" });
    event.shaped("mekanism:ultimate_control_circuit", ["SSS", "ACA", "SSS"], { S: "#forge:ingots/melodium", A: "mekanism:alloy_atomic", C: "mekanism:elite_control_circuit" });

    //Steel Casing
    event.remove({ output: "mekanism:steel_casing" });
    event.shaped("mekanism:steel_casing", ["DUD", "UFU", "DUD"], { D: "#forge:ingots/dark_steel", U: "#forge:circuits/ultimate", F: "thermal:machine_frame" });

    //Metallurgic infuser
    event.remove({ output: "mekanism:metallurgic_infuser" });
    event.shaped("mekanism:metallurgic_infuser", ["ABA", "CDC", "ABA"], { A: "#forge:ingots/redstone_alloy", B: "enderio:alloy_smelter", C: "#forge:ingots/osmium", D: "mekanism:steel_casing" });

    //Tier Installer
    event.remove({ output: "mekanism:basic_tier_installer" });
    event.shaped("mekanism:basic_tier_installer", ["ABA", "CDC", "ABA"], { A: "redstone_arsenal:flux_gear", B: "mekanism:basic_control_circuit", C: "#forge:ingots/melodium", D: "actuallyadditions:empowered_void_crystal_block" });

    //// # =================================================================================================== #

    //Metallurgic Infusing
    const AlloyPattern = [
        { get: "mekanism:basic_control_circuit", put: "pneumaticcraft:transistor", chem: "mekanism:redstone", qty: 40 },
        { get: "mekanism:alloy_infused", put: "pneumaticcraft:capacitor", chem: "mekanism:redstone", qty: 40 },
        { get: "mekanism:alloy_reinforced", put: "mekanism:alloy_infused", chem: "mekanism:diamond", qty: 80 },
        { get: "mekanism:alloy_atomic", put: "mekanism:alloy_reinforced", chem: "mekanism:refined_obsidian", qty: 160 },
    ];
    AlloyPattern.forEach((recipe) => {
        event.remove({ output: recipe.get, type: "mekanism:metallurgic_infusing" });
        event.custom({
            type: "mekanism:metallurgic_infusing",
            itemInput: { ingredient: { item: recipe.put } },
            output: { item: recipe.get },
            chemicalInput: { amount: recipe.qty, tag: recipe.chem },
        });
    });
});
