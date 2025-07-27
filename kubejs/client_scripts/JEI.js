//#region Item
//Add
JEIEvents.addItems((event) => {
    global.items.JEI_Add.forEach((id) => {
        event.add(id);
    });
});

//Hide
JEIEvents.hideItems((event) => {
    //Only Hide
    global.items.JEI_Hide.forEach((id) => {
        event.hide(id);
    });

    //Removed From Game
    global.items.GAME_RmOut.forEach((id) => {
        event.hide(id);
    });
    global.items.GAME_RmIn.forEach((id) => {
        event.hide(id);
    });
});
//#endregion

//#region Fluid
//Hide
JEIEvents.hideFluids((event) => {
    //Removed From Game
    global.fluid.GAME_RmOut.forEach((id) => {
        event.hide(id);
    });
    global.fluid.GAME_RmIn.forEach((id) => {
        event.hide(id);
    });
});
//#endregion
