ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = ["industrialforegoing:crusher/sand_silicon"];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    // # =================================================================================================== #

    //Fertilizer
    event.shaped("industrialforegoing:fertilizer", ["AAA", "AAA", "AAA"], { A: "minecolonies:compost" });

    //Dye Mixer
    event.remove({ output: "industrialforegoing:dye_mixer" });
    event.shaped("industrialforegoing:dye_mixer", ["ADA", "EBF", "ACA"], { A: "#forge:plates/iron", B: "industrialforegoing:machine_frame_pity", C: "#forge:gears/gold", D: "minecraft:green_dye", E: "minecraft:red_dye", F: "minecraft:blue_dye" });

    // # =================================================================================================== #

    //#region Dissolution Chamber
    const DissolutionChamberPattern = [
        {
            get: { count: 1, item: "industrialforegoing:speed_addon_1", nbt: "{TitaniumAugment:{Speed:2.0f}}" },
            put: [
                { item: "minecraft:redstone" }, //TL
                { item: "minecraft:glass_pane" }, //T
                { item: "minecraft:glass_pane" }, //TR
                { tag: "forge:gears/gold" }, //L
                { tag: "forge:gears/gold" }, //R
                { item: "minecraft:sugar" }, //BL
                { item: "minecraft:glass_pane" }, //B
                { item: "minecraft:sugar" }, //BR
            ],
            fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
        },
    ];
    DissolutionChamberPattern.forEach((recipe) => {
        event.custom({
            type: "industrialforegoing:dissolution_chamber",
            input: recipe.put,
            inputFluid: recipe.fluid,
            output: recipe.get,
            processingTime: 200,
        });
    });
    //#endregion

    // # =================================================================================================== #

    //#region Crusher
    const CrusherPattern = [
        { get: { tag: "forge:dust" }, put: { tag: "forge:sand" } },
        { get: { tag: "forge:silicon" }, put: { tag: "forge:dust" } },
    ];
    CrusherPattern.forEach((recipe) => {
        event.custom({
            type: "industrialforegoing:crusher",
            input: recipe.put,
            output: recipe.get,
        });
    });
    //#endregion
});
