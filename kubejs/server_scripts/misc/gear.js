ServerEvents.recipes((event) => {
  //#region Remove ID
  const rmRecipeId = [
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
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  //#region Func Gear
  function gearCreate(recipe, liquid) {
    event.custom({
      type: 'create:compacting',
      ingredients: [{ tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { amount: 1000, fluid: liquid, nbt: {} }],
      results: [{ item: recipe.get }],
    });
  }

  function gearImmersive(recipe) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      energy: recipe.rsflux,
      input: { base_ingredient: { tag: recipe.put }, count: 4 },
      mold: 'immersiveengineering:mold_gear',
      result: { item: recipe.get },
    });
  }

  function gearThermal(recipe) {
    event.custom({
      type: 'thermal:press',
      ingredients: [{ tag: recipe.put, count: 4 }, { item: 'thermal:press_gear_die' }],
      result: [{ item: recipe.get }],
      energy: recipe.rsflux,
    });
  }

  function gearTinker(recipe) {
    const json = {
      type: 'tconstruct:casting_table',
      cooling_time: getCoolingTick(recipe.material, 4),
      fluid: { amount: 360, tag: `forge:molten_${recipe.molten}` },
      result: { item: recipe.get },
    };

    //Add single and multi Cast
    addDualCastRecipe('gear', json, event);
  }
  //#endregion

  //# ====================================================================================== #

  //#region Gear
  const gearPattern = [
    //Thermal Metal
    { get: 'thermal:iron_gear', put: 'forge:ingots/iron', molten: 'iron', material: material.iron, rsflux: 4000 },
    { get: 'thermal:gold_gear', put: 'forge:ingots/gold', molten: 'gold', material: material.gold, rsflux: 4000 },
    { get: 'thermal:copper_gear', put: 'forge:ingots/copper', molten: 'copper', material: material.copper, rsflux: 4000 },
    { get: 'thermal:netherite_gear', put: 'forge:ingots/netherite', molten: 'netherite', material: material.netherite, rsflux: 12000, metal: 'hard' },
    { get: 'thermal:tin_gear', put: 'forge:ingots/tin', molten: 'tin', material: material.tin, rsflux: 4000 },
    { get: 'thermal:lead_gear', put: 'forge:ingots/lead', molten: 'lead', material: material.lead, rsflux: 4000 },
    { get: 'thermal:silver_gear', put: 'forge:ingots/silver', molten: 'silver', material: material.silver, rsflux: 4000 },
    { get: 'thermal:nickel_gear', put: 'forge:ingots/nickel', molten: 'nickel', material: material.nickel, rsflux: 4000 },
    { get: 'thermal:signalum_gear', put: 'forge:ingots/signalum', molten: 'signalum', material: material.signalum, rsflux: 8000, metal: 'hard' },
    { get: 'thermal:lumium_gear', put: 'forge:ingots/lumium', molten: 'lumium', material: material.lumium, rsflux: 8000, metal: 'hard' },
    { get: 'thermal:enderium_gear', put: 'forge:ingots/enderium', molten: 'enderium', material: material.enderium, rsflux: 12000, metal: 'hard' },
    { get: 'thermal:steel_gear', put: 'forge:ingots/steel', molten: 'steel', material: material.steel, rsflux: 6000 },
    { get: 'thermal:rose_gold_gear', put: 'forge:ingots/rose_gold', molten: 'rose_gold', material: material.roseGold, rsflux: 6000 },
    { get: 'thermal:bronze_gear', put: 'forge:ingots/bronze', molten: 'bronze', material: material.bronze, rsflux: 6000 },
    { get: 'thermal:electrum_gear', put: 'forge:ingots/electrum', molten: 'electrum', material: material.electrum, rsflux: 6000 },
    { get: 'thermal:invar_gear', put: 'forge:ingots/invar', molten: 'invar', material: material.invar, rsflux: 6000 },
    { get: 'thermal:constantan_gear', put: 'forge:ingots/constantan', molten: 'constantan', material: material.constantan, rsflux: 6000 },

    //Thermal Gem
    { get: 'thermal:lapis_gear', put: 'forge:gems/lapis', molten: 'lapis', material: material.lapis, rsflux: 2000 },
    { get: 'thermal:diamond_gear', put: 'forge:gems/diamond', molten: 'diamond', material: material.diamond, rsflux: 8000 },
    { get: 'thermal:emerald_gear', put: 'forge:gems/emerald', molten: 'emerald', material: material.emerald, rsflux: 8000 },
    { get: 'thermal:quartz_gear', put: 'forge:gems/quartz', molten: 'quartz', material: material.quartz, rsflux: 2000 },
    { get: 'thermal:ruby_gear', put: 'forge:gems/ruby', molten: 'ruby', material: material.ruby, rsflux: 6000 },
    { get: 'thermal:sapphire_gear', put: 'forge:gems/sapphire', molten: 'sapphire', material: material.sapphire, rsflux: 6000 },

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
  gearPattern.forEach((recipe) => {
    //Remove
    event.remove({ output: recipe.get });

    //Gear Press
    if (recipe.metal === 'special') gearThermal(recipe);
    else if (recipe.metal === 'hard') (gearImmersive(recipe), gearThermal(recipe));
    else {
      //const fluidId = recipe.put.startsWith('forge:gems/') ? 'minecraft:water' : 'minecraft:lava';
      //gearCreate(recipe, fluidId);
      gearImmersive(recipe);
      gearThermal(recipe);
    }

    //Molten
    if (recipe.molten) gearTinker(recipe);
  });
  //#endregion
});
