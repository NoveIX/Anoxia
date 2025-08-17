// priority:1000
ServerEvents.recipes((event) => {
    //Item
    global.items.GAME_RmOut.forEach((item) => {
        event.remove({ output: item });
    });

    global.items.GAME_RmIn.forEach((item) => {
        event.remove({ input: item });
    });

    global.items.GAME_FullRm.forEach((item) => {
        event.remove({ output: item });
        //event.remove({ input: item });
    });

    //Fluid
    global.fluid.GAME_RmOut.forEach((item) => {
        event.remove({ output: item });
    });

    global.fluid.GAME_RmIn.forEach((item) => {
        event.remove({ input: item });
    });
    //#endregion

    //Recipe ID
    global.recipe.GAME_Rmid.forEach((id) => {
        event.remove({ id: id });
    });
});
