ServerEvents.recipes((event) => {
  //#region Remove ID
  const rmRecipeId = [
    //Unification
    'enderio:sag_milling/sand', //Rm Silicon
    'enderio:sag_milling/flower_pot', //Rm Powdered Coal
    'enderio:sag_milling/coal_ore', //Rm Powdered Coal
    'enderio:sag_milling/diamond_ore', //Rm Powdered Coal
    'enderio:sag_milling/iron_ore', //Rm Powdered Iron
    'enderio:sag_milling/gold_ore', //Rm Powdered Gold
    'enderio:sag_milling/copper_ore', //Rm Powdered Copper
    'enderio:sag_milling/lapis_ore', //Rm Powdered Lapis
    'enderio:sag_milling/quartz_ore', //Rm Powdered Quartz
  ];
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  //#region compacting
  const materials = ['enderio:crude_steel', 'enderio:dynamic_alloy', 'enderio:vivid_alloy'];
  materials.forEach((mat) => {
    const nugget = `${mat}_nugget`;
    const ingot = `${mat}_ingot`;
    const block = `${mat}_block`;

    //craft nugget -> ingot
    event.shaped(ingot, ['AAA', 'AAA', 'AAA'], { A: nugget });

    //craft block -> ingot
    event.shapeless(Item.of(ingot, 9), [block]);

    //reverse ingot -> nugget
    event.shapeless(Item.of(nugget, 9), [ingot]);

    //reverse ingot -> nugget
    event.shaped(block, ['AAA', 'AAA', 'AAA'], { A: ingot });
  });
  //#endregion

  //# ====================================================================================== #

  //Basic Capacitor
  event.remove({ output: 'enderio:basic_capacitor' });
  event.shaped('enderio:basic_capacitor', [' AB', 'ACA', 'BA '], { A: '#forge:nuggets/gold', C: 'powah:capacitor_basic_large', B: '#forge:ingots/copper' });

  //Void Chassis
  event.remove({ output: 'enderio:void_chassis' });
  event.shaped('enderio:void_chassis', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:iron_bars', B: '#forge:ingots/electrotine_alloy', C: 'industrialforegoing:machine_frame_simple' });

  //Soul Chassis
  event.remove({ output: 'enderio:ensouled_chassis' });
  event.shaped('enderio:ensouled_chassis', ['ABA', 'BCB', 'ABA'], { A: 'enderio:ensouled_chassis', B: '#forge:ingots/soularium', C: 'industrialforegoing:machine_frame_simple' });

  //Wooden Gear
  event.remove({ output: 'enderio:wood_gear' });
  event.shaped('enderio:wood_gear', [' A ', 'ABA', ' A '], { A: '#forge:rods/wooden', B: '#minecraft:planks' });

  //Stone Gear
  event.remove({ output: 'enderio:stone_gear' });
  event.shaped('enderio:stone_gear', [' A ', 'ABA', ' A '], { A: '#forge:cobblestone', B: 'enderio:wood_gear' });
  event.shaped('enderio:stone_gear', ['ABA', 'BCB', 'ABA'], { A: '#forge:rods/wooden', B: '#forge:cobblestone', C: '#minecraft:planks' });

  //Bimetal Gear
  event.remove({ output: 'enderio:iron_gear' });
  event.shaped('enderio:iron_gear', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/compressed_iron', B: '#forge:ingots/iron', C: 'enderio:stone_gear' });

  //Energized Gear
  event.remove({ output: 'enderio:energized_gear' });
  event.shaped('enderio:energized_gear', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/dynamic_alloy', B: '#forge:ingots/energetic_alloy', C: 'enderio:iron_gear' });

  //Vibrant Gear
  event.remove({ output: 'enderio:vibrant_gear' });
  event.shaped('enderio:vibrant_gear', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/vivid_alloy', B: '#forge:ingots/vibrant_alloy', C: 'enderio:energized_gear' });

  //DarkSteel Gear
  event.remove({ output: 'enderio:dark_bimetal_gear' });
  event.shaped('enderio:dark_bimetal_gear', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/tungsten', B: '#forge:ingots/dark_steel', C: 'enderio:vibrant_gear' });

  //Pulsating Crystal
  event.remove({ output: 'enderio:pulsating_crystal' });
  event.shaped('enderio:pulsating_crystal', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/electrotine_alloy', B: '#forge:ingots/pulsating_alloy', C: 'actuallyadditions:empowered_diamatine_crystal' });

  //Vibrant Crystal
  event.remove({ output: 'enderio:vibrant_crystal' });
  event.shaped('enderio:vibrant_crystal', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/electrotine_alloy', B: '#forge:ingots/vibrant_alloy', C: 'actuallyadditions:empowered_emeradic_crystal' });

  //Primitive Alloy
  event.remove({ output: 'enderio:primitive_alloy_smelter' });
  event.shaped('enderio:primitive_alloy_smelter', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/ender_ingot',
    B: 'immersiveengineering:connector_hv',
    C: 'actuallyadditions:powered_furnace',
    D: 'industrialforegoing:machine_frame_simple',
    E: '#forge:gears/rose_gold',
    F: 'thermal:energy_cell',
  });

  //Alloy
  event.remove({ output: 'enderio:alloy_smelter' });
  event.shaped('enderio:alloy_smelter', ['ABA', 'BCB', 'DED'], { A: '#forge:ingots/dark_steel', B: 'enderio:primitive_alloy_smelter', C: 'enderio:void_chassis', D: '#forge:gears/dark_steel', E: 'create:basin' });

  //SAG
  event.remove({ output: 'enderio:sag_mill' });
  event.shaped('enderio:sag_mill', ['AAA', 'BCB', 'EFE'], { A: '#forge:ingots/energetic_alloy', B: '#forge:ingots/dark_steel', C: 'enderio:void_chassis', E: '#forge:gears/dark_steel', F: 'actuallyadditions:crusher_double' });

  //Stirling Generator
  event.remove({ output: 'enderio:stirling_generator' });
  event.shaped('enderio:stirling_generator', ['ABA', 'CDC', 'EFE'], { A: '#forge:ingots/dark_steel', B: 'industrialforegoing:pitiful_generator', C: '#forge:plates/steel', D: 'enderio:void_chassis', E: 'enderio:dark_bimetal_gear', F: ['minecraft:piston', 'minecraft:sticky_piston'] });

  //Conduitù

  // Grindingballs - ONLY 1.21.1
  /*
  event.shaped('enderio:dynamic_alloy_grinding_ball', [' A ', 'AAA', ' A '], { A: '#forge:ingots/dynamic_alloy' });
  event.shaped('enderio:vivid_alloy_grinding_ball', [' A ', 'AAA', ' A '], { A: '#forge:ingots/vivid_alloy' });
  event.shaped('enderio:prismalium_alloy_grinding_ball', [' A ', 'AAA', ' A '], { A: '#forge:ingots/prismalium' });
  event.shaped('enderio:melodium_alloy_grinding_ball', [' A ', 'AAA', ' A '], { A: '#forge:ingots/melodium' });
  event.shaped('enderio:stellarium_alloy_grinding_ball', [' A ', 'AAA', ' A '], { A: '#forge:ingots/stellarium' });
  */

  //# ====================================================================================== #

  //#region Alloy
  const AlloyPattern = [
    {
      get: { item: 'anoxia:enderless_ingot_5', count: 1 },
      put: [
        { count: 1, ingredient: { tag: 'forge:ingots/tungsten' } },
        { count: 3, ingredient: { item: 'anoxia:enderless_ingot_4' } },
        { count: 1, ingredient: { tag: 'forge:ingots/manyullyn' } },
      ],
      rsflux: 24000,
    },
  ];
  AlloyPattern.forEach((recipe) => {
    event.custom({
      type: 'enderio:alloy_smelting',
      inputs: recipe.put,
      result: recipe.get,
      experience: 0.3,
      energy: recipe.rsflux,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region Fire
  event.remove({ type: 'enderio:fire_crafting' });
  event.custom({
    type: 'enderio:fire_crafting',
    base_blocks: [{ block: 'minecraft:bedrock' }],
    dimensions: ['minecraft:overworld', 'ad_astra:mercury', 'ad_astra:venus', 'ad_astra:moon', 'ad_astra:mars', 'ad_astra:glacio'],
    loot_table: 'enderio:fire_crafting/infinity',
    max_item_drops: 1,
  });
  //#endregion

  //# ====================================================================================== #

  //#region SAG
  //Restore
  const sagPattern = [
    {
      //Dust
      get: [
        { chance: 0.7, item: { item: 'exnihilosequentia:dust' }, optional: false },
        { chance: 0.3, item: { item: 'exnihilosequentia:dust' }, optional: false },
      ],
      put: { item: 'minecraft:sand' },
      rsflux: 2400,
    },
    {
      //Grains of Infinity
      get: [
        { chance: 0.75, item: { item: 'anoxia:compressed_cobbled_deepslate' }, optional: false },
        { chance: 0.01, item: { item: 'enderio:grains_of_infinity' }, optional: false },
      ],
      put: { item: 'anoxia:compressed_deepslate' },
      rsflux: 2400,
    },

    //Unification
    {
      //Silicon
      get: [{ chance: 0.5, item: { count: 1, item: 'ae2:silicon' }, optional: false }],
      put: { item: 'exnihilosequentia:dust' },
      rsflux: 2400,
    },
    {
      //Coal Dust
      get: [
        { chance: 0.9, item: { item: 'minecraft:brick' }, optional: false },
        { chance: 0.3, item: { item: 'minecraft:brick' }, optional: false },
        { chance: 0.1, item: { item: 'minecraft:brick' }, optional: false },
        { chance: 0.05, item: { item: 'mekanism:dust_coal' }, optional: false },
      ],
      put: { item: 'minecraft:flower_pot' },
      rsflux: 2400,
    },
    {
      //Coal Dust
      get: [
        { chance: 1.0, item: { count: 3, item: 'minecraft:coal' }, optional: false },
        { chance: 0.6, item: { item: 'mekanism:dust_coal' }, optional: false },
        { chance: 0.005, item: { item: 'minecraft:diamond' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/coal' },
      rsflux: 2400,
    },
    {
      //Coal Dust
      get: [
        { chance: 1.0, item: { count: 2, item: 'minecraft:diamond' }, optional: false },
        { chance: 0.25, item: { item: 'minecraft:diamond' }, optional: false },
        { chance: 0.1, item: { item: 'mekanism:dust_coal' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/diamond' },
      rsflux: 2400,
    },
    {
      //Iron Dust
      get: [
        { chance: 1.0, item: { item: 'thermal:iron_dust' }, optional: false },
        { chance: 0.33, item: { item: 'thermal:iron_dust' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/iron' },
      rsflux: 2400,
    },
    {
      //Gold Dust
      get: [
        { chance: 1.0, item: { item: 'thermal:gold_dust' }, optional: false },
        { chance: 0.33, item: { item: 'thermal:gold_dust' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/gold' },
      rsflux: 2400,
    },
    {
      //Copper Dust
      get: [
        { chance: 1.0, item: { item: 'thermal:copper_dust' }, optional: false },
        { chance: 0.33, item: { item: 'thermal:copper_dust' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/copper' },
      rsflux: 2400,
    },
    {
      //Obsidian Dust
      get: [{ chance: 1.0, item: { count: 4, item: 'mekanism:dust_obsidian' }, optional: false }],
      put: { tag: 'forge:obsidian' },
      rsflux: 2400,
    },
    {
      //LapisDust
      get: [
        { chance: 1.0, item: { item: 'thermal:lapis_dust' }, optional: false },
        { chance: 0.33, item: { item: 'thermal:lapis_dust' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:cobblestone' }, optional: false },
      ],
      put: { tag: 'forge:ores/lapis' },
      rsflux: 2400,
    },
    {
      //Quartz Dust
      get: [
        { chance: 1.0, item: { count: 2, item: 'minecraft:quartz' }, optional: false },
        { chance: 0.1, item: { item: 'thermal:quartz_dust' }, optional: false },
        { chance: 0.15, item: { item: 'minecraft:netherrack' }, optional: false },
      ],
      put: { tag: 'forge:ores/quartz' },
      rsflux: 2400,
    },
  ];
  sagPattern.forEach((recipe) => {
    event.custom({
      type: 'enderio:sag_milling',
      input: recipe.put,
      outputs: recipe.get,
      energy: recipe.rsflux,
    });
  });
  //#endregion

  //# ====================================================================================== #

  //#region slicing
  const slicingPattern = [
    // Capacitor - ONLY 1.21.1
    /*
    {
      get: { item: 'enderio:prismalium_capacitor' },
      put: [{ tag: 'forge:ingots/prismalium' }, { item: 'enderio:guardian_diode' }, { tag: 'forge:ingots/prismalium' }, { item: 'enderio:octadic_capacitor' }, { tag: 'forge:ingots/netherite' }, { item: 'enderio:octadic_capacitor' }],
      rsflux: 10000,
    },
    {
      get: { item: 'enderio:melodium_capacitor' },
      put: [{ tag: 'forge:ingots/melodium' }, { item: 'enderio:zombie_electrode' }, { tag: 'forge:ingots/melodium' }, { item: 'enderio:prismalium_capacitor' }, { tag: 'forge:ingots/aethersteel' }, { item: 'enderio:prismalium_capacitor' }],
      rsflux: 10000,
    },
    {
      get: { item: 'enderio:stellarium_capacitor' },
      put: [{ tag: 'forge:ingots/stellarium' }, { item: 'enderio:ender_resonator' }, { tag: 'forge:ingots/stellarium' }, { item: 'enderio:melodium_capacitor' }, { item: 'architects_palette:unobtanium' }, { item: 'enderio:melodium_capacitor' }],
      rsflux: 20000,
    },
    */
  ];
  slicingPattern.forEach((recipe) => {
    event.custom({
      type: 'enderio:slicing',
      output: recipe.get,
      inputs: recipe.put,
      energy: recipe.rsflux,
    });
  });
  //#endregion
});

//region Grindball - ONLY 1.21.1
/*
EnderIOEvents.grindingBalls((event) => {
  event.add('#forge:ingots/dynamic_alloy', 1.6, 1.6, 1.1, 80000);
  event.add('#forge:ingots/vivid_alloy', 1.35, 1.75, 1.35, 80000);
  event.add('#forge:ingots/prismalium', 1.4, 1.8, 1.45, 80000);
  event.add('#forge:ingots/melodium', 1.45, 2.0, 1.55, 88000);
  event.add('#forge:ingots/stellarium', 2.3, 2.25, 2.2, 176000);
});
*/
//#endregion
