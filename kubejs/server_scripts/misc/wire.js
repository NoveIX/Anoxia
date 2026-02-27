ServerEvents.recipes((event) => {
  //#region func Wire
  function wireCrafting(recipe) {
    event.shapeless(recipe.get, [toTag(recipe.put), 'immersiveengineering:wirecutter']);
  }

  function wireCreate(recipe) {
    event.custom({
      type: 'createaddition:rolling',
      input: { tag: recipe.put },
      result: { item: recipe.get, count: 1 },
    });
  }

  function wireImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      energy: recipe.rsflux,
      input: { tag: recipe.put },
      mold: 'immersiveengineering:mold_wire',
      result: { base_ingredient: { item: recipe.get }, count: 1 },
    });
  }

  function wireThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      energy: recipe.rsflux,
      ingredients: [{ tag: recipe.put, count: 1 }, { item: 'anoxia:press_wire_die' }],
      result: [{ count: 1, item: recipe.get }],
    });
  }

  function wireTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: getCoolingTick(recipe.material, 1),
      fluid: { amount: 90, tag: `tconstruct:molten_${recipe.molten}` },
      result: recipe.get,
    };

    // Add single and multi Cast
    addDualCastRecipe('wire', json, event);
  }
  //#endregion

  //# ====================================================================================== #

  //#region Wire
  const wirePattern = [
    //Create
    { get: 'createaddition:iron_wire', put: 'forge:plates/iron', molten: 'iron', material: material.iron, rsflux: 4000 },
    { get: 'createaddition:gold_wire', put: 'forge:plates/gold', molten: 'gold', material: material.gold, rsflux: 4000 },

    //Immersive
    { get: 'immersiveengineering:wire_copper', put: 'forge:plates/copper', molten: 'copper', material: material.copper, rsflux: 4000 },
    { get: 'immersiveengineering:wire_electrum', put: 'forge:plates/electrum', molten: 'electrum', material: material.electrum, rsflux: 6000 },
    { get: 'immersiveengineering:wire_aluminum', put: 'forge:plates/aluminum', molten: 'aluminum', material: material.aluminum, rsflux: 4000 },
    { get: 'immersiveengineering:wire_steel', put: 'forge:plates/steel', molten: 'steel', material: material.steel, rsflux: 6000 },
    { get: 'immersiveengineering:wire_lead', put: 'forge:plates/lead', molten: 'lead', material: material.lead, rsflux: 4000 },
  ];
  wirePattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    //Recipe
    wireCrafting(recipe);
    wireCreate(recipe);
    wireImmersive(recipe);
    wireTinker(recipe);
  });
  //#endregion
});
