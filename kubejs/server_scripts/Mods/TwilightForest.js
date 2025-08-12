ServerEvents.recipes((event) => {
    //#region LogCore
    const LogCore = [
        { get: "twilightforest:time_log", put: "twilightforest:time_log_core" },
        { get: "twilightforest:transformation_log", put: "twilightforest:transformation_log_core" },
        { get: "twilightforest:mining_log_core", put: "twilightforest:mining_log" },
        { get: "twilightforest:sorting_log", put: "twilightforest:sorting_log_core" },
    ];
    LogCore.forEach((recipe) => {
        event.shaped(Item.of(recipe.get, 64), ["A"], { A: recipe.put });
    });
    //#endregion

    // Uberous Soil
    event.shaped("twilightforest:uberous_soil", ["BBB", "BAB", "BBB"], { A: "farmersdelight:rich_soil", B: "industrialforegoing:fertilizer" });
});
