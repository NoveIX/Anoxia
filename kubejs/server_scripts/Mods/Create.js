ServerEvents.recipes((event) => {
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
    //#endregion

    //// # =================================================================================================== #

    //#region Compacting
    event.remove({ id: "createaddition:compacting/cake_base" });
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

        //Ingot
        { get: [{ item: "thermal:iron_dust" }], put: [{ tag: "forge:ingots/iron" }] },
        { get: [{ item: "thermal:gold_dust" }], put: [{ tag: "forge:ingots/gold" }] },
        { get: [{ item: "thermal:copper_dust" }], put: [{ tag: "forge:ingots/copper" }] },
        { get: [{ item: "thermal:netherite_dust" }], put: [{ tag: "forge:ingots/netherite" }] },
        { get: [{ item: "thermal:tin_dust" }], put: [{ tag: "forge:ingots/tin" }] },
        { get: [{ item: "thermal:lead_dust" }], put: [{ tag: "forge:ingots/lead" }] },
        { get: [{ item: "thermal:silver_dust" }], put: [{ tag: "forge:ingots/silver" }] },
        { get: [{ item: "thermal:nickel_dust" }], put: [{ tag: "forge:ingots/nickel" }] },
        { get: [{ item: "thermal:steel_dust" }], put: [{ tag: "forge:ingots/steel" }] },
        { get: [{ item: "thermal:rose_gold_dust" }], put: [{ tag: "forge:ingots/rose_gold" }] },
        { get: [{ item: "thermal:bronze_dust" }], put: [{ tag: "forge:ingots/bronze" }] },
        { get: [{ item: "thermal:electrum_dust" }], put: [{ tag: "forge:ingots/electrum" }] },
        { get: [{ item: "thermal:invar_dust" }], put: [{ tag: "forge:ingots/invar" }] },
        { get: [{ item: "thermal:constantan_dust" }], put: [{ tag: "forge:ingots/constantan" }] },
        { get: [{ item: "thermal:signalum_dust" }], put: [{ tag: "forge:ingots/signalum" }] },
        { get: [{ item: "thermal:lumium_dust" }], put: [{ tag: "forge:ingots/lumium" }] },
        { get: [{ item: "thermal:enderium_dust" }], put: [{ tag: "forge:ingots/enderium" }] },

        //Gem
        { get: [{ item: "mekanism:dust_coal" }], put: [{ tag: "forge:dusts/coal" }] },
        { get: [{ item: "mekanism:dust_charcoal" }], put: [{ tag: "forge:dusts/charcoal" }] },
        { get: [{ item: "immersiveengineering:dust_coke" }], put: [{ tag: "forge:coal_coke" }] },
        { get: [{ item: "thermal:lapis_dust" }], put: [{ tag: "forge:gems/lapis" }] },
        { get: [{ item: "thermal:diamond_dust" }], put: [{ tag: "forge:gems/diamond" }] },
        { get: [{ item: "thermal:emerald_dust" }], put: [{ tag: "forge:gems/emerald" }] },
        { get: [{ item: "thermal:quartz_dust" }], put: [{ tag: "forge:gems/quartz" }] },
        { get: [{ item: "thermal:ruby_dust" }], put: [{ tag: "forge:gems/ruby" }] },
        { get: [{ item: "thermal:sapphire_dust" }], put: [{ tag: "forge:gems/sapphire" }] },
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
    event.remove({ id: "create:mixing/dough_by_mixing" });
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
    event.remove({ id: "create:splashing/wheat_flour" });
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
