ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        ////Thermal
        //Signalum
        "enderio:smelting/thermal/smelting/signalum_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_signalum",
        "thermal:machines/smelter/smelter_signalum_dust",
        //Lumium
        "enderio:smelting/thermal/smelting/lumium_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_lumium",
        "thermal:machines/smelter/smelter_lumium_dust",
        //Enderium
        "enderio:smelting/thermal/smelting/enderium_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_enderium",
        "thermal:machines/smelter/smelter_enderium_dust",
        //Steel
        "enderio:smelting/mekanism/processing/steel/ingot/from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_steel",
        "thermal:machines/smelter/smelter_steel_dust",
        //Rose Gold
        "enderio:smelting/thermal/smelting/rose_gold_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_rose_gold",
        "thermal:machines/smelter/smelter_rose_gold_dust",
        //Bronze
        "enderio:smelting/mekanism/processing/bronze/ingot/from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_bronze",
        "thermal:machines/smelter/smelter_bronze_dust",
        //Electrum
        "enderio:smelting/immersiveengineering/smelting/ingot_electrum_from_dust",
        "thermal:machines/smelter/smelter_alloy_electrum",
        "thermal:machines/smelter/smelter_electrum_dust",
        //Invar
        "enderio:smelting/thermal/smelting/invar_ingot_from_dust_smelting",
        "thermal:machines/smelter/smelter_alloy_invar",
        "thermal:machines/smelter/smelter_invar_dust",
        //Constantan
        "enderio:smelting/immersiveengineering/smelting/ingot_constantan_from_dust",
        "thermal:machines/smelter/smelter_alloy_constantan",
        "thermal:machines/smelter/smelter_constantan_dust",

        ////Thermal Endergy
        "enderio:smelting/thermalendergy/prismalium_ingot_from_dust",
        "enderio:smelting/thermalendergy/melodium_ingot_from_dust",
        "enderio:smelting/thermalendergy/stellarium_ingot_from_dust",
    ];
    //RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region func Furnace
    function FurnaceImmersive(recipe) {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            input: { tag: recipe.put },
            results: [{ item: recipe.get }],
            energy: 2000,
            time: 100,
        });
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Furnace
    const FurnacePattern = [
        { get: "anoxia:obsidian_ingot", put: "anoxia:obsidian_with_iron" },
        { get: "actuallyadditions:black_quartz", put: "botania:quartz_dark" },
        { get: "pneumaticcraft:plastic", put: "industrialforegoing:dryrubber" },

        //Thermal
        { get: "thermal:signalum_ingot", put: "forge:dusts/signalum", metal: true },
        { get: "thermal:lumium_ingot", put: "forge:dusts/lumium", metal: true },
        { get: "thermal:enderium_ingot", put: "forge:dusts/enderium", metal: true },
        { get: "thermal:steel_ingot", put: "forge:dusts/steel", metal: true },
        { get: "thermal:rose_gold_ingot", put: "forge:dusts/rose_gold", metal: true },
        { get: "thermal:bronze_ingot", put: "forge:dusts/bronze", metal: true },
        { get: "thermal:electrum_ingot", put: "forge:dusts/electrum", metal: true },
        { get: "thermal:invar_ingot", put: "forge:dusts/invar", metal: true },
        { get: "thermal:constantan_ingot", put: "forge:dusts/constantan", metal: true },

        //Thermal Endergy
        { get: "thermalendergy:prismalium_ingot", put: "forge:dusts/prismalium", metal: true },
        { get: "thermalendergy:melodium_ingot", put: "forge:dusts/melodium", metal: true },
        { get: "thermalendergy:stellarium_ingot", put: "forge:dusts/stellarium", metal: true },
    ];
    FurnacePattern.forEach((recipe) => {
        //Furnace
/*         if (recipe.put.startsWith("forge:")) event.smelting(recipe.get, `#${recipe.put}`);
        else event.smelting(recipe.get, recipe.put);

        //Immersive
        if (recipe.metal) FurnaceImmersive(recipe); */
    });
});
