ServerEvents.recipes((event) => {
    //Organic Compost
    event.remove({ output: "farmersdelight:organic_compost" });
    event.shaped("farmersdelight:organic_compost", ["FFF", "FDF", "FFF"], { F: "#anoxia:fertilizers", D: "minecraft:dirt" });

    //#region Cutting
    event.remove({ output: "projectred_core:silicon" });
    const CuttingPattern = [
        {
            //ProjectRED Silicon
            get: [{ item: "projectred_core:silicon", count: 4 }],
            put: [{ item: "projectred_core:boule" }],
            cutter: { tag: "forge:tools/knives" },
        },
    ];
    CuttingPattern.forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: recipe.put,
            result: recipe.get,
            tool: recipe.cutter,
        });
    });
    //#endregion
});
