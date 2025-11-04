ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Create
        "createaddition:compat/tconstruct/amethyst_bronze",
        "createaddition:compat/tconstruct/slimesteel",
        "createaddition:compat/tconstruct/pig_iron",
        "createaddition:compat/tconstruct/pig_iron_2",
        "createaddition:compat/tconstruct/rose_gold",
        "createaddition:compat/tconstruct/manyullyn",
        "createaddition:compat/tconstruct/queens_slime",
        "createaddition:compat/tconstruct/hepatizon",

        //Thermal
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_amethyst_bronze_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_manyullyn_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_queens_slime_ingot",
        "thermal:compat/tconstruct/smelter_alloy_tconstruct_hepatizon_ingot",

        //EnderIO
        "enderio:smelting/tconstruct/smeltery/seared/seared_brick",
        "enderio:smelting/tconstruct/smeltery/scorched/scorched_brick",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    // # =================================================================================================== #

    event.remove({ output: "tconstruct:seared_brick" });
    event.blasting("tconstruct:seared_brick", "tconstruct:grout");
    event.remove({ output: "tconstruct:scorched_brick" });
    event.blasting("tconstruct:scorched_brick", "tconstruct:nether_grout");

    // # =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        {
            get: { amount: 90, tag: "forge:molten_steel" },
            put: [
                { amount: 800, tag: "forge:molten_coal" },
                { amount: 90, tag: "forge:molten_iron" },
            ],
            heat: 950,
        },
    ];
    AlloyPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:alloy",
            inputs: recipe.put,
            result: recipe.get,
            temperature: recipe.heat,
        });
    });
    //#endregion

    // # =================================================================================================== #

    //#region Casting
    const CastingPattern = [
        {
            get: "tconstruct:seared_brick",
            put: { amount: 125, tag: "tconstruct:molten_clay" },
            cooling: 57,
            consume: true,
            caster: { item: "minecraft:flint" },
        },
        {
            get: "tconstruct:seared_brick",
            put: { amount: 250, tag: "tconstruct:seared_stone" },
            cooling: 89,
            consume: true,
            caster: { tag: "tconstruct:casts/single_use/ingot" },
        },
        {
            get: "tconstruct:seared_brick",
            put: { amount: 250, tag: "tconstruct:seared_stone" },
            cooling: 89,
            caster: { tag: "tconstruct:casts/multi_use/ingot" },
        },
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 125, tag: "forge:magma" },
            consume: true,
            cooling: 50,
            caster: { item: "minecraft:flint" },
        },
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 250, tag: "tconstruct:scorched_stone" },
            consume: true,
            cooling: 83,
            caster: { tag: "tconstruct:casts/single_use/ingot" },
        },
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 250, tag: "tconstruct:scorched_stone" },
            cooling: 83,
            caster: { tag: "tconstruct:casts/multi_use/ingot" },
        },
    ];
    CastingPattern.forEach((recipe) => {
        if (recipe.consume) {
            event.custom({
                type: "tconstruct:casting_table",
                cast: recipe.caster,
                cast_consumed: recipe.consume,
                cooling_time: recipe.cooling,
                fluid: recipe.put,
                result: recipe.get,
            });
        } else {
            event.custom({
                type: "tconstruct:casting_table",
                cast: recipe.caster,
                cooling_time: recipe.cooling,
                fluid: recipe.put,
                result: recipe.get,
            });
        }
    });
    //#endregion

    // # =================================================================================================== #

    //#region Molten
    const MoltenPattern = [
        //{ get: { amount: 90, tag: "forge:molten_brass" }, put: { tag: "forge:ingots/brass" }, heat: 605, second: 54 }
    ];
    MoltenPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:melting",
            ingredient: recipe.put,
            result: recipe.get,
            temperature: recipe.heat,
            time: recipe.second,
        });
    });
    //#endregion
});
