ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        //Unification
        "enderio:sag_milling/sand", //Rm Silicon
        "enderio:sag_milling/flower_pot", //Rm Powdered Coal
        "enderio:sag_milling/coal_ore", //Rm Powdered Coal
        "enderio:sag_milling/diamond_ore", //Rm Powdered Coal
        "enderio:sag_milling/iron_ore", //Rm Powdered Iron
        "enderio:sag_milling/gold_ore", //Rm Powdered Gold
        "enderio:sag_milling/copper_ore", //Rm Powdered Copper
        "enderio:sag_milling/lapis_ore", //Rm Powdered Lapis
        "enderio:sag_milling/quartz_ore", //Rm Powdered Quartz
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //Basic Capacitor
    event.remove({ output: "enderio:basic_capacitor" });
    event.shaped("enderio:basic_capacitor", [" GL", "GCG", "LG "], { G: "#forge:nuggets/gold", L: "powah:capacitor_basic_large", C: "#forge:ingots/copper" });

    //Void Chassis
    event.remove({ output: "enderio:void_chassis" });
    event.shaped("enderio:void_chassis", ["ABA", "BCB", "ABA"], { A: "minecraft:iron_bars", B: "#forge:ingots/electrotine_alloy", C: "industrialforegoing:machine_frame_simple" });

    //Soul Chassis
    event.remove({ output: "enderio:ensouled_chassis" });
    event.shaped("enderio:ensouled_chassis", ["ABA", "BCB", "ABA"], { A: "enderio:ensouled_chassis", B: "#forge:ingots/soularium", C: "industrialforegoing:machine_frame_simple" });

    //Wooden Gear
    event.remove({ output: "enderio:wood_gear" });
    event.shaped("enderio:wood_gear", [" S ", "SPS", " S "], { S: "#forge:rods/wooden", P: "#minecraft:planks" });

    //Stone Gear
    event.remove({ output: "enderio:stone_gear" });
    event.shaped("enderio:stone_gear", [" C ", "CGC", " C "], { C: "#forge:cobblestone", G: "enderio:wood_gear" });
    event.shaped("enderio:stone_gear", ["SCS", "CPC", "SCS"], { C: "#forge:cobblestone", S: "#forge:rods/wooden", P: "#minecraft:planks" });

    //Bimetal Gear
    event.remove({ output: "enderio:iron_gear" });
    event.shaped("enderio:iron_gear", ["NIN", "IGI", "NIN"], { N: "#forge:ingots/compressed_iron", I: "#forge:ingots/iron", G: "enderio:stone_gear" });

    //Energized Gear
    event.remove({ output: "enderio:energized_gear" });
    event.shaped("enderio:energized_gear", ["CEC", "EGE", "CEC"], { C: "#forge:ingots/copper_alloy", E: "#forge:ingots/energetic_alloy", G: "enderio:iron_gear" });

    //Vibrant Gear
    event.remove({ output: "enderio:vibrant_gear" });
    event.shaped("enderio:vibrant_gear", ["PVP", "VGV", "PVP"], { P: "#forge:ingots/pulsating_alloy", V: "#forge:ingots/vibrant_alloy", G: "enderio:energized_gear" });

    //DarkSteel Gear
    event.remove({ output: "enderio:dark_bimetal_gear" });
    event.shaped("enderio:dark_bimetal_gear", ["SDS", "DGD", "SDS"], { S: "#forge:ingots/steel", D: "#forge:ingots/dark_steel", G: "enderio:vibrant_gear" });

    //Primitive Alloy
    event.remove({ output: "enderio:primitive_alloy_smelter" });
    event.shaped("enderio:primitive_alloy_smelter", ["EHE", "BVB", "GCG"], {
        E: "#forge:ingots/ender_ingot",
        H: "immersiveengineering:connector_hv",
        B: "actuallyadditions:powered_furnace",
        V: "industrialforegoing:machine_frame_simple",
        G: "#forge:gears/rose_gold",
        C: "thermal:energy_cell",
    });

    //Alloy
    event.remove({ output: "enderio:alloy_smelter" });
    event.shaped("enderio:alloy_smelter", ["DAD", "AMA", "GBG"], { D: "#forge:ingots/dark_steel", A: "enderio:primitive_alloy_smelter", M: "enderio:void_chassis", G: "#forge:gears/dark_steel", B: "create:basin" });

    //SAG
    event.remove({ output: "enderio:sag_mill" });
    event.shaped("enderio:sag_mill", ["EEE", "DMD", "GCG"], { E: "#forge:ingots/energetic_alloy", D: "#forge:ingots/dark_steel", M: "enderio:void_chassis", G: "#forge:gears/dark_steel", C: "actuallyadditions:crusher_double" });

    //// # =================================================================================================== #

    //#region Alloy
    /*     const AlloyPattern = [
        //Unification
        {
            //industrialforegoing:plastic => pneumaticcraft:plastic
            get: { item: "pneumaticcraft:plastic" },
            put: [{ count: 1, ingredient: { item: "industrialforegoing:dryrubber" } }],
            rsflux: 2000,
        },
    ];
    AlloyPattern.forEach((recipe) => {
        event.custom({
            type: "enderio:alloy_smelting",
            experience: 0.3,
            inputs: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
        });
    }); */
    //#endregion

    //// # =================================================================================================== #

    //#region Fire
    event.remove({ type: "enderio:fire_crafting" });
    event.custom({
        type: "enderio:fire_crafting",
        base_blocks: [{ block: "minecraft:bedrock" }],
        dimensions: ["minecraft:overworld", "ad_astra:mercury", "ad_astra:venus", "ad_astra:moon", "ad_astra:mars", "ad_astra:glacio"],
        loot_table: "enderio:fire_crafting/infinity",
        max_item_drops: 1,
    });
    //#endregion

    //// # =================================================================================================== #

    //#region SAG
    //Restore
    const SAGPattern = [
        {
            //Dust
            get: [
                { chance: 0.7, item: { item: "exnihilosequentia:dust" }, optional: false },
                { chance: 0.3, item: { item: "exnihilosequentia:dust" }, optional: false },
            ],
            put: { item: "minecraft:sand" },
            rsflux: 2400,
        },
        {
            //Grains of Infinity
            get: [
                { chance: 0.75, item: { item: "anoxia:compressed_cobbled_deepslate" }, optional: false },
                { chance: 0.01, item: { item: "enderio:grains_of_infinity" }, optional: false },
            ],
            put: { item: "anoxia:compressed_deepslate" },
            rsflux: 2400,
        },

        //Unification
        {
            //Silicon
            get: [{ chance: 0.5, item: { count: 1, item: "ae2:silicon" }, optional: false }],
            put: { item: "exnihilosequentia:dust" },
            rsflux: 2400,
        },
        {
            //Coal Dust
            get: [
                { chance: 0.9, item: { item: "minecraft:brick" }, optional: false },
                { chance: 0.3, item: { item: "minecraft:brick" }, optional: false },
                { chance: 0.1, item: { item: "minecraft:brick" }, optional: false },
                { chance: 0.05, item: { item: "mekanism:dust_coal" }, optional: false },
            ],
            put: { item: "minecraft:flower_pot" },
            rsflux: 2400,
        },
        {
            //Coal Dust
            get: [
                { chance: 1.0, item: { count: 3, item: "minecraft:coal" }, optional: false },
                { chance: 0.6, item: { item: "mekanism:dust_coal" }, optional: false },
                { chance: 0.005, item: { item: "minecraft:diamond" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/coal" },
            rsflux: 2400,
        },
        {
            //Coal Dust
            get: [
                { chance: 1.0, item: { count: 2, item: "minecraft:diamond" }, optional: false },
                { chance: 0.25, item: { item: "minecraft:diamond" }, optional: false },
                { chance: 0.1, item: { item: "mekanism:dust_coal" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/diamond" },
            rsflux: 2400,
        },
        {
            //Iron Dust
            get: [
                { chance: 1.0, item: { item: "thermal:iron_dust" }, optional: false },
                { chance: 0.33, item: { item: "thermal:iron_dust" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/iron" },
            rsflux: 2400,
        },
        {
            //Gold Dust
            get: [
                { chance: 1.0, item: { item: "thermal:gold_dust" }, optional: false },
                { chance: 0.33, item: { item: "thermal:gold_dust" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/gold" },
            rsflux: 2400,
        },
        {
            //Copper Dust
            get: [
                { chance: 1.0, item: { item: "thermal:copper_dust" }, optional: false },
                { chance: 0.33, item: { item: "thermal:copper_dust" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/copper" },
            rsflux: 2400,
        },
        {
            //Obsidian Dust
            get: [{ chance: 1.0, item: { count: 4, item: "mekanism:dust_obsidian" }, optional: false }],
            put: { tag: "forge:obsidian" },
            rsflux: 2400,
        },
        {
            //LapisDust
            get: [
                { chance: 1.0, item: { item: "thermal:lapis_dust" }, optional: false },
                { chance: 0.33, item: { item: "thermal:lapis_dust" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/lapis" },
            rsflux: 2400,
        },
        {
            //Quartz Dust
            get: [
                { chance: 1.0, item: { count: 2, item: "minecraft:quartz" }, optional: false },
                { chance: 0.1, item: { item: "thermal:quartz_dust" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:netherrack" }, optional: false },
            ],
            put: { tag: "forge:ores/quartz" },
            rsflux: 2400,
        },
    ];
    SAGPattern.forEach((recipe) => {
        if (recipe.extra) {
            event.custom({
                type: "enderio:sag_milling",
                input: recipe.put,
                outputs: recipe.get,
                energy: recipe.rsflux,
                bonus: recipe.extra,
            });
        } else {
            event.custom({
                type: "enderio:sag_milling",
                input: recipe.put,
                outputs: recipe.get,
                energy: recipe.rsflux,
            });
        }
    });
    //#endregion
});
