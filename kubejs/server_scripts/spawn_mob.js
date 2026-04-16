//priority:20

EntityJSEvents.biomeSpawns((event) => {
  const spawnPattern = [
    { mob: 'minecraft:zombie', dim: ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'], weight: 100, min: 3, max: 6 },
    { mob: 'minecraft:skeleton', dim: ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'], weight: 100, min: 3, max: 6 },
    { mob: 'minecraft:wither_skeleton', dim: ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'], weight: 10, min: 2, max: 3 },
    { mob: 'minecraft:wither_skeleton', dim: ['ad_astra:lunar_wastelands', 'ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps'], weight: 1, min: 1, max: 1 },
  ];
  spawnPattern.forEach((recipe) => event.addSpawn(recipe.mob, recipe.dim, recipe.weight, recipe.max, recipe.max));
});
