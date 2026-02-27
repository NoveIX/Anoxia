ServerEvents.recipes((event) => {
  //#region RemoveID
  const rmRecipeId = ['experienceobelisk:cognitive_alloy', 'experienceobelisk:metamorpher/cognitive_alloy_metamorphosis'];
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  //Cognitive Alloy
  event.shapeless('experienceobelisk:cognitive_alloy', ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', 'experienceobelisk:cognitive_amalgam', 'experienceobelisk:cognitive_amalgam', 'experienceobelisk:cognitive_amalgam', 'experienceobelisk:cognitive_amalgam']);

  //# ====================================================================================== #

  //#region Metamorpher
  const molecularMetamorphoerPattern = [
    {
      get: { item: 'experienceobelisk:cognitive_alloy', count: 1 },
      put1: { item: 'experienceobelisk:cognitive_flux' },
      n1: 2,
      put2: { tag: 'forge:ingots/copper' },
      n2: 2,
      put3: [],
      n3: 0,
      exp: 32,
      time: 100,
    },
  ];
  molecularMetamorphoerPattern.forEach((recipe) => {
    event.custom({
      type: 'experienceobelisk:molecular_metamorphosis',
      ingredient1: recipe.put1,
      count1: recipe.n1,
      ingredient2: recipe.put2,
      count2: recipe.n2,
      ingredient3: recipe.put3,
      count3: recipe.n3,
      result: recipe.get,
      cost: recipe.exp,
      processTime: recipe.time,
    });
  });
  //#endregion
});
