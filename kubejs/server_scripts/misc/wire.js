ServerEvents.recipes((event) => {
  //#region func Wire
  function WireCrafting(recipe) {
    event.shapeless(recipe.get, [ToTag(recipe.put), 'immersiveengineering:wirecutter']);
  }

  function WireCreate(recipe) {
    event.custom({
      type: 'createaddition:rolling',
      input: { tag: recipe.put },
      result: { item: recipe.get, count: 1 },
    });
  }

  function WireImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      energy: recipe.rsflux,
      input: { tag: recipe.put },
      mold: 'immersiveengineering:mold_wire',
      result: { base_ingredient: { item: recipe.get }, count: 1 },
    });
  }

  function WireThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      energy: recipe.rsflux,
      ingredients: [{ tag: recipe.put, count: 1 }, { item: 'anoxia:press_wire_die' }],
      result: [{ count: 1, item: recipe.get }],
    });
  }

  function WireTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: GetMeltingTick(recipe.material, 1),
      fluid: { amount: 90, tag: `tconstruct:molten_${recipe.molten}` },
      result: recipe.get,
    };

    // Add single and multi Cast
    AddDualCastRecipe('wire', json, event);
  }
  //#endregion

  //# =================================================================================================== #

  //#region Wire
  const WirePattern = [
    //Create
    { get: 'createaddition:iron_wire', put: 'forge:plates/iron', molten: 'iron', material: Material.Iron, rsflux: 4000 },
    { get: 'createaddition:gold_wire', put: 'forge:plates/gold', molten: 'gold', material: Material.Gold, rsflux: 4000 },

    //Immersive
    { get: 'immersiveengineering:wire_copper', put: 'forge:plates/copper', molten: 'copper', material: Material.Copper, rsflux: 4000 },
    { get: 'immersiveengineering:wire_electrum', put: 'forge:plates/electrum', molten: 'electrum', material: Material.Electrum, rsflux: 6000 },
    { get: 'immersiveengineering:wire_aluminum', put: 'forge:plates/aluminum', molten: 'aluminum', material: Material.Aluminum, rsflux: 4000 },
    { get: 'immersiveengineering:wire_steel', put: 'forge:plates/steel', molten: 'steel', material: Material.Steel, rsflux: 6000 },
    { get: 'immersiveengineering:wire_lead', put: 'forge:plates/lead', molten: 'lead', material: Material.Lead, rsflux: 4000 },
  ];
  WirePattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    //Recipe
    WireCrafting(recipe);
    WireCreate(recipe);
    WireImmersive(recipe);
    WireTinker(recipe);
  });
  //#endregion
});
