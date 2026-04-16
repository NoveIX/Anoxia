ServerEvents.recipes((event) => {
  event.remove({ output: 'tiab:time_in_a_bottle' });
  event.shaped('tiab:time_in_a_bottle', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/gold',
    B: 'minecraft:clock',
    C: '#forge:gems/mana_diamond',
    D: 'minecraft:nether_star',
    E: '#forge:gems/lapis',
    F: 'minecolonies:large_empty_bottle',
  });
});
