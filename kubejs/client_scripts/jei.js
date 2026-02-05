//Item
JEIEvents.hideItems((event) => {
  Item.RmOut.forEach((item) => event.hide(item));
  Item.RmIn.forEach((item) => event.hide(item));
  Item.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => Item.JeiAdd.forEach((item) => event.add(item)));

//# =================================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
  Fluid.RmOut.forEach((fluid) => event.hide(fluid));
  Fluid.RmIn.forEach((fluid) => event.hide(fluid));
  Fluid.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => Fluid.JeiAdd.forEach((fluid) => event.add(fluid)));
