//priority:970

ServerEvents.recipes((event) => {
  const ingredientReplacements = [
    //Input	//Output
    ['industrialforegoing:plastic', '#forge:plastic'],
    ['immersiveengineering:coal_coke', '#forge:coal_coke'],
    ['cyclic:compressed_cobblestone', 'anoxia:compressed_cobblestone'],
    ['thermal:sawdust', '#forge:dusts/wood'],
    ['thermal:saw_blade', '#forge:sawblades'],
    ['minecraft:smoker', '#anoxia:smokers'],
    ['minecraft:blast_furnace', '#anoxia:blastfurnaces'],
    ['tconstruct:rose_gold_nugget', 'thermal:rose_gold_nugget'],
    ['tconstruct:rose_gold_ingot', 'thermal:rose_gold_ingot'],
    ['tconstruct:rose_gold_block', 'thermal:rose_gold_block'],
    ['enderio:energy_conduit', 'enderio:energyy_conduit'],

    //Create Unification
    ['create:copper_sheet', '#forge:plates/copper'],
    ['create:brass_sheet', '#forge:plates/brass'],
    ['create:iron_sheet', '#forge:plates/iron'],
    ['create:golden_sheet', '#forge:plates/gold'],
    ['createaddition:electrum_sheet', '#forge:plates/electrum'],
    ['createdeco:zinc_sheet', '#forge:plates/zinc'],
    ['createdeco:netherite_sheet', '#forge:plates/netherite'],
  ];

  ingredientReplacements.forEach((replace) => event.replaceOutput({}, replace[0], replace[1]));
  ingredientReplacements.forEach((replace) => event.replaceInput({}, replace[0], replace[1]));
});
