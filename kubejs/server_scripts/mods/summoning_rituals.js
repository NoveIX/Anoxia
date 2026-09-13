ServerEvents.recipes((event) => {
  event.shaped('summoningrituals:altar', ['ABA', 'CDC', ' E '], { A: 'minecraft:candle', B: 'minecraft:wither_skeleton_skull', C: '#forge:ingots/gold', D: 'minecraft:red_wool', E: 'minecraft:lectern' });

  //Summoning
  event.recipes.summoningrituals.altar('minecraft:honeycomb').mobOutput('minecraft:bee').input('#minecraft:flowers').input('minecraft:honey_bottle').input('minecraft:sugar').recipeTime(200);
});
