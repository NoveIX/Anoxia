//Item
JEIEvents.hideItems((event) => {
  gameItem.rmOut.forEach((item) => event.hide(item));
  gameItem.rmIn.forEach((item) => event.hide(item));
  gameItem.jeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => gameItem.jeiAdd.forEach((item) => event.add(item)));

//# ====================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
  gameFluid.rmOut.forEach((fluid) => event.hide(fluid));
  gameFluid.rmIn.forEach((fluid) => event.hide(fluid));
  gameFluid.jeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => gameFluid.jeiAdd.forEach((fluid) => event.add(fluid)));
