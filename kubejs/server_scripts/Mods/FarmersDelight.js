ServerEvents.recipes((event) => {
    //Organic Compost
    event.remove({ output: "farmersdelight:organic_compost" });
    event.shaped("farmersdelight:organic_compost", ["FFF", "FDF", "FFF"], { F: "#anoxia:fertilizers", D: "minecraft:dirt" });

    //#region Cutting
    event.remove({ output: "forbidden_arcanus:ender_pearl_fragment" });
    event.remove({ output: "projectred_core:silicon" });
    const CuttingPattern = [
        {
            //EnderPearl Fragment
            get: [{ item: "forbidden_arcanus:ender_pearl_fragment", count: 4 }],
            put: [{ item: "minecraft:ender_pearl" }],
            cutter: { tag: "forge:tools/knives" },
        },
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
