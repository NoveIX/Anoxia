//priority:20

//Dimension
const moon1 = 'ad_astra:lunar_wastelands';
const mars1 = 'ad_astra:martian_wastelands';
const mars2 = 'ad_astra:martian_canyon_creek';
const mars3 = 'ad_astra:martian_polar_caps';
const venus1 = 'ad_astra:venus_wastelands';
const venus2 = 'ad_astra:infernal_venus_barrens';
const mercury = 'ad_astra:mercury_deltas';
const glacio1 = 'ad_astra:glacio_snowy_barrens';
const glacio2 = 'ad_astra:glacio_ice_peaks';

//Entity
const zombie = 'minecraft:zombie';
const skeleton = 'minecraft:skeleton';
const magmaCube = 'minecraft:magma_cube';
const blaze = 'minecraft:blaze';
const witherSkeleton = 'minecraft:wither_skeleton';

EntityJSEvents.biomeSpawns((event) => {
  event.addSpawn(zombie, [moon1], 100, 3, 6);
  event.addSpawn(skeleton, [moon1], 100, 3, 6);
  event.addSpawn(witherSkeleton, [moon1], 10, 2, 3);
  event.addSpawn(zombie, [mars1], 100, 3, 6);
  event.addSpawn(skeleton, [mars1], 100, 3, 6);
  event.addSpawn(witherSkeleton, [mars1], 10, 2, 3);
  event.addSpawn(zombie, [mars2], 100, 3, 6);
  event.addSpawn(skeleton, [mars2], 100, 3, 6);
  event.addSpawn(witherSkeleton, [mars2], 10, 2, 3);
  event.addSpawn(zombie, [mars3], 100, 3, 6);
  event.addSpawn(skeleton, [mars3], 100, 3, 6);
  event.addSpawn(witherSkeleton, [mars3], 10, 2, 3);
  //Heat
  //event.addSpawn(magmaCube, [IsVenus], 10, 2, 3);
  //event.addSpawn(blaze, [IsVenus], 10, 2, 3);
  //event.addSpawn(blaze, [IsMercury], 10, 2, 3);
});
