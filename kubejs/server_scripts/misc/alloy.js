//priority:950

ServerEvents.recipes((event) => {
  //#region Remove ID
  const RmRecipeID = [
    //Minecraft
    'minecraft:netherite_ingot',
    'thermal:machines/smelter/smelter_alloy_netherite',

    //Aetherstell
    //aetherstell.js => rm output: aetherstell_ingot

    //Create
    'thermal:compat/create/smelter_create_alloy_andesite_alloy',

    //EnderIO
    'enderio:alloy_smelting/copper_alloy_ingot',
    'enderio:alloy_smelting/energetic_alloy_ingot',
    'enderio:alloy_smelting/vibrant_alloy_ingot',
    'enderio:alloy_smelting/redstone_alloy_ingot',
    'enderio:alloy_smelting/conductive_alloy_ingot',
    'enderio:alloy_smelting/pulsating_alloy_ingot',
    'enderio:alloy_smelting/dark_steel_ingot',
    'enderio:alloy_smelting/soularium_ingot',
    'enderio:alloy_smelting/end_steel_ingot',

    //Immersive
    'immersiveengineering:arcfurnace/steel',
    'immersiveengineering:alloysmelter/rose_gold',
    'immersiveengineering:arcfurnace/alloy_rose_gold',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:arcfurnace/alloy_bronze',
    'immersiveengineering:alloysmelter/electrum',
    'immersiveengineering:arcfurnace/alloy_electrum',
    'immersiveengineering:alloysmelter/invar',
    'immersiveengineering:arcfurnace/alloy_invar',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:arcfurnace/alloy_constantan',
    'immersiveengineering:alloysmelter/manyullyn',
    'immersiveengineering:arcfurnace/alloy_manyullyn',

    //Redstone Arsenal
    'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust',
    'thermal:compat/redstone_arsenal/smelter_rsa_alloy_flux',

    //Thermal
    'thermal:fire_charge/signalum_ingot_4',
    'thermal:machines/smelter/smelter_alloy_signalum',
    'thermal:fire_charge/lumium_ingot_4',
    'thermal:machines/smelter/smelter_alloy_lumium',
    'thermal:fire_charge/enderium_ingot_2',
    'thermal:machines/smelter/smelter_alloy_enderium',
    'thermal:machines/smelter/smelter_alloy_steel',
    'thermal:machines/smelter/smelter_alloy_rose_gold',
    'thermal:fire_charge/bronze_ingot_4',
    'thermal:machines/smelter/smelter_alloy_bronze',
    'thermal:fire_charge/electrum_ingot_2',
    'thermal:machines/smelter/smelter_alloy_electrum',
    'thermal:fire_charge/invar_ingot_3',
    'thermal:machines/smelter/smelter_alloy_invar',
    'thermal:fire_charge/constantan_ingot_2',
    'thermal:machines/smelter/smelter_alloy_constantan',

    //Thermal Endergy
    'thermalendergy:machine/smelter/prismalium_ingot',
    'thermalendergy:machine/smelter/melodium_ingot',
    'thermalendergy:machine/smelter/stellarium_ingot',

    //Tinker
    'tconstruct:smeltery/alloys/molten_signalum',
    'tconstruct:smeltery/alloys/molten_lumium',
    'tconstruct:smeltery/alloys/molten_enderium',
  ];
  RmRecipeID.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# =================================================================================================== #

  //#region Func Alloy
  function AlloyImmersiveAlloy(recipe) {
    ImmersiveAlloyKiln(event).input0(recipe.put1, recipe.p1).input1(recipe.put2, recipe.p2).output(recipe.get, recipe.g0).time(200).build();
  }

  function AlloyImmersiveArc(recipe) {
    ImmersiveArcFurnace(event).input(recipe.put1, recipe.p1).additives(recipe.put2, recipe.p2).output(recipe.get, recipe.g0).energy(recipe.rsflux).time(100).build();
  }

  function AlloyEnderIO2(recipe) {
    EnderIOSmelter(event).input(recipe.put1, recipe.p1).input(recipe.put2, recipe.p2).output(recipe.get, recipe.g0).experience(0.3).energy(recipe.rsflux).build();
  }

  function AlloyEnderIO3(recipe) {
    EnderIOSmelter(event).input(recipe.put1, recipe.p1).input(recipe.put2, recipe.p2).input(recipe.put3, recipe.p3).output(recipe.get, recipe.g0).experience(0.3).energy(recipe.rsflux).build();
  }

  function AlloyThermal2(recipe) {
    ThermalAlloySmelter(event).input(recipe.put1, recipe.p1).input(recipe.put2, recipe.p2).output(recipe.get, recipe.g0).energy(recipe.rsflux).build();
  }

  function AlloyThermal3(recipe) {
    ThermalAlloySmelter(event).input(recipe.put1, recipe.p1).input(recipe.put2, recipe.p2).input(recipe.put3, recipe.p3).output(recipe.get, recipe.g0).energy(recipe.rsflux).build();
  }
  //#endregion

  //# =================================================================================================== #

  //#region Alloy
  const AlloyPattern = [
    //Anoxia
    { get: 'anoxia:modularium_ingot', g0: 1, put1: 'forge:ingots/vibrant_alloy', p1: 1, put2: 'forge:ingots/enderium', p2: 1, put3: 'forge:ingots/electrotine_alloy', p3: 1, rsflux: 60000, alloy: 'complex' }, //Modularium

    //Minecraft
    { get: 'minecraft:netherite_ingot', g0: 1, put1: 'forge:ingots/netherite_scrap', p1: 4, put2: 'forge:ingots/gold', p2: 4, rsflux: 24000, alloy: 'simple' }, //Netherite

    //Aethersteel
    { get: 'aethersteel:aethersteel_ingot', g0: 1, put1: 'forge:ingots/aethersteel_scrap', p1: 4, put2: 'forge:ingots/netherite', p2: 4, rsflux: 48000, alloy: 'ender' }, //Aetherstell

    //Create
    { get: 'create:andesite_alloy', g0: 1, put1: 'anoxia:stone/polished_andesite', p1: 1, put2: 'forge:ingots/platinum', p2: 1, rsflux: 8000, alloy: 'simple' }, //Andesite Alloy

    //EnderIO
    { get: 'enderio:copper_alloy_ingot', g0: 1, put1: 'forge:ingots/copper', p1: 1, put2: 'forge:silicon', p2: 1, rsflux: 4000, alloy: 'ender' }, //Copper Alloy
    { get: 'enderio:energetic_alloy_ingot', g0: 1, put1: 'forge:dusts/redstone', p1: 1, put2: 'forge:ingots/electrum', p2: 1, put3: 'forge:dusts/glowstone', p3: 1, rsflux: 18000, alloy: 'complex' }, //Energetic Alloy
    { get: 'enderio:vibrant_alloy_ingot', g0: 1, put1: 'forge:ingots/energetic_alloy', p1: 1, put2: 'forge:ender_pearls', p2: 1, put3: 'forge:ingots/rose_gold', p3: 1, rsflux: 24000, alloy: 'complex' }, //Vibrant Alloy
    { get: 'enderio:redstone_alloy_ingot', g0: 1, put1: 'forge:ingots/red_alloy', p1: 1, put2: 'forge:silicon', p2: 1, put3: 'forge:ingots/graphite', p3: 1, rsflux: 4000, alloy: 'complex' }, //Redstone Alloy
    { get: 'enderio:conductive_alloy_ingot', g0: 1, put1: 'forge:ingots/redstone_alloy', p1: 1, put2: 'forge:ingots/iron', p2: 1, put3: 'forge:ingots/copper_alloy', p3: 1, rsflux: 8000, alloy: 'complex' }, //Conductive Alloy
    { get: 'enderio:pulsating_alloy_ingot', g0: 1, put1: 'forge:ingots/iron', p1: 1, put2: 'forge:ender_pearls', p2: 1, rsflux: 18000, alloy: 'ender' }, //Pulsating Alloy
    { get: 'enderio:dark_steel_ingot', g0: 1, put1: 'forge:ingots/iron', p1: 1, put2: 'anoxia:dusts/coal', p2: 8, put3: 'forge:obsidian', p3: 1, rsflux: 48000, alloy: 'complex' }, //DarkSteel Ingot
    { get: 'enderio:dark_steel_ingot', g0: 1, put1: 'forge:ingots/iron', p1: 1, put2: 'forge:dusts/coal_coke', p2: 4, put3: 'forge:obsidian', p3: 1, rsflux: 48000, alloy: 'complex' }, //DarkSteel Ingot - Coke
    { get: 'enderio:dark_steel_ingot', g0: 1, put1: 'forge:ingots/steel', p1: 1, put2: 'forge:obsidian', p2: 1, rsflux: 24000, alloy: 'ender' }, //DarkSteel Ingot - Steel Alternative
    { get: 'enderio:soularium_ingot', g0: 1, put1: 'forge:ingots/cognitive_alloy', p1: 1, put2: 'forge:ingots/gold', p2: 1, rsflux: 24000, alloy: 'ender' }, //Soularium Ingot
    { get: 'enderio:end_steel_ingot', g0: 1, put1: 'forge:end_stones', p1: 1, put2: 'forge:ingots/dark_steel', p2: 1, put3: 'forge:obsidian', p3: 1, rsflux: 36000, alloy: 'complex' }, //EndSteel Ingot

    //Redstone arsenal
    { get: 'redstone_arsenal:flux_ingot', g0: 1, put1: 'forge:ingots/electrum', p1: 1, put2: 'forge:dusts/redstone', p2: 4, rsflux: 24000, alloy: 'ender' },

    //Thermal
    { get: 'thermal:steel_ingot', g0: 1, put1: 'forge:ingots/iron', p1: 1, put2: 'forge:dusts/coal', p2: 8, rsflux: 18000, alloy: 'simple' }, //Steel - Coal
    { get: 'thermal:steel_ingot', g0: 1, put1: 'forge:ingots/iron', p1: 1, put2: 'forge:dusts/coal_coke', p2: 4, rsflux: 18000, alloy: 'simple' }, //Steel - Coke
    { get: 'thermal:rose_gold_ingot', g0: 2, put1: 'forge:ingots/gold', p1: 1, put2: 'forge:ingots/copper', p2: 1, rsflux: 18000, alloy: 'simple' }, //Rose Gold
    { get: 'thermal:signalum_ingot', g0: 4, put1: 'forge:ingots/rose_gold', p1: 3, put2: 'forge:ingots/silver', p2: 1, put3: 'forge:dusts/redstone', p3: 10, rsflux: 24000, alloy: 'complex' }, //Signalum
    { get: 'thermal:lumium_ingot', g0: 4, put1: 'forge:ingots/energetic_alloy', p1: 3, put2: 'forge:ingots/lead', p2: 1, put3: 'forge:dusts/glowstone', p3: 4, rsflux: 24000, alloy: 'complex' }, //Lumium
    { get: 'thermal:enderium_ingot', g0: 2, put1: 'forge:ingots/vibrant_alloy', p1: 3, put2: 'forge:ingots/platinum', p2: 1, put3: 'forge:dusts/ender_pearl', p3: 4, rsflux: 36000, alloy: 'complex' }, //Enderium
    { get: 'thermal:bronze_ingot', g0: 4, put1: 'forge:ingots/copper', p1: 3, put2: 'forge:ingots/tin', p2: 1, rsflux: 18000, alloy: 'simple' }, //Bronze
    { get: 'thermal:electrum_ingot', g0: 2, put1: 'forge:ingots/gold', p1: 1, put2: 'forge:ingots/silver', p2: 1, rsflux: 18000, alloy: 'simple' }, //Electrum
    { get: 'thermal:invar_ingot', g0: 3, put1: 'forge:ingots/iron', p1: 2, put2: 'forge:ingots/nickel', p2: 1, rsflux: 18000, alloy: 'simple' }, //Invar
    { get: 'thermal:constantan_ingot', g0: 2, put1: 'forge:ingots/copper', p1: 1, put2: 'forge:ingots/nickel', p2: 1, rsflux: 18000, alloy: 'simple' }, //Constantan

    //Thermal Endergy
    { get: 'thermalendergy:prismalium_ingot', g0: 2, put1: 'forge:dusts/prismarine', p1: 4, put2: 'forge:ingots/enderium', p2: 1, put3: 'forge:ingots/end_steel', p3: 1, rsflux: 48000, alloy: 'complex' },
    { get: 'thermalendergy:melodium_ingot', g0: 2, put1: 'forge:fruits/chorusfruit', p1: 4, put2: 'forge:ingots/prismalium', p2: 1, put3: 'forge:ingots/netherite', p3: 1, rsflux: 60000, alloy: 'complex' },
    { get: 'thermalendergy:stellarium_ingot', g0: 2, put1: 'forge:nether_stars', p1: 1, put2: 'forge:ingots/melodium', p2: 1, put3: 'forge:ingots/aethersteel', p3: 1, rsflux: 72000, alloy: 'complex' },

    //Tinker
    { get: 'tconstruct:manyullyn_ingot', g0: 1, put1: 'forge:ingots/cobalt', p1: 3, put2: 'forge:ingots/netherite_scrap', p2: 1, rsflux: 24000, alloy: 'simple' },
  ];
  AlloyPattern.forEach((recipe) => {
    if (recipe.alloy === 'simple') (AlloyImmersiveAlloy(recipe), AlloyImmersiveArc(recipe));
    if (recipe.alloy === 'simple' || recipe.alloy === 'ender') (AlloyEnderIO2(recipe), AlloyThermal2(recipe));
    if (recipe.alloy === 'complex') (AlloyEnderIO3(recipe), AlloyThermal3(recipe));
  });
  //#endregion
});
