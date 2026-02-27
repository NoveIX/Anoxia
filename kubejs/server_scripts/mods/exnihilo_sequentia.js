/* ServerEvents.recipes((event) => {
  //StoneCrook
  event.remove({ output: 'exnihilosequentia:stone_crook' });
  event.shaped('exnihilosequentia:stone_crook', ['AA', ' A', ' A'], { A: '#forge:pebble/stone' });

  //# ====================================================================================== #

  //#region Compost
  const CompostPattern = [
    { put: { item: 'rootsclassic:elderberry' }, compost: 40 },
    { put: { item: 'rootsclassic:nightshade' }, compost: 40 },
    { put: { item: 'rootsclassic:blackcurrant' }, compost: 40 },
    { put: { item: 'rootsclassic:redcurrant' }, compost: 40 },
    { put: { item: 'rootsclassic:whitecurrant' }, compost: 40 },
    { put: { item: 'delightful:green_tea_leaf' }, compost: 40 },
  ];
  CompostPattern.forEach((recipe) => {
    event.custom({
      type: 'exnihilosequentia:compost',
      amount: recipe.compost,
      input: recipe.put,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region Crusher
  const CrusherPattern = [
    {
      get: [{ chance: 1.0, count: 1, item: 'aethersteel:cobbled_aetherslate' }],
      put: { item: 'aethersteel:aetherslate' },
    },
    {
      get: [{ chance: 1.0, count: 1, item: 'ad_astra:moon_sand' }],
      put: { item: 'ad_astra:moon_cobblestone' },
    },
    {
      get: [{ chance: 1.0, count: 1, item: 'ad_astra:mars_sand' }],
      put: { item: 'ad_astra:mars_cobblestone' },
    },
    {
      get: [{ chance: 1.0, count: 1, item: 'ad_astra:venus_sand' }],
      put: { item: 'ad_astra:venus_cobblestone' },
    },
  ];
  CrusherPattern.forEach((recipe) => {
    event.custom({
      type: 'exnihilosequentia:crushing',
      input: recipe.put,
      results: recipe.get,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region Precipitate
  const FluidItemPattern = [{ get: { count: 1, item: 'ae2:sky_stone_block' }, put: { item: 'ae2:sky_dust' }, fluid: { amount: 1000, fluid: 'minecraft:lava' } }];
  FluidItemPattern.forEach((recipe) => {
    event.custom({
      type: 'exnihilosequentia:precipitate',
      fluid: recipe.fluid,
      input: recipe.put,
      result: recipe.get,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region Heat
  event.remove({ type: 'exnihilosequentia:heat' });
  const HeatPattern = [
    { under: 'minecraft:lava', multi: 3 },
    { under: 'minecraft:furnace', multi: 3, heat: true },
    { under: 'minecraft:blast_furnace', multi: 3, heat: true },
    { under: 'cobblefordays:tier_1', multi: 3 },
    { under: 'cobblefordays:tier_2', multi: 4 },
    { under: 'cobblefordays:tier_3', multi: 5 },
    { under: 'cobblefordays:tier_4', multi: 6 },
    { under: 'cobblefordays:tier_5', multi: 7 },
    { under: 'minecraft:torch', multi: 1 },
    { under: 'minecraft:fire', multi: 4 },
    { under: 'minecraft:campfire', multi: 4, heat: true },
    { under: 'minecraft:soul_torch', multi: 1 },
    { under: 'minecraft:soul_fire', multi: 4 },
    { under: 'minecraft:soul_campfire', multi: 4, heat: true },
    { under: 'minecraft:magma_block', multi: 4 },
    { under: 'botania:blaze_quartz', multi: 10 },
    { under: 'botania:blaze_block', multi: 20 },
    { under: 'mekanism:block_uranium', multi: 30 },
    { under: 'bigreactors:blutonium_block', multi: 40 },
    { under: 'bigreactors:magentite_block', multi: 40 },
    { under: 'bigreactors:ludicrite_block', multi: 50 },
    { under: 'bigreactors:ridiculite_block', multi: 60 },
    { under: 'bigreactors:inanite_block', multi: 70 },
    { under: 'bigreactors:insanite_block', multi: 80 },
    { under: 'avaritia:neutron', multi: 250 },
    { under: 'avaritia:infinity', multi: 1000 },
  ];
  HeatPattern.forEach((recipe) => {
    const json = {
      type: 'exnihilosequentia:heat',
      amount: recipe.multi,
      block: recipe.under,
    };

    if (recipe.heat) json.state = { lit: true };

    event.custom(json);
  });
  //#endregion

  //# ====================================================================================== #

  //#region Sieve
  event.remove({ type: 'exnihilosequentia:sifting' });
  const SievePattern = [
    //#region Gravel drop
    {
      get: { item: 'minecraft:flint' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.125, mesh: 'string' },
        { chance: 0.15, mesh: 'flint' },
        { chance: 0.18, mesh: 'iron' },
        { chance: 0.21, mesh: 'diamond' },
        { chance: 0.24, mesh: 'emerald' },
        { chance: 0.27, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:coal' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.09, mesh: 'string' },
        { chance: 0.12, mesh: 'flint' },
        { chance: 0.15, mesh: 'iron' },
        { chance: 0.18, mesh: 'diamond' },
        { chance: 0.21, mesh: 'emerald' },
        { chance: 0.24, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:lapis_lazuli' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.05, mesh: 'flint' },
        { chance: 0.09, mesh: 'iron' },
        { chance: 0.13, mesh: 'diamond' },
        { chance: 0.17, mesh: 'emerald' },
        { chance: 0.21, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:diamond' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.008, mesh: 'iron' },
        { chance: 0.011, mesh: 'diamond' },
        { chance: 0.014, mesh: 'emerald' },
        { chance: 0.017, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:emerald' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.008, mesh: 'iron' },
        { chance: 0.011, mesh: 'diamond' },
        { chance: 0.014, mesh: 'emerald' },
        { chance: 0.017, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:amethyst_shard' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.01, mesh: 'diamond' },
        { chance: 0.03, mesh: 'emerald' },
        { chance: 0.05, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:iron_pieces' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.04, mesh: 'flint' },
        { chance: 0.08, mesh: 'iron' },
        { chance: 0.12, mesh: 'diamond' },
        { chance: 0.16, mesh: 'emerald' },
        { chance: 0.2, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:lead_pieces' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:aluminum_pieces' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:platinum_pieces' },
      put: { item: 'minecraft:gravel' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region Sand drop
    {
      get: { item: 'minecraft:cocoa_beans' },
      put: { item: 'minecraft:sand' },
      drop: [{ chance: 0.3, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:sugar_cane' },
      put: { item: 'minecraft:sand' },
      drop: [{ chance: 0.5, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:cactus' },
      put: { item: 'minecraft:sand' },
      drop: [{ chance: 0.5, mesh: 'string' }],
    },
    {
      get: { item: 'ae2:certus_quartz_crystal' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.03, mesh: 'flint' },
        { chance: 0.06, mesh: 'iron' },
        { chance: 0.09, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.15, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'projectred_core:electrotine_dust' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.09, mesh: 'flint' },
        { chance: 0.12, mesh: 'iron' },
        { chance: 0.15, mesh: 'diamond' },
        { chance: 0.18, mesh: 'emerald' },
        { chance: 0.21, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:copper_pieces' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.04, mesh: 'flint' },
        { chance: 0.08, mesh: 'iron' },
        { chance: 0.12, mesh: 'diamond' },
        { chance: 0.16, mesh: 'emerald' },
        { chance: 0.2, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:nickel_pieces' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:tin_pieces' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:osmium_pieces' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:apatite' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.01, mesh: 'iron' },
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.03, mesh: 'emerald' },
        { chance: 0.04, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:niter' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.01, mesh: 'iron' },
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.03, mesh: 'emerald' },
        { chance: 0.04, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:cinnabar' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.01, mesh: 'diamond' },
        { chance: 0.02, mesh: 'emerald' },
        { chance: 0.03, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:sulfur' },
      put: { item: 'minecraft:sand' },
      drop: [
        { chance: 0.01, mesh: 'diamond' },
        { chance: 0.02, mesh: 'emerald' },
        { chance: 0.03, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region Dust drop
    {
      get: { item: 'minecraft:bone_meal' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.2, mesh: 'string' },
        { chance: 0.215, mesh: 'flint' },
        { chance: 0.23, mesh: 'iron' },
        { chance: 0.245, mesh: 'diamond' },
        { chance: 0.26, mesh: 'emerald' },
        { chance: 0.275, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:gunpowder' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.07, mesh: 'string' },
        { chance: 0.08, mesh: 'flint' },
        { chance: 0.09, mesh: 'iron' },
        { chance: 0.1, mesh: 'diamond' },
        { chance: 0.11, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'ae2:sky_dust' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.02, mesh: 'string' },
        { chance: 0.04, mesh: 'flint' },
        { chance: 0.06, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.1, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'ae2:certus_quartz_dust' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.08, mesh: 'flint' },
        { chance: 0.12, mesh: 'iron' },
        { chance: 0.16, mesh: 'diamond' },
        { chance: 0.2, mesh: 'emerald' },
        { chance: 0.24, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:redstone' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.12, mesh: 'iron' },
        { chance: 0.15, mesh: 'diamond' },
        { chance: 0.18, mesh: 'emerald' },
        { chance: 0.21, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:glowstone_dust' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.06, mesh: 'iron' },
        { chance: 0.09, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.15, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:blaze_powder' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.05, mesh: 'iron' },
        { chance: 0.07, mesh: 'diamond' },
        { chance: 0.09, mesh: 'emerald' },
        { chance: 0.11, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:gold_pieces' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.04, mesh: 'flint' },
        { chance: 0.08, mesh: 'iron' },
        { chance: 0.12, mesh: 'diamond' },
        { chance: 0.16, mesh: 'emerald' },
        { chance: 0.2, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:silver_pieces' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:zinc_pieces' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.04, mesh: 'iron' },
        { chance: 0.08, mesh: 'diamond' },
        { chance: 0.12, mesh: 'emerald' },
        { chance: 0.16, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'exnihilosequentia:uranium_pieces' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region Netherrack drop
    {
      get: { item: 'exnihilosequentia:gold_pieces' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.12, mesh: 'iron' },
        { chance: 0.16, mesh: 'diamond' },
        { chance: 0.2, mesh: 'emerald' },
        { chance: 0.24, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:cobalt_pieces' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.012, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:demonite_pieces' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.04, mesh: 'emerald' },
        { chance: 0.08, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:ancient_debris' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.008, mesh: 'diamond' },
        { chance: 0.012, mesh: 'emerald' },
        { chance: 0.016, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'mysticalagriculture:prosperity_shard' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.1, mesh: 'diamond' },
        { chance: 0.15, mesh: 'emerald' },
        { chance: 0.2, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:ruby' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.04, mesh: 'emerald' },
        { chance: 0.06, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'thermal:sapphire' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.04, mesh: 'emerald' },
        { chance: 0.06, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'projectred_core:peridot' },
      put: { item: 'exnihilosequentia:crushed_netherrack' },
      drop: [
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.04, mesh: 'emerald' },
        { chance: 0.06, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region SoulSand drop
    {
      get: { item: 'minecraft:nether_wart' },
      put: { item: 'minecraft:soul_sand' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:quartz' },
      put: { item: 'minecraft:soul_sand' },
      drop: [
        { chance: 0.4, mesh: 'flint' },
        { chance: 0.5, mesh: 'iron' },
        { chance: 0.6, mesh: 'diamond' },
        { chance: 0.7, mesh: 'emerald' },
        { chance: 0.8, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:ghast_tear' },
      put: { item: 'minecraft:soul_sand' },
      drop: [
        { chance: 0.02, mesh: 'diamond' },
        { chance: 0.03, mesh: 'emerald' },
        { chance: 0.04, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region Endstone drop
    {
      get: { item: 'mysticalagriculture:prosperity_shard' },
      put: { item: 'exnihilosequentia:crushed_end_stone' },
      drop: [
        { chance: 0.1, mesh: 'diamond' },
        { chance: 0.15, mesh: 'emerald' },
        { chance: 0.2, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:enderite_pieces' },
      put: { item: 'exnihilosequentia:crushed_end_stone' },
      drop: [
        { chance: 0.01, mesh: 'diamond' },
        { chance: 0.02, mesh: 'emerald' },
        { chance: 0.03, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:ender_pearl' },
      put: { item: 'exnihilosequentia:crushed_end_stone' },
      drop: [
        { chance: 0.01, mesh: 'emerald' },
        { chance: 0.02, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:ender_eye' },
      put: { item: 'exnihilosequentia:crushed_end_stone' },
      drop: [
        { chance: 0.001, mesh: 'emerald' },
        { chance: 0.002, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'minecraft:chorus_fruit' },
      put: { item: 'exnihilosequentia:crushed_end_stone' },
      drop: [
        { chance: 0.01, mesh: 'emerald' },
        { chance: 0.02, mesh: 'netherite' },
      ],
    },
    //#endregion

    //#region Aetherslate drop
    {
      get: { item: 'aethersteel:aether_debris' },
      put: { item: 'aethersteel:cobbled_aetherslate' },
      drop: [{ chance: 0.01, mesh: 'netherite' }],
    },
    //#endregion

    //#region Stone drop
    {
      get: { item: 'exnihilosequentia:andesite_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:basalt_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:blackstone_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:calcite_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:deepslate_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:diorite_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:dripstone_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:granite_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:stone_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    {
      get: { item: 'exnihilosequentia:tuff_pebble' },
      put: { item: 'minecraft:stone' },
      drop: [{ chance: 0.2, mesh: 'flint' }],
    },
    //#endregion

    //#region Dirt drop
    {
      get: { item: 'minecraft:wheat_seeds' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.7, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:poppy' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.25, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:sweet_berries' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.05, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:potato' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.05, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:carrot' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.05, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:bamboo' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.05, mesh: 'string' }],
    },
    {
      get: { item: 'exnihilosequentia:grass_seeds' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.01, mesh: 'string' }],
    },
    {
      get: { item: 'exnihilosequentia:mycelium_spores' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.01, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:oak_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:oak_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:birch_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:jungle_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:acacia_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:dark_oak_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:mangrove_propagule' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:cherry_sapling' },
      put: { item: 'exnihilosequentia:dust' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    //#endregion

    //#region Leaves drop
    {
      get: { item: 'exnihilosequentia:silkworm' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.25, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:apple' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:golden_apple' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.001, mesh: 'string' }],
    },
    {
      get: { item: 'minecraft:enchanted_golden_apple' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.0001, mesh: 'string' }],
    },
    {
      get: { item: 'rootsclassic:elderberry' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'rootsclassic:nightshade' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'rootsclassic:blackcurrant' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'rootsclassic:redcurrant' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'rootsclassic:whitecurrant' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    {
      get: { item: 'delightful:green_tea_leaf' },
      put: { tag: 'minecraft:leaves' },
      drop: [{ chance: 0.1, mesh: 'string' }],
    },
    //#endregion

    //#region Space Sand
    {
      get: { item: 'anoxia:desh_pieces' },
      put: { item: 'ad_astra:moon_sand' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:ostrum_pieces' },
      put: { item: 'ad_astra:mars_sand' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    {
      get: { item: 'anoxia:calorite_pieces' },
      put: { item: 'ad_astra:venus_sand' },
      drop: [
        { chance: 0.04, mesh: 'diamond' },
        { chance: 0.08, mesh: 'emerald' },
        { chance: 0.12, mesh: 'netherite' },
      ],
    },
    //#endregion
  ];
  SievePattern.forEach((recipe) => {
    event.custom({
      type: 'exnihilosequentia:sifting',
      input: recipe.put,
      result: recipe.get,
      rolls: recipe.drop,
    });
  });
  //#endregion
});
 */

