ServerEvents.recipes((event) => {
  //Sink
  event.remove({ output: 'cookingforblockheads:sink' });
  event.shaped('cookingforblockheads:sink', ['AAA', 'BCB', 'BBB'], { A: '#forge:ingots/iron', B: 'minecraft:terracotta', C: 'thermal:device_water_gen' });
});
