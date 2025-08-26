ServerEvents.recipes((event) => {
    //Floral Fertilizer
    event.remove({ output: "botania:fertilizer" });
    event.shapeless("botania:fertilizer", ["minecraft:bone_meal", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower"]);
    event.shapeless("botania:fertilizer", ["botania:living_root"]);

    //// # =================================================================================================== #

    //#region Elven Trade
    const ElvenTradePattern = [
        //Aethersteel
        { get: [{ item: "aethersteel:aetherslate" }], put: [{ item: "anoxia:compressed_deepslate" }] },
    ];
    ElvenTradePattern.forEach((recipe) => {
        event.custom({
            type: "botania:elven_trade",
            ingredients: recipe.put,
            output: recipe.get,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Mana Infusion
    event.remove({ output: "mysticalagriculture:prosperity_seed_base" });
    const ManaInfusionPattern = [
        { get: { item: "mysticalagriculture:prosperity_seed_base" }, put: { tag: "forge:seeds" }, magic: 5000 },

        //Ad Astra Transmutation
        { get: { item: "ad_astra:moon_sand" }, put: { item: "ad_astra:mars_sand" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:mars_sand" }, put: { item: "ad_astra:venus_sand" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:venus_sand" }, put: { item: "ad_astra:moon_sand" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:moon_stone" }, put: { item: "ad_astra:mars_stone" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:mars_stone" }, put: { item: "ad_astra:venus_stone" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:venus_stone" }, put: { item: "ad_astra:mercury_stone" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:mercury_stone" }, put: { item: "ad_astra:glacio_stone" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },
        { get: { item: "ad_astra:glacio_stone" }, put: { item: "ad_astra:moon_stone" }, magic: 500, alchemy: { type: "block", block: "botania:alchemy_catalyst" } },

        //Ad Astra Duplication
        { get: { count: 2, item: "ad_astra:moon_sand" }, put: { item: "ad_astra:moon_sand" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:mars_sand" }, put: { item: "ad_astra:mars_sand" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:venus_sand" }, put: { item: "ad_astra:venus_sand" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:moon_stone" }, put: { item: "ad_astra:moon_stone" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:mars_stone" }, put: { item: "ad_astra:mars_stone" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:venus_stone" }, put: { item: "ad_astra:venus_stone" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:mercury_stone" }, put: { item: "ad_astra:mercury_stone" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
        { get: { count: 2, item: "ad_astra:glacio_stone" }, put: { item: "ad_astra:glacio_stone" }, magic: 5000, alchemy: { type: "block", block: "botania:conjuration_catalyst" } },
    ];
    ManaInfusionPattern.forEach((recipe) => {
        if (recipe.alchemy) {
            event.custom({
                type: "botania:mana_infusion",
                catalyst: recipe.alchemy,
                input: recipe.put,
                output: recipe.get,
                mana: recipe.magic,
            });
        } else {
            event.custom({
                type: "botania:mana_infusion",
                input: recipe.put,
                output: recipe.get,
                mana: recipe.magic,
            });
        }
    });
    //#endregion

    //// # =================================================================================================== #

    //#region RunicAltar Essence
    //Magic
    const ManaEssenceT0 = 10000;
    const ManaEssenceT1 = 20000;
    const ManaEssenceT2 = 30000;
    const ManaEssenceT3 = 40000;
    const ManaEssenceT4 = 50000;
    const ManaEssenceT5 = 60000;
    const ManaEssenceT6 = 70000;
    const ManaSeedT0 = 100000;
    const ManaSeedT1 = 200000;
    const ManaSeedT2 = 300000;
    const ManaSeedT3 = 400000;
    const ManaSeedT4 = 500000;
    const ManaSeedT5 = 600000;
    const ManaSeedT6 = 700000;

    //Essence
    const essenceT0 = { item: "mysticalagriculture:prosperity_shard" };
    const essenceT1 = { item: "mysticalagriculture:inferium_essence" };
    const essenceT2 = { item: "mysticalagriculture:prudentium_essence" };
    const essenceT3 = { item: "mysticalagriculture:tertium_essence" };
    const essenceT4 = { item: "mysticalagriculture:imperium_essence" };
    const essenceT5 = { item: "mysticalagriculture:supremium_essence" };
    const essenceT6 = { item: "mysticalagradditions:insanium_essence" };

    //Extra
    const BotaniaSeed = { item: "botania:grass_seeds" };
    const BaseSeed = { item: "mysticalagriculture:prosperity_seed_base" };
    const SoulBaseSeed = { item: "mysticalagriculture:soulium_seed_base" };
    const RuneEnergy = { item: "botanicadds:rune_energy" };

    //Rune
    const RuneMana = { item: "botania:rune_mana" };
    const RuneWater = { item: "botania:rune_water" };
    const RuneFire = { item: "botania:rune_fire" };
    const RuneEarth = { item: "botania:rune_earth" };
    const RuneAir = { item: "botania:rune_air" };

    //Season
    const RuneSpring = { item: "botania:rune_spring" };
    const RuneSummer = { item: "botania:rune_summer" };
    const RuneAutumn = { item: "botania:rune_autumn" };
    const RuneWinter = { item: "botania:rune_winter" };

    //Homunculus
    const RunePride = { item: "botania:rune_pride" };
    const RuneGreed = { item: "botania:rune_greed" };
    const RuneWrath = { item: "botania:rune_wrath" };
    const RuneEnvy = { item: "botania:rune_envy" };
    const RuneLust = { item: "botania:rune_lust" };
    const RuneGluttony = { item: "botania:rune_gluttony" };
    const RuneSloth = { item: "botania:rune_sloth" };
    const RunicAltarPattern = [
        //#region Essence
        //T0
        {
            get: { count: 1, item: "mysticalagriculture:air_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneWater, { item: "minecraft:glass_bottle" }, { item: "minecraft:glass_bottle" }, essenceT0, essenceT0],
            magic: ManaEssenceT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:earth_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { tag: "minecraft:flowers" }, { tag: "minecraft:flowers" }, essenceT0, essenceT0],
            magic: ManaEssenceT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:water_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneAir, { item: "minecraft:lava_bucket" }, { item: "minecraft:lava_bucket" }, essenceT0, essenceT0],
            magic: ManaEssenceT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fire_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneAir, { item: "minecraft:water_bucket" }, { item: "minecraft:water_bucket" }, essenceT0, essenceT0],
            magic: ManaEssenceT0,
        },

        //T1
        {
            get: { count: 1, item: "mysticalagriculture:stone_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneFire, { item: "minecraft:stone" }, { item: "minecraft:stone" }, essenceT1, essenceT1],
            magic: ManaEssenceT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dirt_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneWater, { tag: "minecraft:dirt" }, { tag: "minecraft:dirt" }, essenceT1, essenceT1],
            magic: ManaEssenceT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wood_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneAir, { tag: "minecraft:logs" }, { tag: "minecraft:logs" }, essenceT1, essenceT1],
            magic: ManaEssenceT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ice_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneAir, { item: "minecraft:ice" }, { item: "minecraft:ice" }, essenceT1, essenceT1],
            magic: ManaEssenceT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:deepslate_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { item: "minecraft:deepslate" }, { item: "minecraft:deepslate" }, essenceT1, essenceT1],
            magic: ManaEssenceT1,
        },

        //T2
        {
            get: { count: 1, item: "mysticalagriculture:nature_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneWater, { tag: "minecraft:saplings" }, { tag: "minecraft:saplings" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEarth, { tag: "forge:netherrack" }, { tag: "forge:netherrack" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coal_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { item: "minecraft:coal" }, { item: "minecraft:coal" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coral_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSummer, RuneAir, { tag: "minecraft:corals" }, { tag: "minecraft:corals" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:honey_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneFire, { tag: "forge:honeycombs" }, { tag: "forge:honeycombs" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:amethyst_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWinter, RuneEarth, { item: "minecraft:amethyst_shard" }, { item: "minecraft:amethyst_shard" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:pig_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneGluttony, { item: "minecraft:porkchop" }, { item: "minecraft:porkchop" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:chicken_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RunePride, { tag: "forge:feathers" }, { tag: "forge:feathers" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:cow_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneSloth, { tag: "forge:leather" }, { tag: "forge:leather" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sheep_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneEnvy, { tag: "forge:wool" }, { tag: "forge:wool" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:squid_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAutumn, RuneGreed, { item: "minecraft:ink_sac" }, { item: "minecraft:ink_sac" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fish_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSummer, RuneLust, { tag: "forge:fishes" }, { tag: "forge:fishes" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:slime_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAutumn, RuneGluttony, { tag: "forge:slimeballs" }, { tag: "forge:slimeballs" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:turtle_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneSloth, { item: "minecraft:turtle_egg" }, { item: "minecraft:turtle_egg" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sulfur_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAutumn, RuneEarth, { tag: "forge:dusts/sulfur" }, { tag: "forge:dusts/sulfur" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:aluminum_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSummer, RuneWater, { tag: "forge:ingots/aluminum" }, { tag: "forge:ingots/aluminum" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:saltpeter_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneWinter, RuneWater, { tag: "forge:dusts/saltpeter" }, { tag: "forge:dusts/saltpeter" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:apatite_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneWater, { tag: "forge:gems/apatite" }, { tag: "forge:gems/apatite" }, essenceT2, essenceT2],
            magic: ManaEssenceT2,
        },

        //T3
        {
            get: { count: 1, item: "mysticalagriculture:iron_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { tag: "forge:ingots/iron" }, { tag: "forge:ingots/iron" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:copper_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneWater, { tag: "forge:ingots/copper" }, { tag: "forge:ingots/copper" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_quartz_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneAir, { tag: "forge:gems/quartz" }, { tag: "forge:gems/quartz" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:glowstone_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSpring, RuneAir, { tag: "forge:dusts/glowstone" }, { tag: "forge:dusts/glowstone" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:redstone_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAutumn, RuneEarth, { tag: "forge:dusts/redstone" }, { tag: "forge:dusts/redstone" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:obsidian_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneWinter, RuneEarth, { tag: "forge:ingots/obsidian" }, { tag: "forge:ingots/obsidian" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:prismarine_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAutumn, RuneGreed, { tag: "forge:dusts/prismarine" }, { tag: "forge:gems/prismarine" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zombie_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneSloth, { item: "minecraft:rotten_flesh" }, { item: "minecraft:rotten_flesh" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:skeleton_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RunePride, { item: "minecraft:bone" }, { item: "minecraft:bone" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:creeper_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneWrath, { item: "minecraft:gunpowder" }, { item: "minecraft:gunpowder" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:spider_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneAutumn, RuneLust, { item: "minecraft:spider_eye" }, { item: "minecraft:spider_eye" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:rabbit_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneLust, { item: "minecraft:rabbit_hide" }, { item: "minecraft:rabbit_hide" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:tin_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAutumn, RuneEarth, { tag: "forge:ingots/tin" }, { tag: "forge:ingots/tin" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zinc_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneEarth, { tag: "forge:ingots/zinc" }, { tag: "forge:ingots/zinc" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:silver_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneAir, { tag: "forge:ingots/silver" }, { tag: "forge:ingots/silver" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lead_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneWater, { tag: "forge:ingots/lead" }, { tag: "forge:ingots/lead" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blizz_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneWrath, { item: "thermal:blizz_rod" }, { item: "thermal:blizz_rod" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blitz_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RunePride, { item: "thermal:blitz_rod" }, { item: "thermal:blitz_rod" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:basalz_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneWrath, { item: "thermal:basalz_rod" }, { item: "thermal:basalz_rod" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:steeleaf_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneAir, { item: "twilightforest:steeleaf_ingot" }, { item: "twilightforest:steeleaf_ingot" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sky_stone_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWinter, RuneEarth, { item: "ae2:sky_stone_block" }, { item: "ae2:sky_stone_block" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:certus_quartz_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSummer, RuneWater, { tag: "ae2:all_certus_quartz" }, { tag: "ae2:all_certus_quartz" }, essenceT3, essenceT3],
            magic: ManaEssenceT3,
        },

        //T4
        {
            get: { count: 1, item: "mysticalagriculture:gold_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEarth, { tag: "forge:ingots/gold" }, { tag: "forge:ingots/gold" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lapis_lazuli_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSpring, RuneAir, { tag: "forge:gems/lapis" }, { tag: "forge:gems/lapis" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:end_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneAir, { tag: "forge:end_stones" }, { tag: "forge:end_stones" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blaze_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneWrath, { tag: "forge:rods/blaze" }, { tag: "forge:rods/blaze" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ghast_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWinter, RunePride, { item: "minecraft:ghast_tear" }, { item: "minecraft:ghast_tear" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:enderman_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneEnvy, { tag: "forge:ender_pearls" }, { tag: "forge:ender_pearls" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nickel_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { tag: "forge:ingots/nickel" }, { tag: "forge:ingots/nickel" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:uranium_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneFire, { tag: "forge:ingots/uranium" }, { tag: "forge:ingots/uranium" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ruby_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEarth, { tag: "forge:gems/ruby" }, { tag: "forge:gems/ruby" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sapphire_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneAir, { tag: "forge:gems/sapphire" }, { tag: "forge:gems/sapphire" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:peridot_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneWater, { tag: "forge:gems/peridot" }, { tag: "forge:gems/peridot" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:soulium_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { item: "mysticalagriculture:soulium_dust" }, { item: "mysticalagriculture:soulium_dust" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:osmium_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneWater, { tag: "forge:ingots/osmium" }, { tag: "forge:ingots/osmium" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fluorite_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSpring, RuneAir, { tag: "forge:dusts/fluorite" }, { tag: "forge:dusts/fluorite" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:knightmetal_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneFire, { tag: "forge:ingots/knightmetal" }, { tag: "forge:ingots/knightmetal" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fiery_ingot_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEarth, { tag: "forge:ingots/fiery" }, { tag: "forge:ingots/fiery" }, essenceT4, essenceT4],
            magic: ManaEssenceT4,
        },

        //T5
        {
            get: { count: 1, item: "mysticalagriculture:diamond_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RuneWater, { tag: "forge:gems/diamond" }, { tag: "forge:gems/diamond" }, essenceT5, essenceT5],
            magic: ManaEssenceT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:emerald_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSpring, RuneAir, { tag: "forge:gems/emerald" }, { tag: "forge:gems/emerald" }, essenceT5, essenceT5],
            magic: ManaEssenceT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:netherite_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEarth, { tag: "forge:ingots/netherite" }, { tag: "forge:ingots/netherite" }, essenceT5, essenceT5],
            magic: ManaEssenceT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wither_skeleton_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAutumn, RuneWrath, { tag: "forge:wither_bones" }, { tag: "forge:wither_bones" }, essenceT5, essenceT5],
            magic: ManaEssenceT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:platinum_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneAutumn, RuneWater, { tag: "forge:ingots/platinum" }, { tag: "forge:ingots/platinum" }, essenceT5, essenceT5],
            magic: ManaEssenceT5,
        },

        //T6
        {
            get: { count: 1, item: "mysticalagriculture:nether_star_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneWinter, RunePride, { item: "minecraft:nether_star" }, { item: "minecraft:nether_star" }, essenceT6, essenceT6],
            magic: ManaEssenceT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dragon_egg_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneEnvy, { item: "minecraft:dragon_egg" }, { item: "minecraft:dragon_egg" }, essenceT6, essenceT6],
            magic: ManaEssenceT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:gaia_spirit_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneWrath, { item: "botania:life_essence" }, { item: "botania:life_essence" }, essenceT6, essenceT6],
            magic: ManaEssenceT6,
        },
        //#endregion

        //// # =================================================================================================== #

        //#region Seed
        //T0
        {
            get: { count: 1, item: "mysticalagriculture:air_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:air_essence" }, { item: "mysticalagriculture:air_essence" }, { item: "mysticalagriculture:air_essence" }, { item: "mysticalagriculture:air_essence" }, essenceT0, essenceT0, essenceT0, essenceT0],
            magic: ManaSeedT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:earth_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:earth_essence" }, { item: "mysticalagriculture:earth_essence" }, { item: "mysticalagriculture:earth_essence" }, { item: "mysticalagriculture:earth_essence" }, essenceT0, essenceT0, essenceT0, essenceT0],
            magic: ManaSeedT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:water_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:water_essence" }, { item: "mysticalagriculture:water_essence" }, { item: "mysticalagriculture:water_essence" }, { item: "mysticalagriculture:water_essence" }, essenceT0, essenceT0, essenceT0, essenceT0],
            magic: ManaSeedT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fire_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:fire_essence" }, { item: "mysticalagriculture:fire_essence" }, { item: "mysticalagriculture:fire_essence" }, { item: "mysticalagriculture:fire_essence" }, essenceT0, essenceT0, essenceT0, essenceT0],
            magic: ManaSeedT0,
        },

        //T1
        {
            get: { count: 1, item: "mysticalagriculture:stone_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:stone_essence" }, { item: "mysticalagriculture:stone_essence" }, { item: "mysticalagriculture:stone_essence" }, { item: "mysticalagriculture:stone_essence" }, essenceT1, essenceT1, essenceT1, essenceT1],
            magic: ManaSeedT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dirt_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:dirt_essence" }, { item: "mysticalagriculture:dirt_essence" }, { item: "mysticalagriculture:dirt_essence" }, { item: "mysticalagriculture:dirt_essence" }, essenceT1, essenceT1, essenceT1, essenceT1],
            magic: ManaSeedT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wood_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:wood_essence" }, { item: "mysticalagriculture:wood_essence" }, { item: "mysticalagriculture:wood_essence" }, { item: "mysticalagriculture:wood_essence" }, essenceT1, essenceT1, essenceT1, essenceT1],
            magic: ManaSeedT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ice_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:ice_essence" }, { item: "mysticalagriculture:ice_essence" }, { item: "mysticalagriculture:ice_essence" }, { item: "mysticalagriculture:ice_essence" }, essenceT1, essenceT1, essenceT1, essenceT1],
            magic: ManaSeedT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:deepslate_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:deepslate_essence" }, { item: "mysticalagriculture:deepslate_essence" }, { item: "mysticalagriculture:deepslate_essence" }, { item: "mysticalagriculture:deepslate_essence" }, essenceT1, essenceT1, essenceT1, essenceT1],
            magic: ManaSeedT1,
        },

        //T2
        {
            get: { count: 1, item: "mysticalagriculture:nature_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:nature_essence" }, { item: "mysticalagriculture:nature_essence" }, { item: "mysticalagriculture:nature_essence" }, { item: "mysticalagriculture:nature_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:nether_essence" }, { item: "mysticalagriculture:nether_essence" }, { item: "mysticalagriculture:nether_essence" }, { item: "mysticalagriculture:nether_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coal_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:coal_essence" }, { item: "mysticalagriculture:coal_essence" }, { item: "mysticalagriculture:coal_essence" }, { item: "mysticalagriculture:coal_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coral_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:coral_essence" }, { item: "mysticalagriculture:coral_essence" }, { item: "mysticalagriculture:coral_essence" }, { item: "mysticalagriculture:coral_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:honey_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:honey_essence" }, { item: "mysticalagriculture:honey_essence" }, { item: "mysticalagriculture:honey_essence" }, { item: "mysticalagriculture:honey_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:amethyst_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:amethyst_essence" }, { item: "mysticalagriculture:amethyst_essence" }, { item: "mysticalagriculture:amethyst_essence" }, { item: "mysticalagriculture:amethyst_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:pig_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:pig_essence" }, { item: "mysticalagriculture:pig_essence" }, { item: "mysticalagriculture:pig_essence" }, { item: "mysticalagriculture:pig_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:chicken_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:chicken_essence" }, { item: "mysticalagriculture:chicken_essence" }, { item: "mysticalagriculture:chicken_essence" }, { item: "mysticalagriculture:chicken_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:cow_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:cow_essence" }, { item: "mysticalagriculture:cow_essence" }, { item: "mysticalagriculture:cow_essence" }, { item: "mysticalagriculture:cow_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sheep_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:sheep_essence" }, { item: "mysticalagriculture:sheep_essence" }, { item: "mysticalagriculture:sheep_essence" }, { item: "mysticalagriculture:sheep_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:squid_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:squid_essence" }, { item: "mysticalagriculture:squid_essence" }, { item: "mysticalagriculture:squid_essence" }, { item: "mysticalagriculture:squid_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fish_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:fish_essence" }, { item: "mysticalagriculture:fish_essence" }, { item: "mysticalagriculture:fish_essence" }, { item: "mysticalagriculture:fish_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:slime_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:slime_essence" }, { item: "mysticalagriculture:slime_essence" }, { item: "mysticalagriculture:slime_essence" }, { item: "mysticalagriculture:slime_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:turtle_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:turtle_essence" }, { item: "mysticalagriculture:turtle_essence" }, { item: "mysticalagriculture:turtle_essence" }, { item: "mysticalagriculture:turtle_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sulfur_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:sulfur_essence" }, { item: "mysticalagriculture:sulfur_essence" }, { item: "mysticalagriculture:sulfur_essence" }, { item: "mysticalagriculture:sulfur_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:aluminum_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:aluminum_essence" }, { item: "mysticalagriculture:aluminum_essence" }, { item: "mysticalagriculture:aluminum_essence" }, { item: "mysticalagriculture:aluminum_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:saltpeter_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:saltpeter_essence" }, { item: "mysticalagriculture:saltpeter_essence" }, { item: "mysticalagriculture:saltpeter_essence" }, { item: "mysticalagriculture:saltpeter_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:apatite_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:apatite_essence" }, { item: "mysticalagriculture:apatite_essence" }, { item: "mysticalagriculture:apatite_essence" }, { item: "mysticalagriculture:apatite_essence" }, essenceT2, essenceT2, essenceT2, essenceT2],
            magic: ManaSeedT2,
        },

        //T3
        {
            get: { count: 1, item: "mysticalagriculture:iron_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:iron_essence" }, { item: "mysticalagriculture:iron_essence" }, { item: "mysticalagriculture:iron_essence" }, { item: "mysticalagriculture:iron_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:copper_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:copper_essence" }, { item: "mysticalagriculture:copper_essence" }, { item: "mysticalagriculture:copper_essence" }, { item: "mysticalagriculture:copper_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_quartz_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:nether_quartz_essence" }, { item: "mysticalagriculture:nether_quartz_essence" }, { item: "mysticalagriculture:nether_quartz_essence" }, { item: "mysticalagriculture:nether_quartz_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:glowstone_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:glowstone_essence" }, { item: "mysticalagriculture:glowstone_essence" }, { item: "mysticalagriculture:glowstone_essence" }, { item: "mysticalagriculture:glowstone_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:redstone_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:redstone_essence" }, { item: "mysticalagriculture:redstone_essence" }, { item: "mysticalagriculture:redstone_essence" }, { item: "mysticalagriculture:redstone_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:obsidian_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:obsidian_essence" }, { item: "mysticalagriculture:obsidian_essence" }, { item: "mysticalagriculture:obsidian_essence" }, { item: "mysticalagriculture:obsidian_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:prismarine_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:prismarine_essence" }, { item: "mysticalagriculture:prismarine_essence" }, { item: "mysticalagriculture:prismarine_essence" }, { item: "mysticalagriculture:prismarine_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zombie_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:zombie_essence" }, { item: "mysticalagriculture:zombie_essence" }, { item: "mysticalagriculture:zombie_essence" }, { item: "mysticalagriculture:zombie_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:skeleton_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:skeleton_essence" }, { item: "mysticalagriculture:skeleton_essence" }, { item: "mysticalagriculture:skeleton_essence" }, { item: "mysticalagriculture:skeleton_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:creeper_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:creeper_essence" }, { item: "mysticalagriculture:creeper_essence" }, { item: "mysticalagriculture:creeper_essence" }, { item: "mysticalagriculture:creeper_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:spider_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:spider_essence" }, { item: "mysticalagriculture:spider_essence" }, { item: "mysticalagriculture:spider_essence" }, { item: "mysticalagriculture:spider_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:rabbit_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:rabbit_essence" }, { item: "mysticalagriculture:rabbit_essence" }, { item: "mysticalagriculture:rabbit_essence" }, { item: "mysticalagriculture:rabbit_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:tin_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:tin_essence" }, { item: "mysticalagriculture:tin_essence" }, { item: "mysticalagriculture:tin_essence" }, { item: "mysticalagriculture:tin_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zinc_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:zinc_essence" }, { item: "mysticalagriculture:zinc_essence" }, { item: "mysticalagriculture:zinc_essence" }, { item: "mysticalagriculture:zinc_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:silver_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:silver_essence" }, { item: "mysticalagriculture:silver_essence" }, { item: "mysticalagriculture:silver_essence" }, { item: "mysticalagriculture:silver_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lead_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:lead_essence" }, { item: "mysticalagriculture:lead_essence" }, { item: "mysticalagriculture:lead_essence" }, { item: "mysticalagriculture:lead_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blizz_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:blizz_essence" }, { item: "mysticalagriculture:blizz_essence" }, { item: "mysticalagriculture:blizz_essence" }, { item: "mysticalagriculture:blizz_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blitz_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:blitz_essence" }, { item: "mysticalagriculture:blitz_essence" }, { item: "mysticalagriculture:blitz_essence" }, { item: "mysticalagriculture:blitz_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:basalz_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:basalz_essence" }, { item: "mysticalagriculture:basalz_essence" }, { item: "mysticalagriculture:basalz_essence" }, { item: "mysticalagriculture:basalz_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:steeleaf_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:steeleaf_essence" }, { item: "mysticalagriculture:steeleaf_essence" }, { item: "mysticalagriculture:steeleaf_essence" }, { item: "mysticalagriculture:steeleaf_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sky_stone_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:sky_stone_essence" }, { item: "mysticalagriculture:sky_stone_essence" }, { item: "mysticalagriculture:sky_stone_essence" }, { item: "mysticalagriculture:sky_stone_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:certus_quartz_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:certus_quartz_essence" }, { item: "mysticalagriculture:certus_quartz_essence" }, { item: "mysticalagriculture:certus_quartz_essence" }, { item: "mysticalagriculture:certus_quartz_essence" }, essenceT3, essenceT3, essenceT3, essenceT3],
            magic: ManaSeedT3,
        },

        //T4
        {
            get: { count: 1, item: "mysticalagriculture:gold_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:gold_essence" }, { item: "mysticalagriculture:gold_essence" }, { item: "mysticalagriculture:gold_essence" }, { item: "mysticalagriculture:gold_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lapis_lazuli_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:lapis_lazuli_essence" }, { item: "mysticalagriculture:lapis_lazuli_essence" }, { item: "mysticalagriculture:lapis_lazuli_essence" }, { item: "mysticalagriculture:lapis_lazuli_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:end_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:end_essence" }, { item: "mysticalagriculture:end_essence" }, { item: "mysticalagriculture:end_essence" }, { item: "mysticalagriculture:end_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blaze_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:blaze_essence" }, { item: "mysticalagriculture:blaze_essence" }, { item: "mysticalagriculture:blaze_essence" }, { item: "mysticalagriculture:blaze_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ghast_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:ghast_essence" }, { item: "mysticalagriculture:ghast_essence" }, { item: "mysticalagriculture:ghast_essence" }, { item: "mysticalagriculture:ghast_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:enderman_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:enderman_essence" }, { item: "mysticalagriculture:enderman_essence" }, { item: "mysticalagriculture:enderman_essence" }, { item: "mysticalagriculture:enderman_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nickel_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:nickel_essence" }, { item: "mysticalagriculture:nickel_essence" }, { item: "mysticalagriculture:nickel_essence" }, { item: "mysticalagriculture:nickel_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:uranium_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:uranium_essence" }, { item: "mysticalagriculture:uranium_essence" }, { item: "mysticalagriculture:uranium_essence" }, { item: "mysticalagriculture:uranium_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ruby_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:ruby_essence" }, { item: "mysticalagriculture:ruby_essence" }, { item: "mysticalagriculture:ruby_essence" }, { item: "mysticalagriculture:ruby_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sapphire_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:sapphire_essence" }, { item: "mysticalagriculture:sapphire_essence" }, { item: "mysticalagriculture:sapphire_essence" }, { item: "mysticalagriculture:sapphire_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:peridot_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:peridot_essence" }, { item: "mysticalagriculture:peridot_essence" }, { item: "mysticalagriculture:peridot_essence" }, { item: "mysticalagriculture:peridot_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:soulium_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:soulium_essence" }, { item: "mysticalagriculture:soulium_essence" }, { item: "mysticalagriculture:soulium_essence" }, { item: "mysticalagriculture:soulium_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:osmium_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:osmium_essence" }, { item: "mysticalagriculture:osmium_essence" }, { item: "mysticalagriculture:osmium_essence" }, { item: "mysticalagriculture:osmium_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fluorite_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:fluorite_essence" }, { item: "mysticalagriculture:fluorite_essence" }, { item: "mysticalagriculture:fluorite_essence" }, { item: "mysticalagriculture:fluorite_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:knightmetal_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:knightmetal_essence" }, { item: "mysticalagriculture:knightmetal_essence" }, { item: "mysticalagriculture:knightmetal_essence" }, { item: "mysticalagriculture:knightmetal_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fiery_ingot_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:fiery_ingot_essence" }, { item: "mysticalagriculture:fiery_ingot_essence" }, { item: "mysticalagriculture:fiery_ingot_essence" }, { item: "mysticalagriculture:fiery_ingot_essence" }, essenceT4, essenceT4, essenceT4, essenceT4],
            magic: ManaSeedT4,
        },

        //T5
        {
            get: { count: 1, item: "mysticalagriculture:diamond_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:diamond_essence" }, { item: "mysticalagriculture:diamond_essence" }, { item: "mysticalagriculture:diamond_essence" }, { item: "mysticalagriculture:diamond_essence" }, essenceT5, essenceT5, essenceT5, essenceT5],
            magic: ManaSeedT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:emerald_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:emerald_essence" }, { item: "mysticalagriculture:emerald_essence" }, { item: "mysticalagriculture:emerald_essence" }, { item: "mysticalagriculture:emerald_essence" }, essenceT5, essenceT5, essenceT5, essenceT5],
            magic: ManaSeedT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:netherite_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:netherite_essence" }, { item: "mysticalagriculture:netherite_essence" }, { item: "mysticalagriculture:netherite_essence" }, { item: "mysticalagriculture:netherite_essence" }, essenceT5, essenceT5, essenceT5, essenceT5],
            magic: ManaSeedT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wither_skeleton_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:wither_skeleton_essence" }, { item: "mysticalagriculture:wither_skeleton_essence" }, { item: "mysticalagriculture:wither_skeleton_essence" }, { item: "mysticalagriculture:wither_skeleton_essence" }, essenceT5, essenceT5, essenceT5, essenceT5],
            magic: ManaSeedT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:platinum_seeds" },
            put: [BaseSeed, RuneEnergy, { item: "mysticalagriculture:platinum_essence" }, { item: "mysticalagriculture:platinum_essence" }, { item: "mysticalagriculture:platinum_essence" }, { item: "mysticalagriculture:platinum_essence" }, essenceT5, essenceT5, essenceT5, essenceT5],
            magic: ManaSeedT5,
        },

        //T6
        {
            get: { count: 1, item: "mysticalagriculture:nether_star_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:nether_star_essence" }, { item: "mysticalagriculture:nether_star_essence" }, { item: "mysticalagriculture:nether_star_essence" }, { item: "mysticalagriculture:nether_star_essence" }, essenceT6, essenceT6, essenceT6, essenceT6],
            magic: ManaSeedT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dragon_egg_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:dragon_egg_essence" }, { item: "mysticalagriculture:dragon_egg_essence" }, { item: "mysticalagriculture:dragon_egg_essence" }, { item: "mysticalagriculture:dragon_egg_essence" }, essenceT6, essenceT6, essenceT6, essenceT6],
            magic: ManaSeedT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:gaia_spirit_seeds" },
            put: [SoulBaseSeed, RuneEnergy, { item: "mysticalagriculture:gaia_spirit_essence" }, { item: "mysticalagriculture:gaia_spirit_essence" }, { item: "mysticalagriculture:gaia_spirit_essence" }, { item: "mysticalagriculture:gaia_spirit_essence" }, essenceT6, essenceT6, essenceT6, essenceT6],
            magic: ManaSeedT6,
        },
        //#endregion
    ];
    RunicAltarPattern.forEach((recipe) => {
        if (recipe.put[0].item === "mysticalagriculture:prosperity_seed_base" && recipe.put[0].item === "mysticalagriculture:soulium_seed_base") {
            event.remove({ output: recipe.get });
            event.custom({
                type: "botania:runic_altar",
                ingredients: recipe.put,
                output: recipe.get,
                mana: recipe.magic,
            });
        } else {
            event.custom({
                type: "botania:runic_altar",
                ingredients: recipe.put,
                output: recipe.get,
                mana: recipe.magic,
            });
        }
    });
    //#endregion
});
