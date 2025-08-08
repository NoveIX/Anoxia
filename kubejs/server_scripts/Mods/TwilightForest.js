ServerEvents.recipes((event) => {
    //Log Core
    event.shaped(Item.of("twilightforest:time_log", 64), ["A"], { L: "twilightforest:time_log_core" });
    event.shaped(Item.of("twilightforest:transformation_log", 64), ["A"], { L: "twilightforest:transformation_log_core" });
    event.shaped(Item.of("twilightforest:mining_log_core", 64), ["A"], { L: "twilightforest:mining_log" });
    event.shaped(Item.of("twilightforest:sorting_log", 64), ["A"], { L: "twilightforest:sorting_log_core" });

    // Uberous Soil
    event.shaped("twilightforest:uberous_soil", ["FFF", "FRF", "FFF"], { R: "farmersdelight:rich_soil", F: "industrialforegoing:fertilizer" });
});
