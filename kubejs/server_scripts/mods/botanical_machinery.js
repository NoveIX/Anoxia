ServerEvents.recipes((event) => {
  // Alfheim market
  event.remove({ output: 'botanicalmachinery:alfheim_market' });
  event.shaped('botanicalmachinery:alfheim_market', ['ABA', 'CDC', 'FEF'], {
    A: 'botania:mana_ring_greater',
    B: '#botania:glimmering_livingwood_logs',
    C: 'botania:natura_pylon',
    D: 'thermal:machine_frame',
    E: 'botania:alfheim_portal',
    F: '#forge:storage_blocks/dragonstone',
  });

  // Basic alfheim market
  event.remove({ output: 'botanicalextramachinery:base_alfheim_market' });
  event.shaped('botanicalextramachinery:base_alfheim_market', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:malachite_spark',
    B: 'botanicalextramachinery:malachite_ingot',
    C: 'botanicalmachinery:alfheim_market',
    D: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded alfheim market
  event.remove({ output: 'botanicalextramachinery:upgraded_alfheim_market' });
  event.shaped('botanicalextramachinery:upgraded_alfheim_market', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:saffron_spark',
    B: 'botanicalextramachinery:saffron_ingot',
    C: 'botanicalextramachinery:base_alfheim_market',
    D: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Upgraded alfheim market
  event.remove({ output: 'botanicalextramachinery:advanced_alfheim_market' });
  event.shaped('botanicalextramachinery:advanced_alfheim_market', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:shadow_spark',
    B: 'botanicalextramachinery:shadow_ingot',
    C: 'botanicalextramachinery:upgraded_alfheim_market',
    D: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate alfheim market
  event.remove({ output: 'botanicalextramachinery:ultimate_alfheim_market' });
  event.shaped('botanicalextramachinery:ultimate_alfheim_market', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:crimson_spark',
    B: 'botanicalextramachinery:crimson_ingot',
    C: 'botanicalextramachinery:advanced_alfheim_market',
    D: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  // Industrial agglomeration factory
  event.remove({ output: 'botanicalmachinery:industrial_agglomeration_factory' });
  event.shaped('botanicalmachinery:industrial_agglomeration_factory', ['ABA', 'CDE', 'FGF'], {
    A: 'botania:mana_ring_greater',
    B: '#forge:ingots/manasteel',
    C: '#forge:gems/mana_diamond',
    D: 'botania:terra_plate',
    E: 'botania:mana_pearl',
    F: '#forge:storage_blocks/dragonstone',
    G: 'thermal:machine_frame',
  });

  // Basic industrial agglomeration factory
  event.remove({ output: 'botanicalextramachinery:base_industrial_agglomeration_factory' });
  event.shaped('botanicalextramachinery:base_industrial_agglomeration_factory', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:malachite_spark',
    B: 'botanicalextramachinery:malachite_ingot',
    C: 'botanicalmachinery:industrial_agglomeration_factory',
    D: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded industrial agglomeration factory
  event.remove({ output: 'botanicalextramachinery:upgraded_industrial_agglomeration_factory' });
  event.shaped('botanicalextramachinery:upgraded_industrial_agglomeration_factory', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:saffron_spark',
    B: 'botanicalextramachinery:saffron_ingot',
    C: 'botanicalextramachinery:base_industrial_agglomeration_factory',
    D: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Upgraded industrial agglomeration factory
  event.remove({ output: 'botanicalextramachinery:advanced_industrial_agglomeration_factory' });
  event.shaped('botanicalextramachinery:advanced_industrial_agglomeration_factory', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:shadow_spark',
    B: 'botanicalextramachinery:shadow_ingot',
    C: 'botanicalextramachinery:upgraded_industrial_agglomeration_factory',
    D: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate industrial agglomeration factory
  event.remove({ output: 'botanicalextramachinery:ultimate_industrial_agglomeration_factory' });
  event.shaped('botanicalextramachinery:ultimate_industrial_agglomeration_factory', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:crimson_spark',
    B: 'botanicalextramachinery:crimson_ingot',
    C: 'botanicalextramachinery:advanced_industrial_agglomeration_factory',
    D: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  event.remove({ output: 'botanicalmachinery:mana_battery' });
  event.shaped('botanicalmachinery:mana_battery', ['ABA', 'BCB', 'ADA'], {
    A: '#forge:storage_blocks/dragonstone',
    B: 'botania:gaia_ingot',
    C: 'thermal:fluid_cell',
    D: 'botanicalmachinery:mana_emerald_block',
  });

  //# ====================================================================================== #

  // Mechanical apothecary
  event.remove({ output: 'botanicalmachinery:mechanical_apothecary' });
  event.shaped('botanicalmachinery:mechanical_apothecary', ['ABA', 'BCB', 'DED'], {
    A: 'portabletanks:basic_portable_tank',
    B: '#botania:petals',
    C: 'botania:apothecary_default',
    D: '#forge:storage_blocks/dragonstone',
    E: 'thermal:machine_frame',
  });

  // Basic apothecary
  event.remove({ output: 'botanicalextramachinery:base_apothecary' });
  event.shaped('botanicalextramachinery:base_apothecary', ['ABA', 'BCB', 'DDD'], {
    A: 'portabletanks:basic_portable_tank',
    B: 'botanicalextramachinery:malachite_ingot',
    C: 'botanicalmachinery:mechanical_apothecary',
    D: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded apothecary
  event.remove({ output: 'botanicalextramachinery:upgraded_apothecary' });
  event.shaped('botanicalextramachinery:upgraded_apothecary', ['ABA', 'BCB', 'DDD'], {
    A: 'portabletanks:advanced_portable_tank',
    B: 'botanicalextramachinery:saffron_ingot',
    C: 'botanicalextramachinery:base_apothecary',
    D: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Advanced apothecary
  event.remove({ output: 'botanicalextramachinery:advanced_apothecary' });
  event.shaped('botanicalextramachinery:advanced_apothecary', ['ABA', 'BCB', 'DDD'], {
    A: 'portabletanks:expert_portable_tank',
    B: 'botanicalextramachinery:shadow_ingot',
    C: 'botanicalextramachinery:upgraded_apothecary',
    D: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate apothecary
  event.remove({ output: 'botanicalextramachinery:ultimate_apothecary' });
  event.shaped('botanicalextramachinery:ultimate_apothecary', ['ABA', 'BCB', 'DDD'], {
    A: 'portabletanks:ultimate_portable_tank',
    B: 'botanicalextramachinery:crimson_ingot',
    C: 'botanicalextramachinery:advanced_apothecary',
    D: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  // Mechanical brewery
  event.remove({ output: 'botanicalmachinery:mechanical_brewery' });
  event.shaped('botanicalmachinery:mechanical_brewery', ['ABA', 'CDC', 'EFE'], {
    A: 'botania:mana_ring_greater',
    B: 'minecraft:blaze_rod',
    C: 'botania:flask',
    D: 'botanicadds:elven_brewery',
    E: '#forge:storage_blocks/dragonstone',
    F: 'thermal:machine_frame',
  });

  //# ====================================================================================== #

  // Mechanical daisy
  event.remove({ output: 'botanicalmachinery:mechanical_daisy' });
  event.shaped('botanicalmachinery:mechanical_daisy', [' A ', 'BCB'], {
    A: 'botania:floating_pure_daisy',
    B: '#forge:storage_blocks/dragonstone',
    C: 'thermal:machine_frame',
  });

  // Basic mechanical daisy
  event.remove({ output: 'botanicalextramachinery:base_daisy' });
  event.shaped('botanicalextramachinery:base_daisy', [' A ', 'ABA', 'CCC'], {
    A: 'botanicalextramachinery:malachite_ingot',
    B: 'botanicalmachinery:mechanical_daisy',
    C: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded mechanical daisy
  event.remove({ output: 'botanicalextramachinery:upgraded_daisy' });
  event.shaped('botanicalextramachinery:upgraded_daisy', [' A ', 'ABA', 'CCC'], {
    A: 'botanicalextramachinery:saffron_ingot',
    B: 'botanicalextramachinery:base_daisy',
    C: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Advanced mechanical daisy
  event.remove({ output: 'botanicalextramachinery:advanced_daisy' });
  event.shaped('botanicalextramachinery:advanced_daisy', [' A ', 'ABA', 'CCC'], {
    A: 'botanicalextramachinery:shadow_ingot',
    B: 'botanicalextramachinery:upgraded_daisy',
    C: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate mechanical daisy
  event.remove({ output: 'botanicalextramachinery:ultimate_daisy' });
  event.shaped('botanicalextramachinery:ultimate_daisy', [' A ', 'ABA', 'CCC'], {
    A: 'botanicalextramachinery:crimson_ingot',
    B: 'botanicalextramachinery:advanced_daisy',
    C: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  // Mechanical mana pool
  event.remove({ output: 'botanicalmachinery:mechanical_mana_pool' });
  event.shaped('botanicalmachinery:mechanical_mana_pool', ['ABA', 'CDE', 'FGF'], {
    A: 'botania:mana_ring_greater',
    B: 'botanicadds:terra_catalyst',
    C: 'botania:alchemy_catalyst',
    D: 'botanicadds:dreaming_pool',
    E: 'botania:conjuration_catalyst',
    F: '#forge:storage_blocks/dragonstone',
    G: 'thermal:machine_frame',
  });

  // Basic mana pool
  event.remove({ output: 'botanicalextramachinery:base_mana_pool' });
  event.shaped('botanicalextramachinery:base_mana_pool', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:malachite_spark',
    B: 'botanicalextramachinery:malachite_ingot',
    C: 'botanicalmachinery:mechanical_mana_pool',
    D: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded mana pool
  event.remove({ output: 'botanicalextramachinery:upgraded_mana_pool' });
  event.shaped('botanicalextramachinery:upgraded_mana_pool', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:saffron_spark',
    B: 'botanicalextramachinery:saffron_ingot',
    C: 'botanicalextramachinery:base_mana_pool',
    D: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Advanced mana pool
  event.remove({ output: 'botanicalextramachinery:advanced_mana_pool' });
  event.shaped('botanicalextramachinery:advanced_mana_pool', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:shadow_spark',
    B: 'botanicalextramachinery:shadow_ingot',
    C: 'botanicalextramachinery:upgraded_mana_pool',
    D: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate mana pool
  event.remove({ output: 'botanicalextramachinery:ultimate_mana_pool' });
  event.shaped('botanicalextramachinery:ultimate_mana_pool', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:crimson_spark',
    B: 'botanicalextramachinery:crimson_ingot',
    C: 'botanicalextramachinery:advanced_mana_pool',
    D: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  // Mechanical runic altar
  event.remove({ output: 'botanicalmachinery:mechanical_runic_altar' });
  event.shaped('botanicalmachinery:mechanical_runic_altar', ['ABA', 'BCB', 'DED'], {
    A: 'botania:mana_ring_greater',
    B: ['botania:rune_pride', 'botania:rune_envy', 'botania:rune_lust', 'botania:rune_wrath', 'botania:rune_sloth', 'botania:rune_gluttony', 'botania:rune_greed'],
    C: 'botanicadds:elven_altar',
    D: '#forge:storage_blocks/dragonstone',
    E: 'thermal:machine_frame',
  });

  // Basic mechanical runic altar
  event.remove({ output: 'botanicalextramachinery:base_runic_altar' });
  event.shaped('botanicalextramachinery:base_runic_altar', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:malachite_spark',
    B: 'botanicalextramachinery:malachite_ingot',
    C: 'botanicalmachinery:mechanical_runic_altar',
    D: 'botanicalextramachinery:malachite_dragonstone_block',
  });

  // Upgraded mechanical runic altar
  event.remove({ output: 'botanicalextramachinery:upgraded_runic_altar' });
  event.shaped('botanicalextramachinery:upgraded_runic_altar', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:saffron_spark',
    B: 'botanicalextramachinery:saffron_ingot',
    C: 'botanicalextramachinery:base_runic_altar',
    D: 'botanicalextramachinery:saffron_dragonstone_block',
  });

  // Upgraded mechanical runic altar
  event.remove({ output: 'botanicalextramachinery:advanced_runic_altar' });
  event.shaped('botanicalextramachinery:advanced_runic_altar', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:shadow_spark',
    B: 'botanicalextramachinery:shadow_ingot',
    C: 'botanicalextramachinery:upgraded_runic_altar',
    D: 'botanicalextramachinery:shadow_dragonstone_block',
  });

  // Ultimate mechanical runic altar
  event.remove({ output: 'botanicalextramachinery:ultimate_runic_altar' });
  event.shaped('botanicalextramachinery:ultimate_runic_altar', ['ABA', 'BCB', 'DDD'], {
    A: 'botanicalextramachinery:crimson_spark',
    B: 'botanicalextramachinery:crimson_ingot',
    C: 'botanicalextramachinery:advanced_runic_altar',
    D: 'botanicalextramachinery:crimson_dragonstone_block',
  });

  //# ====================================================================================== #

  event.remove({ output: 'botanicalextramachinery:jaded_amaranthus' });
  event.shaped('botanicalextramachinery:jaded_amaranthus', ['ABA', 'BCB', 'DED'], {
    A: 'botania:mana_ring_greater',
    B: 'botanicalextramachinery:crystal_ingot',
    C: 'botania:floating_jaded_amaranthus',
    D: 'botanicalextramachinery:crystal_dragonstone_block',
    E: 'thermal:machine_frame',
  });

  //# ====================================================================================== #

  // Green house
  event.remove({ output: 'botanicalextramachinery:greenhouse' });
  event.shaped('botanicalextramachinery:greenhouse', ['ABA', 'CDC', 'EFE'], {
    A: 'botanicalextramachinery:crimson_dragonstone',
    B: 'actuallyadditions:greenhouse_glass',
    C: 'botanicalextramachinery:crimson_ingot',
    D: 'minecraft:dirt',
    E: 'aethersteel:aethersteel_block',
    F: 'thermal:machine_frame',
  });
});
