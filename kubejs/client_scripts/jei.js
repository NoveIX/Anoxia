//Item
JEIEvents.hideItems((event) => {
  Anoxia.Game.Item.RmOut.forEach((item) => event.hide(item));
  Anoxia.Game.Item.RmIn.forEach((item) => event.hide(item));
  Anoxia.Game.Item.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => Anoxia.Game.Item.JeiAdd.forEach((item) => event.add(item)));

//# =================================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
  Anoxia.Game.Fluid.RmOut.forEach((fluid) => event.hide(fluid));
  Anoxia.Game.Fluid.RmIn.forEach((fluid) => event.hide(fluid));
  Anoxia.Game.Fluid.JeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => Anoxia.Game.Fluid.JeiAdd.forEach((fluid) => event.add(fluid)));