ServerEvents.recipes((event) => {
  // ==================== CONFIGURAZIONE ====================
  const MESH_TIERS = ['string', 'flint', 'iron', 'diamond', 'emerald', 'netherite', 'aethersteel'].map((t) => `exnihilosequentia:${t}_mesh`);

  const CONFIG = {
    sieve: { processingTime: 200 }, // Aggiungi se necessario per il tuo modpack
  };

  // ==================== HELPER FUNCTIONS ====================
  const addCompost = (input, amount) =>
    event.custom({
      type: 'exnihilosequentia:compost',
      input: { item: input },
      amount: amount,
    });

  const addCrusher = (input, output, chance = 1.0, count = 1) =>
    event.custom({
      type: 'exnihilosequentia:crushing',
      input: { item: input },
      results: [{ item: output, chance, count }],
    });

  const addPrecipitate = (input, fluid, fluidAmount, output, count = 1) =>
    event.custom({
      type: 'exnihilosequentia:precipitate',
      input: { item: input },
      fluid: { fluid, amount: fluidAmount },
      result: { item: output, count },
    });

  const addHeat = (block, amount, { lit = false } = {}) => {
    const json = {
      type: 'exnihilosequentia:heat',
      block,
      amount,
    };
    if (lit) json.state = { lit: true };
    event.custom(json);
  };

  const addSieve = (input, output, mesh, chance, tag = false) => {
    const inputObj = tag ? { tag: input } : { item: input };
    event.custom({
      type: 'exnihilosequentia:sifting',
      input: inputObj,
      result: { item: output },
      rolls: [{ mesh: `exnihilosequentia:${mesh}_mesh`, chance }],
    });
  };

  // Helper per espandere drop con chance progressive su più mesh
  const expandSieveDrops = (input, output, drops, tag = false) => {
    drops.forEach(({ chance, mesh }) => {
      addSieve(input, output, mesh, chance, tag);
    });
  };

  // Helper per generare progressioni lineari di chance: base + (index * increment)
  const progressiveDrops = (baseChance, increment, startTier = 0, endTier = MESH_TIERS.length - 1) => {
    const drops = [];
    for (let i = startTier; i <= endTier; i++) {
      drops.push({ mesh: MESH_TIERS[i].replace('exnihilosequentia:', '').replace('_mesh', ''), chance: baseChance + (i - startTier) * increment });
    }
    return drops;
  };

  // ==================== RICETTE STATICHE ====================
  // Stone Crook
  event.remove({ output: 'exnihilosequentia:stone_crook' });
  event.shaped('exnihilosequentia:stone_crook', ['AA', ' A', ' A'], { A: '#forge:pebble/stone' });

  // Rimozioni globali
  event.remove({ type: 'exnihilosequentia:heat' });
  event.remove({ type: 'exnihilosequentia:sifting' });

  // ==================== COMPOST ====================
  //#region Compost
  ['rootsclassic:elderberry', 'rootsclassic:nightshade', 'rootsclassic:blackcurrant', 'rootsclassic:redcurrant', 'rootsclassic:whitecurrant', 'delightful:green_tea_leaf'].forEach((item) => addCompost(item, 40));
  //#endregion

  // ==================== CRUSHER ====================
  //#region Crusher
  [
    { in: 'aethersteel:aetherslate', out: 'aethersteel:cobbled_aetherslate' },
    { in: 'ad_astra:moon_cobblestone', out: 'ad_astra:moon_sand' },
    { in: 'ad_astra:mars_cobblestone', out: 'ad_astra:mars_sand' },
    { in: 'ad_astra:venus_cobblestone', out: 'ad_astra:venus_sand' },
  ].forEach(({ in: input, out: output }) => addCrusher(input, output));
  //#endregion

  // ==================== PRECIPITATE ====================
  //#region Precipitate
  addPrecipitate('ae2:sky_dust', 'minecraft:lava', 1000, 'ae2:sky_stone_block');
  //#endregion

  // ==================== HEAT SOURCES ====================
  //#region Heat
  const HEAT_SOURCES = [
    { block: 'minecraft:lava', amount: 3 },
    { block: 'minecraft:furnace', amount: 3, lit: true },
    { block: 'minecraft:blast_furnace', amount: 3, lit: true },
    { block: 'cobblefordays:tier_1', amount: 3 },
    { block: 'cobblefordays:tier_2', amount: 4 },
    { block: 'cobblefordays:tier_3', amount: 5 },
    { block: 'cobblefordays:tier_4', amount: 6 },
    { block: 'cobblefordays:tier_5', amount: 7 },
    { block: 'minecraft:torch', amount: 1 },
    { block: 'minecraft:fire', amount: 4 },
    { block: 'minecraft:campfire', amount: 4, lit: true },
    { block: 'minecraft:soul_torch', amount: 1 },
    { block: 'minecraft:soul_fire', amount: 4 },
    { block: 'minecraft:soul_campfire', amount: 4, lit: true },
    { block: 'minecraft:magma_block', amount: 4 },
    { block: 'botania:blaze_quartz', amount: 10 },
    { block: 'botania:blaze_block', amount: 20 },
    { block: 'mekanism:block_uranium', amount: 30 },
    { block: 'bigreactors:blutonium_block', amount: 40 },
    { block: 'bigreactors:magentite_block', amount: 40 },
    { block: 'bigreactors:ludicrite_block', amount: 50 },
    { block: 'bigreactors:ridiculite_block', amount: 60 },
    { block: 'bigreactors:inanite_block', amount: 70 },
    { block: 'bigreactors:insanite_block', amount: 80 },
    { block: 'avaritia:neutron', amount: 250 },
    { block: 'avaritia:infinity', amount: 1000 },
  ];
  HEAT_SOURCES.forEach((cfg) => addHeat(cfg.block, cfg.amount, { lit: cfg.lit }));
  //#endregion

  // ==================== SIEVE RECIPES ====================
  //#region Sieve
  const SIEVE_DATA = [
    //#region Gravel
    {
      input: 'minecraft:gravel',
      drops: [
        { output: 'minecraft:flint', drops: progressiveDrops(0.125, 0.025, 0, 5) },
        { output: 'minecraft:coal', drops: progressiveDrops(0.09, 0.03, 0, 5) },
        { output: 'minecraft:lapis_lazuli', drops: progressiveDrops(0.05, 0.04, 1, 5) },
        { output: 'minecraft:diamond', drops: progressiveDrops(0.008, 0.003, 2, 5) },
        { output: 'minecraft:emerald', drops: progressiveDrops(0.008, 0.003, 2, 5) },
        { output: 'minecraft:amethyst_shard', drops: progressiveDrops(0.01, 0.02, 3, 5) },
        { output: 'exnihilosequentia:iron_pieces', drops: progressiveDrops(0.04, 0.04, 1, 5) },
        { output: 'exnihilosequentia:lead_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'exnihilosequentia:aluminum_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'exnihilosequentia:platinum_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) },
      ],
    },
    //#endregion

    //#region Sand
    {
      input: 'minecraft:sand',
      drops: [
        { output: 'minecraft:cocoa_beans', drops: [{ mesh: 'string', chance: 0.3 }] },
        { output: 'minecraft:sugar_cane', drops: [{ mesh: 'string', chance: 0.5 }] },
        { output: 'minecraft:cactus', drops: [{ mesh: 'string', chance: 0.5 }] },
        { output: 'ae2:certus_quartz_crystal', drops: progressiveDrops(0.03, 0.03, 1, 5) },
        { output: 'projectred_core:electrotine_dust', drops: progressiveDrops(0.09, 0.03, 1, 5) },
        { output: 'exnihilosequentia:copper_pieces', drops: progressiveDrops(0.04, 0.04, 1, 5) },
        { output: 'exnihilosequentia:nickel_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'exnihilosequentia:tin_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'anoxia:osmium_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) },
        { output: 'thermal:apatite', drops: progressiveDrops(0.01, 0.01, 2, 5) },
        { output: 'thermal:niter', drops: progressiveDrops(0.01, 0.01, 2, 5) },
        { output: 'thermal:cinnabar', drops: progressiveDrops(0.01, 0.01, 3, 5) },
        { output: 'thermal:sulfur', drops: progressiveDrops(0.01, 0.01, 3, 5) },
      ],
    },
    //#endregion

    //#region Dust
    {
      input: 'exnihilosequentia:dust',
      drops: [
        { output: 'minecraft:bone_meal', drops: progressiveDrops(0.2, 0.015, 0, 5) },
        { output: 'minecraft:gunpowder', drops: progressiveDrops(0.07, 0.01, 0, 5) },
        { output: 'ae2:sky_dust', drops: progressiveDrops(0.02, 0.02, 0, 5) },
        { output: 'ae2:certus_quartz_dust', drops: progressiveDrops(0.08, 0.04, 1, 5) },
        { output: 'minecraft:redstone', drops: progressiveDrops(0.12, 0.03, 2, 5) },
        { output: 'minecraft:glowstone_dust', drops: progressiveDrops(0.06, 0.03, 2, 5) },
        { output: 'minecraft:blaze_powder', drops: progressiveDrops(0.05, 0.02, 2, 5) },
        { output: 'exnihilosequentia:gold_pieces', drops: progressiveDrops(0.04, 0.04, 1, 5) },
        { output: 'exnihilosequentia:silver_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'exnihilosequentia:zinc_pieces', drops: progressiveDrops(0.04, 0.04, 2, 5) },
        { output: 'exnihilosequentia:uranium_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) },
      ],
    },
    //#endregion

    //#region Crushed Netherrack
    {
      input: 'exnihilosequentia:crushed_netherrack',
      drops: [
        { output: 'exnihilosequentia:gold_pieces', drops: progressiveDrops(0.12, 0.04, 2, 5) },
        {
          output: 'anoxia:cobalt_pieces',
          drops: [
            { mesh: 'diamond', chance: 0.04 },
            { mesh: 'emerald', chance: 0.08 },
            { mesh: 'netherite', chance: 0.012 },
          ],
        },
        {
          output: 'anoxia:demonite_pieces',
          drops: [
            { mesh: 'emerald', chance: 0.04 },
            { mesh: 'netherite', chance: 0.08 },
          ],
        },
        { output: 'minecraft:ancient_debris', drops: progressiveDrops(0.008, 0.004, 3, 5) },
        { output: 'mysticalagriculture:prosperity_shard', drops: progressiveDrops(0.1, 0.05, 3, 5) },
        { output: 'thermal:ruby', drops: progressiveDrops(0.02, 0.02, 3, 5) },
        { output: 'thermal:sapphire', drops: progressiveDrops(0.02, 0.02, 3, 5) },
        { output: 'projectred_core:peridot', drops: progressiveDrops(0.02, 0.02, 3, 5) },
      ],
    },
    //#endregion

    //#region Soul Sand
    {
      input: 'minecraft:soul_sand',
      drops: [
        { output: 'minecraft:nether_wart', drops: [{ mesh: 'string', chance: 0.1 }] },
        { output: 'minecraft:quartz', drops: progressiveDrops(0.4, 0.1, 1, 5) },
        { output: 'minecraft:ghast_tear', drops: progressiveDrops(0.02, 0.01, 3, 5) },
      ],
    },
    //#endregion

    //#region Crushed End Stone
    {
      input: 'exnihilosequentia:crushed_end_stone',
      drops: [
        { output: 'mysticalagriculture:prosperity_shard', drops: progressiveDrops(0.1, 0.05, 3, 5) },
        { output: 'anoxia:enderite_pieces', drops: progressiveDrops(0.01, 0.01, 3, 5) },
        { output: 'minecraft:ender_pearl', drops: progressiveDrops(0.01, 0.01, 4, 5) },
        { output: 'minecraft:ender_eye', drops: progressiveDrops(0.001, 0.001, 4, 5) },
        { output: 'minecraft:chorus_fruit', drops: progressiveDrops(0.01, 0.01, 4, 5) },
      ],
    },
    //#endregion

    //#region Aetherslate
    {
      input: 'aethersteel:cobbled_aetherslate',
      drops: [
        {
          output: 'aethersteel:aether_debris',
          drops: [
            { mesh: 'netherite', chance: 0.01 },
            { mesh: 'aethersteel', chance: 0.02 },
          ],
        },
      ],
    },
    //#endregion

    //#region Stone Pebbles
    { input: 'minecraft:stone', isTag: false, drops: ['andesite', 'basalt', 'blackstone', 'calcite', 'deepslate', 'diorite', 'dripstone', 'granite', 'stone', 'tuff'].map((type) => ({ output: `exnihilosequentia:${type}_pebble`, drops: [{ mesh: 'flint', chance: 0.2 }] })) },
    //#endregion

    //#region Dirt Drops
    {
      input: 'exnihilosequentia:dust',
      drops: [
        { output: 'minecraft:wheat_seeds', drops: [{ mesh: 'string', chance: 0.7 }] },
        { output: 'minecraft:poppy', drops: [{ mesh: 'string', chance: 0.25 }] },
        ...['sweet_berries', 'potato', 'carrot', 'bamboo'].map((item) => ({ output: `minecraft:${item}`, drops: [{ mesh: 'string', chance: 0.05 }] })),
        { output: 'exnihilosequentia:grass_seeds', drops: [{ mesh: 'string', chance: 0.01 }] },
        { output: 'exnihilosequentia:mycelium_spores', drops: [{ mesh: 'string', chance: 0.01 }] },
        ...['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'].map((type) => {
          const item = type === 'mangrove' ? 'mangrove_propagule' : `${type}_sapling`;
          return { output: `minecraft:${item}`, drops: [{ mesh: 'string', chance: 0.1 }] };
        }),
      ],
    },
    //#endregion

    //#region Leaves (tag)
    {
      input: 'minecraft:leaves',
      isTag: true,
      drops: [
        { output: 'exnihilosequentia:silkworm', drops: [{ mesh: 'string', chance: 0.25 }] },
        { output: 'minecraft:apple', drops: [{ mesh: 'string', chance: 0.1 }] },
        { output: 'minecraft:golden_apple', drops: [{ mesh: 'string', chance: 0.001 }] },
        { output: 'minecraft:enchanted_golden_apple', drops: [{ mesh: 'string', chance: 0.0001 }] },
        ...['elderberry', 'nightshade', 'blackcurrant', 'redcurrant', 'whitecurrant'].map((berry) => ({ output: `rootsclassic:${berry}`, drops: [{ mesh: 'string', chance: 0.1 }] })),
        { output: 'delightful:green_tea_leaf', drops: [{ mesh: 'string', chance: 0.1 }] },
      ],
    },
    //#endregion

    //#region Space Sand
    { input: 'ad_astra:moon_sand', drops: [{ output: 'anoxia:desh_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) }] },
    { input: 'ad_astra:mars_sand', drops: [{ output: 'anoxia:ostrum_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) }] },
    { input: 'ad_astra:venus_sand', drops: [{ output: 'anoxia:calorite_pieces', drops: progressiveDrops(0.04, 0.04, 3, 5) }] },
    //#endregion
  ];

  // Generazione ricette sieve
  SIEVE_DATA.forEach(({ input, drops, isTag = false }) => {
    drops.forEach(({ output, drops: meshDrops }) => {
      expandSieveDrops(input, output, meshDrops, isTag);
    });
  });
  //#endregion
});
