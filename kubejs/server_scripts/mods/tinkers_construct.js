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

        //Tinker
        "tconstruct:compat/create/andesite_alloy_iron",
        "tconstruct:compat/create/andesite_alloy_zinc",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //# =================================================================================================== #

    //Melting Point
    //Metal
    const IronMeltPoint = 1538;
    const GoldMeltPoint = 1064;
    const CopperMeltPoint = 1085;
    const CobaltMeltPoint = 1495;
    const PlatinumMeltPoint = 1768;
    const ZincMeltPoint = 420;

    //Alloy
    const BrassMeltPoint = 920;
    const SteelMeltPoint = 1450;
    const SlimesteelMeltPoint = 1436;
    const AmethystBronzeMeltPoint = 1610;
    const RoseGoldMeltPoint = 1050;
    const PigIronMeltPoint = 1489;
    const ManyullynMeltPoint = 2450;
    const HepatizonMeltPoint = 1660;
    const CinderslimeMeltPoint = 1605
    const QueenSlimeMeltPoint = 1300
    const NetheriteMeltPoint = 2250

    //Other
    const ClayMeltPoint = 450;
    const GlassMeltPoint = 1500;
    const obsidianMeltPoint = 1500;
    const EnderMeltPoint = 1277;
    const EmeraldMeltPoint = 1570;
    const QuartzMeltPoint = 1710;
    const AmethystMeltPoint = 1710;
    const DiamondMeltPoint = 3550;
    const AncientDebrisMeltPoint = 2500;

    //Moon Factor
    const base_cooling_time = 60;
    const base_melting_time = 400;
    const heat_factor = 0.8;
    const radiation_factor = 1.4;
    const conduction_factor = 1.2;
    const ambient_factor = (radiation_factor + conduction_factor) / 2;

    //Cooling time function
    function GetCoolingTicks(melting_point, ingots) {
        let ticks = base_cooling_time * (melting_point / 1000) * Math.sqrt(ingots) * ambient_factor;
        return ticks;
    }

    //Melting time function
    function GetMeltingTicks(melting_point, ingots) {
        let ticks = (base_melting_time * (melting_point / 1000) * Math.sqrt(ingots) * ambient_factor) / heat_factor;
        return ticks;
    }

    //# =================================================================================================== #

    event.remove({ output: "tconstruct:seared_brick" });
    event.blasting("tconstruct:seared_brick", "tconstruct:grout");
    event.remove({ output: "tconstruct:scorched_brick" });
    event.blasting("tconstruct:scorched_brick", "tconstruct:nether_grout");

    //# =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        {
            get: { amount: 90, tag: "forge:molten_steel" },
            put: [
                { amount: 800, tag: "forge:molten_coal" },
                { amount: 90, tag: "forge:molten_iron" },
            ],
            heat: SteelMeltPoint,
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
            cooling: GetCoolingTicks(PlatinumMeltPoint, 1),
            caster: { item: "minecraft:polished_andesite" },
        },
    ];
    CastingBasingPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:casting_basin",
            cast: recipe.caster,
            cast_consumed: recipe.consume,
            cooling_time: Math.round(recipe.cooling),
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

        //Scorched Brick
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

        //Brass
    ];
    CastingTablePattern.forEach((recipe) => {
        if (recipe.consume) {
            event.custom({
                type: "tconstruct:casting_table",
                cast: recipe.caster,
                cast_consumed: recipe.consume,
                cooling_time: Math.round(recipe.cooling),
                fluid: recipe.put,
                result: recipe.get,
            });
        } else {
            event.custom({
                type: "tconstruct:casting_table",
                cast: recipe.caster,
                cooling_time: Math.round(recipe.cooling),
                fluid: recipe.put,
                result: recipe.get,
            });
        }
    });
    //#endregion

    //#region Fuel
    const FuelPattern = [{}];
    FuelPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:melting_fuel",
            duration: 150,
            fluid: { amount: 50, fluid: "tconstruct:blazing_blood" },
            rate: 15,
            temperature: 1500,
        });
    });
    //#endregion

    //# =================================================================================================== #

    //#region Molten
    const MoltenPattern = [
        //{ get: { amount: 90, tag: "forge:molten_brass" }, put: { tag: "forge:ingots/brass" }, heat: 605, second: 54 }
    ];
    MoltenPattern.forEach((recipe) => {
        event.custom({
            type: "tconstruct:melting",
            result: recipe.get,
            ingredient: recipe.put,
            temperature: recipe.heat,
            time: recipe.second,
        });
    });
    //#endregion
});
