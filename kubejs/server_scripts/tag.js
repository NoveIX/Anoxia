//priority:980

//#region Item
ServerEvents.tags('item', (event) => {
  //Game Remove
  gameItem.rmOut.forEach((id) => event.removeAllTagsFrom(id));

  //# ====================================================================================== #

  //Remove all tag from id
  const rmAllTagsFromID = [
    //Avaritia
    'avaritia:neutron_pile',
    'avaritia:neutron_nugget',
    'avaritia:neutron_ingot',
    'avaritia:neutron',
  ];
  rmAllTagsFromID.forEach((id) => event.removeAllTagsFrom(id));

  //# ====================================================================================== #

  //remove Tag
  const rmTagPattern = [{ tag: 'forge:sawdust', item: 'chemlib:cellulose_dust' }];
  rmTagPattern.forEach((recipe) => event.remove(recipe.tag, recipe.item));

  //# ====================================================================================== #

  const addTagPattern = [
    //#region Anoxia
    //Coil
    { tag: 'anoxia:coils/copper', item: ['createaddition:copper_spool', 'immersiveengineering:wirecoil_copper'] },
    { tag: 'anoxia:coils/electrum', item: ['createaddition:electrum_spool', 'immersiveengineering:wirecoil_electrum'] },

    //Fertilizer
    { tag: 'anoxia:fertilizers', item: ['minecraft:bone_meal', 'minecraft:rotten_flesh', 'farmersdelight:tree_bark', 'farmersdelight:straw'] },

    //Furnace
    { tag: 'anoxia:furnaces/stone', item: ['minecraft:furnace', 'quark:deepslate_furnace'] },
    { tag: 'anoxia:furnaces/blackstone', item: ['nethersdelight:blackstone_furnace', 'quark:blackstone_furnace'] },
    { tag: 'anoxia:furnaces', item: ['#anoxia:furnaces/stone', '#anoxia:furnaces/blackstone'] },
    { tag: 'anoxia:blastfurnaces', item: ['minecraft:blast_furnace', 'nethersdelight:blackstone_blast_furnace'] },
    { tag: 'anoxia:smokers', item: ['minecraft:smoker', 'nethersdelight:nether_brick_smoker'] },

    //Stone
    { tag: 'anoxia:stone/polished_andesite', item: 'minecraft:polished_andesite' },

    //Fermenter
    { tag: 'anoxia:fermenter', item: ['minecraft:rotten_flesh', 'minecraft:fermented_spider_eye', 'minecraft:sugar', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:nether_wart'] },

    //Coal
    { tag: 'anoxia:coal', item: 'minecraft:coal' },
    { tag: 'anoxia:charcoal', item: 'minecraft:charcoal' },
    { tag: 'anoxia:gems/coal', item: ['minecraft:coal', 'minecraft:charcoal'] },
    { tag: 'anoxia:dusts/coals', item: ['#forge:dusts/coal', '#forge:dusts/charcoal'] },
    { tag: 'anoxia:materials/coal', item: ['#anoxia:gems/coal', '#anoxia:dusts/coals'] },
    { tag: 'anoxia:storage_blocks/coal', item: 'minecraft:coal_block' },
    { tag: 'anoxia:storage_blocks/charcoal', item: 'thermal:charcoal_block' },
    { tag: 'anoxia:storage_blocks/coals', item: ['minecraft:coal_block', 'thermal:charcoal_block'] },

    //ingot
    { tag: 'anoxia:ingots/enderite', item: 'anoxia:enderite_ingot' },
    { tag: 'forge:ingots/electrored_alloy', item: ['projectred_core:red_ingot', 'projectred_core:electrotine_ingot'] },
    { tag: 'forge:ingots/dyngetic_alloy', item: ['enderio:energetic_alloy_ingot', 'enderio:dynamic_alloy_ingot'] },
    { tag: 'forge:ingots/vivrant_alloy', item: ['enderio:vibrant_alloy_ingot', 'enderio:vivid_alloy_ingot'] },
    //#endregion

    //# ====================================================================================== #

    //#region Forge
    { tag: 'forge:plastic', item: 'pneumaticcraft:plastic' },
    { tag: 'forge:dust', item: 'exnihilosequentia:dust' },
    { tag: 'forge:flour', item: ['enderio:flour', 'pneumaticcraft:wheat_flour'] },
    { tag: 'forge:flour/wheat', item: ['enderio:flour', 'pneumaticcraft:wheat_flour'] },
    //{ tag: "forge:dusts/flour", item: "create:wheat_flour" },
    //{ tag: "forge:ores/uranium", item: "#forge:ores/uraninite" },
    //{ tag: "forge:raw_materials/uranium", item: "powah:uraninite_raw" },
    { tag: 'forge:pebble/stone', item: ['exnihilosequentia:stone_pebble', 'botania:pebble', 'twigs:pebble'] },

    //gems
    { tag: 'forge:gems/flux_gem', item: 'redstone_arsenal:flux_gem' },

    //dusts
    { tag: 'forge:dust/neutronium', item: 'avaritia:neutron_pile' },
    { tag: 'forge:dusts/neutronium', item: 'avaritia:neutron_pile' },

    //nuggets
    { tag: 'forge:nuggets/neutronium', item: 'avaritia:neutron_nugget' },
    { tag: 'forge:nuggets/infinity', item: 'avaritia:infinity_nugget' },
    { tag: 'forge:nuggets/flux', item: 'redstone_arsenal:flux_nugget' },

    //ingots
    { tag: 'forge:ingots/flux', item: 'redstone_arsenal:flux_ingot' },
    { tag: 'forge:ingots/neutron', item: 'avaritia:neutron_ingot' },
    { tag: 'forge:ingots/aethersteel', item: 'aethersteel:aethersteel_ingot' },
    { tag: 'forge:ingots/cognitive_alloy', item: 'experienceobelisk:cognitive_alloy' },
    { tag: 'forge:ingots/andesite_alloy', item: 'create:andesite_alloy' },
    { tag: 'forge:ingots/obsidian', item: 'anoxia:obsidian_ingot' },
    { tag: 'forge:ingots/neutronium', item: 'avaritia:neutron_ingot' },
    { tag: 'forge:ingots/infinity', item: 'avaritia:infinity_ingot' },
    { tag: 'forge:ingots/flux', item: 'redstone_arsenal:flux_ingot' },
    { tag: 'forge:ingots/dynamic_alloy', item: 'enderio:dynamic_alloy_ingot' },
    { tag: 'forge:ingots/vivid_alloy', item: 'enderio:vivid_alloy_ingot' },

    //blocks
    { tag: 'forge:storage_blocks/neutronium', item: 'avaritia:neutron' },
    { tag: 'forge:storage_blocks/infinity', item: 'avaritia:infinity' },
    { tag: 'forge:storage_blocks/hellforged', item: 'bloodmagic:dungeon_metal' },
    { tag: 'forge:storage_blocks', item: 'bloodmagic:dungeon_metal' },
    { tag: 'forge:storage_blocks/flux', item: 'redstone_arsenal:flux_metal_block' },
    { tag: 'forge:storage_blocks/flux_gem', item: 'redstone_arsenal:flux_gem_block' },
    { tag: 'forge:storage_blocks/cobblestone', item: 'anoxia:compressed_cobblestone' },
    //#endregion

    //Botania
    {
      tag: 'botania:petals/flower',
      item: [
        'botania:light_gray_petal',
        'botania:gray_petal',
        'botania:black_petal',
        'botania:brown_petal',
        'botania:red_petal',
        'botania:orange_petal',
        'botania:yellow_petal',
        'botania:lime_petal',
        'botania:green_petal',
        'botania:cyan_petal',
        'botania:light_blue_petal',
        'botania:blue_petal',
        'botania:purple_petal',
        'botania:magenta_petal',
        'botania:pink_petal',
      ],
    },

    //Aethersteel integration ore
    { tag: 'forge:ingots', item: 'aethersteel:aethersteel_ingot' },
    { tag: 'forge:ingots/aethersteel', item: 'aethersteel:aethersteel_ingot' },

    //Create deco Unification
    { tag: 'createdeco:internal/plates/iron_plates', item: '#forge:plates/iron' },
    { tag: 'createdeco:internal/plates/copper_plates', item: '#forge:plates/copper' },
    { tag: 'createdeco:internal/plates/zinc_plates', item: '#forge:plates/zinc' },
  ];
  addTagPattern.forEach((recipe) => {
    const itemId = Array.isArray(recipe.item) ? recipe.item : [recipe.item];
    itemId.forEach((i) => event.add(recipe.tag, i));
  });
});
//#endregion

//# ====================================================================================== #

//#region Block
ServerEvents.tags('block', (event) => {
  const addTagPattern = [
    //Forge
    { tag: 'forge:storage_blocks/hellforged', block: 'bloodmagic:dungeon_metal' },
    { tag: 'forge:storage_blocks', block: 'bloodmagic:dungeon_metal' },

    /* -> Create tags in openloader/data/mm
    //MM
    //Item port
    { tag: 'mm:machine_port/item/input', block: ['mm:tiny_item_port_input', 'mm:small_item_port_input', 'mm:normal_item_port_input', 'mm:reinforced_item_port_input', 'mm:big_item_port_input', 'mm:huge_item_port_input', 'mm:ludicrous_item_port_input', 'mm:ultimate_item_port_input'] },
    { tag: 'mm:machine_port/item/output', block: ['mm:tiny_item_port_output', 'mm:small_item_port_output', 'mm:normal_item_port_output', 'mm:reinforced_item_port_output', 'mm:big_item_port_output', 'mm:huge_item_port_output', 'mm:ludicrous_item_port_output', 'mm:ultimate_item_port_output'] },

    //Fluid port
    { tag: 'mm:machine_port/fluid/input', block: ['mm:tiny_fluid_port_input', 'mm:small_fluid_port_input', 'mm:normal_fluid_port_input', 'mm:reinforced_fluid_port_input', 'mm:big_fluid_port_input', 'mm:huge_fluid_port_input', 'mm:ludicrous_fluid_port_input', 'mm:ultimate_fluid_port_input'] },
    { tag: 'mm:machine_port/fluid/output', block: ['mm:tiny_fluid_port_output', 'mm:small_fluid_port_output', 'mm:normal_fluid_port_output', 'mm:reinforced_fluid_port_output', 'mm:big_fluid_port_output', 'mm:huge_fluid_port_output', 'mm:ludicrous_fluid_port_output', 'mm:ultimate_fluid_port_output'] },

    //Energy port
    { tag: 'mm:machine_port/energy/input', block: ['mm:tiny_energy_port_input', 'mm:small_energy_port_input', 'mm:normal_energy_port_input', 'mm:reinforced_energy_port_input', 'mm:big_energy_port_input', 'mm:huge_energy_port_input', 'mm:ludicrous_energy_port_input', 'mm:ultimate_energy_port_input'] },
    { tag: 'mm:machine_port/energy/output', block: ['mm:tiny_energy_port_output', 'mm:small_energy_port_output', 'mm:normal_energy_port_output', 'mm:reinforced_energy_port_output', 'mm:big_energy_port_output', 'mm:huge_energy_port_output', 'mm:ludicrous_energy_port_output', 'mm:ultimate_energy_port_output'] },
    */
  ];
  addTagPattern.forEach((recipe) => {
    const blockId = Array.isArray(recipe.block) ? recipe.block : [recipe.block];
    blockId.forEach((b) => event.add(recipe.tag, b));
  });
});
//#endregion

//# ====================================================================================== #

//#region Fluid
ServerEvents.tags('fluid', (event) => {
  //Game Remove
  gameFluid.rmOut.forEach((id) => event.removeAllTagsFrom(id));

  //# ====================================================================================== #

  //Remove Single Tag
  const rmTagFromEveryID = ['forge:fuel'];
  rmTagFromEveryID.forEach((tag) => event.removeAll(tag));

  //# ====================================================================================== #

  //Add Tag
  const addTagPattern = [
    { tag: 'forge:fuel', fluid: 'ad_astra:fuel' },
    { tag: 'anoxia:water', fluid: 'minecraft:water' },
    { tag: 'anoxia:refined_canola', fluid: 'actuallyadditions:refined_canola_oil' },
    { tag: 'anoxia:nutrient_distillation', fluid: 'enderio:nutrient_distillation' },
  ];
  addTagPattern.forEach((recipe) => event.add(recipe.tag, recipe.fluid));
});
//#endregion

//# ====================================================================================== #

//#region JAOPCA
ServerEvents.tags('item', (event) => {
  const tagsJAOPCAattern = [
    //JAOPCA Integration
    { tag: 'forge:ores', item: 'aethersteel:aether_debris' },
    { tag: 'forge:ores/aethersteel_scrap', item: 'aethersteel:aether_debris' },
    { tag: 'forge:ore_rates/singular', item: 'aethersteel:aether_debris' },
    { tag: 'forge:ingots/aethersteel_scrap', item: 'aethersteel:aethersteel_scrap' },
    { tag: 'forge:storage_blocks/raw', item: 'bloodmagic:rawdemoniteblock' },
    { tag: 'forge:storage_blocks/raw_hellforged', item: 'bloodmagic:rawdemoniteblock' },
  ];
  tagsJAOPCAattern.forEach((recipe) => event.add(recipe.tag, recipe.item));
});

ServerEvents.tags('block', (event) => {
  const tagsJAOPCAPattern = [
    //JAOPCA Integration
    { tag: 'forge:ores', item: 'aethersteel:aether_debris' },
    { tag: 'forge:ores/aethersteel_scrap', item: 'aethersteel:aether_debris' },
    { tag: 'forge:ore_rates/singular', item: 'aethersteel:aether_debris' },
    { tag: 'forge:storage_blocks/raw', item: 'bloodmagic:rawdemoniteblock' },
    { tag: 'forge:storage_blocks/raw_hellforged', item: 'bloodmagic:rawdemoniteblock' },
  ];
  tagsJAOPCAPattern.forEach((recipe) => event.add(recipe.tag, recipe.item));
});
//#endregion
