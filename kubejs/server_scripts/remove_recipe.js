//priority:990

ServerEvents.recipes((event) => {
  //Item
  Item.RmOut.forEach((item) => event.remove({ output: item }));
  Item.RmIn.forEach((item) => event.remove({ input: item }));

  //Fluid
  Fluid.RmIn.forEach((fluid) => event.remove({ output: fluid }));
  Fluid.RmIn.forEach((fluid) => event.remove({ input: fluid }));

  //Recipe ID
  Recipe.RmId.forEach((id) => event.remove({ id: id }));
});
