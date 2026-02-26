ServerEvents.recipes((event) => {
  //#region RemoveID
  const RmRecipeID = [
    //Infusion
    'mekanism:infusion_conversion/carbon/from_coal',
    'mekanism:infusion_conversion/carbon/from_coal_block',
    'mekanism:infusion_conversion/carbon/from_charcoal',
    'mekanism:infusion_conversion/carbon/from_charcoal_block',

    //Metallurgic
    'mekanism:control_circuit/basic',
    'mekanism:metallurgic_infusing/alloy/infused',
    'mekanism:metallurgic_infusing/alloy/reinforced',
    'mekanism:metallurgic_infusing/alloy/atomic',
    'mekanism:processing/iron/enriched',
    'mekanism:processing/steel/enriched_iron_to_dust',

    //Osmium Compressor
    'mekanism:processing/refined_glowstone/ingot/from_dust',
    'mekanism:processing/refined_obsidian/ingot/from_dust',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //Advanced Circuit
  event.remove({ output: 'mekanism:advanced_control_circuit' });
  event.shaped('mekanism:advanced_control_circuit', ['AAA', 'BCB', 'AAA'], { A: '#forge:ingots/signalum', B: 'mekanism:alloy_infused', C: 'mekanism:basic_control_circuit' });

  //Elite Circuit
  event.remove({ output: 'mekanism:elite_control_circuit' });
  event.shaped('mekanism:elite_control_circuit', ['AAA', 'BCB', 'AAA'], { A: '#forge:ingots/enderium', B: 'mekanism:alloy_reinforced', C: 'mekanism:advanced_control_circuit' });

  //Utimate Circuit
  event.remove({ output: 'mekanism:ultimate_control_circuit' });
  event.shaped('mekanism:ultimate_control_circuit', ['AAA', 'BCB', 'AAA'], { A: '#forge:ingots/melodium', B: 'mekanism:alloy_atomic', C: 'mekanism:elite_control_circuit' });

  //Steel Casing
  event.remove({ output: 'mekanism:steel_casing' });
  event.shaped('mekanism:steel_casing', ['ABA', 'BCB', 'ABA'], { A: '#forge:ingots/dark_steel', B: 'pneumaticcraft:transistor', C: 'thermal:machine_frame' });

  //Tier Installer
  event.remove({ output: 'mekanism:basic_tier_installer' });
  event.shaped('mekanism:basic_tier_installer', ['ABA', 'CDC', 'ABA'], { A: 'redstone_arsenal:flux_gear', B: 'mekanism:basic_control_circuit', C: '#forge:ingots/melodium', D: 'actuallyadditions:empowered_void_crystal_block' });

  //Metallurgic infuser
  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event.shaped('mekanism:metallurgic_infuser', ['ABA', 'CDC', 'ABA'], { A: '#forge:ingots/redstone_alloy', B: 'enderio:alloy_smelter', C: '#forge:ingots/osmium', D: 'mekanism:steel_casing' });

  //# =================================================================================================== #

  //#region Compressing
  const CompressingPattern = [
    {
      get: { item: 'mekanism:ingot_refined_glowstone' },
      put: { ingredient: { tag: 'forge:dusts/glowstone' } },
      chem: { amount: 5, gas: 'mekanism:osmium' },
    },
    {
      get: { item: 'mekanism:ingot_refined_obsidian' },
      put: { ingredient: { tag: 'forge:dusts/refined_obsidian' } },
      chem: { amount: 5, gas: 'mekanism:osmium' },
    },
  ];
  CompressingPattern.forEach((recipe) => {
    event.custom({
      type: 'mekanism:compressing',
      itemInput: recipe.put,
      output: recipe.get,
      chemicalInput: recipe.chem,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Metallurgic Infusing
  const MetallurgicPattern = [
    //Circuit
    {
      get: { item: 'mekanism:basic_control_circuit' },
      put: { ingredient: { item: 'pneumaticcraft:transistor' } },
      chem: { tag: 'mekanism:redstone', amount: 40 },
    },

    //Alloy
    {
      get: { item: 'mekanism:alloy_infused' },
      put: { ingredient: { item: 'pneumaticcraft:capacitor' } },
      chem: { tag: 'mekanism:redstone', amount: 40 },
    },
    {
      get: { item: 'mekanism:alloy_reinforced' },
      put: { ingredient: { item: 'mekanism:alloy_infused' } },
      chem: { tag: 'mekanism:diamond', amount: 80 },
    },
    {
      get: { item: 'mekanism:alloy_atomic' },
      put: { ingredient: { item: 'mekanism:alloy_reinforced' } },
      chem: { tag: 'mekanism:refined_obsidian', amount: 160 },
    },

    //Steel
    {
      get: { item: 'mekanism:enriched_iron' },
      put: { ingredient: { item: 'minecraft:iron_ingot' } },
      chem: { tag: 'mekanism:carbon', amount: 20 },
    },
    {
      get: { item: 'thermal:steel_dust' },
      put: { ingredient: { item: 'mekanism:enriched_iron' } },
      chem: { tag: 'mekanism:carbon', amount: 20 },
    },

    //Refined Obsidian
    {
      get: { item: 'mekanism:dust_refined_obsidian' },
      put: { ingredient: { tag: 'forge:dusts/obsidian' } },
      chem: { amount: 40, tag: 'mekanism:diamond' },
    },
  ];
  MetallurgicPattern.forEach((recipe) => {
    event.custom({
      type: 'mekanism:metallurgic_infusing',
      itemInput: recipe.put,
      output: recipe.get,
      chemicalInput: recipe.chem,
    });
  });
  //#endregion

  //# =================================================================================================== #

  //#region Infusion
  const InfusionPattern = [
    {
      get: { amount: 10, infuse_type: 'mekanism:carbon' },
      put: { ingredient: [{ tag: 'anoxia:materials/coal' }] },
    },
    {
      get: { amount: 90, infuse_type: 'mekanism:carbon' },
      put: { ingredient: [{ tag: 'anoxia:storage_blocks/coals' }] },
    },
    {
      get: { amount: 20, infuse_type: 'mekanism:carbon' },
      put: { ingredient: [{ tag: 'forge:coal_coke' }, { tag: 'forge:dusts/coal_coke' }] },
    },
    {
      get: { amount: 180, infuse_type: 'mekanism:carbon' },
      put: { ingredient: [{ tag: 'forge:storage_blocks/coal_coke' }] },
    },
  ];
  InfusionPattern.forEach((recipe) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: recipe.put,
      output: recipe.get,
    });
  });
  //#endregion
});
