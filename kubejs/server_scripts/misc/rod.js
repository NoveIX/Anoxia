ServerEvents.recipes((event) => {
  //#region func Rod
  function RodCrafting(recipe) {
    event.shaped(recipe.get, ['R', 'R'], { R: ToTag(recipe.put) });
  }

  function RodCreate(recipe) {
    event.custom({
      type: 'createaddition:rolling',
      input: { tag: recipe.put },
      result: { item: recipe.get, count: 1 },
    });
  }

  function RodImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      mold: 'immersiveengineering:mold_rod',
      input: { tag: recipe.put },
      result: { base_ingredient: { item: recipe.get }, count: 1 },
      energy: recipe.rsflux,
    });
  }

  function RodThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      energy: recipe.rsflux,
      ingredients: [{ tag: recipe.put, count: 1 }, { item: 'anoxia:press_rod_die' }],
      result: [{ count: 1, item: recipe.get }],
    });
  }

  function RodTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: GetCoolingTick(recipe.material, 1),
      fluid: { amount: 90, tag: `tconstruct:molten_${recipe.molten}` },
      result: recipe.get,
    };

    // Add single and multi Cast
    addDualCastRecipe('rod', json, this);
  }
  //#endregion

  //# =================================================================================================== #

  //#region Rod
  const RodPattern = [
    //Create
    { get: 'createaddition:copper_rod', put: 'forge:ingots/copper', molten: 'copper', material: Material.Copper, rsflux: 4000 },
    { get: 'createaddition:gold_rod', put: 'forge:ingots/gold', molten: 'gold', material: Material.Gold, rsflux: 4000 },
    { get: 'createaddition:electrum_rod', put: 'forge:ingots/electrum', molten: 'electrum', material: Material.Electrum, rsflux: 6000 },
    { get: 'createaddition:brass_rod', put: 'forge:ingots/brass', molten: 'brass', material: Material.Brass, rsflux: 6000 },

    //Immersive
    { get: 'immersiveengineering:stick_iron', put: 'forge:ingots/iron', molten: 'iron', material: Material.Iron, rsflux: 4000 },
    { get: 'immersiveengineering:stick_steel', put: 'forge:ingots/steel', molten: 'steel', material: Material.Steel, rsflux: 6000 },
    { get: 'immersiveengineering:stick_aluminum', put: 'forge:ingots/aluminum', molten: 'aluminum', material: Material.Aluminum, rsflux: 4000 },
  ];
  RodPattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    //Recipe
    RodCrafting(recipe);
    RodCreate(recipe);
    RodImmersive(recipe);
    RodThermal(recipe);
    RodTinker(recipe);
  });
  //#endregion
});
