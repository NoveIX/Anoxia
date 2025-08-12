ServerEvents.recipes((event) => {
    //StoneCrook
    event.remove({ output: "exnihilosequentia:ens_stone_crook" });
    event.shaped("exnihilosequentia:stone_crook", ["PP", " P", " P"], { P: "#forge:pebble/stone" });

    //#region Heat
    event.remove({ type: "exnihilosequentia:heat" });
    const HeatPattern = [
        { under: "minecraft:lava", multi: 3 },
        { under: "minecraft:furnace", multi: 3, heat: "true" },
        { under: "cobblefordays:tier_1", multi: 3 },
        { under: "cobblefordays:tier_2", multi: 4 },
        { under: "cobblefordays:tier_3", multi: 5 },
        { under: "cobblefordays:tier_4", multi: 6 },
        { under: "cobblefordays:tier_5", multi: 7 },
        { under: "minecraft:fire", multi: 4 },
        { under: "minecraft:campfire", multi: 4, heat: "true" },
        { under: "minecraft:soul_fire", multi: 4 },
        { under: "minecraft:soul_campfire", multi: 4, heat: "true" },
        { under: "minecraft:magma_block", multi: 4 },
        { under: "botania:blaze_quartz", multi: 10 },
        { under: "botania:blaze_block", multi: 20 },
        { under: "mekanism:block_uranium", multi: 30 },
        { under: "bigreactors:blutonium_block", multi: 40 },
        { under: "bigreactors:magentite_block", multi: 40 },
        { under: "bigreactors:ludicrite_block", multi: 50 },
        { under: "bigreactors:ridiculite_block", multi: 60 },
        { under: "bigreactors:inanite_block", multi: 70 },
        { under: "bigreactors:insanite_block", multi: 80 },
        { under: "avaritia:infinity", multi: 1000 },
    ];
    HeatPattern.forEach((recipe) => {
        if (recipe.heat === "true") {
            event.custom({
                type: "exnihilosequentia:heat",
                amount: recipe.multi,
                block: recipe.under,
                state: { lit: "true" },
            });
        } else {
            event.custom({
                type: "exnihilosequentia:heat",
                amount: recipe.multi,
                block: recipe.under,
            });
        }
    });
    //#endregion

    //#region Sieve
    event.remove({ type: "exnihilosequentia:sifting" });
    const Sieve = [
        //#region Gravel drop
        {
            get: { item: "minecraft:flint" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.12, mesh: "string" },
                { chance: 0.16, mesh: "flint" },
                { chance: 0.2, mesh: "iron" },
                { chance: 0.24, mesh: "diamond" },
                { chance: 0.28, mesh: "emerald" },
                { chance: 0.32, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:coal" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.08, mesh: "string" },
                { chance: 0.12, mesh: "flint" },
                { chance: 0.16, mesh: "iron" },
                { chance: 0.2, mesh: "diamond" },
                { chance: 0.24, mesh: "emerald" },
                { chance: 0.28, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:lapis_lazuli" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.04, mesh: "flint" },
                { chance: 0.08, mesh: "iron" },
                { chance: 0.12, mesh: "diamond" },
                { chance: 0.16, mesh: "emerald" },
                { chance: 0.2, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:diamond" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.008, mesh: "iron" },
                { chance: 0.012, mesh: "diamond" },
                { chance: 0.016, mesh: "emerald" },
                { chance: 0.02, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:emerald" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.008, mesh: "iron" },
                { chance: 0.012, mesh: "diamond" },
                { chance: 0.016, mesh: "emerald" },
                { chance: 0.02, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:amethyst_shard" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.02, mesh: "diamond" },
                { chance: 0.04, mesh: "emerald" },
                { chance: 0.06, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:iron_pieces" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.04, mesh: "flint" },
                { chance: 0.08, mesh: "iron" },
                { chance: 0.12, mesh: "diamond" },
                { chance: 0.16, mesh: "emerald" },
                { chance: 0.2, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:lead_pieces" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:aluminum_pieces" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:platinum_pieces" },
            put: { item: "minecraft:gravel" },
            drop: [
                { chance: 0.04, mesh: "diamond" },
                { chance: 0.08, mesh: "emerald" },
                { chance: 0.12, mesh: "netherite" },
            ],
        },
        //#endregion

        //#region Sand drop
        {
            get: { item: "minecraft:cocoa_beans" },
            put: { item: "minecraft:sand" },
            drop: [{ chance: 0.3, mesh: "string" }],
        },
        {
            get: { item: "minecraft:sugar_cane" },
            put: { item: "minecraft:sand" },
            drop: [{ chance: 0.5, mesh: "string" }],
        },
        {
            get: { item: "minecraft:cactus" },
            put: { item: "minecraft:sand" },
            drop: [{ chance: 0.5, mesh: "string" }],
        },
        {
            get: { item: "ae2:certus_quartz_crystal" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.03, mesh: "flint" },
                { chance: 0.06, mesh: "iron" },
                { chance: 0.09, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.15, mesh: "netherite" },
            ],
        },
        {
            get: { item: "projectred_core:electrotine_dust" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.09, mesh: "flint" },
                { chance: 0.12, mesh: "iron" },
                { chance: 0.15, mesh: "diamond" },
                { chance: 0.18, mesh: "emerald" },
                { chance: 0.21, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:copper_pieces" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.04, mesh: "flint" },
                { chance: 0.08, mesh: "iron" },
                { chance: 0.12, mesh: "diamond" },
                { chance: 0.16, mesh: "emerald" },
                { chance: 0.2, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:nickel_pieces" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:tin_pieces" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "anoxia:osmium_pieces" },
            put: { item: "minecraft:sand" },
            drop: [
                { chance: 0.04, mesh: "diamond" },
                { chance: 0.08, mesh: "emerald" },
                { chance: 0.12, mesh: "netherite" },
            ],
        },
        //#endregion

        //#region Dust drop
        {
            get: { item: "minecraft:bone_meal" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.2, mesh: "string" },
                { chance: 0.22, mesh: "flint" },
                { chance: 0.24, mesh: "iron" },
                { chance: 0.26, mesh: "diamond" },
                { chance: 0.28, mesh: "emerald" },
                { chance: 0.3, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:gunpowder" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.07, mesh: "string" },
                { chance: 0.09, mesh: "flint" },
                { chance: 0.11, mesh: "iron" },
                { chance: 0.13, mesh: "diamond" },
                { chance: 0.15, mesh: "emerald" },
                { chance: 0.17, mesh: "netherite" },
            ],
        },
        {
            get: { item: "ae2:sky_dust" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.02, mesh: "string" },
                { chance: 0.04, mesh: "flint" },
                { chance: 0.06, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.1, mesh: "emerald" },
                { chance: 0.12, mesh: "netherite" },
            ],
        },
        {
            get: { item: "ae2:certus_quartz_dust" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.08, mesh: "flint" },
                { chance: 0.13, mesh: "iron" },
                { chance: 0.18, mesh: "diamond" },
                { chance: 0.23, mesh: "emerald" },
                { chance: 0.28, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:redstone" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.12, mesh: "iron" },
                { chance: 0.15, mesh: "diamond" },
                { chance: 0.18, mesh: "emerald" },
                { chance: 0.21, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:glowstone_dust" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.06, mesh: "iron" },
                { chance: 0.09, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.15, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:blaze_powder" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.05, mesh: "iron" },
                { chance: 0.07, mesh: "diamond" },
                { chance: 0.09, mesh: "emerald" },
                { chance: 0.11, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:gold_pieces" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.04, mesh: "flint" },
                { chance: 0.08, mesh: "iron" },
                { chance: 0.12, mesh: "diamond" },
                { chance: 0.16, mesh: "emerald" },
                { chance: 0.2, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:silver_pieces" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:zinc_pieces" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.04, mesh: "iron" },
                { chance: 0.08, mesh: "diamond" },
                { chance: 0.12, mesh: "emerald" },
                { chance: 0.16, mesh: "netherite" },
            ],
        },
        {
            get: { item: "exnihilosequentia:uranium_pieces" },
            put: { item: "exnihilosequentia:dust" },
            drop: [
                { chance: 0.04, mesh: "diamond" },
                { chance: 0.08, mesh: "emerald" },
                { chance: 0.12, mesh: "netherite" },
            ],
        },
        //#endregion

        //#region Netherrack drop
        {
            get: { item: "minecraft:ancient_debris" },
            put: { item: "exnihilosequentia:crushed_netherrack" },
            drop: [{ chance: 0.008, mesh: "emerald" }],
        },
        {
            get: { item: "minecraft:ancient_debris" },
            put: { item: "exnihilosequentia:crushed_netherrack" },
            drop: [{ chance: 0.016, mesh: "netherite" }],
        },
        //#endregion

        //#region Endstone drop
        {
            get: { item: "minecraft:ender_pearl" },
            put: { item: "exnihilosequentia:crushed_end_stone" },
            drop: [
                { chance: 0.01, mesh: "emerald" },
                { chance: 0.02, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:ender_eye" },
            put: { item: "exnihilosequentia:crushed_end_stone" },
            drop: [
                { chance: 0.001, mesh: "emerald" },
                { chance: 0.002, mesh: "netherite" },
            ],
        },
        {
            get: { item: "minecraft:chorus_fruit" },
            put: { item: "exnihilosequentia:crushed_end_stone" },
            drop: [
                { chance: 0.01, mesh: "emerald" },
                { chance: 0.02, mesh: "netherite" },
            ],
        },
        //#endregion

        //#region Aetherslate drop
        {
            get: { item: "aethersteel:aether_debris" },
            put: { item: "aethersteel:cobbled_aetherslate" },
            drop: [{ chance: 0.008, mesh: "netherite" }],
        },
        //#endregion

        //#region Stone drop
        {
            get: { item: "exnihilosequentia:basalt_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:andesite_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:blackstone_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:calcite_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:deepslate_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:diorite_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:dripstone_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:granite_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:stone_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        {
            get: { item: "exnihilosequentia:tuff_pebble" },
            put: { item: "minecraft:stone" },
            drop: [{ chance: 0.2, mesh: "flint" }],
        },
        //#endregion

        //#region Dirt drop
        {
            get: { item: "minecraft:wheat_seeds" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.7, mesh: "string" }],
        },
        {
            get: { item: "minecraft:poppy" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.25, mesh: "string" }],
        },
        {
            get: { item: "minecraft:sweet_berries" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.05, mesh: "string" }],
        },
        {
            get: { item: "minecraft:potato" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.05, mesh: "string" }],
        },
        {
            get: { item: "minecraft:carrot" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.05, mesh: "string" }],
        },
        {
            get: { item: "minecraft:bamboo" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.05, mesh: "string" }],
        },
        {
            get: { item: "exnihilosequentia:grass_seeds" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.01, mesh: "string" }],
        },
        {
            get: { item: "exnihilosequentia:mycelium_spores" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.01, mesh: "string" }],
        },
        {
            get: { item: "minecraft:oak_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:oak_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:birch_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:jungle_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:acacia_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:dark_oak_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:mangrove_propagule" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:cherry_sapling" },
            put: { item: "exnihilosequentia:dust" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        //#endregion

        //#region Leaves drop
        {
            get: { item: "exnihilosequentia:silkworm" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.25, mesh: "string" }],
        },
        {
            get: { item: "minecraft:apple" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "minecraft:golden_apple" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.001, mesh: "string" }],
        },
        {
            get: { item: "minecraft:enchanted_golden_apple" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.0001, mesh: "string" }],
        },
        {
            get: { item: "rootsclassic:elderberry" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "rootsclassic:nightshade" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "rootsclassic:blackcurrant" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "rootsclassic:redcurrant" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "rootsclassic:whitecurrant" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        {
            get: { item: "delightful:green_tea_leaf" },
            put: { tag: "minecraft:leaves" },
            drop: [{ chance: 0.1, mesh: "string" }],
        },
        //#endregion
    ];
    Sieve.forEach((recipe) => {
        event.custom({
            type: "exnihilosequentia:sifting",
            input: recipe.put,
            result: recipe.get,
            rolls: recipe.drop,
        });
    });
    //#endregion

    //#region Crusher
    event.custom({
        type: "exnihilosequentia:crushing",
        input: { item: "aethersteel:aetherslate" },
        results: [{ chance: 1.0, count: 1, item: "aethersteel:cobbled_aetherslate" }],
    });
    //#endregion
});
