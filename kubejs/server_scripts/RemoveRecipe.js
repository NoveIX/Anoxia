// priority:10
ServerEvents.recipes((event) => {
    //Item
    global.items.GAME_RmOut.forEach((item) => {
        event.remove({ output: item });
    });

    global.items.GAME_RmIn.forEach((item) => {
        event.remove({ input: item });
    });

    //Fluid
    global.fluid.GAME_RmOut.forEach((item) => {
        event.remove({ output: item });
    });

    global.fluid.GAME_RmIn.forEach((item) => {
        event.remove({ input: item });
    });

    //#region Remove ID
    const RmID = [
        //Cyclic
        "cyclic:compressed_cobblestone", //Crafting: Cobblestone => CompressedCobblestone
        "cyclic:compressed_cobblestone_u", //Crafting: CompressedCobblestone => Cobblestone
        "cyclic:compat/sturdy_stone", //Crafting: Stone + Cobblestone => CompressedCobblestone

        "ad_astra:recipes/steel_ingot_from_blasting_iron_ingot", //Blasting: Iront => Steel
        "bucketlib:create/dough", //Crafting: Flour + Water => Dough
        "bucketlib:farmersdelight/wheat_dough_from_water", //Crafting: Wheat + Water => Dough
        "delightful:food/nut_dough", //Crafting: Nut + Egg => Nut Dought

        "jaopca:thermal_expansion.molten_to_material.soul_infused", //BlastChilling: Molten => Ingot
        "jaopca:thermal_expansion.molten_to_material.twinite", //BlastChilling: Molten => Ingot
        "jaopca:thermal_expansion.molten_to_material.shellite", //BlastChilling: Molten => Ingot
        "jaopca:thermal_expansion.molten_to_material.dragonsteel", //BlastChilling: Molten => Ingot
        "jaopca:thermal_expansion.molten_to_material.abyssal", //BlastChilling: Molten => Ingot
    ];
    RmID.forEach((ID) => {
        event.remove({ id: ID });
    });
    //#endregion
});
