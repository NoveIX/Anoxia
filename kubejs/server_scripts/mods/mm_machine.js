ServerEvents.recipes((event) => {
  //MM
  event.shaped('mm:machine_controller', [' A ', 'BCB', 'DBD'], { A: 'computercraft:monitor_advanced', B: '#forge:storage_blocks/redstone_alloy', C: 'anoxia:machine_casing', D: 'ae2:logic_processor' });
  event.shaped('anoxia:machine_casing', [' A ', 'ABA', ' A '], { A: 'anoxia:modularium_ingot', B: '#forge:storage_blocks/redstone_alloy' });
  event.shaped('mm:machine_vent', ['ABA', 'BCB', 'ABA'], { A: 'anoxia:modularium_ingot', B: 'enderio:dark_steel_bars', C: 'anoxia:amongus' });
  event.shaped('mm:machine_gearbox', ['ABA', 'BCB', 'ABA'], { A: 'anoxia:modularium_ingot', B: '#forge:gears/steel', C: 'create:gearbox' });
  event.shaped('mm:machine_circuit', ['ABA', 'B B', 'ABA'], { A: 'anoxia:modularium_ingot', B: 'mekanism:basic_control_circuit' });

  //Simple MM
  event.shaped('mm:portal_controller', [' A ', 'BCB', 'DBD'], { A: 'computercraft:monitor_normal', B: 'minecraft:redstone_block', C: 'minecraft:obsidian', D: 'minecraft:comparator' });
  event.shaped('mm:coke_oven_controller', [' A ', 'BCB', 'DBD'], { A: 'computercraft:monitor_normal', B: 'minecraft:redstone_block', C: 'immersiveengineering:cokebrick', D: 'minecraft:comparator' });

  //# ====================================================================================== #

  //#region Item
  // //Simple MM
  event.shaped('mm:portal_item_port_input', [' A ', 'BCB', 'DBD'], { A: 'minecraft:hopper', B: '#forge:ingots/obsidian', C: 'minecraft:obsidian', D: '#forge:chests/wooden' });
  event.shaped('mm:portal_item_port_output', ['DBD', 'BCB', ' A '], { A: 'minecraft:hopper', B: '#forge:ingots/obsidian', C: 'minecraft:obsidian', D: '#forge:chests/wooden' });
  event.shaped('mm:coke_oven_item_port_input', [' A ', 'BCB', 'DBD'], { A: 'minecraft:hopper', B: 'exnihilosequentia:porcelain_clay', C: 'immersiveengineering:cokebrick', D: '#forge:chests/wooden' });
  event.shaped('mm:coke_oven_item_port_output', ['DBD', 'BCB', ' A '], { A: 'minecraft:hopper', B: 'exnihilosequentia:porcelain_clay', C: 'immersiveengineering:cokebrick', D: '#forge:chests/wooden' });
  event.shaped('mm:coke_oven_fluid_port_output', ['DBD', 'BCB', ' A '], { A: 'minecraft:hopper', B: 'exnihilosequentia:porcelain_clay', C: 'immersiveengineering:cokebrick', D: 'minecraft:bucket' });

  const itemInPort = [
    //Input
    { get: 'mm:tiny_item_port_input', put: 'anoxia:machine_casing' },
    { get: 'mm:small_item_port_input', put: 'mm:tiny_item_port_input' },
    { get: 'mm:normal_item_port_input', put: 'mm:small_item_port_input' },
    { get: 'mm:reinforced_item_port_input', put: 'mm:normal_item_port_input' },
    { get: 'mm:big_item_port_input', put: 'mm:reinforced_item_port_input' },
    { get: 'mm:huge_item_port_input', put: 'mm:big_item_port_input' },
    { get: 'mm:ludicrous_item_port_input', put: 'mm:huge_item_port_input' },
    { get: 'mm:ultimate_item_port_input', put: 'mm:ludicrous_item_port_input' },
  ];
  itemInPort.forEach((recipe) => event.shaped(recipe.get, [' A ', 'BCB', 'DBD'], { A: 'minecraft:hopper', B: 'anoxia:modularium_ingot', C: recipe.put, D: '#forge:chests/wooden' }));

  const itemOutPort = [
    //Output
    { get: 'mm:tiny_item_port_output', put: 'anoxia:machine_casing' },
    { get: 'mm:small_item_port_output', put: 'mm:tiny_item_port_output' },
    { get: 'mm:normal_item_port_output', put: 'mm:small_item_port_output' },
    { get: 'mm:reinforced_item_port_output', put: 'mm:normal_item_port_output' },
    { get: 'mm:big_item_port_output', put: 'mm:reinforced_item_port_output' },
    { get: 'mm:huge_item_port_output', put: 'mm:big_item_port_output' },
    { get: 'mm:huge_item_port_output', put: 'mm:huge_item_port_output' },
    { get: 'mm:huge_item_port_output', put: 'mm:huge_item_port_output' },
  ];
  itemOutPort.forEach((recipe) => event.shaped(recipe.get, ['DBD', 'BCB', ' A '], { A: 'minecraft:hopper', B: 'anoxia:modularium_ingot', C: recipe.put, D: '#forge:chests/wooden' }));
  //#endregion

  //# ====================================================================================== #

  //#region Fluid
  const fluidInPort = [
    //input
    { get: 'mm:tiny_fluid_port_input', put: 'anoxia:machine_casing' },
    { get: 'mm:small_fluid_port_input', put: 'mm:tiny_fluid_port_input' },
    { get: 'mm:normal_fluid_port_input', put: 'mm:small_fluid_port_input' },
    { get: 'mm:reinforced_fluid_port_input', put: 'mm:normal_fluid_port_input' },
    { get: 'mm:big_fluid_port_input', put: 'mm:reinforced_fluid_port_input' },
    { get: 'mm:huge_fluid_port_input', put: 'mm:big_fluid_port_input' },
    { get: 'mm:ludicrous_fluid_port_input', put: 'mm:huge_fluid_port_input' },
    { get: 'mm:ultimate_fluid_port_input', put: 'mm:ludicrous_fluid_port_input' },
  ];
  fluidInPort.forEach((recipe) => event.shaped(recipe.get, [' A ', 'BCB', 'DBD'], { A: 'minecraft:hopper', B: 'anoxia:modularium_ingot', C: recipe.put, D: 'minecraft:bucket' }));

  const fluidOutPort = [
    //Output
    { get: 'mm:tiny_fluid_port_output', put: 'anoxia:machine_casing' },
    { get: 'mm:small_fluid_port_output', put: 'mm:tiny_fluid_port_output' },
    { get: 'mm:normal_fluid_port_output', put: 'mm:small_fluid_port_output' },
    { get: 'mm:reinforced_fluid_port_output', put: 'mm:normal_fluid_port_output' },
    { get: 'mm:big_fluid_port_output', put: 'mm:reinforced_fluid_port_output' },
    { get: 'mm:huge_fluid_port_output', put: 'mm:big_fluid_port_output' },
    { get: 'mm:ludicrous_fluid_port_output', put: 'mm:huge_fluid_port_output' },
    { get: 'mm:ultimate_fluid_port_output', put: 'mm:ludicrous_fluid_port_output' },
  ];
  fluidOutPort.forEach((recipe) => event.shaped(recipe.get, ['DBD', 'BCB', ' A '], { A: 'minecraft:hopper', B: 'anoxia:modularium_ingot', C: recipe.put, D: 'minecraft:bucket' }));
  //#endregion

  //# ====================================================================================== #

  //#region Energy
  const energyInPort = [
    //input
    { get: '#forge:chests/wooden', put: 'anoxia:machine_casing' },
    { get: 'mm:small_energy_port_input', put: '#forge:chests/wooden' },
    { get: 'mm:normal_energy_port_input', put: 'mm:small_energy_port_input' },
    { get: 'mm:reinforced_energy_port_input', put: 'mm:normal_energy_port_input' },
    { get: 'mm:big_energy_port_input', put: 'mm:reinforced_energy_port_input' },
    { get: 'mm:huge_energy_port_input', put: 'mm:big_energy_port_input' },
    { get: 'mm:ludicrous_energy_port_input', put: 'mm:huge_energy_port_input' },
    { get: 'mm:ultimate_energy_port_input', put: 'mm:ludicrous_energy_port_input' },
  ];
  energyInPort.forEach((recipe) => event.shaped(recipe.get, [' A ', 'BCB', 'DBD'], { A: 'pipez:energy_pipe', B: 'anoxia:modularium_ingot', C: recipe.put, D: '#forge:ingots/red_alloy' }));

  const energyOutPort = [
    //Output
    { get: 'mm:tiny_energy_port_output', put: 'anoxia:machine_casing' },
    { get: 'mm:small_energy_port_output', put: 'mm:tiny_energy_port_output' },
    { get: 'mm:normal_energy_port_output', put: 'mm:small_energy_port_output' },
    { get: 'mm:reinforced_energy_port_output', put: 'mm:normal_energy_port_output' },
    { get: 'mm:big_energy_port_output', put: 'mm:reinforced_energy_port_output' },
    { get: 'mm:huge_energy_port_output', put: 'mm:big_energy_port_output' },
    { get: 'mm:ludicrous_energy_port_output', put: 'mm:huge_energy_port_output' },
    { get: 'mm:ultimate_energy_port_output', put: 'mm:ludicrous_energy_port_output' },
  ];
  energyOutPort.forEach((recipe) => event.shaped(recipe.get, ['DBD', 'BCB', ' A '], { A: 'pipez:energy_pipe', B: 'anoxia:modularium_ingot', C: recipe.put, D: '#forge:ingots/red_alloy' }));
});

