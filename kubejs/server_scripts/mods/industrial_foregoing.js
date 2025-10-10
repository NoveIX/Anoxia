ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = ["industrialforegoing:crusher/sand_silicon"];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //Fertilizer
    event.shaped("industrialforegoing:fertilizer", ["AAA", "AAA", "AAA"], { A: "minecolonies:compost" });

    //Dye Mixer
    event.remove({ output: "industrialforegoing:dye_mixer" });
    event.shaped("industrialforegoing:dye_mixer", ["ADA", "EBF", "ACA"], { A: "#forge:plates/iron", B: "industrialforegoing:machine_frame_pity", C: "#forge:gears/gold", D: "minecraft:green_dye", E: "minecraft:red_dye", F: "minecraft:blue_dye" });

    //// # =================================================================================================== #

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
