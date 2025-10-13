// priority:997
const bucketList = ["exnihilosequentia:witch_water_bucket", "exnihilosequentia:sea_water_bucket"];
const DimensionList = ["ad_astra:moon", "ad_astra:moon_orbit", "ad_astra:mars", "ad_astra:mars_orbit", "ad_astra:venus", "ad_astra:venus_orbit", "ad_astra:mercury", "ad_astra:mercury_orbit"];

bucketList.forEach((bucket) => {
    ItemEvents.rightClicked(bucket, (event) => {
        const blockDimension = event.level.dimension.toString();

        if (DimensionList.includes(blockDimension)) {
            event.player.tell("You cannot use this bucket in this dimension!");
            event.cancel();
        }
    });
});
