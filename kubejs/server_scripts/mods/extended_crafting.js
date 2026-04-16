ServerEvents.recipes((event) => {
  event.remove({ id: 'extendedcrafting:ender_ingot' });
  event.shapeless('extendedcrafting:ender_ingot', ['#forge:ingots/desh', 'minecraft:ender_pearl']);

  //# ====================================================================================== #

  event.remove({ output: 'projecte:philosophers_stone' });
  event.custom({
    type: 'extendedcrafting:compressor',
    powerCost: 50000000,
    inputCount: 1072658,
    ingredient: { item: 'anoxia:human_soul' },
    catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
    result: { item: 'projecte:philosophers_stone' },
  });
});
