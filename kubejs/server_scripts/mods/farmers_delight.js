ServerEvents.recipes((event) => {
    //Organic Compost
    event.remove({ output: "farmersdelight:organic_compost" });
    event.shaped("farmersdelight:organic_compost", ["AAA", "ABA", "AAA"], { A: "#anoxia:fertilizers", B: "minecraft:dirt" });

    //Blackstone Furnace
    event.remove({ output: "nethersdelight:blackstone_furnace" });
    event.shaped("nethersdelight:blackstone_furnace", ["AAA", "A A", "AAA"], { A: "anoxia:compressed_blackstone" });

    //Blackstone Blast Furnace
    event.remove({ output: "nethersdelight:blackstone_blast_furnace" });
    event.shaped("nethersdelight:blackstone_blast_furnace", ["AAA", "ABA", "CCC"], { A: "#forge:plates/iron", B: "#anoxia:furnaces/blackstone", C: "minecraft:polished_blackstone" });

    //Blackstone Smoker
    event.remove({ output: "nethersdelight:nether_brick_smoker" });
    event.shaped("nethersdelight:nether_brick_smoker", ["ABA", "BCB", "ABA"], { A: "anoxia:compressed_cobblestone", B: "minecraft:nether_bricks", C: "#anoxia:furnaces/stone" });

    //// # =================================================================================================== #

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
