ServerEvents.recipes((event) => {
    const RmRecipeID = [
        //Unification
        "thermal:machines/pyrolyzer/pyrolyzer_logs", //Rm Creosote
        "thermal:machines/pyrolyzer/pyrolyzer_coal", //Rm Creosote
        "thermal:machines/press/unpacking/press_sawdust_unpacking", //Rm Sawdust
        "thermal:machines/pulverizer/pulverizer_logs", //Rm Sawdust
        "thermal:machines/pulverizer/pulverizer_diamond_tools", //Rm Sawdust
    ];
    RmRecipeID.forEach((id) => {
        event.remove({ id: id });
    });

    //// # =================================================================================================== #

    //Flux Coil
    event.remove({ output: "thermal:rf_coil" });
    event.shaped("thermal:rf_coil", ["  R", " E ", "R  "], { R: "#forge:ingots/red_alloy", E: "#forge:ingots/electrum" });

    //Coal Coke
    event.shapeless(Item.of("thermal:coal_coke", 9), ["#forge:storage_blocks/coal_coke"]);

    //Machine Frame
    event.remove({ output: "thermal:machine_frame" });
    event.shaped("thermal:machine_frame", ["GEG", "EFE", "GEG"], { G: "#forge:gears/enderium", E: "unstabletools:ethereal_glass", F: "industrialforegoing:machine_frame_supreme" });

    //Smelter
    event.remove({ output: "thermal:machine_smelter" });
    event.shaped("thermal:machine_smelter", [" A ", "SMS", "GRG"], { A: "enderio:alloy_smelter", S: "#forge:sand", M: "thermal:machine_frame", G: "#forge:gears/invar", R: "thermal:rf_coil" });

    //// # =================================================================================================== #

    //#region Press
    const PressPattern = [
        {
            //EnderIO Integration => Energized Gear
            get: [{ item: "enderio:energized_gear" }],
            put: [{ tag: "forge:ingots/energetic_alloy", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 3600,
        },
        {
            //EnderIO Integration => Vibrant Gear
            get: [{ item: "enderio:vibrant_gear" }],
            put: [{ tag: "forge:ingots/vibrant_alloy", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 4800,
        },
        {
            //EnderIO Integration => DarkSteel Gear
            get: [{ item: "enderio:dark_bimetal_gear" }],
            put: [{ tag: "forge:ingots/dark_steel", count: 4 }, { item: "thermal:press_gear_die" }],
            rsflux: 5000,
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
            //thermal:creosote => immersive:creosote
            get: [{ item: "minecraft:charcoal" }, { fluid: "immersiveengineering:creosote", amount: 250 }],
            put: { tag: "minecraft:logs" },
            rsflux: 2000,
        },
        {
            //thermal:creosote => immersive:creosote
            get: [{ item: "thermal:coal_coke" }, { item: "thermal:tar", chance: 0.25 }, { fluid: "immersiveengineering:creosote", amount: 500 }],
            put: { item: "minecraft:coal" },
            rsflux: 4000,
        },
        {
            //thermal:creosote => immersive:creosote
            get: [{ item: "thermal:coal_coke_block" }, { item: "thermal:tar", chance: 0.25 }, { fluid: "immersiveengineering:creosote", amount: 4500 }],
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
