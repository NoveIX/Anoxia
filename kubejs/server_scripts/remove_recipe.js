//priority:990

ServerEvents.recipes((event) => {
  //Item
  Anoxia.Game.Item.RmOut.forEach((item) => event.remove({ output: item }));
  Anoxia.Game.Item.RmIn.forEach((item) => event.remove({ input: item }));

  //Fluid
  Anoxia.Game.Item.RmIn.forEach((fluid) => event.remove({ output: fluid }));
  Anoxia.Game.Item.RmIn.forEach((fluid) => event.remove({ input: fluid }));

  //Recipe ID
  Anoxia.Game.Recipe.RmId.forEach((id) => event.remove({ id: id }));
});
