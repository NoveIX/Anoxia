//Item
JEIEvents.hideItems((event) => {
  GameItem.RmOut.forEach((item) => event.hide(item));
  GameItem.RmIn.forEach((item) => event.hide(item));
  GameItem.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => GameItem.JeiAdd.forEach((item) => event.add(item)));

//# ====================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
  GameFluid.RmOut.forEach((fluid) => event.hide(fluid));
  GameFluid.RmIn.forEach((fluid) => event.hide(fluid));
  GameFluid.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => GameFluid.JeiAdd.forEach((fluid) => event.add(fluid)));
