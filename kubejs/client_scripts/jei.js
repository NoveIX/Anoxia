//Item
JEIEvents.hideItems((event) => {
    global.items.GAME_RmOut.forEach((item) => event.hide(item));
    global.items.GAME_RmIn.forEach((item) => event.hide(item));
    global.items.JEI_Hide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => global.items.JEI_Add.forEach((item) => event.add(item)));

//# =================================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
    global.fluid.GAME_RmOut.forEach((fluid) => event.hide(fluid));
    global.fluid.GAME_RmIn.forEach((fluid) => event.hide(fluid));
    global.fluid.JEI_Hide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => global.fluid.JEI_Add.forEach((fluid) => event.add(fluid)));
