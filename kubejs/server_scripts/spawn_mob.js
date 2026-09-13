//priority:20

EntityJSEvents.biomeSpawns((event) => {
  const coldDim = ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'];
  const hotDim = ['ad_astra:mercury_deltas', 'ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens'];
  const spawnPattern = [
    //Cold Dim
    // Cold Dim (Weighted Pool scaled by x10)
    { mob: 'minecraft:zombie', dim: coldDim, weight: 1000, min: 1, max: 2 },
    { mob: 'minecraft:skeleton', dim: coldDim, weight: 750, min: 1, max: 2 },
    { mob: 'minecraft:zombie_horse', dim: coldDim, weight: 300, min: 1, max: 2 },
    { mob: 'minecraft:skeleton_horse', dim: coldDim, weight: 250, min: 1, max: 2 },
    { mob: 'minecraft:wither_skeleton', dim: coldDim, weight: 150, min: 1, max: 2 },
    { mob: 'minecraft:zombie_villager', dim: coldDim, weight: 100, min: 1, max: 2 },
    { mob: 'minecraft:warden', dim: coldDim, weight: 1, min: 1, max: 1 },

    //Hot Dim
    { mob: 'minecraft:magma_cube', dim: hotDim, weight: 50, min: 1, max: 1 },
    { mob: 'minecraft:blaze', dim: hotDim, weight: 30, min: 1, max: 1 },
  ];
  spawnPattern.forEach((recipe) => event.addSpawn(recipe.mob, recipe.dim, recipe.weight, recipe.max, recipe.max));
});
