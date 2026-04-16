ServerEvents.recipes((event) => {
  //#region Remove ID
  const rmRecipeId = ['actuallyadditions:pressing/canola'];
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  event.remove({ output: 'actuallyadditions:atomic_reconstructor' });
  event.shaped('actuallyadditions:atomic_reconstructor', ['ABA', 'BCD', 'ABA'], {
    A: '#forge:ingots/iron',
    B: '#forge:dusts/redstone',
    C: 'actuallyadditions:iron_casing',
    D: 'actuallyadditions:lens',
  });

  //Powered Funrace
  event.remove({ output: 'actuallyadditions:powered_furnace' });
  event.shaped('actuallyadditions:powered_furnace', ['ABA', 'CDC', 'EFE'], {
    A: 'actuallyadditions:enori_crystal',
    B: 'immersiveengineering:connector_mv',
    C: 'ironfurnaces:gold_furnace',
    D: 'actuallyadditions:iron_casing',
    E: '#forge:gears/invar',
    F: 'actuallyadditions:advanced_coil',
  });

  //Crusher
  event.remove({ output: 'actuallyadditions:crusher' });
  event.shaped('actuallyadditions:crusher', ['ABA', 'CDC', 'EFE'], {
    A: 'actuallyadditions:restonia_crystal',
    B: 'immersiveengineering:connector_lv',
    C: 'create:millstone',
    D: 'actuallyadditions:iron_casing',
    E: '#forge:gears/tin',
    F: 'actuallyadditions:basic_coil',
  });

  //Double Crusher
  event.remove({ output: 'actuallyadditions:crusher_double' });
  event.shaped('actuallyadditions:crusher_double', ['ABA', 'CDC', 'EFE'], {
    A: 'actuallyadditions:enori_crystal',
    B: 'immersiveengineering:connector_mv',
    C: 'actuallyadditions:crusher',
    D: 'actuallyadditions:iron_casing',
    E: '#forge:gears/invar',
    F: 'actuallyadditions:advanced_coil',
  });

  //# ====================================================================================== #

  const pressingPattern = [{ getFluid: { Amount: 80, FluidName: 'actuallyadditions:canola_oil' }, putItem: { tag: 'forge:crops/canola' } }];
  pressingPattern.forEach((recipe) => {
    event.custom({
      type: 'actuallyadditions:pressing',
      fluid: recipe.getFluid,
      ingredient: recipe.putItem,
    });
  });

  //# ====================================================================================== #

  //#region Empowering
  event.remove({ output: 'enderio:double_layer_capacitor' });
  event.remove({ output: 'enderio:octadic_capacitor' });
  const empoweringPattern = [
    {
      get: { item: 'enderio:double_layer_capacitor' },
      put: { tag: 'forge:dusts/coal' },
      extra: [{ item: 'enderio:basic_capacitor' }, { item: 'enderio:basic_capacitor' }, { tag: 'forge:ingots/dyngetic_alloy' }, { tag: 'forge:ingots/dyngetic_alloy' }],
      rsflux: 3750,
      color: 3335679,
      sec: 600,
    },
    {
      get: { item: 'enderio:octadic_capacitor' },
      put: { tag: 'forge:storage_blocks/glowstone' },
      extra: [{ item: 'enderio:double_layer_capacitor' }, { item: 'enderio:double_layer_capacitor' }, { tag: 'forge:ingots/vivrant_alloy' }, { tag: 'forge:ingots/vivrant_alloy' }],
      rsflux: 7500,
      color: 2745239,
      sec: 900,
    },
  ];
  empoweringPattern.forEach((recipe) => {
    event.custom({
      type: 'actuallyadditions:empowering',
      base: recipe.put,
      color: recipe.color,
      energy: recipe.rsflux,
      modifiers: recipe.extra,
      result: recipe.get,
      time: recipe.sec,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region MiningLens
  event.custom({
    type: 'actuallyadditions:mining_lens',
    ingredient: { item: 'minecraft:deepslate' },
    output_type: 'item',
    result: { item: 'aethersteel:aether_debris' },
    weight: 1,
  });
  //#endregion
});
