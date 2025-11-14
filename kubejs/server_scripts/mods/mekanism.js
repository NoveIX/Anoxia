ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Infusion
        "mekanism:infusion_conversion/carbon/from_coal",
        "mekanism:infusion_conversion/carbon/from_coal_block",
        "mekanism:infusion_conversion/carbon/from_charcoal",
        "mekanism:infusion_conversion/carbon/from_charcoal_block",

        //Metallurgic
        "mekanism:control_circuit/basic",
        "mekanism:metallurgic_infusing/alloy/infused",
        "mekanism:metallurgic_infusing/alloy/reinforced",
        "mekanism:metallurgic_infusing/alloy/atomic",
        "mekanism:processing/iron/enriched",
        "mekanism:processing/steel/enriched_iron_to_dust",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //# =================================================================================================== #

    //Advanced Circuit
    event.remove({ output: "mekanism:advanced_control_circuit" });
    event.shaped("mekanism:advanced_control_circuit", ["AAA", "BCB", "AAA"], { A: "#forge:ingots/signalum", B: "mekanism:alloy_infused", C: "mekanism:basic_control_circuit" });

    //Elite Circuit
    event.remove({ output: "mekanism:elite_control_circuit" });
    event.shaped("mekanism:elite_control_circuit", ["AAA", "BCB", "AAA"], { A: "#forge:ingots/enderium", B: "mekanism:alloy_reinforced", C: "mekanism:advanced_control_circuit" });

    //Utimate Circuit
    event.remove({ output: "mekanism:ultimate_control_circuit" });
    event.shaped("mekanism:ultimate_control_circuit", ["AAA", "BCB", "AAA"], { A: "#forge:ingots/melodium", B: "mekanism:alloy_atomic", C: "mekanism:elite_control_circuit" });

    //Steel Casing
    event.remove({ output: "mekanism:steel_casing" });
    event.shaped("mekanism:steel_casing", ["ABA", "BCB", "ABA"], { A: "#forge:ingots/dark_steel", B: "pneumaticcraft:transistor", C: "thermal:machine_frame" });

    //Tier Installer
    event.remove({ output: "mekanism:basic_tier_installer" });
    event.shaped("mekanism:basic_tier_installer", ["ABA", "CDC", "ABA"], { A: "redstone_arsenal:flux_gear", B: "mekanism:basic_control_circuit", C: "#forge:ingots/melodium", D: "actuallyadditions:empowered_void_crystal_block" });

    //Metallurgic infuser
    event.remove({ output: "mekanism:metallurgic_infuser" });
    event.shaped("mekanism:metallurgic_infuser", ["ABA", "CDC", "ABA"], { A: "#forge:ingots/redstone_alloy", B: "enderio:alloy_smelter", C: "#forge:ingots/osmium", D: "mekanism:steel_casing" });

    //# =================================================================================================== #

    //Metallurgic Infusing
    const AlloyPattern = [
        { get: "mekanism:basic_control_circuit", put: "pneumaticcraft:transistor", chem: "mekanism:redstone", qty: 40 },
        { get: "mekanism:alloy_infused", put: "pneumaticcraft:capacitor", chem: "mekanism:redstone", qty: 40 },
        { get: "mekanism:alloy_reinforced", put: "mekanism:alloy_infused", chem: "mekanism:diamond", qty: 80 },
        { get: "mekanism:alloy_atomic", put: "mekanism:alloy_reinforced", chem: "mekanism:refined_obsidian", qty: 160 },
        { get: "mekanism:enriched_iron", put: "minecraft:iron_ingot", chem: "mekanism:carbon", qty: 20 },
        { get: "thermal:steel_dust", put: "mekanism:enriched_iron", chem: "mekanism:carbon", qty: 20 },
    ];
    AlloyPattern.forEach((recipe) => {
        event.custom({
            type: "mekanism:metallurgic_infusing",
            itemInput: { ingredient: { item: recipe.put } },
            output: { item: recipe.get },
            chemicalInput: { amount: recipe.qty, tag: recipe.chem },
        });
    });

    //# =================================================================================================== #

    //#region Enriching
    const EnrichingPattern = [
        {
            //JAOPCA Integration
            get: { count: 2, item: "actuallyadditions:black_quartz" },
            put: { ingredient: { tag: "forge:ores/black_quartz" } },
        },
    ];
    EnrichingPattern.forEach((recipe) => {
        event.custom({
            type: "mekanism:enriching",
            input: recipe.put,
            output: recipe.get,
        });
    });
    //#endregion

    //# =================================================================================================== #

    //#region Infusion
    const InfusionPattern = [
        {
            get: { amount: 10, infuse_type: "mekanism:carbon" },
            put: { ingredient: [{ item: "minecraft:coal" }, { tag: "forge:dusts/coal" }, { item: "minecraft:charcoal" }, { tag: "forge:dusts/charcoal" }] },
        },
        {
            get: { amount: 90, infuse_type: "mekanism:carbon" },
            put: { ingredient: [{ tag: "forge:storage_blocks/coal" }, { tag: "forge:storage_blocks/charcoal" }] },
        },
        {
            get: { amount: 20, infuse_type: "mekanism:carbon" },
            put: { ingredient: [{ tag: "forge:coal_coke" }, { tag: "forge:dusts/coal_coke" }] },
        },
        {
            get: { amount: 180, infuse_type: "mekanism:carbon" },
            put: { ingredient: [{ tag: "forge:storage_blocks/coal_coke" }] },
        },
    ];
    InfusionPattern.forEach((recipe) => {
        event.custom({
            type: "mekanism:infusion_conversion",
            input: recipe.put,
            output: recipe.get,
        });
    });
    //#endregion
});
