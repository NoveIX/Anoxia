ServerEvents.recipes((event) => {
    //Uranium
    event.smelting("mekanism:ingot_uranium", "powah:uraninite");

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

    //// # =================================================================================================== #

    //Metallurgic Infusing
    const AlloyPattern = [
        //Basic Circuit
        { get: { item: "mekanism:basic_control_circuit" }, put: { ingredient: { item: "pneumaticcraft:transistor" } }, chem: { amount: 40, tag: "mekanism:redstone" } },

        //Alloy Infused
        { get: { item: "mekanism:alloy_infused" }, put: { ingredient: { item: "pneumaticcraft:capacitor" } }, chem: { amount: 40, tag: "mekanism:redstone" } },

        //Alloy Reinforced
        { get: { item: "mekanism:alloy_reinforced" }, put: { ingredient: { item: "mekanism:alloy_infused" } }, chem: { amount: 80, tag: "mekanism:diamond" } },

        //Atomic Alloy
        { get: { item: "mekanism:alloy_atomic" }, put: { ingredient: { item: "mekanism:alloy_reinforced" } }, chem: { amount: 160, tag: "mekanism:refined_obsidian" } },
    ];
    AlloyPattern.forEach((recipe) => {
        event.remove({ output: recipe.get, type: "mekanism:metallurgic_infusing" });
        event.custom({
            type: "mekanism:metallurgic_infusing",
            chemicalInput: recipe.chem,
            itemInput: recipe.put,
            output: recipe.get,
        });
    });
});
