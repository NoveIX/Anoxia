ServerEvents.recipes((event) => {
    //#region Basin fermenting
    const BasinFermentingPattern = [
        {
            //Restore Basin fermenting - flour + Water => PamHC Dought
            get: [{ item: "pamhc2foodcore:doughitem" }, { item: "create:wheat_flour", chance: 0.1 }],
            put: [{ tag: "forge:flour/wheat" }, { fluid: "minecraft:water", amount: 1000 }],
            guid: "anoxia:restore_dought",
        },
    ];
    function BasinFermentingRecipes({ get, put, guid }) {
        event
            .custom({
                type: "createdieselgenerators:basin_fermenting",
                ingredients: put,
                processingTime: 200,
                results: get,
            })
            .id(guid);
    }
    BasinFermentingPattern.forEach(BasinFermentingRecipes);
    //#endregion
});
