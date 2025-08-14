//#region Item
//Hide
JEIEvents.hideItems((event) => {
    //Removed From Game
    global.items.GAME_RmOut.forEach((item) => {
        event.hide(item);
    });
    global.items.GAME_RmIn.forEach((item) => {
        event.hide(item);
    });

    //Only Hide
    global.items.JEI_Hide.forEach((item) => {
        event.hide(item);
    });

    //Add
    JEIEvents.addItems((event) => {
        global.items.JEI_Add.forEach((item) => {
            event.add(item);
        });
    });
});
//#endregion

//#region Fluid
//Hide
JEIEvents.hideFluids((event) => {
    //Removed From Game
    global.fluid.GAME_RmOut.forEach((item) => {
        event.hide(item);
    });
    global.fluid.GAME_RmIn.forEach((item) => {
        event.hide(item);
    });
});
//#endregion
