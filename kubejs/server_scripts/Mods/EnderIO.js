ServerEvents.recipes((event) => {
    //Remove Recipes
    event.remove({ id: "enderio:smelting/oc2r/silicon" }); //Alloy: SiliconBlend => Silicon

    //Remove
    event.remove({ output: "enderio:double_layer_capacitor" });
    event.remove({ output: "enderio:octadic_capacitor" });

    //Basic Capacitor
    event.remove({ output: "enderio:basic_capacitor" });
    event.shaped("enderio:basic_capacitor", [" GL", "GCG", "LG "], { G: "#forge:nuggets/gold", L: "powah:capacitor_basic_large", C: "#forge:ingots/copper" });

    //Void Chassis
    event.remove({ output: "enderio:void_chassis" });
    event.shaped("enderio:void_chassis", ["IEI", "ECE", "IEI"], { I: "minecraft:iron_bars", E: "#forge:ingots/electrotine_alloy", C: "powah:capacitor_basic_large" });

    //Wooden Gear
    event.remove({ output: "enderio:wood_gear" });
    event.shaped("enderio:wood_gear", [" S ", "SPS", " S "], { S: "#forge:rods/wooden", P: "#minecraft:planks" });

    //Stone Gear
    event.remove({ output: "enderio:stone_gear" });
    event.shaped("enderio:stone_gear", [" C ", "CGC", " C "], { C: "#forge:cobblestone", G: "enderio:wood_gear" });
    event.shaped("enderio:stone_gear", ["SCS", "CPC", "SCS"], { C: "#forge:cobblestone", S: "#forge:rods/wooden", P: "#minecraft:planks" });

    //Bimetal Gear
    event.remove({ output: "enderio:iron_gear" });
    event.shaped("enderio:iron_gear", ["NIN", "IGI", "NIN"], { N: "#forge:nuggets/iron", I: "#forge:ingots/iron", G: "enderio:stone_gear" });

    //Energized Gear
    event.remove({ output: "enderio:energized_gear" });
    event.shaped("enderio:energized_gear", ["CEC", "EGE", "CEC"], { C: "#forge:ingots/copper_alloy", E: "#forge:ingots/energetic_alloy", G: "enderio:iron_gear" });

    //Vibrant Gear
    event.remove({ output: "enderio:vibrant_gear" });
    event.shaped("enderio:vibrant_gear", ["PVP", "VGV", "PVP"], { P: "#forge:ingots/pulsating_alloy", V: "#forge:ingots/vibrant_alloy", G: "enderio:energized_gear" });

    //DarkSteel Gear
    event.remove({ output: "enderio:dark_bimetal_gear" });
    event.remove({ id: "jaopca:thermal_expansion.material_to_gear.dark_steel" });
    event.shaped("enderio:dark_bimetal_gear", ["SDS", "DGD", "SDS"], { S: "#forge:ingots/steel", D: "#forge:ingots/dark_steel", G: "enderio:vibrant_gear" });

    //Primitive Alloy
    event.remove({ output: "enderio:primitive_alloy_smelter" });
    event.shaped("enderio:primitive_alloy_smelter", ["EHE", "BVB", "GCG"], {
        E: "#forge:ingots/ender_ingot",
        H: "immersiveengineering:connector_hv",
        B: "actuallyadditions:powered_furnace",
        V: "enderio:void_chassis",
        G: "#forge:gears/rose_gold",
        C: "thermal:energy_cell",
    });

    //Alloy
    event.remove({ output: "enderio:alloy_smelter" });
    event.shaped("enderio:alloy_smelter", ["DAD", "AMA", "GBG"], { D: "#forge:ingots/dark_steel", A: "enderio:primitive_alloy_smelter", M: "thermal:machine_frame", G: "#forge:gears/dark_steel", B: "create:basin" });

    //SAG
    event.remove({ output: "enderio:sag_mill" });
    event.shaped("enderio:sag_mill", ["EEE", "DMD", "GCG"], { E: "#forge:ingots/energetic_alloy", D: "#forge:ingots/dark_steel", M: "thermal:machine_frame", G: "#forge:gears/dark_steel", C: "actuallyadditions:crusher_double" });

    //#region Alloy
    event.remove({ id: "enderio:alloy_smelting/copper_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/energetic_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/vibrant_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/redstone_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/conductive_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/pulsating_alloy_ingot" });
    event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot" });
    event.remove({ id: "enderio:alloy_smelting/soularium_ingot" });
    event.remove({ id: "enderio:alloy_smelting/end_steel_ingot" });
    //Restore
    event.remove({ id: "enderio:smelting/create/smelting/bread" });
    event.remove({ id: "enderio:alloy_smelting/cake_base" });
    event.remove({ id: "enderio:alloy_smelting/cookie" });
    event.remove({ id: "enderio:smelting/industrialforegoing/plastic" });
    const AlloyPattern = [
        /* 		{
			//Copper Alloy
			get: { item: "enderio:copper_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/copper" } },
				{ count: 1, ingredient: { tag: "forge:silicon" } },
			],
			rsflux: 4000,
		},
		{
			//Energetic Alloy
			get: { item: "enderio:energetic_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:dusts/redstone" } },
				{ count: 1, ingredient: { tag: "forge:ingots/electrum" } },
				{ count: 1, ingredient: { tag: "forge:dusts/glowstone" } },
			],
			rsflux: 10000,
		},
		{
			//Vibrant Alloy
			get: { item: "enderio:vibrant_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/energetic_alloy" } },
				{ count: 1, ingredient: { tag: "forge:ender_pearls" } },
				{ count: 1, ingredient: { tag: "forge:ingots/rose_gold" } },
			],
			rsflux: 15000,
		},
		{
			//Redstone Alloy
			get: { item: "enderio:redstone_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/red_alloy" } },
				{ count: 1, ingredient: { tag: "forge:silicon" } },
				{ count: 1, ingredient: { tag: "forge:ingots/graphite" } },
			],
			rsflux: 3000,
		},
		{
			//Conductive Alloy
			get: { item: "enderio:conductive_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/red_alloy" } },
				{ count: 1, ingredient: { tag: "forge:ingots/iron" } },
				{ count: 1, ingredient: { tag: "forge:ingots/copper_alloy" } },
			],
			rsflux: 8000,
		},
		{
			//Pulsating Alloy
			get: { item: "enderio:pulsating_alloy_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/iron" } },
				{ count: 1, ingredient: { tag: "forge:ender_pearls" } },
			],
			rsflux: 10000,
		},
		{
			//DarkSteel Ingot
			get: { item: "enderio:dark_steel_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/iron" } },
				{ count: 1, ingredient: { tag: "forge:dusts/coal" } },
				{ count: 1, ingredient: { tag: "forge:obsidian" } },
			],
			rsflux: 20000,
		},
		{
			//DarkSteel Ingot Alternative
			get: { item: "enderio:dark_steel_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/steel" } },
				{ count: 1, ingredient: { tag: "forge:obsidian" } },
			],
			rsflux: 10000,
		},
		{
			//Soularium Ingot
			get: { item: "enderio:soularium_ingot" },
			put: [
				{ count: 1, ingredient: { item: "minecraft:soul_sand" } },
				{ count: 1, ingredient: { tag: "forge:ingots/gold" } },
			],
			rsflux: 10000,
		},
		{
			//EndSteel Ingot
			get: { item: "enderio:end_steel_ingot" },
			put: [
				{ count: 1, ingredient: { tag: "forge:end_stones" } },
				{ count: 1, ingredient: { tag: "forge:ingots/dark_steel" } },
				{ count: 1, ingredient: { tag: "forge:obsidian" } },
			],
			rsflux: 20000,
		},
		{
			//Modularium
			get: { item: "anoxiaodularium" },
			put: [
				{ count: 1, ingredient: { tag: "forge:ingots/vibrant_alloy" } },
				{ count: 1, ingredient: { tag: "forge:ingots/enderium" } },
				{ count: 1, ingredient: { tag: "forge:ingots/electrotine_alloy" } },
			],
			rsflux: 10000,
		}, */

        //Restore
        {
            //Restore Alloy Bread => Accept forge:dough
            get: { item: "minecraft:bread" },
            put: [{ count: 1, ingredient: { tag: "forge:dough" } }],
            rsflux: 1500,
        },
        {
            //Restore Alloy CakeBase => Accept forge:flour/wheat (Create)
            get: { count: 2, item: "enderio:cake_base" },
            put: [
                { count: 3, ingredient: { tag: "forge:flour/wheat" } },
                { count: 1, ingredient: { item: "minecraft:egg" } },
            ],
            rsflux: 2000,
        },
        {
            //Restore Alloy Cookie => Accept forge:flour/wheat (Create)
            get: { count: 8, item: "minecraft:cookie" },
            put: [
                { count: 1, ingredient: { tag: "forge:flour/wheat" } },
                { count: 1, ingredient: { item: "minecraft:cocoa_beans" } },
            ],
            rsflux: 1500,
        },
        {
            //Restore Alloy Plastic => Plastic (Pneumaticcraft)
            get: { item: "pneumaticcraft:plastic" },
            put: [{ count: 1, ingredient: { item: "industrialforegoing:dryrubber" } }],
            rsflux: 2000,
        },
        {
            //Restore Alloy Uranium => Uranium (Mekanism)
            get: { item: "mekanism:ingot_uranium" },
            put: [{ count: 1, ingredient: { tag: "forge:raw_materials/uranium" } }],
            rsflux: 1500,
        },
        {
            //Restore Alloy Uranium => Uranium (Mekanism)
            get: { item: "mekanism:ingot_uranium" },
            put: [{ count: 1, ingredient: { item: "powah:uraninite" } }],
            rsflux: 1500,
        },
    ];
    function AlloyRecipes({ get, put, rsflux }) {
        event.custom({
            type: "enderio:alloy_smelting",
            experience: 0.3,
            energy: rsflux,
            inputs: put,
            result: get,
        });
    }
    AlloyPattern.forEach(AlloyRecipes);
    //#endregion

    //#region Fire
    event.remove({ id: "enderio:fire_crafting/infinity" });
    event.custom({
        type: "enderio:fire_crafting",
        base_blocks: [{ block: "minecraft:bedrock" }],
        dimensions: ["minecraft:overworld", "ad_astra:mercury", "ad_astra:venus", "ad_astra:moon", "ad_astra:mars", "ad_astra:glacio"],
        loot_table: "enderio:fire_crafting/infinity",
        max_item_drops: 1,
    });
    //#endregion

    //#region SAG
    event.remove({ id: "enderio:sag_milling/sand" });
    //Restore
    event.remove({ id: "enderio:sag_milling/redstone_ore" });
    event.remove({ id: "enderio:sag_milling/clay" });
    event.remove({ id: "enderio:sag_milling/wheat" });
    const SAGPattern = [
        {
            //Dust
            get: [
                { chance: 0.6, item: { item: "exnihilosequentia:dust" }, optional: false },
                { chance: 0.4, item: { item: "exnihilosequentia:dust" }, optional: false },
            ],
            put: { tag: "minecraft:smelts_to_glass" },
            rsflux: 2400,
        },
        {
            //Silicon
            get: [{ chance: 0.5, item: { count: 1, item: "ae2:silicon" }, optional: false }],
            put: { item: "exnihilosequentia:dust" },
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

        //Restore
        {
            //Restore RedstoneOre => Silicon (AE2)
            get: [
                { chance: 1.0, item: { count: 8, item: "minecraft:redstone" }, optional: false },
                { chance: 0.2, item: { item: "minecraft:redstone" }, optional: false },
                { chance: 0.8, item: { item: "ae2:silicon" }, optional: false },
                { chance: 0.15, item: { item: "minecraft:cobblestone" }, optional: false },
            ],
            put: { tag: "forge:ores/redstone" },
            rsflux: 2400,
        },
        {
            //Restore Clay => Silicon (AE2)
            get: [
                { chance: 1.0, item: { count: 2, item: "minecraft:clay_ball" }, optional: false },
                { chance: 0.1, item: { item: "minecraft:clay_ball" }, optional: false },
                { chance: 0.8, item: { count: 2, item: "ae2:silicon" }, optional: false },
            ],
            put: { item: "minecraft:clay" },
            rsflux: 2400,
        },
        {
            //Restore Wheat => Create Flour
            get: [
                { chance: 1.0, item: { item: "create:wheat_flour" }, optional: false },
                { chance: 0.2, item: { count: 1, tag: "forge:seeds/wheat" }, optional: true },
            ],
            put: { tag: "forge:crops/wheat" },
            rsflux: 2400,
        },
    ];
    function SAGRecipes({ get, put, rsflux }) {
        event.custom({
            type: "enderio:sag_milling",
            energy: rsflux,
            input: put,
            outputs: get,
        });
    }
    SAGPattern.forEach(SAGRecipes);
    //#endregion
});

//#region Modular Machine recipe
MMEvents.createProcesses((event) => {
    //Double Layer Capacitor
    event
        .create("mm:double_layer_capacitor")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:basic_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/energetic_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dusts/coal", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 15000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 1 } });

    //Double Layer Capacitor
    event
        .create("mm:octadic_capacitor")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/vibrant_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:storage_blocks/glowstone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 30000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:octadic_capacitor", count: 1 } });
    //#endregion
});
