ServerEvents.recipes((event) => {
  //#region Remove ID
  const RmRecipeID = [
    //Thermal Compat
    'thermal:compat/redstone_arsenal/press_rsa_flux_ingot_to_gear',

    //Thermal Endergy
    'thermalendergy:machine/press/press_prismalium_ingot_to_gear',
    'thermalendergy:machine/press/press_melodium_ingot_to_gear',
    'thermalendergy:machine/press/press_stellarium_ingot_to_gear',

    //Thermal Expansion
    'thermal:machines/press/press_iron_ingot_to_gear',
    'thermal:machines/press/press_gold_ingot_to_gear',
    'thermal:machines/press/press_copper_ingot_to_gear',
    'thermal:machines/press/press_netherite_ingot_to_gear',
    'thermal:machines/press/press_tin_ingot_to_gear',
    'thermal:machines/press/press_lead_ingot_to_gear',
    'thermal:machines/press/press_silver_ingot_to_gear',
    'thermal:machines/press/press_nickel_ingot_to_gear',
    'thermal:machines/press/press_steel_ingot_to_gear',
    'thermal:machines/press/press_rose_gold_ingot_to_gear',
    'thermal:machines/press/press_signalum_ingot_to_gear',
    'thermal:machines/press/press_lumium_ingot_to_gear',
    'thermal:machines/press/press_enderium_ingot_to_gear',
    'thermal:machines/press/press_bronze_ingot_to_gear',
    'thermal:machines/press/press_electrum_ingot_to_gear',
    'thermal:machines/press/press_invar_ingot_to_gear',
    'thermal:machines/press/press_constantan_ingot_to_gear',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //#region Func Gear
  function GearCreate(recipe, liquid) {
    event.custom({
      type: 'create:compacting',
      ingredients: [{ tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { amount: 1000, fluid: liquid, nbt: {} }],
      results: [{ item: recipe.get }],
    });
  }

  function GearImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      energy: recipe.rsflux,
      input: { base_ingredient: { tag: recipe.put }, count: 4 },
      mold: 'immersiveengineering:mold_gear',
      result: { item: recipe.get },
    });
  }

  function GearThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      ingredients: [{ tag: recipe.put, count: 4 }, { item: 'thermal:press_gear_die' }],
      result: [{ item: recipe.get }],
      energy: recipe.rsflux,
    });
  }

  function GearTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: GetCoolingTick(recipe.material, 4),
      fluid: { amount: 360, tag: `forge:molten_${recipe.molten}` },
      result: { item: recipe.get },
    };

    // Add single and multi Cast
    AddDualCastRecipe('gear', json, this);
  }
  //#endregion

  //# =================================================================================================== #

  //#region Gear
  const GearPattern = [
    //Thermal Metal
    { get: 'thermal:iron_gear', put: 'forge:ingots/iron', molten: 'iron', material: Material.Iron, rsflux: 4000 },
    { get: 'thermal:gold_gear', put: 'forge:ingots/gold', molten: 'gold', material: Material.Gold, rsflux: 4000 },
    { get: 'thermal:copper_gear', put: 'forge:ingots/copper', molten: 'copper', material: Material.Copper, rsflux: 4000 },
    { get: 'thermal:netherite_gear', put: 'forge:ingots/netherite', molten: 'netherite', material: Material.Netherite, rsflux: 12000, metal: 'hard' },
    { get: 'thermal:tin_gear', put: 'forge:ingots/tin', molten: 'tin', material: Material.Tin, rsflux: 4000 },
    { get: 'thermal:lead_gear', put: 'forge:ingots/lead', molten: 'lead', material: Material.Lead, rsflux: 4000 },
    { get: 'thermal:silver_gear', put: 'forge:ingots/silver', molten: 'silver', material: Material.Silver, rsflux: 4000 },
    { get: 'thermal:nickel_gear', put: 'forge:ingots/nickel', molten: 'nickel', material: Material.Nickel, rsflux: 4000 },
    { get: 'thermal:signalum_gear', put: 'forge:ingots/signalum', molten: 'signalum', material: Material.Signalum, rsflux: 8000, metal: 'hard' },
    { get: 'thermal:lumium_gear', put: 'forge:ingots/lumium', molten: 'lumium', material: Material.Lumium, rsflux: 8000, metal: 'hard' },
    { get: 'thermal:enderium_gear', put: 'forge:ingots/enderium', molten: 'enderium', material: Material.Enderium, rsflux: 12000, metal: 'hard' },
    { get: 'thermal:steel_gear', put: 'forge:ingots/steel', molten: 'steel', material: Material.Steel, rsflux: 6000 },
    { get: 'thermal:rose_gold_gear', put: 'forge:ingots/rose_gold', molten: 'rose_gold', material: Material.RoseGold, rsflux: 6000 },
    { get: 'thermal:bronze_gear', put: 'forge:ingots/bronze', molten: 'bronze', material: Material.Bronze, rsflux: 6000 },
    { get: 'thermal:electrum_gear', put: 'forge:ingots/electrum', molten: 'electrum', material: Material.Electrum, rsflux: 6000 },
    { get: 'thermal:invar_gear', put: 'forge:ingots/invar', molten: 'invar', material: Material.Invar, rsflux: 6000 },
    { get: 'thermal:constantan_gear', put: 'forge:ingots/constantan', molten: 'constantan', material: Material.Constantan, rsflux: 6000 },

    //Thermal Gem
    { get: 'thermal:lapis_gear', put: 'forge:gems/lapis', molten: 'lapis', material: Material.Lapis, rsflux: 2000 },
    { get: 'thermal:diamond_gear', put: 'forge:gems/diamond', molten: 'diamond', material: Material.Diamond, rsflux: 8000 },
    { get: 'thermal:emerald_gear', put: 'forge:gems/emerald', molten: 'emerald', material: Material.Emerald, rsflux: 8000 },
    { get: 'thermal:quartz_gear', put: 'forge:gems/quartz', molten: 'quartz', material: Material.Quartz, rsflux: 2000 },
    { get: 'thermal:ruby_gear', put: 'forge:gems/ruby', molten: 'ruby', material: Material.Ruby, rsflux: 6000 },
    { get: 'thermal:sapphire_gear', put: 'forge:gems/sapphire', molten: 'sapphire', material: Material.Sapphire, rsflux: 6000 },

    //Thermal Endergy
    { get: 'thermalendergy:prismalium_gear', put: 'forge:ingots/prismalium', rsflux: 16000, metal: 'hard' },
    { get: 'thermalendergy:melodium_gear', put: 'forge:ingots/melodium', rsflux: 20000, metal: 'hard' },
    { get: 'thermalendergy:stellarium_gear', put: 'forge:ingots/stellarium', rsflux: 24000, metal: 'hard' },

    //Redstone Arsenal
    { get: 'redstone_arsenal:flux_gear', put: 'forge:ingots/flux', rsflux: 8000, metal: 'hard' },

    //Pneumaticcraft
    { get: 'pneumaticcraft:compressed_iron_gear', put: 'forge:ingots/compressed_iron', rsflux: 8000, metal: 'hard' },

    //Avaritia
    { get: 'avaritia:neutron_gear', put: 'forge:ingots/neutron', rsflux: 720000, metal: 'special' },
  ];
  GearPattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    // Gear Press
    if (recipe.metal === 'special') GearThermal(recipe);
    else if (recipe.metal === 'hard') (GearImmersive(recipe), GearThermal(recipe));
    else {
      //const fluidId = recipe.put.startsWith('forge:gems/') ? 'minecraft:water' : 'minecraft:water';
      //GearCreate(recipe, fluidId);
      GearImmersive(recipe);
      GearThermal(recipe);
    }

    //Molten
    if (recipe.molten) GearTinker(recipe);
  });
  //#endregion
});
