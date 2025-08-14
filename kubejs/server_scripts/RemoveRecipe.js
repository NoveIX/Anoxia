// priority:1000
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
    //#endregion

    const RemoveRecipesID = [];
    RemoveRecipesID.forEach((Id) => {
        event.remove({ id: Id });
    });
});
