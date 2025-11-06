//#region Item
JEIEvents.hideItems((event) => {
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

JEIEvents.addItems((event) => {
    //Add
    global.items.JEI_Add.forEach((item) => {
        event.add(item);
    });
});
//#endregion

//# =================================================================================================== #

//#region Fluid
JEIEvents.hideFluids((event) => {
    //Rm Out
    global.fluid.GAME_RmOut.forEach((fluid) => {
        event.hide(fluid);
    });

    //Rm In
    global.fluid.GAME_RmIn.forEach((fluid) => {
        event.hide(fluid);
    });

    //Hide
    global.fluid.JEI_Hide.forEach((item) => {
        event.hide(item);
    });
});

JEIEvents.addFluids((event) => {
    //Add
    global.fluid.JEI_Add.forEach((fluid) => {
        event.add(fluid);
    });
});
//#endregion
