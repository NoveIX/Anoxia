StartupEvents.registry('block', (event) => {
  //Cobblestone
  event.create('anoxia:compressed_cobblestone').displayName('Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:double_compressed_cobblestone').displayName('Double Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:triple_compressed_cobblestone').displayName('Triple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:quadruple_compressed_cobblestone').displayName('Quadruple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:quintuple_compressed_cobblestone').displayName('Quintuple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:sextuple_compressed_cobblestone').displayName('Sextuple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:septuple_compressed_cobblestone').displayName('Septuple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
  event.create('anoxia:octuple_compressed_cobblestone').displayName('Octuple Compressed Cobblestone').soundType('stone').hardness(2.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');

  //DeepSlate
  event.create('anoxia:compressed_deepslate').displayName('Compressed deepslate').soundType('deepslate').hardness(3.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');

  //Cobble DeepSlate
  event.create('anoxia:compressed_cobbled_deepslate').displayName('Compressed Cobbled Deepslate').soundType('deepslate').hardness(3.5).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');

  //BlackStone
  event.create('anoxia:compressed_blackstone').displayName('Compressed Blackstone').soundType('stone').hardness(1.5).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');

  //Andesite
  event.create('anoxia:compressed_andesite').displayName('Compressed Andesite').soundType('stone').hardness(1.5).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');

  //Modular Machinery
  event.create('anoxia:machine_casing').displayName('Machine Casing').soundType('metal').hardness(5.0).resistance(6.0).requiresTool(true).tagBlock('mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool');
});
