ServerEvents.recipes((event) => {
    //#region BasinFermenting
    //event.remove({ id: "createdieselgenerators:basin_fermenting/dough" });
    const BasinFermentingPattern = [
        {
            //Restore BasinFermenting flour + Water => PamHC Dought
            get: [{ item: "pamhc2foodcore:doughitem" }, { item: "create:wheat_flour", chance: 0.1 }],
            put: [{ tag: "forge:flour/wheat" }, { fluid: "minecraft:water", amount: 1000 }],
            guid: "anoxia:restore_dought"
        },
    ];
    function BasinFermentingRecipes({ get, put, guid }) {
        event.custom({
            type: "createdieselgenerators:basin_fermenting",
            ingredients: put,
            processingTime: 200,
            results: get,
        }).id(guid);
    }
    BasinFermentingPattern.forEach(BasinFermentingRecipes);
    //#endregion
});
