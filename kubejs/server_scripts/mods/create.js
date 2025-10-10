ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        //Unification
        "tacz_c:thin_brass_sheet_cutting",
        "tacz_c:thin_copper_sheet_cutting",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Recipes
    //Andesite Alloy
    event.shaped("create:andesite_alloy", ["BA", "AB"], { A: "minecraft:polished_andesite", B: "#forge:ingots/lead" });

    //Millstone
    event.remove({ output: "create:millstone" });
    event.shaped("create:millstone", [" A ", " B ", "CCC"], { A: "supplementaries:timber_frame", B: "create:large_cogwheel", C: "anoxia:compressed_andesite" });

    //Willmill Bearing
    event.remove({ output: "create:windmill_bearing" });
    event.shaped("create:windmill_bearing", [" A ", "BCB", "BDB"], { A: "#bookshelf:slime_balls", B: "anoxia:compressed_deepslate", C: "minecraft:piston", D: "create:shaft" });
    event.shaped("create:windmill_bearing", ["ABA", "ACA"], { A: "anoxia:compressed_deepslate", B: "minecraft:sticky_piston", C: "create:shaft" });

    //Windmill Sail Frame
    event.remove({ output: "create:white_sail" });
    event.shaped("create:white_sail", ["ABA", "BCB", "ABA"], { A: "minecraft:string", B: "#forge:rods/wooden", C: "projectred_core:silicon" });
    event.shapeless("create:white_sail", ["create:sail_frame"]);

    //Sawmill
    event.remove({ output: "create:mechanical_saw" });
    event.shaped("create:mechanical_saw", [" A ", "BCB", "BBB"], { A: "#forge:sawblades", B: "create:andesite_casing", C: "create:shaft" });

    //Spool
    event.remove({ output: "createaddition:spool" });
    event.shaped(Item.of("createaddition:spool", 3), ["AAA", " B ", "AAA"], { A: "#forge:plates/iron", B: "#forge:rods/iron" });

    //Copper Spool
    event.remove({ output: "createaddition:copper_spool" });
    event.shaped("createaddition:copper_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/copper", B: "createaddition:spool" });
    event.shapeless("createaddition:copper_spool", ["immersiveengineering:wirecoil_copper"]);

    //Gold Spool
    event.remove({ output: "createaddition:gold_spool" });
    event.shaped("createaddition:gold_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/gold", B: "createaddition:spool" });

    //Electrum Spool
    event.remove({ output: "createaddition:electrum_spool" });
    event.shaped("createaddition:electrum_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/electrum", B: "createaddition:spool" });
    event.shapeless("createaddition:electrum_spool", ["immersiveengineering:wirecoil_electrum"]);

    //Capacitor
    event.remove({ output: "createaddition:capacitor" });
    event.shaped("createaddition:capacitor", ["ABC", "D D"], { A: "#forge:plates/copper", B: "minecraft:redstone_torch", C: "#forge:plates/zinc", D: "#forge:wires/iron" });
    event.shaped("createaddition:capacitor", ["CBA", "D D"], { A: "#forge:plates/copper", B: "minecraft:redstone_torch", C: "#forge:plates/zinc", D: "#forge:wires/iron" });
    //#endregion

    //// # =================================================================================================== #

    const CuttingPatern = [
        //Unification
        {
            //create:copper_plate => "forge:plates/copper"
            get: [{ count: 10, item: "tacz_c:thin_copper_sheet" }],
            put: [{ tag: "forge:plates/copper" }],
        },
        {
            get: [{ count: 10, item: "tacz_c:thin_brass_sheet" }],
            put: [{ tag: "forge:plates/brass" }],
        },
    ];
    CuttingPatern.forEach((recipe) => {
        event.custom({
            type: "create:cutting",
            ingredients: recipe.put,
            results: recipe.get,
            processingTime: 100,
        });
    });
    //// # =================================================================================================== #

    //#region Compacting
    const CompactingPattern = [
        {
            //Restore CakeBase => accept Forge:Dough (PamHC)
            get: [{ item: "createaddition:cake_base" }],
            put: [{ tag: "forge:eggs" }, { item: "minecraft:sugar" }, { item: "minecraft:sugar" }, { tag: "forge:dough" }],
        },
    ];
    CompactingPattern.forEach((recipe) => {
        event.custom({
            type: "create:compacting",
            ingredients: recipe.put,
            results: recipe.get,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Milling
    const MillStonePattern = [
        //Misc
        { get: [{ item: "minecraft:sand" }], put: [{ item: "minecraft:gravel" }] },
        { get: [{ item: "exnihilosequentia:dust" }], put: [{ item: "minecraft:sand" }] },
    ];
    MillStonePattern.forEach((recipe) => {
        event.custom({
            type: "create:milling",
            ingredients: recipe.put,
            results: recipe.get,
            processingTime: 200,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Mixing
    const MixingPattern = [
        {
            //Andesite Alloy
            get: [{ item: "create:andesite_alloy" }],
            put: [{ item: "minecraft:polished_andesite" }, { tag: "forge:ingots/platinum" }],
        },
        {
            //Restore Mixing Dough => PamHC Dought
            get: [{ item: "pamhc2foodcore:doughitem" }],
            put: [{ tag: "forge:flour/wheat" }, { amount: 1000, fluid: "minecraft:water", nbt: {} }],
        },
    ];
    MixingPattern.forEach((recipe) => {
        event.custom({
            type: "create:mixing",
            ingredients: recipe.put,
            results: recipe.get,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Splashing
    const SplashingPattern = [
        {
            //Restore Splash Dough => PamHC Dought
            get: [{ item: "pamhc2foodcore:doughitem" }],
            put: [{ tag: "forge:flour/wheat" }],
        },
    ];
    SplashingPattern.forEach((recipe) => {
        event.custom({
            type: "create:splashing",
            ingredients: recipe.put,
            results: recipe.get,
        });
    });
    //#endregion
});
