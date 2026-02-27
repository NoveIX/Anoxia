//priority:990

ServerEvents.recipes((event) => {
  //Item
  gameItem.rmOut.forEach((item) => event.remove({ output: item }));
  gameItem.rmIn.forEach((item) => event.remove({ input: item }));

  //Fluid
  gameFluid.rmIn.forEach((fluid) => event.remove({ output: fluid }));
  gameFluid.rmIn.forEach((fluid) => event.remove({ input: fluid }));

  //Recipe ID
  gameRecipe.rmId.forEach((id) => event.remove({ id: id }));
});
