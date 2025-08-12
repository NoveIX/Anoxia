//Dimension
const Moon1 = "ad_astra:lunar_wastelands";
const Mars1 = "ad_astra:martian_wastelands";
const Mars2 = "ad_astra:martian_canyon_creek";
const Mars3 = "ad_astra:martian_polar_caps";
const Venus1 = "ad_astra:venus_wastelands";
const Venus2 = "ad_astra:infernal_venus_barrens";
const Mercury = "ad_astra:mercury_deltas";
const Glacio1 = "ad_astra:glacio_snowy_barrens";
const Glacio2 = "ad_astra:glacio_ice_peaks";

//Entity
const Zombie = "minecraft:zombie";
const Skeleton = "minecraft:skeleton";
const MagmaCube = "minecraft:magma_cube";
const Blaze = "minecraft:blaze";
const WitherSkeleton = "minecraft:wither_skeleton";

EntityJSEvents.biomeSpawns((event) => {
    event.addSpawn(Zombie, [Moon1], 100, 3, 6);
    event.addSpawn(Skeleton, [Moon1], 100, 3, 6);
    event.addSpawn(WitherSkeleton, [Moon1], 10, 2, 3);
    event.addSpawn(Zombie, [Mars1], 100, 3, 6);
    event.addSpawn(Skeleton, [Mars1], 100, 3, 6);
    event.addSpawn(WitherSkeleton, [Mars1], 10, 2, 3);
    event.addSpawn(Zombie, [Mars2], 100, 3, 6);
    event.addSpawn(Skeleton, [Mars2], 100, 3, 6);
    event.addSpawn(WitherSkeleton, [Mars2], 10, 2, 3);
    event.addSpawn(Zombie, [Mars3], 100, 3, 6);
    event.addSpawn(Skeleton, [Mars3], 100, 3, 6);
    event.addSpawn(WitherSkeleton, [Mars3], 10, 2, 3);
    //Heat
    //event.addSpawn(MagmaCube, [IsVenus], 10, 2, 3);
    //event.addSpawn(Blaze, [IsVenus], 10, 2, 3);
    //event.addSpawn(Blaze, [IsMercury], 10, 2, 3);
});
