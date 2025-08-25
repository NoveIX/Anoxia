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

    //#region ManaInfusion
    event.remove({ output: "mysticalagriculture:prosperity_seed_base" });
    const ManaInfusionPattern = [{ get: { item: "mysticalagriculture:prosperity_seed_base" }, put: { tag: "forge:seeds" }, magic: 5000 }];
    ManaInfusionPattern.forEach((recipe) => {
        event.custom({
            type: "botania:mana_infusion",
            input: recipe.put,
            output: recipe.get,
            mana: recipe.magic,
        });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region RunicAltar
    //Magic
    const ManaT0 = 10000;
    const ManaT1 = 20000;
    const ManaT2 = 30000;
    const ManaT3 = 40000;
    const ManaT4 = 50000;
    const ManaT5 = 60000;
    const ManaT6 = 70000;

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
        //T0
        {
            get: { count: 1, item: "mysticalagriculture:air_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneSpring, { item: "minecraft:glass_bottle" }, { item: "minecraft:glass_bottle" }, essenceT0, essenceT0],
            magic: ManaT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:earth_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneSummer, { tag: "minecraft:flowers" }, { tag: "minecraft:flowers" }, essenceT0, essenceT0],
            magic: ManaT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:water_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneAutumn, { item: "minecraft:lava_bucket" }, { item: "minecraft:lava_bucket" }, essenceT0, essenceT0],
            magic: ManaT0,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fire_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneWinter, { item: "minecraft:water_bucket" }, { item: "minecraft:water_bucket" }, essenceT0, essenceT0],
            magic: ManaT0,
        },

        //T1
        {
            get: { count: 1, item: "mysticalagriculture:stone_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneAutumn, { item: "minecraft:stone" }, { item: "minecraft:stone" }, essenceT1, essenceT1],
            magic: ManaT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dirt_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneSpring, { tag: "minecraft:dirt" }, { tag: "minecraft:dirt" }, essenceT1, essenceT1],
            magic: ManaT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wood_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneEarth, RuneSummer, { tag: "minecraft:logs" }, { tag: "minecraft:logs" }, essenceT1, essenceT1],
            magic: ManaT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ice_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneWinter, { item: "minecraft:ice" }, { item: "minecraft:ice" }, essenceT1, essenceT1],
            magic: ManaT1,
        },
        {
            get: { count: 1, item: "mysticalagriculture:deepslate_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneAutumn, { item: "minecraft:deepslate" }, { item: "minecraft:deepslate" }, essenceT1, essenceT1],
            magic: ManaT1,
        },

        //T2
        {
            get: { count: 1, item: "mysticalagriculture:nature_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneSpring, { tag: "minecraft:saplings" }, { tag: "minecraft:saplings" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAir, RuneSummer, { tag: "forge:netherrack" }, { tag: "forge:netherrack" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coal_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneAutumn, { item: "minecraft:coal" }, { item: "minecraft:coal" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:coral_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneSummer, { tag: "minecraft:corals" }, { tag: "minecraft:corals" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:honey_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneSpring, { tag: "forge:honeycombs" }, { tag: "forge:honeycombs" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:amethyst_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneWinter, { item: "minecraft:amethyst_shard" }, { item: "minecraft:amethyst_shard" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:pig_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneGluttony, { item: "minecraft:porkchop" }, { item: "minecraft:porkchop" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:chicken_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RunePride, { tag: "forge:feathers" }, { tag: "forge:feathers" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:cow_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneSloth, { tag: "forge:leather" }, { tag: "forge:leather" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sheep_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneEnvy, { tag: "forge:wool" }, { tag: "forge:wool" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:squid_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAutumn, RuneGreed, { item: "minecraft:ink_sac" }, { item: "minecraft:ink_sac" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fish_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSpring, RuneLust, { tag: "forge:fishes" }, { tag: "forge:fishes" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:slime_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneGluttony, { tag: "forge:slimeballs" }, { tag: "forge:slimeballs" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:turtle_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RunePride, { item: "minecraft:turtle_egg" }, { item: "minecraft:turtle_egg" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sulfur_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneSummer, { tag: "forge:dusts/sulfur" }, { tag: "forge:dusts/sulfur" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:aluminum_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneAutumn, { tag: "forge:ingots/aluminum" }, { tag: "forge:ingots/aluminum" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:saltpeter_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneWinter, { tag: "forge:dusts/saltpeter" }, { tag: "forge:dusts/saltpeter" }, essenceT2, essenceT2],
            magic: ManaT2,
        },
        {
            get: { count: 1, item: "mysticalagriculture:apatite_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneSpring, { tag: "forge:gems/apatite" }, { tag: "forge:gems/apatite" }, essenceT2, essenceT2],
            magic: ManaT2,
        },

        //T3
        {
            get: { count: 1, item: "mysticalagriculture:iron_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneAutumn, { tag: "forge:ingots/iron" }, { tag: "forge:ingots/iron" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:copper_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneWater, RuneSummer, { tag: "forge:ingots/copper" }, { tag: "forge:ingots/copper" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nether_quartz_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAir, RuneSpring, { tag: "forge:gems/quartz" }, { tag: "forge:gems/quartz" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:glowstone_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAir, RuneWinter, { tag: "forge:dusts/glowstone" }, { tag: "forge:dusts/glowstone" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:redstone_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneAutumn, { tag: "forge:dusts/redstone" }, { tag: "forge:dusts/redstone" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:obsidian_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneWinter, { tag: "forge:ingots/obsidian" }, { tag: "forge:ingots/obsidian" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:prismarine_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneSpring, RuneGreed, { tag: "forge:dusts/prismarine" }, { tag: "forge:gems/prismarine" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zombie_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneSloth, { item: "minecraft:rotten_flesh" }, { item: "minecraft:rotten_flesh" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:skeleton_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWinter, RunePride, { item: "minecraft:bone" }, { item: "minecraft:bone" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:creeper_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneEnvy, { item: "minecraft:gunpowder" }, { item: "minecraft:gunpowder" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:spider_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneAutumn, RuneLust, { item: "minecraft:spider_eye" }, { item: "minecraft:spider_eye" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:rabbit_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneGluttony, { item: "minecraft:rabbit_hide" }, { item: "minecraft:rabbit_hide" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:tin_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneSummer, { tag: "forge:ingots/tin" }, { tag: "forge:ingots/tin" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:zinc_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneSpring, { tag: "forge:ingots/zinc" }, { tag: "forge:ingots/zinc" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:silver_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneEarth, RuneAutumn, { tag: "forge:ingots/silver" }, { tag: "forge:ingots/silver" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lead_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneWinter, { tag: "forge:ingots/lead" }, { tag: "forge:ingots/lead" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blizz_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneWinter, RuneWrath, { item: "thermal:blizz_rod" }, { item: "thermal:blizz_rod" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blitz_essence" },
            put: [
                BotaniaSeed,
                RuneMana,
                RuneAir,
                RuneSpring,
                RunePride,
                { item: Item.of("mysticalagriculture:soul_jar", '{Souls:6.0d,Type:"mysticalagriculture:blitz"}') },
                { item: Item.of("mysticalagriculture:soul_jar", '{Souls:6.0d,Type:"mysticalagriculture:blitz"}') },
                essenceT3,
                essenceT3,
            ],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:basalz_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneGluttony, { item: "thermal:basalz_rod" }, { item: "thermal:basalz_rod" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:steeleaf_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneSpring, { item: "twilightforest:steeleaf_ingot" }, { item: "twilightforest:steeleaf_ingot" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sky_stone_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneSummer, { item: "ae2:sky_stone_block" }, { item: "ae2:sky_stone_block" }, essenceT3, essenceT3],
            magic: ManaT3,
        },
        {
            get: { count: 1, item: "mysticalagriculture:certus_quartz_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneWinter, { tag: "ae2:all_certus_quartz" }, { tag: "ae2:all_certus_quartz" }, essenceT3, essenceT3],
            magic: ManaT3,
        },

        //T4
        {
            get: { count: 1, item: "mysticalagriculture:gold_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneSummer, { tag: "forge:ingots/gold" }, { tag: "forge:ingots/gold" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lapis_lazuli_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneSpring, { tag: "forge:gems/lapis" }, { tag: "forge:gems/lapis" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:lapis_lazuli_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneSpring, { tag: "forge:gems/lapis" }, { tag: "forge:gems/lapis" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:end_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneWinter, { tag: "forge:end_stones" }, { tag: "forge:end_stones" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:blaze_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneSummer, RuneWrath, { tag: "forge:rods/blaze" }, { tag: "forge:rods/blaze" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ghast_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWinter, RunePride, { item: "minecraft:ghast_tear" }, { item: "minecraft:ghast_tear" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:enderman_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAutumn, RuneEnvy, { tag: "forge:ender_pearls" }, { tag: "forge:ender_pearls" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:nickel_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneAutumn, { tag: "forge:ingots/nickel" }, { tag: "forge:ingots/nickel" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:uranium_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneWinter, { tag: "forge:ingots/uranium" }, { tag: "forge:ingots/uranium" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:ruby_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAir, RuneSpring, { tag: "forge:gems/ruby" }, { tag: "forge:gems/ruby" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:sapphire_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneEarth, RuneSummer, { tag: "forge:gems/sapphire" }, { tag: "forge:gems/sapphire" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:peridot_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneSpring, { tag: "forge:gems/peridot" }, { tag: "forge:gems/peridot" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:soulium_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneWinter, { item: "mysticalagriculture:soulium_dust" }, { item: "mysticalagriculture:soulium_dust" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:osmium_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneWater, RuneSummer, { tag: "forge:ingots/osmium" }, { tag: "forge:ingots/osmium" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fluorite_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneAutumn, { tag: "forge:dusts/fluorite" }, { tag: "forge:dusts/fluorite" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:knightmetal_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneFire, RuneSummer, { tag: "forge:ingots/knightmetal" }, { tag: "forge:ingots/knightmetal" }, essenceT4, essenceT4],
            magic: ManaT4,
        },
        {
            get: { count: 1, item: "mysticalagriculture:fiery_ingot_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAir, RuneAutumn, { tag: "forge:ingots/fiery" }, { tag: "forge:ingots/fiery" }, essenceT4, essenceT4],
            magic: ManaT4,
        },

        //T5
        {
            get: { count: 1, item: "mysticalagriculture:diamond_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneWater, RuneSummer, { tag: "forge:gems/diamond" }, { tag: "forge:gems/diamond" }, essenceT5, essenceT5],
            magic: ManaT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:emerald_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneAir, RuneSpring, { tag: "forge:gems/emerald" }, { tag: "forge:gems/emerald" }, essenceT5, essenceT5],
            magic: ManaT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:netherite_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneEarth, RuneWinter, { tag: "forge:ingots/netherite" }, { tag: "forge:ingots/netherite" }, essenceT5, essenceT5],
            magic: ManaT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:wither_skeleton_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneAutumn, RuneWrath, { tag: "forge:wither_bones" }, { tag: "forge:wither_bones" }, essenceT5, essenceT5],
            magic: ManaT5,
        },
        {
            get: { count: 1, item: "mysticalagriculture:platinum_essence" },
            put: [BotaniaSeed, RuneMana, RuneWater, RuneAir, RuneAutumn, { tag: "forge:ingots/platinum" }, { tag: "forge:ingots/platinum" }, essenceT5, essenceT5],
            magic: ManaT5,
        },

        //T6
        {
            get: { count: 1, item: "mysticalagriculture:nether_star_essence" },
            put: [BotaniaSeed, RuneMana, RuneFire, RuneWinter, RunePride, { item: "minecraft:nether_star" }, { item: "minecraft:nether_star" }, essenceT6, essenceT6],
            magic: ManaT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:dragon_egg_essence" },
            put: [BotaniaSeed, RuneMana, RuneAir, RuneSpring, RuneEnvy, { item: "minecraft:dragon_egg" }, { item: "minecraft:dragon_egg" }, essenceT6, essenceT6],
            magic: ManaT6,
        },
        {
            get: { count: 1, item: "mysticalagriculture:gaia_spirit_essence" },
            put: [BotaniaSeed, RuneMana, RuneEarth, RuneSummer, RuneWrath, { item: "botania:life_essence" }, { item: "botania:life_essence" }, essenceT6, essenceT6],
            magic: ManaT6,
        },
    ];
    RunicAltarPattern.forEach((recipe) => {
        event.custom({
            type: "botania:runic_altar",
            ingredients: recipe.put,
            output: recipe.get,
            mana: recipe.magic,
        });
    });
    //#endregion
});