//# ====================================================================================== #

//Modular Machine Structure
MMEvents.createStructures((event) => {
  //#region Crusher
  event
    .create('mm:crusher')
    .controllerId('mm:machine_controller')
    .name('Collision Crusher')
    .layout((mach) => {
      mach
        .layer(['AAA', 'AAA', 'AAA'])
        .layer(['ADA', '3E4', 'ADA'])
        .layer(['ADA', 'BEB', 'ADA'])
        .layer(['A5A', '2E1', 'ACA'])
        .layer(['AAA', 'AAA', 'AAA'])
        .key('A', { block: 'anoxia:machine_casing' })
        .key('B', { block: 'mm:machine_gearbox' })
        .key('D', { block: 'mm:machine_vent' })
        .key('E', { block: 'actuallyadditions:crusher_double' })

        //Port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('3', { tag: 'mm:machine_fluid_port_input' })
        .key('4', { tag: 'mm:machine_fluid_port_output' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });

  //# ====================================================================================== #

  //#region Empowerer
  event
    .create('mm:empowerer')
    .controllerId('mm:machine_controller')
    .name('Autonomus Empowerer')
    .layout((mach) => {
      mach
        .layer(['         ', '         ', '         ', '         ', '    2    ', '         ', '         ', '         ', '         '])
        .layer(['         ', '         ', '         ', '         ', '    1    ', '         ', '         ', '         ', '         '])
        .layer(['         ', '    1    ', '         ', '         ', ' 1  5  1 ', '         ', '         ', '    1    ', '    C    '])
        .layer(['    B    ', '   BDB   ', '   BAB   ', ' BBBABBB ', 'BDAAEAADB', ' BBBABBB ', '   BAB   ', '   BDB   ', '    B    '])
        .layer(['    B    ', '   BBB   ', '    B    ', ' B BBB B ', 'BBBBBBBBB', ' B BBB B ', '    B    ', '   BBB   ', '    B    '])
        .key('B', { block: 'anoxia:machine_casing' })
        .key('A', { block: 'mm:machine_circuit' })
        .key('D', { block: 'actuallyadditions:display_stand' })
        .key('E', { block: 'actuallyadditions:empowerer' })

        //port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Energizer
  event
    .create('mm:energizer')
    .controllerId('mm:machine_controller')
    .name('Pulse energizer')
    .layout((mach) => {
      mach
        .layer(['AAAAA', 'AADAA', 'ADDDA', 'AADAA', 'AAAAA'])
        .layer(['AEEEA', 'E F E', 'EFFFE', 'E F E', 'AEEEA'])
        .layer(['AEEEA', 'E G E', 'EGGGE', 'E G E', 'AEEEA'])
        .layer(['AEEEA', 'E   E', 'E   E', 'E   E', 'AEEEA'])
        .layer(['AEEEA', 'E   E', 'E H E', 'E   E', 'AEEEA'])
        .layer(['AE5EA', '1   2', 'E B E', '2   1', 'AECEA'])
        .layer(['ADADA', 'DABAD', 'ABBBA', 'DABAD', 'ADADA'])
        .key('A', { block: 'anoxia:machine_casing' })
        .key('B', { block: 'mm:machine_circuit' })
        .key('D', { block: 'mm:machine_vent' })
        .key('E', { block: 'ae2:quartz_glass' })
        .key('F', { block: 'thermal:dynamo_magmatic' })
        .key('G', { block: 'powah:energizing_rod_nitro' })
        .key('H', { block: 'powah:energizing_orb' })

        //Port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Miner
  event
    .create('mm:miner')
    .controllerId('mm:machine_controller')
    .name('Fusion Interdimensional Miner')
    .layout((mach) => {
      mach
        .layer(['               ', '               ', '               ', '               ', '               ', '     AABAA     ', '     AABAA     ', '     BBHBB     ', '     AABAA     ', '     AABAA     ', '               ', '               ', '               ', '               ', '               '])
        .layer(['               ', '               ', '               ', '               ', '     ADBDA     ', '    AFFFFFA    ', '    DFFFFFD    ', '    BFFFFFB    ', '    DFFFFFD    ', '    AFFFFFA    ', '     ADBDA     ', '               ', '               ', '               ', '               '])
        .layer(['      AAA      ', '      A5A      ', '      ABA      ', '      ABA      ', '     AAAAA     ', '    AFFFFFA    ', 'AAAAAFFFFFAAAAA', 'A5BBAFFGFFABB5A', 'AAAAAFFFFFAAAAA', '    AFFFFFA    ', '     AAAAA     ', '      ABA      ', '      ABA      ', '      A5A      ', '      AAA      '])
        .layer(['      A2A      ', '      BIB      ', '      BEB      ', '      BEB      ', '     3AEA1     ', '    1FFFFF3    ', 'ABBBAFFGFFABBBA', '2IEEEFGLGFEEEI2', 'ABBBAFFGFFABBBA', '    3FFFFF1    ', '     1AEA3     ', '      BEB      ', '      BEB      ', '      BIB      ', '      ACA      '])
        .layer(['      AAA      ', '      ABA      ', '      ABA      ', '      ABA      ', '     AAAAA     ', '    AFFFFFA    ', 'AAAAAFFFFFAAAAA', 'ABBBAFFGFFABBBA', 'AAAAAFFFFFAAAAA', '    AFFFFFA    ', '     AAAAA     ', '      ABA      ', '      ABA      ', '      ABA      ', '      AAA      '])
        .layer(['               ', '               ', '               ', '               ', '     ADBDA     ', '    AFFFFFA    ', '    DFFFFFD    ', '    BFFFFFB    ', '    DFFFFFD    ', '    AFFFFFA    ', '     ADBDA     ', '               ', '               ', '               ', '               '])
        .layer(['               ', '               ', '               ', '               ', '               ', '     AABAA     ', '     AABAA     ', '     BBBBB     ', '     AABAA     ', '     AABAA     ', '               ', '               ', '               ', '               ', '               '])
        .key('A', { block: 'anoxia:machine_casing' })
        .key('B', { block: 'mm:machine_vent' })
        .key('D', { block: 'mm:machine_gearbox' })
        .key('E', { block: 'mm:machine_circuit' })
        .key('F', { block: 'thermal:enderium_block' })
        .key('G', { block: 'advanced_ae:quantum_alloy_block' })
        .key('H', { block: 'minecraft:beacon' })
        .key('I', { block: 'industrialforegoing:laser_drill' })
        .key('L', { block: 'industrialforegoing:ore_laser_base' })

        //Port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('3', { tag: 'mm:machine_fluid_port_input' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Coke Oven
  event
    .create('mm:oven')
    .controllerId('mm:coke_oven_controller')
    .name('Industrial Coke Oven')
    .layout((mach) => {
      mach
        .layer(['AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA'])
        .layer(['AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA'])
        .layer(['AAAAAAA', 'AAAAAAA', '4AAAAA4', 'AAAAAAA', 'AAACAAA'])
        .layer(['2A2A2A2', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', '1A1A1A1'])
        .key('A', { block: 'immersiveengineering:cokebrick' })

        //Port
        .key('1', { port: 'mm:coke_oven_item_port', input: true })
        .key('2', { port: 'mm:coke_oven_item_port', input: false })
        .key('4', { port: 'mm:coke_oven_fluid_port', input: false });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Portal
  event
    .create('mm:portal')
    .controllerId('mm:portal_controller')
    .name('Artificial Portal')
    .layout((mach) => {
      mach
        .layer(['AAAAA'])
        .layer(['ABBBA'])
        .layer(['ABBBA'])
        .layer(['ABBBA'])
        .layer(['A1C2A'])
        .key('A', { block: 'minecraft:obsidian' })
        .key('B', { block: 'connectedglass:borderless_glass_purple_pane' })

        //Port
        .key('1', { port: 'mm:portal_item_port', input: true })
        .key('2', { port: 'mm:portal_item_port', input: false });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Sieve
  event
    .create('mm:sieve')
    .controllerId('mm:machine_controller')
    .name('Quantum Sieve')
    .layout((mach) => {
      mach
        .layer(['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'])
        .layer(['AEEEA', 'EDDDE', 'EDGDE', 'EDDDE', 'AEEEA'])
        .layer(['A2A1A', 'BDDDB', '5DFD5', 'BDDDB', 'A1C2A'])
        .layer(['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'])
        .key('A', { block: 'anoxia:machine_casing' })
        .key('B', { block: 'mm:machine_circuit' })
        .key('D', { block: 'mm:machine_gearbox' })
        .key('E', { block: 'mm:machine_vent' })
        .key('F', { block: 'createsifter:sifter' })
        .key('G', { block: 'minecraft:hopper' })

        //Port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });
  //#endregion

  //# ====================================================================================== #

  //#region Sawmill
  event
    .create('mm:sawmill')
    .controllerId('mm:machine_controller')
    .name('Nanometer Sawmill')
    .layout((mach) => {
      mach
        .layer([' A   A ', 'AE555EA', ' A   A '])
        .layer([' ABABA ', '2DDDDD1', ' ABCBA '])
        .layer([' AAAAA ', 'AAAAAAA', ' AAAAA '])

        .key('A', { block: 'anoxia:machine_casing' })
        .key('B', { block: 'mm:machine_gearbox' })
        .key('D', { block: 'ae2:quartz_glass' })
        .key('E', { block: 'mm:machine_circuit' })

        //Port
        .key('1', { tag: 'mm:machine_item_port_input' })
        .key('2', { tag: 'mm:machine_item_port_output' })
        .key('5', { tag: 'mm:machine_energy_port_input' });
    });
  //#endregion
});
