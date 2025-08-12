ServerEvents.recipes((event) => {
    //Sifter
    event.remove({ output: "createsifter:sifter" });
    event.shaped("createsifter:sifter", ["ABA", "CDC", "EEE"], { A: "#minecraft:planks", B: "#exnihilosequentia:sieves", C: "#forge:rods/wooden", D: "create:large_cogwheel", E: "anoxia:compressed_andesite" });

    ////Sifting
    event.remove({ type: "createsifter:sifting" });
    const SiftingPattern = [
        //#region Gravel drop
        {
            tier: "anoxia:create_string_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.12 },
                { item: "minecraft:coal", chance: 0.08 },
            ],
        },
        {
            tier: "anoxia:create_flint_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.16 },
                { item: "minecraft:coal", chance: 0.12 },
                { item: "minecraft:lapis_lazuli", chance: 0.04 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_iron_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.2 },
                { item: "minecraft:coal", chance: 0.16 },
                { item: "minecraft:lapis_lazuli", chance: 0.08 },
                { item: "minecraft:diamond", chance: 0.008 },
                { item: "minecraft:emerald", chance: 0.008 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.08 },
                { item: "exnihilosequentia:lead_pieces", chance: 0.04 },
                { item: "exnihilosequentia:aluminum_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_diamond_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.24 },
                { item: "minecraft:coal", chance: 0.2 },
                { item: "minecraft:lapis_lazuli", chance: 0.12 },
                { item: "minecraft:diamond", chance: 0.012 },
                { item: "minecraft:emerald", chance: 0.012 },
                { item: "minecraft:amethyst_shard", chance: 0.02 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.12 },
                { item: "exnihilosequentia:lead_pieces", chance: 0.08 },
                { item: "exnihilosequentia:aluminum_pieces", chance: 0.08 },
                { item: "exnihilosequentia:platinum_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_emerald_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.28 },
                { item: "minecraft:coal", chance: 0.24 },
                { item: "minecraft:lapis_lazuli", chance: 0.16 },
                { item: "minecraft:diamond", chance: 0.016 },
                { item: "minecraft:emerald", chance: 0.016 },
                { item: "minecraft:amethyst_shard", chance: 0.04 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.16 },
                { item: "exnihilosequentia:lead_pieces", chance: 0.12 },
                { item: "exnihilosequentia:aluminum_pieces", chance: 0.12 },
                { item: "exnihilosequentia:platinum_pieces", chance: 0.08 },
            ],
        },
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.32 },
                { item: "minecraft:coal", chance: 0.28 },
                { item: "minecraft:lapis_lazuli", chance: 0.2 },
                { item: "minecraft:diamond", chance: 0.02 },
                { item: "minecraft:emerald", chance: 0.02 },
                { item: "minecraft:amethyst_shard", chance: 0.06 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.2 },
                { item: "exnihilosequentia:lead_pieces", chance: 0.16 },
                { item: "exnihilosequentia:aluminum_pieces", chance: 0.16 },
                { item: "exnihilosequentia:platinum_pieces", chance: 0.12 },
            ],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "minecraft:gravel" },
            get: [
                { item: "minecraft:flint", chance: 0.36 },
                { item: "minecraft:coal", chance: 0.32 },
                { item: "minecraft:lapis_lazuli", chance: 0.24 },
                { item: "minecraft:diamond", chance: 0.024 },
                { item: "minecraft:emerald", chance: 0.024 },
                { item: "minecraft:amethyst_shard", chance: 0.08 },
                { item: "exnihilosequentia:iron_pieces", chance: 0.24 },
                { item: "exnihilosequentia:lead_pieces", chance: 0.2 },
                { item: "exnihilosequentia:aluminum_pieces", chance: 0.2 },
                { item: "exnihilosequentia:platinum_pieces", chance: 0.16 },
            ],
        },
        //#endregion

        //#region Sand drop
        {
            tier: "anoxia:create_string_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "minecraft:cocoa_beans", chance: 0.3 },
                { item: "minecraft:sugar_cane", chance: 0.5 },
                { item: "minecraft:cactus", chance: 0.5 },
            ],
        },
        {
            tier: "anoxia:create_flint_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.03 },
                { item: "projectred_core:electrotine_dust", chance: 0.09 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_iron_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.06 },
                { item: "projectred_core:electrotine_dust", chance: 0.12 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.08 },
                { item: "exnihilosequentia:nickel_pieces", chance: 0.04 },
                { item: "exnihilosequentia:tin_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_diamond_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.09 },
                { item: "projectred_core:electrotine_dust", chance: 0.15 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.12 },
                { item: "exnihilosequentia:nickel_pieces", chance: 0.08 },
                { item: "exnihilosequentia:tin_pieces", chance: 0.08 },
                { item: "anoxia:osmium_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_emerald_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.12 },
                { item: "projectred_core:electrotine_dust", chance: 0.18 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.16 },
                { item: "exnihilosequentia:nickel_pieces", chance: 0.12 },
                { item: "exnihilosequentia:tin_pieces", chance: 0.12 },
                { item: "anoxia:osmium_pieces", chance: 0.08 },
            ],
        },
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.15 },
                { item: "projectred_core:electrotine_dust", chance: 0.21 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.2 },
                { item: "exnihilosequentia:nickel_pieces", chance: 0.16 },
                { item: "exnihilosequentia:tin_pieces", chance: 0.16 },
                { item: "anoxia:osmium_pieces", chance: 0.12 },
            ],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "minecraft:sand" },
            get: [
                { item: "ae2:certus_quartz_crystal", chance: 0.18 },
                { item: "projectred_core:electrotine_dust", chance: 0.24 },
                { item: "exnihilosequentia:copper_pieces", chance: 0.24 },
                { item: "exnihilosequentia:nickel_pieces", chance: 0.2 },
                { item: "exnihilosequentia:tin_pieces", chance: 0.2 },
                { item: "anoxia:osmium_pieces", chance: 0.16 },
            ],
        },
        //#endregion

        //#region Dust drop
        {
            tier: "anoxia:create_string_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.2 },
                { item: "minecraft:gunpowder", chance: 0.07 },
                { item: "ae2:sky_dust", chance: 0.02 },
            ],
        },
        {
            tier: "anoxia:create_flint_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.22 },
                { item: "minecraft:gunpowder", chance: 0.09 },
                { item: "ae2:sky_dust", chance: 0.04 },
                { item: "ae2:certus_quartz_dust", chance: 0.08 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_iron_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.24 },
                { item: "minecraft:gunpowder", chance: 0.11 },
                { item: "ae2:sky_dust", chance: 0.06 },
                { item: "ae2:certus_quartz_dust", chance: 0.13 },
                { item: "minecraft:redstone", chance: 0.12 },
                { item: "minecraft:glowstone_dust", chance: 0.06 },
                { item: "minecraft:blaze_powder", chance: 0.05 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.08 },
                { item: "exnihilosequentia:silver_pieces", chance: 0.04 },
                { item: "exnihilosequentia:zinc_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_diamond_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.26 },
                { item: "minecraft:gunpowder", chance: 0.13 },
                { item: "ae2:sky_dust", chance: 0.08 },
                { item: "ae2:certus_quartz_dust", chance: 0.18 },
                { item: "minecraft:redstone", chance: 0.15 },
                { item: "minecraft:glowstone_dust", chance: 0.09 },
                { item: "minecraft:blaze_powder", chance: 0.07 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.12 },
                { item: "exnihilosequentia:silver_pieces", chance: 0.08 },
                { item: "exnihilosequentia:zinc_pieces", chance: 0.08 },
                { item: "exnihilosequentia:uranium_pieces", chance: 0.04 },
            ],
        },
        {
            tier: "anoxia:create_emerald_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.28 },
                { item: "minecraft:gunpowder", chance: 0.15 },
                { item: "ae2:sky_dust", chance: 0.1 },
                { item: "ae2:certus_quartz_dust", chance: 0.23 },
                { item: "minecraft:redstone", chance: 0.18 },
                { item: "minecraft:glowstone_dust", chance: 0.12 },
                { item: "minecraft:blaze_powder", chance: 0.09 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.16 },
                { item: "exnihilosequentia:silver_pieces", chance: 0.12 },
                { item: "exnihilosequentia:zinc_pieces", chance: 0.12 },
                { item: "exnihilosequentia:uranium_pieces", chance: 0.08 },
            ],
        },
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.3 },
                { item: "minecraft:gunpowder", chance: 0.17 },
                { item: "ae2:sky_dust", chance: 0.12 },
                { item: "ae2:certus_quartz_dust", chance: 0.28 },
                { item: "minecraft:redstone", chance: 0.21 },
                { item: "minecraft:glowstone_dust", chance: 0.15 },
                { item: "minecraft:blaze_powder", chance: 0.11 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.2 },
                { item: "exnihilosequentia:silver_pieces", chance: 0.16 },
                { item: "exnihilosequentia:zinc_pieces", chance: 0.16 },
                { item: "exnihilosequentia:uranium_pieces", chance: 0.12 },
            ],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "exnihilosequentia:dust" },
            get: [
                { item: "minecraft:bone_meal", chance: 0.32 },
                { item: "minecraft:gunpowder", chance: 0.19 },
                { item: "ae2:sky_dust", chance: 0.14 },
                { item: "ae2:certus_quartz_dust", chance: 0.33 },
                { item: "minecraft:redstone", chance: 0.24 },
                { item: "minecraft:glowstone_dust", chance: 0.18 },
                { item: "minecraft:blaze_powder", chance: 0.13 },
                { item: "exnihilosequentia:gold_pieces", chance: 0.24 },
                { item: "exnihilosequentia:silver_pieces", chance: 0.2 },
                { item: "exnihilosequentia:zinc_pieces", chance: 0.2 },
                { item: "exnihilosequentia:uranium_pieces", chance: 0.16 },
            ],
        },
        //#endregion

        //#region Netherrack drop
        {
            tier: "anoxia:create_emerald_mesh",
            put: { item: "exnihilosequentia:crushed_netherrack" },
            get: [{ item: "minecraft:ancient_debris", chance: 0.008 }],
        },
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "exnihilosequentia:crushed_netherrack" },
            get: [{ item: "minecraft:ancient_debris", chance: 0.012 }],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "exnihilosequentia:crushed_netherrack" },
            get: [{ item: "minecraft:ancient_debris", chance: 0.016 }],
        },
        //#endregion

        //#region Endstone drop
        {
            tier: "anoxia:create_emerald_mesh",
            put: { item: "exnihilosequentia:crushed_end_stone" },
            get: [
                { item: "minecraft:ender_pearl", chance: 0.01 },
                { item: "minecraft:ender_eye", chance: 0.001 },
                { item: "minecraft:chorus_fruit", chance: 0.01 },
            ],
        },
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "exnihilosequentia:crushed_end_stone" },
            get: [
                { item: "minecraft:ender_pearl", chance: 0.02 },
                { item: "minecraft:ender_eye", chance: 0.002 },
                { item: "minecraft:chorus_fruit", chance: 0.02 },
            ],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "exnihilosequentia:crushed_end_stone" },
            get: [
                { item: "minecraft:ender_pearl", chance: 0.03 },
                { item: "minecraft:ender_eye", chance: 0.003 },
                { item: "minecraft:chorus_fruit", chance: 0.03 },
            ],
        },
        //#endregion

        //#region Aetherslate drop
        {
            tier: "anoxia:create_netherite_mesh",
            put: { item: "aethersteel:cobbled_aetherslate" },
            get: [{ item: "aethersteel:aether_debris", chance: 0.008 }],
        },
        {
            tier: "anoxia:create_aethersteel_mesh",
            put: { item: "aethersteel:cobbled_aetherslate" },
            get: [{ item: "aethersteel:aether_debris", chance: 0.012 }],
        },
        //#endregion

        //#region Stone drop
        {
            tier: "anoxia:create_flint_mesh",
            put: { item: "minecraft:stone" },
            get: [
                { item: "exnihilosequentia:basalt_pebble", chance: 0.2 },
                { item: "exnihilosequentia:andesite_pebble", chance: 0.2 },
                { item: "exnihilosequentia:blackstone_pebble", chance: 0.2 },
                { item: "exnihilosequentia:calcite_pebble", chance: 0.2 },
                { item: "exnihilosequentia:deepslate_pebble", chance: 0.2 },
                { item: "exnihilosequentia:diorite_pebble", chance: 0.2 },
                { item: "exnihilosequentia:dripstone_pebble", chance: 0.2 },
                { item: "exnihilosequentia:granite_pebble", chance: 0.2 },
                { item: "exnihilosequentia:granite_pebble", chance: 0.2 },
                { item: "exnihilosequentia:tuff_pebble", chance: 0.2 },
            ],
        },
        //#endregion

        //#region Dirt drop
        {
            tier: "anoxia:create_string_mesh",
            put: { item: "minecraft:dirt" },
            get: [
                { item: "minecraft:wheat_seeds", chance: 0.7 },
                { item: "minecraft:poppy", chance: 0.25 },
                { item: "minecraft:sweet_berries", chance: 0.05 },
                { item: "minecraft:potato", chance: 0.05 },
                { item: "minecraft:carrot", chance: 0.05 },
                { item: "minecraft:bamboo", chance: 0.05 },
                { item: "exnihilosequentia:grass_seeds", chance: 0.01 },
                { item: "exnihilosequentia:mycelium_spores", chance: 0.01 },
                { item: "minecraft:oak_sapling", chance: 0.1 },
                { item: "minecraft:spruce_sapling", chance: 0.1 },
                { item: "minecraft:birch_sapling", chance: 0.1 },
                { item: "minecraft:jungle_sapling", chance: 0.1 },
                { item: "minecraft:acacia_sapling", chance: 0.1 },
                { item: "minecraft:dark_oak_sapling", chance: 0.1 },
                { item: "minecraft:mangrove_propagule", chance: 0.1 },
                { item: "minecraft:cherry_sapling", chance: 0.1 },
            ],
        },
        //#endregion

        //#region Leaves drop
        {
            tier: "anoxia:create_string_mesh",
            put: { tag: "minecraft:leaves" },
            get: [
                { item: "exnihilosequentia:silkworm", chance: 0.25 },
                { item: "minecraft:apple", chance: 0.1 },
                { item: "minecraft:golden_apple", chance: 0.001 },
                { item: "minecraft:enchanted_golden_apple", chance: 0.0001 },
                { item: "rootsclassic:elderberry", chance: 0.1 },
                { item: "rootsclassic:elderberry", chance: 0.1 },
                { item: "rootsclassic:blackcurrant", chance: 0.1 },
                { item: "rootsclassic:redcurrant", chance: 0.1 },
                { item: "rootsclassic:whitecurrant", chance: 0.1 },
                { item: "delightful:green_tea_leaf", chance: 0.1 },
            ],
        },
        //#endregion
    ];
    SiftingPattern.forEach((recipe) => {
        event.custom({
            type: "createsifter:sifting",
            ingredients: [{ item: recipe.tier }, recipe.put],
            results: recipe.get,
            waterlogged: false,
            processingTime: 500,
            minimumSpeed: 0,
        });
    });
    //#endregion
});
