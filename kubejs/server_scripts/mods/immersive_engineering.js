ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        "immersiveengineering:crafting/slag_brick_from_slab",
        "immersiveengineering:crafting/clinker_brick_from_slab",
        "immersiveengineering:crafting/hempcrete_from_slab",
        "immersiveengineering:crafting/hempcrete_brick_from_slab",
        "immersiveengineering:crafting/concrete_from_slab",
        "immersiveengineering:crafting/concrete_brick_from_slab",
        "immersiveengineering:crafting/concrete_tile_from_slab",
        "immersiveengineering:crafting/insulating_glass_from_slab",
        "immersiveengineering:crafting/treated_wood_horizontal_from_slab",
        "immersiveengineering:crafting/treated_wood_vertical_from_slab",
        "immersiveengineering:crafting/treated_wood_packaged_from_slab",
        "immersiveengineering:crafting/steel_scaffolding_grate_top_from_slab",
        "immersiveengineering:crafting/alu_scaffolding_grate_top_from_slab",
        "immersiveengineering:crafting/steel_scaffolding_wooden_top_from_slab",
        "immersiveengineering:crafting/alu_scaffolding_wooden_top_from_slab",

        //Sheetmetal
        "immersiveengineering:crafting/sheetmetal_copper_from_slab",
        "immersiveengineering:crafting/sheetmetal_aluminum_from_slab",
        "immersiveengineering:crafting/sheetmetal_lead_from_slab",
        "immersiveengineering:crafting/sheetmetal_silver_from_slab",
        "immersiveengineering:crafting/sheetmetal_nickel_from_slab",
        "immersiveengineering:crafting/sheetmetal_uranium_from_slab",
        "immersiveengineering:crafting/sheetmetal_constantan_from_slab",
        "immersiveengineering:crafting/sheetmetal_electrum_from_slab",
        "immersiveengineering:crafting/sheetmetal_steel_from_slab",
        "immersiveengineering:crafting/sheetmetal_iron_from_slab",
        "immersiveengineering:crafting/sheetmetal_gold_from_slab",

        //Sheetmetal
        "immersiveengineering:crafting/sheetmetal_colored_white_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_orange_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_magenta_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_light_blue_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_yellow_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_lime_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_pink_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_gray_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_light_gray_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_cyan_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_purple_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_blue_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_brown_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_green_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_red_from_slab",
        "immersiveengineering:crafting/sheetmetal_colored_black_from_slab",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Recipe

    //Coal Coke Block
    event.shaped("immersiveengineering:coal_coke", ["AAA", "AAA", "AAA"], { A: "#forge:coal_coke" });

    //LV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_copper" });
    event.shapeless("immersiveengineering:wirecoil_copper", ["immersiveengineering:wirecoil_copper_ins", "#immersiveengineering:tools/wirecutters"]);
    event.shaped("immersiveengineering:wirecoil_copper", ["AAA", "ABA", "AAA"], { A: "#forge:wires/copper", B: "createaddition:spool" });
    event.shapeless("immersiveengineering:wirecoil_copper", ["createaddition:copper_spool"]);

    //LV Insulated Coil
    event.remove({ output: "immersiveengineering:wirecoil_copper_ins" });
    event.shaped("immersiveengineering:wirecoil_copper_ins", [" A ", "ABA", " A "], { A: "immersiveengineering:hemp_fabric", B: "immersiveengineering:wirecoil_copper" });

    //MV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_electrum" });
    event.shapeless("immersiveengineering:wirecoil_electrum", ["immersiveengineering:wirecoil_electrum_ins", "#immersiveengineering:tools/wirecutters"]);
    event.shaped("immersiveengineering:wirecoil_electrum", ["AAA", "ABA", "AAA"], { A: "#forge:wires/electrum", B: "createaddition:spool" });
    event.shapeless("immersiveengineering:wirecoil_electrum", ["createaddition:electrum_spool"]);

    //MV Insulated Coil
    event.remove({ output: "immersiveengineering:wirecoil_electrum_ins" });
    event.shaped("immersiveengineering:wirecoil_electrum_ins", [" A ", "ABA", " A "], { A: "immersiveengineering:hemp_fabric", B: "immersiveengineering:wirecoil_electrum" });

    //HV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_steel" });
    event.shaped("immersiveengineering:wirecoil_steel", ["ABA", "BCB", "ABA"], { A: "#forge:wires/aluminum", B: "#forge:wires/steel", C: "createaddition:spool" });

    //Structure Coil
    event.remove({ output: "immersiveengineering:wirecoil_structure_steel" });
    event.shaped("immersiveengineering:wirecoil_structure_steel", ["AAA", "ABA", "AAA"], { A: "#forge:wires/steel", B: "createaddition:spool" });

    //Redstone Coil
    event.remove({ output: "immersiveengineering:wirecoil_redstone" });
    event.shaped("immersiveengineering:wirecoil_redstone", ["AAA", "BCB", "AAA"], { A: "#forge:wires/aluminum", B: "#forge:ingots/red_alloy", C: "createaddition:spool" });

    //Rope Coil
    event.remove({ output: "immersiveengineering:wirecoil_structure_rope" });
    event.shaped("immersiveengineering:wirecoil_structure_rope", ["AAA", "ABA", "AAA"], { A: "immersiveengineering:hemp_fiber", B: "createaddition:spool" });

    //Saw Blade
    event.remove({ output: "immersiveengineering:sawblade" });
    event.shaped("immersiveengineering:sawblade", [" A ", "ABA", " A "], { A: "#forge:plates/steel", B: "#forge:gears/steel" });

    //Sawdust Flooring
    event.remove({ output: "immersiveengineering:sawdust" });
    event.shaped(Item.of("immersiveengineering:sawdust", 3), ["AAA"], { A: "#forge:dusts/wood" });

    //Mechanical Iron
    event.remove({ output: "immersiveengineering:component_iron" });
    event.shaped("immersiveengineering:component_iron", ["A A", " B ", "A A"], { A: "#forge:plates/iron", B: "#forge:gears/copper" });

    //Mechanical Steel
    event.remove({ output: "immersiveengineering:component_steel" });
    event.shaped("immersiveengineering:component_steel", ["A A", " B ", "A A"], { A: "#forge:plates/steel", B: "#forge:gears/copper" });

    //Slag Brick
    event.remove({ output: "immersiveengineering:slag_brick" });
    event.shaped(Item.of("immersiveengineering:slag_brick", 4), ["AA", "AA"], { A: "#forge:slag" });

    //Scaffoling
    event.remove({ output: "immersiveengineering:treated_scaffold" });
    event.shaped(Item.of("immersiveengineering:treated_scaffold", 3), ["AAA", " B ", "B B"], { A: "#forge:treated_wood", B: "#forge:rods/wooden" });

    //Scaffoling Steel
    event.remove({ output: "immersiveengineering:steel_scaffolding_standard" });
    event.shaped(Item.of("immersiveengineering:steel_scaffolding_standard", 3), ["AAA", " B ", "B B"], { A: "#forge:plates/steel", B: "#forge:rods/steel" });

    //Scaffoling Aluminum
    event.remove({ output: "immersiveengineering:alu_scaffolding_standard" });
    event.shaped(Item.of("immersiveengineering:alu_scaffolding_standard", 3), ["AAA", " B ", "B B"], { A: "#forge:plates/aluminum", B: "#forge:rods/aluminum" });

    //Concrete Leaded
    event.remove({ output: "immersiveengineering:concrete_leaded" });
    event.shaped("immersiveengineering:concrete_leaded", ["A A", " B ", "A A"], { A: "#forge:plates/lead", B: "immersiveengineering:concrete" });

    //LV Accumulator
    event.remove({ output: "immersiveengineering:capacitor_lv" });
    event.shaped("immersiveengineering:capacitor_lv", ["AAA", "BCB", "DED"], { A: "#forge:plates/copper", B: "immersiveengineering:wirecoil_copper", C: "immersiveengineering:redstone_acid_bucket", D: "#forge:treated_wood", E: "industrialforegoing:machine_frame_pity" });

    //LM Accumulator
    event.remove({ output: "immersiveengineering:capacitor_mv" });
    event.shaped("immersiveengineering:capacitor_mv", ["AAA", "BCB", "DED"], { A: "#forge:plates/electrum", B: "immersiveengineering:wirecoil_electrum", C: "immersiveengineering:redstone_acid_bucket", D: "#forge:treated_wood", E: "immersiveengineering:capacitor_lv" });

    //LH Accumulator
    event.remove({ output: "immersiveengineering:capacitor_hv" });
    event.shaped("immersiveengineering:capacitor_hv", ["AAA", "BCB", "DED"], { A: "#forge:plates/steel", B: "immersiveengineering:wirecoil_steel", C: "immersiveengineering:redstone_acid_bucket", D: "#forge:treated_wood", E: "immersiveengineering:capacitor_mv" });

    ////Machine Engineering Block

    //Redstone
    event.remove({ output: "immersiveengineering:rs_engineering" });
    event.shaped(Item.of("immersiveengineering:rs_engineering", 2), ["ABA", "BCB", "ABA"], { A: "#forge:plates/invar", B: "immersiveengineering:wirecoil_redstone", C: "immersiveengineering:coil_mv" });

    //Light
    event.remove({ output: "immersiveengineering:light_engineering" });
    event.shaped(Item.of("immersiveengineering:light_engineering", 2), ["ABA", "CDC", "ABA"], { A: "#forge:plates/aluminum", B: "immersiveengineering:component_iron", C: ["#forge:ingots/electrotine_alloy", "#forge:ingots/red_alloy"], D: "#forge:gears/rose_gold" });

    //Heavy
    event.remove({ output: "immersiveengineering:heavy_engineering" });
    event.shaped(Item.of("immersiveengineering:heavy_engineering", 2), ["ABA", "CDC", "ABA"], { A: "#forge:plates/steel", B: "immersiveengineering:component_steel", C: ["#forge:ingots/electrotine_alloy", "#forge:ingots/red_alloy"], D: "#forge:gears/electrum" });

    //Generator
    event.remove({ output: "immersiveengineering:generator" });
    event.shaped(Item.of("immersiveengineering:generator", 2), ["ABA", "BCB", "ABA"], { A: "immersiveengineering:sheetmetal_steel", B: "immersiveengineering:coil_mv", C: "immersiveengineering:dynamo" });

    //Radiator
    event.remove({ output: "immersiveengineering:radiator" });
    event.shaped(Item.of("immersiveengineering:radiator", 2), ["ABA", "BCB", "ABA"], { A: "immersiveengineering:sheetmetal_steel", B: "#forge:plates/constantan", C: "minecraft:water_bucket" });

    //External Heater
    event.remove({ output: "immersiveengineering:furnace_heater" });
    event.shaped("immersiveengineering:furnace_heater", ["ABA", "CDC", "AEA"], { A: "#forge:plates/invar", B: "anoxia:coils/copper", C: "#forge:ingots/graphite", D: "immersiveengineering:coil_lv", E: "#forge:ingots/red_alloy" });

    //Kinetic
    event.remove({ output: "immersiveengineering:dynamo" });
    event.shaped("immersiveengineering:dynamo", ["ABA", "CDC"], { A: "#forge:ingots/red_alloy", B: "immersiveengineering:component_iron", C: "#forge:gears/iron", D: "immersiveengineering:coil_lv" });

    //Thermoelectric
    event.remove({ output: "immersiveengineering:thermoelectric_generator" });
    event.shaped("immersiveengineering:thermoelectric_generator", ["ABA", "CDC", "AEA"], { A: "#forge:plates/constantan", B: "#forge:plates/steel", C: "#forge:ingots/red_alloy", D: "immersiveengineering:furnace_heater", E: "#forge:gears/constantan" });

    ////Storage Block
    const StorageBlockIE = [
        { get: "immersiveengineering:storage_aluminum", put: "#forge:ingots/aluminum" },
        { get: "immersiveengineering:storage_lead", put: "#forge:ingots/lead" },
        { get: "immersiveengineering:storage_silver", put: "#forge:ingots/silver" },
        { get: "immersiveengineering:storage_nickel", put: "#forge:ingots/nickel" },
        { get: "immersiveengineering:storage_uranium", put: "#forge:ingots/uranium" },
        { get: "immersiveengineering:storage_constantan", put: "#forge:ingots/constantan" },
        { get: "immersiveengineering:storage_electrum", put: "#forge:ingots/electrum" },
        { get: "immersiveengineering:storage_steel", put: "#forge:ingots/steel" },
    ];
    StorageBlockIE.forEach((recipe) => {
        event.remove({ output: recipe.get });
        event.shaped(recipe.get, ["AAA", "AAA", "AAA"], { A: recipe.put });
    });

    //Furnace
    //Coke Brick
    event.remove({ output: "immersiveengineering:cokebrick" });
    event.shaped("immersiveengineering:cokebrick", ["ABA", "BCB", "ABA"], { A: "exnihilosequentia:porcelain_clay", B: "#forge:ingots/brick", C: "#forge:sandstone/colorless" });

    //Kiln Brick
    event.remove({ output: "immersiveengineering:alloybrick" });
    event.shaped("immersiveengineering:alloybrick", ["AB", "BA"], { A: "#forge:sandstone/red", B: "#forge:ingots/brick" });

    //Blast Brick
    event.remove({ output: "immersiveengineering:blastbrick" });
    event.shaped("immersiveengineering:blastbrick", ["ABA", "BCB", "ABA"], { A: "#forge:ingots/nether_brick", B: "#forge:ingots/brick", C: "minecraft:blaze_powder" });

    //Blast Brick Reinforced
    event.remove({ output: "immersiveengineering:blastbrick_reinforced" });
    event.shaped("immersiveengineering:blastbrick_reinforced", ["A A", " B ", "A A"], { A: "#forge:plates/steel", B: "immersiveengineering:blastbrick" });

    //#endregion

    //// # =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        {
            get: { base_ingredient: { item: "projectred_core:red_ingot" }, count: 1 },
            put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
            add: { base_ingredient: { tag: "forge:dusts/redstone" }, count: 4 },
        },
        {
            get: { base_ingredient: { item: "projectred_core:electrotine_ingot" }, count: 1 },
            put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
            add: { base_ingredient: { tag: "forge:dusts/electrotine" }, count: 4 },
        },
    ];
    AlloyPattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:alloy",
            input0: recipe.put,
            input1: recipe.add,
            result: recipe.get,
            time: 200,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region ArcFurnace
    const ArcFurnacePattern = [
        {
            get: [{ base_ingredient: { item: "projectred_core:red_ingot" }, count: 1 }],
            put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
            add: [{ base_ingredient: { tag: "forge:dusts/redstone" }, count: 4 }],
        },
        {
            get: [{ base_ingredient: { item: "projectred_core:electrotine_ingot" }, count: 1 }],
            put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
            add: [{ base_ingredient: { tag: "forge:dusts/electrotine" }, count: 4 }],
        },
    ];
    ArcFurnacePattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            input: recipe.put,
            additives: recipe.add,
            results: recipe.get,
            energy: 51200,
            time: 100,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region BlastFurnace
    event.remove({ type: "immersiveengineering:blast_furnace" });
    const BlastFurnacePattern = [
        { get: { item: "thermal:steel_ingot" }, put: { tag: "forge:ingots/iron" }, qty: 1, tick: 2400 },
        { get: { item: "thermal:steel_block" }, put: { tag: "forge:storage_blocks/iron" }, qty: 9, tick: 21600 },
    ];
    BlastFurnacePattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:blast_furnace",
            input: recipe.put,
            result: recipe.get,
            slag: { base_ingredient: { tag: "forge:slag" }, count: recipe.qty },
            time: recipe.tick,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region BlastFurnace Fuel
    event.remove({ type: "immersiveengineering:blast_furnace_fuel" });
    const BlastFurnaceFuelPattern = [
        { fuel: { tag: "forge:charcoal" }, tick: 300 },
        { fuel: { tag: "forge:storage_blocks/charcoal" }, tick: 3000 },
        { fuel: { tag: "forge:coal_coke" }, tick: 1200 },
        { fuel: { tag: "forge:storage_blocks/coal_coke" }, tick: 10800 },
    ];
    BlastFurnaceFuelPattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:blast_furnace_fuel",
            input: recipe.fuel,
            time: recipe.tick,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region CokeOven
    event.remove({ type: "immersiveengineering:coke_oven" });
    const CokeOvenPattern = [
        {
            get: { item: "minecraft:charcoal" },
            put: { tag: "minecraft:logs" },
            fluid: 250,
            tick: 900,
        },
        {
            get: { item: "thermal:coal_coke" },
            put: { item: "minecraft:coal" },
            fluid: 500,
            tick: 1800,
        },
        {
            get: { item: "thermal:coal_coke_block" },
            put: { item: "minecraft:coal_block" },
            fluid: 4500,
            tick: 16200,
        },
    ];
    CokeOvenPattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:coke_oven",
            input: recipe.put,
            result: recipe.get,
            creosote: recipe.fluid,
            time: recipe.tick,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Refinery
    const RefineryPattern = [
        {
            get: { amount: 16, fluid: "enderio:nutrient_distillation" },
            put1: { amount: 8, tag: "anoxia:water" },
            put2: { amount: 8, tag: "anoxia:refined_canola" },
            mixer: { tag: "anoxia:fermenter" },
        },
        {
            get: { amount: 16, fluid: "thermal:crude_oil" },
            put1: { amount: 8, tag: "anoxia:nutrient_distillation" },
            put2: { amount: 8, tag: "forge:biodiesel" },
            mixer: { tag: "forge:dusts/coal" },
        },
    ];
    RefineryPattern.forEach((recipe) => {
        event.custom({
            type: "immersiveengineering:refinery",
            catalyst: recipe.mixer,
            energy: 80,
            input0: recipe.put1,
            input1: recipe.put2,
            result: recipe.get,
        });
    });
    //#endregion
});
