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
    BasinFermentingPattern.forEach((recipe) => {
        event
            .custom({
                type: "createdieselgenerators:basin_fermenting",
                ingredients: recipe.put,
                processingTime: 200,
                results: recipe.get,
            })
            .id(recipe.guid);
    });
    //#endregion
});
