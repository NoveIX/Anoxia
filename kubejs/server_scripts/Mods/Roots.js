ServerEvents.recipes((event) => {
	//Altar
	event.remove({ output: "rootsclassic:altar" });
	event.shaped("rootsclassic:altar", ["FPM", "BGB", " B "], { F: "exnihilosequentia:grass_seeds", P: "minecraft:poppy", M: "rootsclassic:mortar", B: "chipped:polished_basalt", G: "chipped:basalt_pillar_top" });

	//Mundane Stone
	event.remove({ output: "rootsclassic:mundane_standing_stone" });
	event.shaped("rootsclassic:mundane_standing_stone", ["O", "B", "B"], { O: "#forge:ingots/obsidian", B: "chipped:polished_basalt" });

	//Attuned Stone
	event.remove({ output: "rootsclassic:attuned_standing_stone" });
	event.shaped("rootsclassic:attuned_standing_stone", ["D", "B", "B"], { D: "irons_spellbooks:divine_pearl", B: "chipped:polished_basalt" });

	//Brazier
	event.remove({ output: "rootsclassic:brazier" });
	event.shaped("rootsclassic:brazier", ["RSR", "RCR"], { R: "#forge:rods/iron", S: "minecraft:string", C: "minecraft:cauldron" });
	//#endregion

	//#region Ritual
	//Flower
	const FlowerPattern = [
		//Flower
		{
			get: { item: "botania:white_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:white_dye" }],
			brazier: [{ item: "rootsclassic:oak_bark" }, { item: "rootsclassic:oak_bark" }, { item: "rootsclassic:oak_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#ffffff",
			level: 1,
		},
		{
			get: { item: "botania:light_gray_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:light_gray_dye" }],
			brazier: [{ item: "rootsclassic:oak_bark" }, { item: "rootsclassic:oak_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#697172",
			level: 1,
		},
		{
			get: { item: "botania:gray_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:gray_dye" }],
			brazier: [{ item: "rootsclassic:oak_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#3f3f43",
			level: 1,
		},
		{
			get: { item: "botania:black_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:black_dye" }],
			brazier: [{ item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#0e0c11",
			level: 1,
		},
		{
			get: { item: "botania:brown_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:brown_dye" }],
			brazier: [{ item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:birch_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#754004",
			level: 1,
		},
		{
			get: { item: "botania:red_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:red_dye" }],
			brazier: [{ item: "rootsclassic:spruce_bark" }, { item: "rootsclassic:birch_bark" }, { item: "rootsclassic:birch_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#bc0502",
			level: 1,
		},
		{
			get: { item: "botania:orange_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:orange_dye" }],
			brazier: [{ item: "rootsclassic:birch_bark" }, { item: "rootsclassic:birch_bark" }, { item: "rootsclassic:birch_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#eb6700",
			level: 1,
		},
		{
			get: { item: "botania:yellow_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:yellow_dye" }],
			brazier: [{ item: "rootsclassic:birch_bark" }, { item: "rootsclassic:birch_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#f2cf18",
			level: 1,
		},
		{
			get: { item: "botania:lime_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:lime_dye" }],
			brazier: [{ item: "rootsclassic:birch_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#25e40f",
			level: 1,
		},
		{
			get: { item: "botania:green_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:green_dye" }],
			brazier: [{ item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#025b00",
			level: 1,
		},
		{
			get: { item: "botania:cyan_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:cyan_dye" }],
			brazier: [{ item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#137aab",
			level: 1,
		},
		{
			get: { item: "botania:light_blue_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:light_blue_dye" }],
			brazier: [{ item: "rootsclassic:jungle_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#569eef",
			level: 1,
		},
		{
			get: { item: "botania:blue_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:blue_dye" }],
			brazier: [{ item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#2427dd",
			level: 1,
		},
		{
			get: { item: "botania:purple_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:purple_dye" }],
			brazier: [{ item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:dark_oak_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#53006f",
			level: 1,
		},
		{
			get: { item: "botania:magenta_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:magenta_dye" }],
			brazier: [{ item: "rootsclassic:acacia_bark" }, { item: "rootsclassic:dark_oak_bark" }, { item: "rootsclassic:dark_oak_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#b900c1",
			level: 1,
		},
		{
			get: { item: "botania:pink_mystical_flower" },
			put: [{ item: "minecraft:cherry_sapling" }, { item: "minecraft:wheat_seeds" }, { item: "minecraft:pink_dye" }],
			brazier: [{ item: "rootsclassic:dark_oak_bark" }, { item: "rootsclassic:dark_oak_bark" }, { item: "rootsclassic:dark_oak_bark" }, { item: "farmersdelight:tree_bark" }],
			hex: "#e04e81",
			level: 1,
		},

		//Tall Flower
		{
			get: { item: "botania:white_double_flower" },
			put: [{ item: "botania:white_shiny_flower" }, { item: "botania:white_shiny_flower" }, { item: "botania:white_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#ffffff",
			level: 2,
		},
		{
			get: { item: "botania:light_gray_double_flower" },
			put: [{ item: "botania:light_gray_shiny_flower" }, { item: "botania:light_gray_shiny_flower" }, { item: "botania:light_gray_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#697172",
			level: 2,
		},
		{
			get: { item: "botania:gray_double_flower" },
			put: [{ item: "botania:gray_shiny_flower" }, { item: "botania:gray_shiny_flower" }, { item: "botania:gray_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#3f3f43",
			level: 2,
		},
		{
			get: { item: "botania:black_double_flower" },
			put: [{ item: "botania:black_shiny_flower" }, { item: "botania:black_shiny_flower" }, { item: "botania:black_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#0e0c11",
			level: 2,
		},
		{
			get: { item: "botania:brown_double_flower" },
			put: [{ item: "botania:brown_shiny_flower" }, { item: "botania:brown_shiny_flower" }, { item: "botania:brown_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#754004",
			level: 2,
		},
		{
			get: { item: "botania:red_double_flower" },
			put: [{ item: "botania:red_shiny_flower" }, { item: "botania:red_shiny_flower" }, { item: "botania:red_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#bc0502",
			level: 2,
		},
		{
			get: { item: "botania:orange_double_flower" },
			put: [{ item: "botania:orange_shiny_flower" }, { item: "botania:orange_shiny_flower" }, { item: "botania:orange_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#eb6700",
			level: 2,
		},
		{
			get: { item: "botania:yellow_double_flower" },
			put: [{ item: "botania:yellow_shiny_flower" }, { item: "botania:yellow_shiny_flower" }, { item: "botania:yellow_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#f2cf18",
			level: 2,
		},
		{
			get: { item: "botania:lime_double_flower" },
			put: [{ item: "botania:lime_shiny_flower" }, { item: "botania:lime_shiny_flower" }, { item: "botania:lime_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#25e40f",
			level: 2,
		},
		{
			get: { item: "botania:green_double_flower" },
			put: [{ item: "botania:green_shiny_flower" }, { item: "botania:green_shiny_flower" }, { item: "botania:green_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#025b00",
			level: 2,
		},
		{
			get: { item: "botania:cyan_double_flower" },
			put: [{ item: "botania:cyan_shiny_flower" }, { item: "botania:cyan_shiny_flower" }, { item: "botania:cyan_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#137aab",
			level: 2,
		},
		{
			get: { item: "botania:light_blue_double_flower" },
			put: [{ item: "botania:light_blue_shiny_flower" }, { item: "botania:light_blue_shiny_flower" }, { item: "botania:light_blue_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#569eef",
			level: 2,
		},
		{
			get: { item: "botania:blue_double_flower" },
			put: [{ item: "botania:blue_shiny_flower" }, { item: "botania:blue_shiny_flower" }, { item: "botania:blue_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#2427dd",
			level: 2,
		},
		{
			get: { item: "botania:purple_double_flower" },
			put: [{ item: "botania:purple_shiny_flower" }, { item: "botania:purple_shiny_flower" }, { item: "botania:purple_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#53006f",
			level: 2,
		},
		{
			get: { item: "botania:magenta_double_flower" },
			put: [{ item: "botania:magenta_shiny_flower" }, { item: "botania:magenta_shiny_flower" }, { item: "botania:magenta_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#b900c1",
			level: 2,
		},
		{
			get: { item: "botania:pink_double_flower" },
			put: [{ item: "botania:magenta_shiny_flower" }, { item: "botania:magenta_shiny_flower" }, { item: "botania:magenta_shiny_flower" }],
			brazier: [{ item: "bhc:wither_bone" }, { item: "minecraft:rotten_flesh" }, { item: "botania:grass_seeds" }, { item: "industrialforegoing:fertilizer" }],
			hex: "#e04e81",
			level: 2,
		},
	];
	function FlowerRecipes({ get, put, level, brazier, hex }) {
		event.custom({
			type: "rootsclassic:ritual",
			effect: "rootsclassic:crafting",
			level: level,
			color: hex,
			ingredients: put,
			incenses: brazier,
			result: get,
		});
	}
	FlowerPattern.forEach(FlowerRecipes);
	//#endregion
});
