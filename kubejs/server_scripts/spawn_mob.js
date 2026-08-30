//priority:20

EntityJSEvents.biomeSpawns((event) => {
  let coldDim = ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'];
  const spawnPattern = [
    { mob: 'minecraft:zombie', dim: coldDim, weight: 100, min: 1, max: 2 },
    { mob: 'minecraft:skeleton', dim: coldDim, weight: 75, min: 1, max: 2 },
    { mob: 'minecraft:zombie_horse', dim: coldDim, weight: 30, min: 1, max: 2 },
    { mob: 'minecraft:skeleton_horse', dim: coldDim, weight: 25, min: 1, max: 2 },
    { mob: 'minecraft:wither_skeleton', dim: coldDim, weight: 15, min: 1, max: 2 },
    { mob: 'minecraft:zombie_villager', dim: coldDim, weight: 10, min: 1, max: 2 },
    { mob: 'minecraft:warden', dim: coldDim, weight: 1, min: 1, max: 1 },
  ];
  spawnPattern.forEach((recipe) => event.addSpawn(recipe.mob, recipe.dim, recipe.weight, recipe.max, recipe.max));
});
