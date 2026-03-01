ServerEvents.recipes((event) => {
  //#region func Rod
  function rodCrafting(recipe) {
    event.shaped(recipe.get, ['R', 'R'], { R: toTag(recipe.put) });
  }

  function rodCreate(recipe) {
    event.custom({
      type: 'createaddition:rolling',
      input: { tag: recipe.put },
      result: { item: recipe.get, count: 1 },
    });
  }

  function rodImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      mold: 'immersiveengineering:mold_rod',
      input: { tag: recipe.put },
      result: { base_ingredient: { item: recipe.get }, count: 1 },
      energy: recipe.rsflux,
    });
  }

  function rodThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      energy: recipe.rsflux,
      ingredients: [{ tag: recipe.put, count: 1 }, { item: 'anoxia:press_rod_die' }],
      result: [{ count: 1, item: recipe.get }],
    });
  }

  function rodTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: getCoolingTick(recipe.material, 1),
      fluid: { amount: 90, tag: `tconstruct:molten_${recipe.molten}` },
      result: recipe.get,
    };

    //Add single and multi Cast
    addDualCastRecipe('rod', json, event);
  }
  //#endregion

  //# ====================================================================================== #

  //#region Rod
  const rodPattern = [
    //Create
    { get: 'createaddition:copper_rod', put: 'forge:ingots/copper', molten: 'copper', material: material.copper, rsflux: 4000 },
    { get: 'createaddition:gold_rod', put: 'forge:ingots/gold', molten: 'gold', material: material.gold, rsflux: 4000 },
    { get: 'createaddition:electrum_rod', put: 'forge:ingots/electrum', molten: 'electrum', material: material.electrum, rsflux: 6000 },
    { get: 'createaddition:brass_rod', put: 'forge:ingots/brass', molten: 'brass', material: material.brass, rsflux: 6000 },

    //Immersive
    { get: 'immersiveengineering:stick_iron', put: 'forge:ingots/iron', molten: 'iron', material: material.iron, rsflux: 4000 },
    { get: 'immersiveengineering:stick_steel', put: 'forge:ingots/steel', molten: 'steel', material: material.steel, rsflux: 6000 },
    { get: 'immersiveengineering:stick_aluminum', put: 'forge:ingots/aluminum', molten: 'aluminum', material: material.aluminum, rsflux: 4000 },
  ];
  rodPattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    //Recipe
    rodCrafting(recipe);
    rodCreate(recipe);
    rodImmersive(recipe);
    rodThermal(recipe);
    rodTinker(recipe);
  });
  //#endregion
});
