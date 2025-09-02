//#region Item
JEIEvents.hideItems((event) => {
    //Rm Full
    global.items.GAME_FullRm.forEach((item) => {
        event.hide(item);
    });

    //Rm Out
    global.items.GAME_RmOut.forEach((item) => {
        event.hide(item);
    });

    //Rm In
    global.items.GAME_RmIn.forEach((item) => {
        event.hide(item);
    });

    //Hide
    global.items.JEI_Hide.forEach((item) => {
        event.hide(item);
    });
});

//// # =================================================================================================== #

JEIEvents.addItems((event) => {
    global.items.JEI_Add.forEach((item) => {
        event.add(item);
    });
});
//#endregion

//// # =================================================================================================== #

//#region Fluid
JEIEvents.hideFluids((event) => {
    //Rm Full
    global.fluid.GAME_FullRm.forEach((fluid) => {
        event.hide(fluid);
    });

    //Rm Out
    global.fluid.GAME_RmOut.forEach((fluid) => {
        event.hide(fluid);
    });

    //Rm In
    global.fluid.GAME_RmIn.forEach((fluid) => {
        event.hide(fluid);
    });
});
//#endregion
