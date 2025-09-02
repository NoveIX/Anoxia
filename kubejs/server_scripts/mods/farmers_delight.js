ServerEvents.recipes((event) => {
    //Organic Compost
    event.remove({ output: "farmersdelight:organic_compost" });
    event.shaped("farmersdelight:organic_compost", ["FFF", "FDF", "FFF"], { F: "#anoxia:fertilizers", D: "minecraft:dirt" });

    //Blackstone Furnace
    event.remove({ output: "nethersdelight:blackstone_furnace" });
    event.shaped("nethersdelight:blackstone_furnace", ["CCC", "C C", "CCC"], { C: "anoxia:compressed_blackstone" });

    //Blackstone Blast Furnace
    event.remove({ output: "nethersdelight:blackstone_blast_furnace" });
    event.shaped("nethersdelight:blackstone_blast_furnace", ["PPP", "PFP", "CCC"], { P: "#forge:plates/iron", F: "#anoxia:furnaces/blackstone", C: "minecraft:polished_blackstone" });

    //Blackstone Smoker
    event.remove({ output: "nethersdelight:nether_brick_smoker" });
    event.shaped("nethersdelight:nether_brick_smoker", ["CBC", "BFB", "CBC"], { C: "anoxia:compressed_cobblestone", B: "minecraft:nether_bricks", F: "#anoxia:furnaces/stone" });

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
