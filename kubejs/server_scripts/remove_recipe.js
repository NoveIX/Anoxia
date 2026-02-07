//priority:990

ServerEvents.recipes((event) => {
  //Item
  GameItem.RmOut.forEach((item) => event.remove({ output: item }));
  GameItem.RmIn.forEach((item) => event.remove({ input: item }));

  //Fluid
  GameFluid.RmIn.forEach((fluid) => event.remove({ output: fluid }));
  GameFluid.RmIn.forEach((fluid) => event.remove({ input: fluid }));

  //Recipe ID
  GameRecipe.RmId.forEach((id) => event.remove({ id: id }));
});
