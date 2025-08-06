ServerEvents.recipes((event) => {
	//Wood Chest
	const ChestPattern = [
		{ get: "quark:ancient_chest", put: "#quark:ancient_logs" },
		{ get: "quark:azalea_chest", put: "#quark:azalea_logs" },
		{ get: "quark:blossom_chest", put: "#quark:blossom_logs" },
		{ get: "quark:oak_chest", put: "#minecraft:oak_logs" },
		{ get: "quark:spruce_chest", put: "#minecraft:spruce_logs" },
		{ get: "quark:birch_chest", put: "#minecraft:birch_logs" },
		{ get: "quark:jungle_chest", put: "#minecraft:jungle_logs" },
		{ get: "quark:acacia_chest", put: "#minecraft:acacia_logs" },
		{ get: "quark:dark_oak_chest", put: "#minecraft:dark_oak_logs" },
		{ get: "quark:crimson_chest", put: "#minecraft:crimson_stem" },
		{ get: "quark:warped_chest", put: "#minecraft:warped_stem" },
		{ get: "quark:mangrove_chest", put: "#minecraft:mangrove_logs" },
		{ get: "quark:cherry_chest", put: "#minecraft:cherry_logs" },
	];
	function ChestRecipes({ get, put }) {
		event.remove({ output: get, input: put });
		event.shaped(get, ["LLL", "L L", "LLL"], { L: put });
	}
	ChestPattern.forEach(ChestRecipes);

	//Sturdy Stone
	event.remove({ output: "quark:sturdy_stone" });
	event.shaped(Item.of("quark:sturdy_stone", 5), ["SCS", "CCC", "SCS"], { S: "minecraft:smooth_stone", C: "#forge:cobblestone" });

	//Deepslate Furnace
	event.remove({ output: "quark:deepslate_furnace" });
	event.shaped("quark:deepslate_furnace", ["CCC", "C C", "CCC"], { C: "anoxia:compressed_cobbled_deepslate" });

	//Blackstone Furnace
	event.remove({ output: "quark:blackstone_furnace" });
	event.shaped("quark:blackstone_furnace", ["CCC", "C C", "CCC"], { C: "anoxia:compressed_blackstone" });
});
