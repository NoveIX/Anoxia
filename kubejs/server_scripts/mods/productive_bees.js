ServerEvents.recipes((event) => {
  //#region RemoveID
  const RmRecipeID = ['productivebees:centrifuge/tconstruct/honeycomb_cobalt', 'productivebees:centrifuge/tconstruct/honeycomb_cobalt_block'];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //// # =================================================================================================== #

  //#region Centrifuge
  const CentrifugePattern = [
    {
      put: { type: 'forge:nbt', item: 'productivebees:configurable_honeycomb', nbt: { EntityTag: { type: 'productivebees:cobalt' } } },
      get: [{ item: { item: 'tconstruct:raw_cobalt' }, chance: 30 }, { item: { tag: 'forge:wax' } }, { fluid: { fluid: 'productivebees:honey' }, amount: 50 }],
    },
  ];
  CentrifugePattern.forEach((recipe) => {
    event.custom({
      type: 'productivebees:centrifuge',
      ingredient: recipe.put,
      outputs: recipe.get,
    });
  });
  //#endregion
});
