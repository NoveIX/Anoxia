ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Architect
        "architects_palette:smelting/nether_brass_ingot_from_nether_brass_blend_blasting",
        "architects_palette:blasting/nether_brass_ingot_from_nether_brass_blend_blasting",
        "architects_palette:smelting/nether_brass_ingot_from_nether_brass_blend_smelting",
        "enderio:smelting/architects_palette/smelting/nether_brass_ingot_from_nether_brass_blend_smelting",

        //Industrial Foregoing
        "enderio:smelting/industrialforegoing/plastic",

        //Thermal
        //Signalum
        "thermal:smelting/signalum_ingot_from_dust_blasting",
        "thermal:smelting/signalum_ingot_from_dust_smelting",
        "enderio:smelting/thermal/smelting/signalum_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_signalum_dust",
        //Lumium
        "thermal:smelting/lumium_ingot_from_dust_blasting",
        "thermal:smelting/lumium_ingot_from_dust_smelting",
        "enderio:smelting/thermal/smelting/lumium_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_lumium_dust",
        //Enderium
        "thermal:smelting/enderium_ingot_from_dust_blasting",
        "thermal:smelting/enderium_ingot_from_dust_smelting",
        "enderio:smelting/thermal/smelting/enderium_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_enderium_dust",
        //Steel
        //"thermal:smelting/steel_ingot_from_dust_blasting",
        //"thermal:smelting/steel_ingot_from_dust_smelting",
        //"mekanism:processing/steel/ingot/from_dust_blasting",
        //"mekanism:processing/steel/ingot/from_dust_smelting",
        //"enderio:smelting/mekanism/processing/steel/ingot/from_dust_smelting",
        //"thermal:machines/smelter/smelter_steel_dust",
        //Rose Gold
        //"thermal:smelting/rose_gold_ingot_from_dust_blasting",
        //"thermal:smelting/rose_gold_ingot_from_dust_smelting",
        //"enderio:smelting/thermal/smelting/rose_gold_ingot_from_dust_smelting",
        //"thermal:machines/smelter/smelter_rose_gold_dust",
        //Bronze
        //"thermal:smelting/signalum_ingot_from_dust_blasting",
        //"thermal:smelting/signalum_ingot_from_dust_smelting",
        //"mekanism:processing/bronze/ingot/from_dust_blasting",
        //"mekanism:processing/bronze/ingot/from_dust_smelting",
        //"enderio:smelting/mekanism/processing/bronze/ingot/from_dust_smelting",
        //"thermal:machines/smelter/smelter_bronze_dust",
        //Electrum
        //"thermal:smelting/signalum_ingot_from_dust_blasting",
        //"thermal:smelting/signalum_ingot_from_dust_smelting",
        //"immersiveengineering:smelting/ingot_electrum_from_dust_from_blasting",
        //"immersiveengineering:smelting/ingot_electrum_from_dust",
        //"enderio:smelting/immersiveengineering/smelting/ingot_electrum_from_dust",
        //"thermal:machines/smelter/smelter_electrum_dust",
        //Invar
        //"thermal:smelting/invar_ingot_from_dust_blasting",
        //"thermal:smelting/invar_ingot_from_dust_smelting",
        //"enderio:smelting/thermal/smelting/invar_ingot_from_dust_smelting",
        //"thermal:machines/smelter/smelter_invar_dust",
        //Constantan
        //"thermal:smelting/signalum_ingot_from_dust_blasting",
        //"thermal:smelting/signalum_ingot_from_dust_smelting",
        //"immersiveengineering:smelting/ingot_constantan_from_dust_from_blasting",
        //"immersiveengineering:smelting/ingot_constantan_from_dust",
        //"enderio:smelting/immersiveengineering/smelting/ingot_constantan_from_dust",
        //"thermal:machines/smelter/smelter_constantan_dust",

        ////Thermal Endergy
        "thermalendergy:prismalium_ingot_from_dust",
        "enderio:smelting/thermalendergy/prismalium_ingot_from_dust",
        "thermalendergy:melodium_ingot_from_dust",
        "enderio:smelting/thermalendergy/melodium_ingot_from_dust",
        "thermalendergy:stellarium_ingot_from_dust",
        "enderio:smelting/thermalendergy/stellarium_ingot_from_dust",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region func Furnace
    function FurnaceImmersive(recipe) {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            input: { tag: recipe.put },
            results: [{ tag: recipe.get }],
            energy: 2000,
            time: 100,
        });
    }

    function FurnaceImmersiveID(recipe) {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            input: { item: recipe.put },
            results: [{ item: recipe.get }],
            energy: 2000,
            time: 100,
        });
    }

    //// # =================================================================================================== #

    function FurnaceEnderio(recipe) {
        event.custom({
            type: "enderio:alloy_smelting",
            energy: 1500,
            experience: 0.3,
            inputs: [{ count: 1, ingredient: { tag: recipe.put } }],
            result: { item: recipe.get },
            is_smelting: true,
        });
    }

    function FurnaceEnderioID(recipe) {
        event.custom({
            type: "enderio:alloy_smelting",
            energy: 1500,
            experience: 0.3,
            inputs: [{ count: 1, ingredient: { item: recipe.put } }],
            result: { item: recipe.get },
            is_smelting: true,
        });
    }

    //#endregion

    //// # =================================================================================================== #

    //#region Furnace
    const FurnacePattern = [
        //Misc
        { get: "anoxia:obsidian_ingot", put: "anoxia:obsidian_with_iron" },
        { get: "actuallyadditions:black_quartz", put: "botania:quartz_dark" },
        { get: "pneumaticcraft:plastic", put: "industrialforegoing:dryrubber" },
        { get: "architects_palette:nether_brass_ingot", put: "architects_palette:nether_brass_blend" },

        //Thermal
        //{ get: "thermal:steel_ingot", put: "forge:dusts/steel", metal: true },
        //{ get: "thermal:rose_gold_ingot", put: "forge:dusts/rose_gold", metal: true },
        { get: "thermal:signalum_ingot", put: "forge:dusts/signalum", metal: true },
        { get: "thermal:lumium_ingot", put: "forge:dusts/lumium", metal: true },
        { get: "thermal:enderium_ingot", put: "forge:dusts/enderium", metal: true },
        //{ get: "thermal:bronze_ingot", put: "forge:dusts/bronze", metal: true },
        //{ get: "thermal:electrum_ingot", put: "forge:dusts/electrum", metal: true },
        //{ get: "thermal:invar_ingot", put: "forge:dusts/invar", metal: true },
        //{ get: "thermal:constantan_ingot", put: "forge:dusts/constantan", metal: true },

        //Thermal Endergy
        { get: "thermalendergy:prismalium_ingot", put: "forge:dusts/prismalium", metal: true },
        { get: "thermalendergy:melodium_ingot", put: "forge:dusts/melodium", metal: true },
        { get: "thermalendergy:stellarium_ingot", put: "forge:dusts/stellarium", metal: true },
    ];
    FurnacePattern.forEach((recipe) => {
        //Furnace
        if (recipe.put.startsWith("forge:")) {
            event.smelting(recipe.get, `#${recipe.put}`);
            FurnaceEnderio(recipe);
            if (recipe.metal) FurnaceImmersive(recipe);
        } else {
            event.smelting(recipe.get, recipe.put);
            FurnaceEnderioID(recipe);
            if (recipe.metal) FurnaceImmersiveID(recipe);
        }
    });
});
