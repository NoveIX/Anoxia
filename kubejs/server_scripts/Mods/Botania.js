ServerEvents.recipes((event) => {
    //Floral Fertilizer
    event.remove({ output: "botania:fertilizer" });
    event.shapeless("botania:fertilizer", ["minecraft:bone_meal", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower"]);
    event.shapeless("botania:fertilizer", ["botania:living_root"]);

    //// # =================================================================================================== #

    //#region Elven Trade
    const ElvenTradePattern = [
        //Aethersteel
        { get: [{ item: "aethersteel:aetherslate" }], put: [{ item: "anoxia:compressed_deepslate" }] },
    ];
    ElvenTradePattern.forEach((recipe) => {
        event.custom({
            type: "botania:elven_trade",
            ingredients: recipe.put,
            output: recipe.get,
        });
    })
    //#endregion
});
