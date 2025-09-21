ServerEvents.recipes((event) => {
    const RmRecipeID = ["arseng:source_cell_housing"];
    RmRecipeID.forEach((id) => {
        event.remove({ id: id });
    });

    //// # =================================================================================================== #

    //#region ApparatusPattern
    const ApparatusPattern = [
        {
            get: { item: "arseng:source_cell_housing" },
            put: [
                { item: "ars_nouveau:manipulation_essence" },
                { item: "ars_nouveau:manipulation_essence" },
                { item: "ars_nouveau:manipulation_essence" },
                { item: "ars_nouveau:source_gem" },
                { item: "ars_nouveau:source_gem" },
                { item: "minecraft:gold_ingot" },
                { item: "minecraft:gold_ingot" },
                { item: "minecraft:gold_ingot" },
            ],
            catalyst: [{ item: "ae2:fluid_cell_housing" }],
            magic: 1000,
        },
    ];
    ApparatusPattern.forEach((recipe) => {
        event.custom({
            type: "ars_nouveau:enchanting_apparatus",
            keepNbtOfReagent: false,
            output: recipe.get,
            pedestalItems: recipe.put,
            reagent: recipe.catalyst,
            sourceCost: recipe.magic,
        });
    });
    //#endregion
});
