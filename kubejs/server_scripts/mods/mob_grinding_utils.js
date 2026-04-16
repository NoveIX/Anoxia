ServerEvents.recipes((event) => {
  //Fan
  event.remove({ output: 'mob_grinding_utils:fan' });
  event.shaped('mob_grinding_utils:fan', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:smooth_stone_slab', B: '#forge:ingots/red_alloy', C: 'create:encased_fan' });

  //Vertical upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_height', ['ABA', ' C ', 'ABA'], { A: '#forge:ingots/iron', B: 'create:propeller', C: 'create:shaft' });

  //Orizontal upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_width', ['A A', 'BCB', 'A A'], { A: '#forge:ingots/iron', B: 'create:propeller', C: 'create:shaft' });

  //Distance upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_speed', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/iron', B: 'create:propeller', C: 'create:shaft' });
});
