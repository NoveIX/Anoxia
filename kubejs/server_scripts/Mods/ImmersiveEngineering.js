ServerEvents.recipes((event) => {
    //LV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_copper" });
    event.shapeless("immersiveengineering:wirecoil_copper", ["immersiveengineering:wirecoil_copper_ins", "#immersiveengineering:tools/wirecutters"]);
    event.shaped("immersiveengineering:wirecoil_copper", ["CCC", "CSC", "CCC"], { C: "#forge:wires/copper", S: "createaddition:spool" });
    event.shapeless("immersiveengineering:wirecoil_copper", ["createaddition:copper_spool"]);

    //LV Insulated Coil
    event.remove({ output: "immersiveengineering:wirecoil_copper_ins" });
    event.shaped("immersiveengineering:wirecoil_copper_ins", [" T ", "TCT", " T "], { C: "immersiveengineering:wirecoil_copper", T: "immersiveengineering:hemp_fabric" });

    //MV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_electrum" });
    event.shapeless("immersiveengineering:wirecoil_electrum", ["immersiveengineering:wirecoil_electrum_ins", "#immersiveengineering:tools/wirecutters"]);
    event.shaped("immersiveengineering:wirecoil_electrum", ["EEE", "ESE", "EEE"], { E: "#forge:wires/electrum", S: "createaddition:spool" });
    event.shapeless("immersiveengineering:wirecoil_electrum", ["createaddition:electrum_spool"]);

    //MV Insulated Coil
    event.remove({ output: "immersiveengineering:wirecoil_electrum_ins" });
    event.shaped("immersiveengineering:wirecoil_electrum_ins", [" T ", "TET", " T "], { E: "immersiveengineering:wirecoil_electrum", T: "immersiveengineering:hemp_fabric" });

    //HV Wire Coil
    event.remove({ output: "immersiveengineering:wirecoil_steel" });
    event.shaped("immersiveengineering:wirecoil_steel", ["AWA", "WSW", "AWA"], { A: "#forge:wires/aluminum", S: "createaddition:spool", W: "#forge:wires/steel" });

    //Structure Coil
    event.remove({ output: "immersiveengineering:wirecoil_structure_steel" });
    event.shaped("immersiveengineering:wirecoil_structure_steel", ["WWW", "WSW", "WWW"], { S: "createaddition:spool", W: "#forge:wires/steel" });

    //Redstone Coil
    event.remove({ output: "immersiveengineering:wirecoil_redstone" });
    event.shaped("immersiveengineering:wirecoil_redstone", ["AAA", "RSR", "AAA"], { A: "#forge:wires/aluminum", R: "#forge:ingots/red_alloy", S: "createaddition:spool" });

    //Rope Coil
    event.remove({ output: "immersiveengineering:wirecoil_structure_rope" });
    event.shaped("immersiveengineering:wirecoil_structure_rope", ["HHH", "HSH", "HHH"], { H: "immersiveengineering:hemp_fiber", S: "createaddition:spool" });

    //Saw Blade
    event.remove({ output: "immersiveengineering:sawblade" });
    event.shaped("immersiveengineering:sawblade", [" P ", "PGP", " P "], { P: "#forge:plates/steel", G: "#forge:gears/steel" });

    //Sawdust Flooring
    event.remove({ output: "immersiveengineering:sawdust" });
    event.shaped(Item.of("immersiveengineering:sawdust", 3), ["SSS"], { S: "#forge:dusts/wood" });

    ////Furnace
    //Coke Brick
    event.shaped("immersiveengineering:cokebrick", ["PBP", "BSB", "PBP"], { P: "exnihilosequentia:porcelain_clay", B: "#forge:ingots/brick", S: "#forge:sandstone/colorless" });

    //Kiln Brick
    event.remove({ output: "immersiveengineering:alloybrick" });
    event.shaped("immersiveengineering:alloybrick", ["RN", "NR"], { R: "#forge:sandstone/red", N: "#forge:ingots/brick" });

    //Blast Brick
    event.remove({ output: "immersiveengineering:blastbrick" });
    event.shaped("immersiveengineering:blastbrick", ["NBN", "BCB", "NBN"], { N: "#forge:ingots/nether_brick", B: "#forge:ingots/brick", C: "immersiveengineering:cokebrick" });

    //Blast Brick Reinforced
    event.remove({ output: "immersiveengineering:blastbrick_reinforced" });
    event.shaped("immersiveengineering:blastbrick_reinforced", ["S S", " B ", "S S"], { S: "#forge:plates/steel", B: "immersiveengineering:blastbrick" });

    //Scaffoling Steel
    event.remove({ output: "immersiveengineering:steel_scaffolding_standard" });
    event.shaped(Item.of("immersiveengineering:steel_scaffolding_standard", 3), ["PPP", " R ", "R R"], { P: "#forge:plates/steel", R: "#forge:rods/steel" });

    //Scaffoling Aluminum
    event.remove({ output: "immersiveengineering:alu_scaffolding_standard" });
    event.shaped(Item.of("immersiveengineering:alu_scaffolding_standard", 3), ["PPP", " R ", "R R"], { P: "#forge:plates/aluminum", R: "#forge:rods/aluminum" });

    //Concrete Leaded
    event.remove({ output: "immersiveengineering:alu_scaffolding_standard" });
    event.shaped("immersiveengineering:concrete_leaded", ["P P", " B ", "P P"], { P: "#forge:plates/lead", B: "immersiveengineering:concrete" });

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
        { get: { tag: "forge:ingots/steel" }, put: { tag: "forge:ingots/iron" }, qty: 1, tick: 2400 },
        { get: { tag: "forge:storage_blocks/iron" }, put: { tag: "forge:storage_blocks/steel" }, qty: 9, tick: 21600 },
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
            time: recipe.time,
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
});
