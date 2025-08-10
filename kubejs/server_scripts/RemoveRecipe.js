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
    ];
    RmID.forEach((ID) => {
        event.remove({ id: ID });
    });
    //#endregion
});
