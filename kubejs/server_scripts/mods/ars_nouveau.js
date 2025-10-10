ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = ["arseng:source_cell_housing"];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

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
            magic: 20000,
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

    //// # =================================================================================================== #

    //#region Imbuement
    const ImbuementPattern = [
        //AE 2
        { get: "anoxia:source_integration_processor", put: { item: "ae2:engineering_processor" }, putN: 1, magic: 10000 },

        //Mekanism
        { get: "mekanism:advanced_tier_installer", put: { item: "mekanism:basic_tier_installer" }, putN: 1, magic: 20000 },
    ];
    ImbuementPattern.forEach((recipe) => {
        event.custom({
            type: "ars_nouveau:imbuement",
            count: recipe.putN,
            input: recipe.put,
            output: recipe.get,
            pedestalItems: [],
            source: recipe.magic,
        });
    });
    //#endregion
});
