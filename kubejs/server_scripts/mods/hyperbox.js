ServerEvents.recipes((event) => {
  event.remove({ output: 'hyperbox:hyperbox' });
  event.shaped('hyperbox:hyperbox', ['ABA', 'CDC', 'AEA'], { A: '#forge:storage_blocks/diamond', B: 'uppers:upper', C: '#forge:barrels/wooden', D: 'entangled:block', E: 'minecraft:hopper' });
});
