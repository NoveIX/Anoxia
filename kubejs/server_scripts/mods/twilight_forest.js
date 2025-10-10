ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        "create:cutting/runtime_generated/compat/create/tag_runtime_generated/compat/twilightforest/time_to_time_planks",
        "create:cutting/runtime_generated/compat/create/tag_runtime_generated/compat/twilightforest/transformation_to_transformation_planks",
        "create:cutting/runtime_generated/compat/create/tag_runtime_generated/compat/twilightforest/mining_to_mining_planks",
        "create:cutting/runtime_generated/compat/create/tag_runtime_generated/compat/twilightforest/sorting_to_sorting_planks",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region LogCore
    const LogCore = [
        { get: "twilightforest:time_log", put: "twilightforest:time_log_core" },
        { get: "twilightforest:transformation_log", put: "twilightforest:transformation_log_core" },
        { get: "twilightforest:mining_log", put: "twilightforest:mining_log_core" },
        { get: "twilightforest:sorting_log", put: "twilightforest:sorting_log_core" },
    ];
    LogCore.forEach((recipe) => {
        event.remove({ input: recipe.put });
        event.shaped(Item.of(recipe.get, 8), ["A"], { A: recipe.put });
    });
    //#endregion

    // Uberous Soil
    event.shaped("twilightforest:uberous_soil", ["BBB", "BAB", "BBB"], { A: "farmersdelight:rich_soil", B: "industrialforegoing:fertilizer" });
});
