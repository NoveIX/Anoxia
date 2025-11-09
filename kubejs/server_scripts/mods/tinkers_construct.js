ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Netherite
        "tconstruct:smeltery/alloys/molten_netherite",

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

        //Tinker
        "tconstruct:compat/create/andesite_alloy_iron",
        "tconstruct:compat/create/andesite_alloy_zinc",

        //Tinker - Machine
        "tconstruct:smeltery/casting/seared/smeltery_controller",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //# =================================================================================================== #

    event.remove({ output: "tconstruct:seared_brick" });
    event.blasting("tconstruct:seared_brick", "tconstruct:grout");
    event.remove({ output: "tconstruct:scorched_brick" });
    event.blasting("tconstruct:scorched_brick", "tconstruct:nether_grout");

    //# =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        {
            get: { amount: 90, tag: "tconstruct:molten_steel" },
            put: [
                { amount: 800, tag: "forge:molten_coal" },
                { amount: 90, tag: "tconstruct:molten_iron" },
            ],
            heat: 950,
        },
        {
            get: { amount: 10, tag: "tconstruct:molten_netherite" },
            put: [
                { amount: 40, tag: "tconstruct:molten_gold" },
                { amount: 40, tag: "tconstruct:molten_debris" },
            ],
            heat: 1250,
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

    //# =================================================================================================== #

    //#region Casting Basin
    const CastingBasingPattern = [
        //Create
        {
            get: "create:andesite_alloy",
            put: { amount: 90, tag: "forge:molten_platinum" },
            consume: true,
            cooling: global.GetCoolingTicks(melt.Platinum, 1),
            caster: { item: "minecraft:polished_andesite" },
        },
        {
            get: "tconstruct:smeltery_controller",
            put: { amount: 360, tag: "forge:molten_copper" },
            consume: true,
            cooling: global.GetCoolingTicks(melt.Copper, 4),
            caster: { tag: "tconstruct:smeltery_bricks" },
        },
        {
            get: "tconstruct:foundry_controller",
            put: { amount: 1000, tag: "tconstruct:molten_obsidian" },
            cast_consumed: true,
            cooling: global.GetCoolingTicks(melt.Obsidian, 1),
            caster: { tag: "tconstruct:foundry_bricks" },
        },
    ];
    CastingBasingPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:casting_basin",
            cast: recipe.caster,
            cast_consumed: recipe.consume,
            cooling_time: recipe.cooling,
            fluid: recipe.put,
            result: recipe.get,
        });
    });
    //#endregion

    //# =================================================================================================== #

    //#region Casting Table
    const CastingTablePattern = [
        //Seared Brick
        {
            get: "tconstruct:seared_brick",
            put: { amount: 125, tag: "tconstruct:molten_clay" },
            cooling: global.GetCoolingTicks(melt.Clay, 0.5),
            consume: true,
            caster: { item: "minecraft:flint" },
        },
        {
            get: "tconstruct:seared_brick",
            put: { amount: 250, tag: "tconstruct:seared_stone" },
            cooling: global.GetCoolingTicks(melt.Stone, 1),
            consume: true,
            caster: { tag: "tconstruct:casts/single_use/ingot" },
        },
        {
            get: "tconstruct:seared_brick",
            put: { amount: 250, tag: "tconstruct:seared_stone" },
            cooling: global.GetCoolingTicks(melt.Stone, 1),
            caster: { tag: "tconstruct:casts/multi_use/ingot" },
        },

        //Scorched Brick
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 125, tag: "forge:magma" },
            consume: true,
            cooling: global.GetCoolingTicks(melt.Magma, 0.5),
            caster: { item: "minecraft:flint" },
        },
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 250, tag: "tconstruct:scorched_stone" },
            consume: true,
            cooling: global.GetCoolingTicks(melt.ScorchedStone, 1),
            caster: { tag: "tconstruct:casts/single_use/ingot" },
        },
        {
            get: "tconstruct:scorched_brick",
            put: { amount: 250, tag: "tconstruct:scorched_stone" },
            cooling: global.GetCoolingTicks(melt.ScorchedStone, 1),
            caster: { tag: "tconstruct:casts/multi_use/ingot" },
        },

        //Brass
    ];
    CastingTablePattern.forEach((recipe) => {
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

    //# =================================================================================================== #

    //#region Melting
    const MeltingPattern = [
        { get: { amount: 100, tag: "forge:molten_coal" }, put: { tag: "forge:coal_coke" }, degree: 900, meltTime: global.GetMeltingTicks(melt.Coal, 1) },
        { get: { amount: 100, tag: "forge:molten_coal" }, put: { tag: "forge:dusts/coal_coke" }, degree: 900, meltTime: global.GetMeltingTicks(melt.Coal, 1) },
        { get: { amount: 900, tag: "forge:molten_coal" }, put: { tag: "forge:storage_blocks/coal_coke" }, degree: 900, meltTime: global.GetMeltingTicks(melt.Coal, 9) },
    ];
    MeltingPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:melting",
            ingredient: recipe.put,
            result: recipe.get,
            temperature: recipe.degree,
            time: recipe.meltTime,
        });
    });
    //#endregion
});
