ServerEvents.recipes((event) => {
    //Fertilizer
    event.shaped("industrialforegoing:fertilizer", ["CCC", "CCC", "CCC"], { C: "minecolonies:compost" });

    //Dye Mixer
    event.remove({ output: "industrialforegoing:dye_mixer" });
    event.shaped("industrialforegoing:dye_mixer", ["PGP", "RFB", "PAP"], { P: "#forge:plates/iron", F: "industrialforegoing:machine_frame_pity", A: "#forge:gears/gold", R: "minecraft:red_dye", G: "minecraft:green_dye", B: "minecraft:blue_dye" });

    //// # =================================================================================================== #

    //#region Crusher
    event.remove({ id: "industrialforegoing:crusher/sand_silicon" });
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
