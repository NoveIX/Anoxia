ServerEvents.recipes((event) => {
  //#region Remove ID
  const RmRecipeID = [
    'industrialforegoing:crusher/sand_silicon',
    'industrialforegoing:dissolution_chamber/simple_machine_frame',
    'industrialforegoing:dissolution_chamber/advanced_machine_frame',
    'industrialforegoing:dissolution_chamber/supreme_machine_frame',
    'industrialforegoing:dissolution_chamber/efficiency_addon_1',
    'industrialforegoing:dissolution_chamber/efficiency_addon_2',
    'mifa:dissolution_chamber/efficiency_addon_2',
    'mifa:dissolution_chamber/efficiency_addon_3',
    'mifa:dissolution_chamber/efficiency_addon_4',
    'industrialforegoing:dissolution_chamber/processing_addon_1',
    'industrialforegoing:dissolution_chamber/processing_addon_2',
    'mifa:dissolution_chamber/processing_addon_2',
    'mifa:dissolution_chamber/processing_addon_3',
    'mifa:dissolution_chamber/processing_addon_4',
    'industrialforegoing:dissolution_chamber/speed_addon_1',
    'industrialforegoing:dissolution_chamber/speed_addon_2',
    'mifa:dissolution_chamber/speed_addon_2',
    'mifa:dissolution_chamber/speed_addon_3',
    'mifa:dissolution_chamber/speed_addon_4',
    'industrialforegoing:dissolution_chamber/range_addon0',
    'industrialforegoing:dissolution_chamber/range_addon1',
    'industrialforegoing:dissolution_chamber/range_addon2',
    'industrialforegoing:dissolution_chamber/range_addon3',
    'industrialforegoing:dissolution_chamber/range_addon4',
    'industrialforegoing:dissolution_chamber/range_addon5',
    'industrialforegoing:dissolution_chamber/range_addon6',
    'industrialforegoing:dissolution_chamber/range_addon7',
    'industrialforegoing:dissolution_chamber/range_addon8',
    'industrialforegoing:dissolution_chamber/range_addon9',
    'industrialforegoing:dissolution_chamber/range_addon10',
    'industrialforegoing:dissolution_chamber/range_addon11',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //Fertilizer
  event.shaped('industrialforegoing:fertilizer', ['AAA', 'AAA', 'AAA'], { A: 'minecolonies:compost' });

  //Dye Mixer
  event.remove({ output: 'industrialforegoing:dye_mixer' });
  event.shaped('industrialforegoing:dye_mixer', ['ADA', 'EBF', 'ACA'], { A: '#forge:plates/iron', B: 'industrialforegoing:machine_frame_pity', C: '#forge:gears/gold', D: 'minecraft:green_dye', E: 'minecraft:red_dye', F: 'minecraft:blue_dye' });

  //# =================================================================================================== #

  //#region Dissolution Chamber
  const DissolutionChamberPattern = [
    //Machine Frame
    {
      get: { count: 1, item: 'industrialforegoing:machine_frame_simple' },
      put: [{ tag: 'forge:plastic' }, { item: 'industrialforegoing:machine_frame_pity' }, { tag: 'forge:plastic' }, { tag: 'forge:gears/electrum' }, { tag: 'forge:gears/electrum' }, { item: 'minecraft:diamond' }, { item: 'thermal:rf_coil' }, { item: 'minecraft:diamond' }],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      time: 600,
    },
    {
      get: { count: 1, item: 'industrialforegoing:machine_frame_advanced' },
      put: [{ tag: 'forge:plastic' }, { item: 'industrialforegoing:machine_frame_simple' }, { tag: 'forge:plastic' }, { tag: 'forge:gears/diamond' }, { tag: 'forge:gears/diamond' }, { item: 'minecraft:netherite_ingot' }, { item: 'thermal:rf_coil' }, { item: 'minecraft:netherite_ingot' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
      time: 1200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:machine_frame_supreme' },
      put: [{ tag: 'forge:plastic' }, { item: 'industrialforegoing:machine_frame_advanced' }, { tag: 'forge:plastic' }, { tag: 'forge:gears/netherite' }, { tag: 'forge:gears/netherite' }, { tag: 'forge:ingots/aethersteel' }, { item: 'thermal:rf_coil' }, { tag: 'forge:ingots/aethersteel' }],
      fluid: '{Amount:2000,FluidName:"industrialforegoing:ether_gas"}',
      time: 2400,
    },

    //Efficiency Addon
    {
      get: { count: 1, item: 'industrialforegoing:efficiency_addon_1', nbt: '{TitaniumAugment:{Efficiency:0.9f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:blaze_rod' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/gold' }, { item: 'minecraft:blaze_rod' }, { tag: 'forge:gears/gold' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:efficiency_addon_2', nbt: '{TitaniumAugment:{Efficiency:0.8f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:blaze_rod' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/diamond' }, { item: 'industrialforegoing:efficiency_addon_1' }, { tag: 'forge:gears/diamond' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 400,
    },
    {
      get: { count: 1, item: 'mifa:efficiency_addon_3', nbt: '{TitaniumAugment:{Efficiency:0.7f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:blaze_rod' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/netherite' }, { item: 'industrialforegoing:efficiency_addon_2' }, { tag: 'forge:gears/netherite' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
      time: 600,
    },
    {
      get: { count: 1, item: 'mifa:efficiency_addon_4', nbt: '{TitaniumAugment:{Efficiency:0.6f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:blaze_rod' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { item: 'thermalendergy:vibrating_core' }, { item: 'mifa:efficiency_addon_3' }, { item: 'thermalendergy:vibrating_core' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
      time: 800,
    },

    //Processing Addon
    {
      get: { count: 1, item: 'industrialforegoing:processing_addon_1', nbt: '{TitaniumAugment:{Processing:2.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:furnace' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/gold' }, { item: 'minecraft:crafting_table' }, { tag: 'forge:gears/gold' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:processing_addon_2', nbt: '{TitaniumAugment:{Processing:3.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:furnace' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/diamond' }, { item: 'industrialforegoing:processing_addon_1' }, { tag: 'forge:gears/diamond' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 400,
    },
    {
      get: { count: 1, item: 'mifa:processing_addon_3', nbt: '{TitaniumAugment:{Processing:4.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:furnace' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/netherite' }, { item: 'industrialforegoing:processing_addon_2' }, { tag: 'forge:gears/netherite' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
      time: 600,
    },
    {
      get: { count: 1, item: 'mifa:processing_addon_4', nbt: '{TitaniumAugment:{Processing:5.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:furnace' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { item: 'thermalendergy:vibrating_core' }, { item: 'mifa:processing_addon_3' }, { item: 'thermalendergy:vibrating_core' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
      time: 800,
    },

    //Speed Addon
    {
      get: { count: 1, item: 'industrialforegoing:speed_addon_1', nbt: '{TitaniumAugment:{Speed:2.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:sugar' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/gold' }, { item: 'minecraft:sugar' }, { tag: 'forge:gears/gold' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:speed_addon_2', nbt: '{TitaniumAugment:{Speed:3.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:sugar' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/diamond' }, { item: 'industrialforegoing:speed_addon_1' }, { tag: 'forge:gears/diamond' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 400,
    },
    {
      get: { count: 1, item: 'mifa:speed_addon_3', nbt: '{TitaniumAugment:{Speed:4.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:sugar' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:gears/netherite' }, { item: 'industrialforegoing:speed_addon_2' }, { tag: 'forge:gears/netherite' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
      time: 600,
    },
    {
      get: { count: 1, item: 'mifa:speed_addon_4', nbt: '{TitaniumAugment:{Speed:5.0f}}' },
      put: [{ tag: 'forge:ingots/red_alloy' }, { item: 'minecraft:sugar' }, { tag: 'forge:ingots/red_alloy' }, { tag: 'forge:glass_panes/colorless' }, { tag: 'forge:glass_panes/colorless' }, { item: 'thermalendergy:vibrating_core' }, { item: 'mifa:speed_addon_3' }, { item: 'thermalendergy:vibrating_core' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
      time: 800,
    },

    //Range
    {
      get: { count: 1, item: 'industrialforegoing:range_addon0', nbt: '{TitaniumAugment:{Range:0.0f}}' },
      put: [{ item: 'minecraft:cobblestone' }, { item: 'minecraft:redstone' }, { item: 'minecraft:cobblestone' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:cobblestone' }, { item: 'minecraft:redstone' }, { item: 'minecraft:cobblestone' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon1', nbt: '{TitaniumAugment:{Range:1.0f}}' },
      put: [{ item: 'minecraft:lapis_lazuli' }, { item: 'minecraft:redstone' }, { item: 'minecraft:lapis_lazuli' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:lapis_lazuli' }, { item: 'minecraft:redstone' }, { item: 'minecraft:lapis_lazuli' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon2', nbt: '{TitaniumAugment:{Range:2.0f}}' },
      put: [{ item: 'minecraft:bone_meal' }, { item: 'minecraft:redstone' }, { item: 'minecraft:bone_meal' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:bone_meal' }, { item: 'minecraft:redstone' }, { item: 'minecraft:bone_meal' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon3', nbt: '{TitaniumAugment:{Range:3.0f}}' },
      put: [{ item: 'minecraft:iron_nugget' }, { item: 'minecraft:redstone' }, { item: 'minecraft:iron_nugget' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:iron_nugget' }, { item: 'minecraft:redstone' }, { item: 'minecraft:iron_nugget' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon4', nbt: '{TitaniumAugment:{Range:4.0f}}' },
      put: [{ tag: 'forge:nuggets/copper' }, { item: 'minecraft:redstone' }, { tag: 'forge:nuggets/copper' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { tag: 'forge:nuggets/copper' }, { item: 'minecraft:redstone' }, { tag: 'forge:nuggets/copper' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon5', nbt: '{TitaniumAugment:{Range:5.0f}}' },
      put: [{ item: 'minecraft:gold_nugget' }, { item: 'minecraft:redstone' }, { item: 'minecraft:gold_nugget' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:gold_nugget' }, { item: 'minecraft:redstone' }, { item: 'minecraft:gold_nugget' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon6', nbt: '{TitaniumAugment:{Range:6.0f}}' },
      put: [{ item: 'minecraft:iron_ingot' }, { item: 'minecraft:redstone' }, { item: 'minecraft:iron_ingot' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:iron_ingot' }, { item: 'minecraft:redstone' }, { item: 'minecraft:iron_ingot' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon7', nbt: '{TitaniumAugment:{Range:7.0f}}' },
      put: [{ item: 'minecraft:gold_ingot' }, { item: 'minecraft:redstone' }, { item: 'minecraft:gold_ingot' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:gold_ingot' }, { item: 'minecraft:redstone' }, { item: 'minecraft:gold_ingot' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon8', nbt: '{TitaniumAugment:{Range:8.0f}}' },
      put: [{ item: 'minecraft:quartz' }, { item: 'minecraft:redstone' }, { item: 'minecraft:quartz' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:quartz' }, { item: 'minecraft:redstone' }, { item: 'minecraft:quartz' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon9', nbt: '{TitaniumAugment:{Range:9.0f}}' },
      put: [{ item: 'minecraft:diamond' }, { item: 'minecraft:redstone' }, { item: 'minecraft:diamond' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:diamond' }, { item: 'minecraft:redstone' }, { item: 'minecraft:diamond' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon10', nbt: '{TitaniumAugment:{Range:10.0f}}' },
      put: [{ item: 'minecraft:popped_chorus_fruit' }, { item: 'minecraft:redstone' }, { item: 'minecraft:popped_chorus_fruit' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:popped_chorus_fruit' }, { item: 'minecraft:redstone' }, { item: 'minecraft:popped_chorus_fruit' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
    {
      get: { count: 1, item: 'industrialforegoing:range_addon11', nbt: '{TitaniumAugment:{Range:11.0f}}' },
      put: [{ item: 'minecraft:emerald' }, { item: 'minecraft:redstone' }, { item: 'minecraft:emerald' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:glass_pane' }, { item: 'minecraft:emerald' }, { item: 'minecraft:redstone' }, { item: 'minecraft:emerald' }],
      fluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
      time: 200,
    },
  ];
  DissolutionChamberPattern.forEach((recipe) => {
    event.custom({
      type: 'industrialforegoing:dissolution_chamber',
      input: recipe.put,
      inputFluid: recipe.fluid,
      output: recipe.get,
      processingTime: recipe.time,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Crusher
  const CrusherPattern = [
    { get: { tag: 'forge:dust' }, put: { tag: 'forge:sand' } },
    { get: { tag: 'forge:silicon' }, put: { tag: 'forge:dust' } },
  ];
  CrusherPattern.forEach((recipe) => {
    event.custom({
      type: 'industrialforegoing:crusher',
      input: recipe.put,
      output: recipe.get,
    });
  });
  //#endregion
});
