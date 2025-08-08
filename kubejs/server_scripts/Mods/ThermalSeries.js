ServerEvents.recipes((event) => {
    //Flux Coil
    event.remove({ output: "thermal:rf_coil" });
    event.shaped("thermal:rf_coil", ["  R", " E ", "R  "], { R: "#forge:ingots/red_alloy", E: "#forge:ingots/electrum" });

    //Coal Coke
    event.remove({ id: "thermal:storage/coal_coke_from_block" });
    event.shapeless(Item.of("thermal:coal_coke", 9), ["#forge:storage_blocks/coal_coke"]);

    //Machine Frame
    event.remove({ output: "thermal:machine_frame" });
    event.shaped("thermal:machine_frame", ["GEG", "EFE", "GEG"], { G: "#forge:gears/enderium", E: "unstabletools:ethereal_glass", F: "industrialforegoing:machine_frame_supreme" });

    //Smelter
    event.remove({ output: "thermal:machine_smelter" });
    event.shaped("thermal:machine_smelter", [" A ", "SMS", "GRG"], { A: "enderio:alloy_smelter", S: "#forge:sand", M: "thermal:machine_frame", G: "#forge:gears/invar", R: "thermal:rf_coil" });

    //// # =================================================================================================== #

    //#region Press
    event.remove({ id: "thermal:machines/press/unpacking/press_sawdust_unpacking" });
    event.remove({ id: "thermal:machines/press/packing3x3/press_sawdust_packing" });
    const PressPattern = [
        //Restore
        {
            //Restore Sawdust => Sawdust (Mekanism)
            get: [{ item: "mekanism:sawdust", count: 9 }],
            put: [{ item: "thermal:sawdust_block" }, { item: "thermal:press_unpacking_die" }],
            rsflux: 400,
        },
        {
            //Restore SawBlock => Accept forge:dusts/wood (Mekanism)
            get: [{ item: "thermal:sawdust_block" }],
            put: [{ tag: "forge:dusts/wood", count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            rsflux: 400,
        },
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
    ];
    function PressRecipes({ get, put, rsflux }) {
        event.custom({
            type: "thermal:press",
            ingredients: put,
            result: get,
            energy: rsflux,
        });
    }
    PressPattern.forEach(PressRecipes);
    //#endregion

    //// # =================================================================================================== #

    //#region Pulverizer
    event.remove({ id: "thermal:machines/pulverizer/pulverizer_logs" });
    const PulverizerPattern = [
        //Restore
        {
            //Restore Sawdust = Sawdust (Mekanism)
            get: [{ item: "mekanism:sawdust", count: 8 }],
            put: { tag: "minecraft:logs" },
            rsflux: 1000,
        },
    ];
    function PulverizerRecipes({ get, put, rsflux }) {
        event.custom({
            type: "thermal:pulverizer",
            ingredient: put,
            result: get,
            energy: rsflux,
        });
    }
    PulverizerPattern.forEach(PulverizerRecipes);
    //#endregion

    //// # =================================================================================================== #

    //#region PulverizerRecycle
    event.remove({ id: "thermal:machines/pulverizer/pulverizer_diamond_tools" });
    const PulverizerRecyclePattern = [
        //Restore
        {
            //Restore Sawdust => Sawdust (Mekanism)
            get: [
                { item: "minecraft:diamond", count: 1 },
                { item: "mekanism:sawdust", count: 1 },
            ],
            put: { tag: "forge:tools/diamond" },
            state: [{ tag: "forge:tools/diamond", type: "cofh_core:tag_exists" }],
        },
    ];
    function PulverizerRecycleRecipes({ get, put, state }) {
        event.custom({
            type: "thermal:pulverizer_recycle",
            ingredient: put,
            result: get,
            experience: 0.5,
            conditions: state,
        });
    }
    PulverizerRecyclePattern.forEach(PulverizerRecycleRecipes);
    //#endregion

    //// # =================================================================================================== #

    //#region Pyrolyzer
    const PyrolyzerPattern = [
        //Restore
        {
            //Restore Logs => Creosote (Immersive)
            get: [{ item: "minecraft:charcoal" }, { fluid: "immersiveengineering:creosote", amount: 250 }],
            put: { tag: "minecraft:logs" },
        },
        {
            //Restore Coke => Creosote (Immersive)
            get: [{ item: "thermal:coal_coke" }, { item: "thermal:tar", chance: 0.25 }, { fluid: "immersiveengineering:creosote", amount: 500 }],
            put: { item: "minecraft:coal" },
        },
    ];
    function PyrolyzerRecipes({ get, put }) {
        event.custom({
            type: "thermal:pyrolyzer",
            ingredient: put,
            result: get,
            experience: 0.15,
        });
    }
    PyrolyzerPattern.forEach(PyrolyzerRecipes);
    //#endregion

    //// # =================================================================================================== #

    //#region Smelter
    event.remove({ id: "thermal:compat/create/smelter_create_alloy_andesite_alloy" });
    const SmelterPattern = [
        //Create
        {
            //Andesite Alloy
            get: [{ item: "create:andesite_alloy", count: 2 }],
            put: [{ tag: "forge:ingots/platinum" }, { item: "minecraft:polished_andesite" }],
            rsflux: 4800,
        },

        //ProjectRED
        {
            //Red Ingot
            get: [{ item: "projectred_core:red_ingot", count: 2 }],
            put: [
                { tag: "forge:dusts/redstone", count: 2 },
                { tag: "forge:ingots/osmium", count: 1 },
            ],
            rsflux: 32000,
        },
        {
            //Electrotine Ingot
            get: [{ item: "projectred_core:electrotine_ingot", count: 2 }],
            put: [
                { tag: "forge:dusts/electrotine", count: 2 },
                { tag: "forge:ingots/osmium", count: 1 },
            ],
            rsflux: 32000,
        },
    ];
    function SmelterRecipes({ get, put, rsflux }) {
        event.custom({
            type: "thermal:smelter",
            ingredients: put,
            result: get,
            energy: rsflux,
        });
    }
    SmelterPattern.forEach(SmelterRecipes);
    //#endregion
});
